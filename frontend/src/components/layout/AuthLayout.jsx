import { Outlet } from "react-router-dom";

function AuthLayout() {
    return (
        <div className="min-w-[100vw] font-baloo-tamma min-h-[100vh] bg-neutral-100">
            <div className="container mx-auto px-4 flex justify-center pt-16">
                <div
                    className="text-3xl p-6 md:p-8 shadow-2xl rounded-2xl w-full 
                        md:max-w-[400px]">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default AuthLayout;
