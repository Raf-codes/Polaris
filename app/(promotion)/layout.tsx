import { Navbar } from "./_components/navbar";

const PromotionLayout =({
    children 
}:{
    children:React.ReactNode;
}) => {
    return(
        <div className="min-h-screen dark:bg-[#1F1F1F]">
            <Navbar />
            <main className="pt-36">
                {children}
            </main>
        </div>
    )
}

export default PromotionLayout;