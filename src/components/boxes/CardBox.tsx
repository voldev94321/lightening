'use client';

import { ReactNode } from "react";

interface CardBoxProps {
    className?: string;
    children: ReactNode;
}

const CardBox = ({className, children}: CardBoxProps) => {
    return <div className={`rounded-2xl px-4 py-2 ${className}`}>
        {children}
    </div>
}

export default CardBox;