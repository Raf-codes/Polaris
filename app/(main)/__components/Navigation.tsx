"use client"

import { cn } from "@/lib/utils";
import { ChevronsLeft, MenuIcon, PlusIcon } from "lucide-react";
import { ElementRef, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { UserItem } from "./user_item";
import { Item } from "./item";
import { useMutation } from "convex/react";import { api } from "@/convex/_generated/api";
import { toast } from "sonner";




export  const Navigation = () => {
    
    const create = useMutation(api.documents.create)
    const isMobile = useMediaQuery("(max-width: 768px)");
    const isResizeingRef =useRef(false)
    const sidebarRef =useRef<ElementRef<"aside">>(null);
    const navbarRef =useRef<ElementRef<"div">>(null);

    const [isResetting, setisResetting] = useState(false);
    const [isCollapsed, setisCollapsed] = useState(isMobile);

    const handleMouseDown =(
        event : React.MouseEvent<HTMLDivElement, MouseEvent>
    ) =>{
        event.preventDefault()
        event.stopPropagation()

        isResizeingRef.current=true;
        document.addEventListener("mousemove", handleMouseMove)
        document.addEventListener("mouseup", handleMouseUp)

    }

    const handleMouseMove =(e:MouseEvent) =>{
        if (!isResizeingRef.current) return;
        let newWidth = e.clientX;

        if (newWidth <240) newWidth =240;
        if (newWidth >480) newWidth =480;

        if (sidebarRef.current && navbarRef.current){
            sidebarRef.current.style.width =`${newWidth}px`;
            navbarRef.current.style.setProperty("left", `${newWidth}px`)
            navbarRef.current.style.setProperty("width", `calc(100% -${newWidth}px`)

        }

    }

    const handleMouseUp = () => {
        isResizeingRef.current =false;
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)


    }

    const resetWidth = () =>{
        if (sidebarRef.current && navbarRef.current) {
            setisCollapsed(false)
            setisResetting(true)

            sidebarRef.current.style.width =isMobile ? "100%" : "240px";
            navbarRef.current.style.setProperty("width", isMobile ? "0" : "calc(100%-240px)");
            navbarRef.current.style.setProperty("left", isMobile ? "100%" : "240px");

            setTimeout(() => setisResetting(false),300)

        }
    }

    const collapse = () =>{
        if (sidebarRef.current && navbarRef.current) {
            setisCollapsed(true)
            setisResetting(true)
            
            sidebarRef.current.style.width="0";
            navbarRef.current.style.setProperty("width", "100%");
            navbarRef.current.style.setProperty("left", "0");

            setTimeout(() => setisResetting(false),300)

        }
    }

    const handleCreate = () => {
        const promise =create({ title: "untitled"});

        toast.promise(promise, {
            loading: "Craeting a new Document..",
            success: "New Document Created ",
            error: "Failed to create a document"
        })
    }

    return ( 
        <>
           <aside
              ref={sidebarRef}
              className={cn("group/sidebar h-full bg-secondary overflow-y-auto relative flex w-60 flex-col z-[99999]",
                isResetting && "transition-all ease-in-out duration-300",
                isMobile && "w-0"
              )}>
               
               <div
                onClick={collapse}
                role="button"
                className={cn("h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover: bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition-all",
                    isMobile && 'opacity-100'
                )}
                >
                    <ChevronsLeft className="h-6 w-6" />
               </div>

               <div>
                 <UserItem />
                 <Item
                  onClick={handleCreate} 
                  label="New Page"
                  icon={PlusIcon} 
                  />     
               </div>

               <div className="mt-4">
                  <p>Documents</p>
               </div>

               <div
                 onMouseDown={handleMouseDown}
                 onClick={resetWidth}
                 className="opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1
                              bg-primary/10 right-0 top-0" />



           </aside>


           <div
             ref={navbarRef}
             className={cn("absolute top-0 z-[99999] w-[calc(100%-240px)]",
                isResetting && "transition-all ease ease-in-out duration-300",
                isMobile && "left-0 w-full"
             )}
             >

                <nav className="bg-transparent px-3 py-2 w-full">
                    {isCollapsed && <MenuIcon onClick={resetWidth} role="button" className="h-6 w-6 text-muted-foreground" />}
                </nav>

           </div>
        </>
     );
}
 
