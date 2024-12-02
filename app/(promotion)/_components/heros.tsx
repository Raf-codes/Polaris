import Image from "next/image";

export const Heroes = () => {
    return (
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] group animate-spin-slow">
                    <Image
                        src="/Polariswindrose.png"
                        alt="polaris"
                        width={400}
                        height={400}
                        className="object-contain transition-all group-hover:filter group-hover:drop-shadow-[0_0_2em_#f0c348e3]"
                    />
                </div>
            </div>
        </div>
    )
}

export default Heroes;