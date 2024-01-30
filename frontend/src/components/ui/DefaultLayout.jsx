import {Outlet} from "react-router-dom";
import SideMenu from "./SideMenu/SideMenu";

function DefaultLayout() {
    return (
        <div className="font-baloo-tamma fixed w-screen h-screen">
            <div className="flex w-full h-full items-stretch">
                <div className="w-[min(14rem,35%)]">
                    <SideMenu />
                </div>

                <div className="grow">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
