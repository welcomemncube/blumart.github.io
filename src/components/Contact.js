const { useState } = React;

const Contact = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent! We'll get back to you soon.");
        setEmail("");
        setMessage("");
    };

    return (
        <section id="contact" className="py-12 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                <p className="text-lg mb-6">Have questions? Reach out to us!</p>
                <div className="max-w-md mx-auto">
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 mb-4 border rounded"
                    />
                    <textarea
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-3 mb-4 border rounded"
                        rows="4"
                    ></textarea>
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-800 text-white px-6 py-3 rounded hover:bg-blue-900"
                    >
                        Send Message
                    </button>
                </div>
            </div>
        </section>
    );
};
