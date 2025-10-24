import { Button } from "../ui/button";
import { MessageCircle } from "lucide-react";
export default function MainBanner() {
    return (
        <div className="relative min-h-screen py-20 px-4 flex flex-col ">
            <div className="container mx-auto sm:flex-col lg:flex-row md:flex-col">
                <img src="/banner-image.jpeg" alt="" className="absolute left-0 top-0 object-cover w-full max-h-150" />
                <div className="absolute inset-0 bg-black/50 z-10 max-h-150"></div>
                <div className="relative z-20 text-white">
                    <h1 className="scroll-m-20 max-w-200 text-4xl lg:text-6xl font-extrabold tracking-tight">
                        Производства коробок Любого размера под ключ
                    </h1>
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-2">
                        Производство коробок в Китае
                    </h3>
                    <Button className="my-6 flex space-x-2 rounded-lg items-center w-full lg:w-80 p-6 opacity-90 cursor-pointer scroll-m-20 text-xl font-semibold tracking-tight">
                        <MessageCircle/>
                        Связаться
                    </Button>
                </div>
            </div>
        </div>
    );
}
