'use client'

import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { BillboardColumn } from "./columns"
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CellActionProps {
    data: BillboardColumn
}

export const CellAction: React.FC<CellActionProps> = ({
    data
}) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={'ghost'} className="h-8 w-8 p-0">
                    <span className="sr-only">Open Menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
        </DropdownMenu>
    );
};