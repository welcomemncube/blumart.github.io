const App = () => (
    <div>
        <Header />
        <Hero />
        <ProductList />
        <About />
        <Contact />
        <Footer />
    </div>
);

// Render the App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
