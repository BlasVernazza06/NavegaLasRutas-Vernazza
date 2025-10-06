import { Coffee } from "lucide-react";
import CartWidget from "./cart-widget";

export default function NavBar() {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
            <div className="w-full px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-2">
                        <Coffee className="text-orange-500"/>
                        <span className="text-2xl">Aroma</span>
                    </div>

                    <nav>
                        <ul className="flex gap-4">
                            <li className="hover:text-orange-300 cursor-pointer transition-colors duration-200">
                                Productos
                            </li>
                            <li className="hover:text-orange-300 cursor-pointer transition-colors duration-200">
                                Nosotros
                            </li>
                            <li className="hover:text-orange-300 cursor-pointer transition-colors duration-200">
                                Contacto
                            </li>
                        </ul>
                    </nav>

                    <div>
                        <CartWidget/>
                    </div>
                </div>
            </div>
        </div>
    );
}