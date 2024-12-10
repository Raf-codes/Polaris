"use client"

import { LucideIcon } from "lucide-react";

interface ItemProps {
    label: string;
    onClick: () => void;
    icon: LucideIcon;
}

export const Item = ({
    label,
    onClick,
    icon: Icon
}: ItemProps) => {
    return ( 
        <div 
            onClick={onClick} 
            role="button" 
            className=" group min-h-[27px] text-sm py-1 pr-3 w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium "
        >
            <Icon className="h-5 w-5 mr-2 " />
            <span className="truncate">{label}</span>
        </div>
     );
}