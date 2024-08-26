'use client'
//Styles
import styles from './Contact.module.css';
import { cn } from "@/lib/utils";

//Components
import Container from "../Container";

import { PulseLoader } from "react-spinners";
import useContactForm from '../../hooks/useContactForm';

const Contact = () => {
    const { form: { register, formState, handleSubmit }, onSubmit, sendMessage } = useContactForm();

    return (
        // <section className="pb-[200px]">
        <section>

            <Container className="flex flex-col items-center gap-6">
                <h2 className="text-3xl font-bold text-center uppercase">Contact</h2>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form} >
                    <input
                        {...register('name')}
                        type="text"
                        placeholder="Name"
                        className={cn(styles.field, formState.errors.name && 'border-red-600')}
                    />
                    {formState.errors.name && <span className=" text-red-600">{formState.errors.name.message}</span>}

                    <input
                        {...register('email')}
                        type="email"
                        placeholder="Email"
                        className={cn(styles.field, formState.errors.email && 'border-red-600')}
                    />
                    {formState.errors.email && <span className=" text-red-600">{formState.errors.email.message}</span>}

                    <textarea
                        {...register('message')}
                        placeholder="Message"
                        className={cn(styles.field, "min-h-[200px]", formState.errors.message && 'border-red-600')}
                    />
                    {formState.errors.message && <span className=" text-red-600">{formState.errors.message.message}</span>}

                    <button disabled={sendMessage.isPending} className={styles.button}>
                        {sendMessage.isPending ? <PulseLoader color="white" size={20} /> : 'Send'}
                    </button>
                </form>
            </Container>
        </section>
    );
}

export default Contact;