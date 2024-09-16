"use client";

import { usePathname } from "next/navigation";
import React from "react";

function ClientOnly({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
        setMounted(true);
    }, []);
    return mounted ? children : <span>&nbsp;</span>;
}

export default function Clock() {
    const p = usePathname();
    return (
        <ClientOnly>
            <div>{Date.now()}</div>
        </ClientOnly>
    );
}
