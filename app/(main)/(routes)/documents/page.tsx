"use client"

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";


const DocumentPage = () => {
    const {user} =useUser()
    const create =useMutation(api.documents.create)

    const onCreate =() =>{
        const promise = create({ title: "untitled" });

        toast.promise(promise, {
            loading:"Creating a new document...",
            success:"New Note created!",
            error: "Failed to create a document"
        })
    }
    return ( 
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            
            <Image 
              className="ml-9"
              src="/document.png"
              height="200"
              width="200"
              alt="document" />

            <h2>
                Welcome to {user?.firstName}&apos;s Polaris
            </h2>
            <Button onClick={onCreate}>
                <PlusCircle className="h-4 w-4 mr-2" />
                create a Note
            </Button>  
        
        </div>
    );
}
 
export default DocumentPage;