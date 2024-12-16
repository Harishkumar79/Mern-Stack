import { Outlet } from "react-router-dom";
import ShoppingHeader from "./header";

function ShoppingLayout() {
    return (
        <div className="flex flex-col bg-white overflow-hidden">
            {/* common header components of shopping view */}
            <ShoppingHeader/>
            <main className="flex flex-col w-full">
                <Outlet />
            </main>
        </div>
    );
}

export default ShoppingLayout;