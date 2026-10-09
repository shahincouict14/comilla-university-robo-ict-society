import { Outlet } from "react-router-dom";

const MainLayouts = () => {
    return (
        <div>
            <header className="p-4 bg-base-200">Navbar ekhane boshbe</header>
            <main className="min-h-screen">
                <Outlet></Outlet>
            </main>
            <footer className="p-4 bg-base-200">Footer ekhane boshbe</footer>
        </div>
    );
};

export default MainLayouts;