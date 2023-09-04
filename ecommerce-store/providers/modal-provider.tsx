'use client'

import PreviewModal from "@/components/ui/preview-modal";
import { useEffect, useState } from "react";

const Modalprovider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        }, [])

    if (!isMounted) {
        return null;
    }
    return (
        <>
            <PreviewModal />
        </>
    );
}
 
export default Modalprovider;