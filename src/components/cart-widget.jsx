import { ShoppingCart } from "lucide-react";

export default function CartWidget() {
    return (
        <div className="hover:bg-orange-300 rounded-lg p-2 flex justify-center items-center transition-colors duration-200">
            <a href="#" className="">
                <ShoppingCart className="size-4"/>
            </a>
        </div>
    );
}