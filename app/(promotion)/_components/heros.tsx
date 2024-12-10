import Image from "next/image";
import { Days_One } from "next/font/google"

import { cn  } from "@/lib/utils";

const font = Days_One({
    subsets: ["latin"],
    weight:["400"]
});

export const Heroes = () => {
    return (
        <>
        <div className="w-full mt-24">
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-full">
                <div className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[300px]">
                    <Image 
                        src="/feature1.png"
                        alt="Feature 1"
                        width={280}
                        height={280}
                        className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                    />
                </div>
                <div className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[300px]">
                    <Image 
                        src="/feature2.png"
                        alt="Feature 2"
                        width={280}
                        height={280}
                        className="rounded-xl -rotate-10 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                    />
                </div>
                <div className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[300px]">
                    <Image 
                        src="/feature3.png"
                        alt="Feature 3"
                        width={280}
                        height={280}
                        className="rounded-xl rotate-1 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                    />
                </div>
                <div className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[300px]">
                    <Image 
                        src="/feature4.png"
                        alt="Feature 4"
                        width={280}
                        height={280}
                        className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                    />
                </div>
                <div className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[300px]">
                    <Image 
                        src="/feature5.png"
                        alt="Feature 5"
                        width={280}
                        height={280}
                        className="rounded-xl -rotate-8 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                    />
                </div>
                
                
            </div>
            <h1 className={cn("text-3xl md:text-4xl font-bold text-center mt-16 mb-5", font.className)}>Our Features</h1>
        </div>
        <div className="w-full mt-24">
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-full">
                <div className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[300px]">
                    <Image 
                        src="/feature1.png"
                        alt="Feature 1"
                        width={280}
                        height={280}
                        className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                    />
                </div>
                <div className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[300px]">
                    <Image 
                        src="/feature2.png"
                        alt="Feature 2"
                        width={280}
                        height={280}
                        className="rounded-xl -rotate-10 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                    />
                </div>
                <div className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[300px]">
                    <Image 
                        src="/feature3.png"
                        alt="Feature 3"
                        width={280}
                        height={280}
                        className="rounded-xl rotate-1 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                    />
                </div>
                <div className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[300px]">
                    <Image 
                        src="/feature4.png"
                        alt="Feature 4"
                        width={280}
                        height={280}
                        className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                    />
                </div>
                <div className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[300px]">
                    <Image 
                        src="/feature5.png"
                        alt="Feature 5"
                        width={280}
                        height={280}
                        className="rounded-xl -rotate-8 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                    />
                </div>
                
                
            </div>
            <h1 className={cn("text-3xl md:text-4xl font-bold text-center mt-16 mb-5", font.className)}>Our Features</h1>
        </div>
        </>
    )
}

export default Heroes;