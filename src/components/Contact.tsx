'use client'
import { cn } from "@/lib/utils";
//Components
import Container from "./Container";
import Button from './ui/Button';
import { PulseLoader } from "react-spinners";
//Hooks
import useContactForm from '../hooks/useContactForm';
import { useContext } from 'react';
import { NavigationContext } from '@/context/NavigationContext';


const Contact = () => {
    const { form: { register, formState, handleSubmit }, onSubmit, sendMessage } = useContactForm();
    const sections = useContext(NavigationContext);

    return (
        <section ref={sections?.find(section => section.name === 'Contact')?.ref}>
            <Container className="flex flex-col items-center gap-6">
                <h2 className="text-3xl font-bold text-center uppercase">Contact</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 items-center' >
                    <input
                        {...register('name')}
                        type="text"
                        placeholder="Name"
                        className={cn("focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-500 dark:bg-slate-800 dark:text-gray-300 border-2 outline-none shadow-none border-gray-300 rounded-xl p-2 text-gray-600 xsm:min-w-[300px] sm:min-w-[400px] md:min-w-[600px] lg:min-w-[700px]")}
                    />
                    {formState.errors.name && <span className=" text-red-600">{formState.errors.name.message}</span>}

                    <input
                        {...register('email')}
                        type="email"
                        placeholder="Email"
                        className={cn("focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-500 dark:bg-slate-800 dark:text-gray-300 border-2 outline-none shadow-none border-gray-300 rounded-xl p-2 text-gray-600 xsm:min-w-[300px] sm:min-w-[400px] md:min-w-[600px] lg:min-w-[700px]")}
                    />
                    {formState.errors.email && <span className=" text-red-600">{formState.errors.email.message}</span>}

                    <textarea
                        {...register('message')}
                        placeholder="Message"
                        className={cn("focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-500 dark:bg-slate-800 dark:text-gray-300 border-2 outline-none shadow-none border-gray-300 rounded-xl p-2 text-gray-600 xsm:min-w-[300px] sm:min-w-[400px] md:min-w-[600px] lg:min-w-[700px]", "min-h-[200px]")}
                    />
                    {formState.errors.message && <span className=" text-red-600">{formState.errors.message.message}</span>}

                    <Button disabled={sendMessage.isPending}>
                        {sendMessage.isPending ? <PulseLoader color="white" size={20} /> : 'Send'}
                    </Button>
                </form>
            </Container>
        </section>
    );
}

export default Contact;