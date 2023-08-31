import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// Patch method for change billboard label or billboard imageUrl
export async function PATCH (
    req: Request,
    { params }: { params: { storeId: string, billboardId: string} } // because we are in the [storeId] dynamic route so we have access for storeId
) {
    try{
        const { userId } = auth();
        const body = await req.json();

        const { label, imageUrl } = body;
        if (!userId) {
            return new NextResponse("Unauthenticated", { status: 401})
        }

        if (!label) {
            return new NextResponse("Label is required", { status: 400});
        }

        if (!imageUrl) {
            return new NextResponse("ImagelUrl is required", { status: 400});
        }

        if (!params.billboardId) {
            return new NextResponse("billboard Id is required", { status: 400});
        }

        if (!params.storeId) {
            return new NextResponse("Store id is required", { status: 400});
        }

        const storeByUserId = await prismadb.store.findFirst({
            // try to find if this storeId belong to this particular user.
            where: {
                id: params.storeId,
                userId,
            }
        });

        if (!storeByUserId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }


        const billboard = await prismadb.billboard.updateMany({
            where: {
                id: params.billboardId,
            },
            data: {
                label,
                imageUrl
            }
        });

        return NextResponse.json(billboard);
    } catch (error) {
        console.log('[BILLBOARD_PATCH]', error);
        return new NextResponse("Internal error", { status: 500});
    }
}

// Delete method for deleting a store
export async function DELETE (
    req: Request,
    { params }: { params: { storeId: string} } // because we are in the [storeId] dynamic route so we have access for storeId
) {
    try{
        const { userId } = auth();
       
        if (!userId) {
            return new NextResponse("Unauthenticated", { status: 401})
        }

        if (!params.storeId) {
            return new NextResponse("storeId is required", { status: 400});
        }

        const store = await prismadb.store.deleteMany({
            where: {
                id: params.storeId,
                userId,
            },
        });

        return NextResponse.json(store);
    } catch (error) {
        console.log('[STORE_DELETE]', error);
        return new NextResponse("Internal error", { status: 500});
    }
}