const Header = () => (
    <header className="bg-blue-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">BluMart</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="#home" className="hover:underline">Home</a></li>
                    <li><a href="#products" className="hover:underline">Products</a></li>
                    <li><a href="#about" className="hover:underline">About</a></li>
                    <li><a href="#contact" className="hover:underline">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
);
