'use client'
import { useForm } from "react-hook-form";

const Contact = () => {
    const form = useForm();

    return (
        <section className="bg-blue-300 h-screen">
            <h1>Contact</h1>
            <form className="flex flex-col gap-5">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message"></textarea>
                <button>Send</button>
            </form>
        </section>
    );
}

export default Contact;