'use client'
import { cn } from "@/lib/utils";
import Container from "./Container";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const Contact = () => {
    const ContactSchema = z.object({
        name: z.string().min(1, { message: 'Name must be at least one character long.' }).max(50, { message: 'Name can be 50 characters long.' }),
        email: z.string().email({ message: 'Invalid email address.' }),
        message: z.string().min(10, { message: 'Message must be at least 10 characters long.' }).max(1000, { message: 'Message can be 1000 characters long.' }),
    })

    const { formState, register, handleSubmit } = useForm<z.infer<typeof ContactSchema>>({
        resolver: zodResolver(ContactSchema),
        // defaultValues: {
        //     name: 'admin',
        //     email: 'admin@gmail.com',
        //     message: 'Your message here'
        // },
        mode: 'onChange'
    });

    const onSubmit = (data: z.infer<typeof ContactSchema>) => {
        console.log(data);
    }

    return (
        <section className="pb-[200px]">
            <Container className="flex flex-col items-center gap-10 ">
                <h2 className="text-3xl font-bold text-center uppercase">Contact</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 items-center " >
                    <input
                        {...register('name')}
                        type="text"
                        placeholder="Name"
                        className={cn(" dark:border-gray-500 dark:bg-slate-800 dark:text-gray-300 xsm:min-w-[300px] sm:min-w-[500px] md:min-w-[600px] lg:min-w-[700px] border-[1px] border-gray-300 rounded-xl p-2 text-gray-600", formState.errors.name && 'border-red-600')}
                    />
                    {formState.errors.name && <span className=" text-red-600">{formState.errors.name.message}</span>}

                    <input
                        {...register('email')}
                        type="email"
                        placeholder="Email"
                        className={cn("dark:border-gray-500 dark:bg-slate-800 dark:text-gray-300 xsm:min-w-[300px] sm:min-w-[500px] md:min-w-[600px] lg:min-w-[700px] border-[1px] border-gray-300 rounded-xl p-2 text-gray-600 min-w-[700px]", formState.errors.email && 'border-red-600')}
                    />
                    {formState.errors.email && <span className=" text-red-600">{formState.errors.email.message}</span>}

                    <textarea
                        {...register('message')}
                        placeholder="Message"
                        className={cn("dark:border-gray-500 dark:bg-slate-800 dark:text-gray-300 xsm:min-w-[300px] sm:min-w-[500px] md:min-w-[600px] lg:min-w-[700px] border-[1px] border-gray-300 rounded-xl p-2 text-gray-600 min-h-[200px] min-w-[700px]", formState.errors.message && 'border-red-600')}
                    />
                    {formState.errors.message && <span className=" text-red-600">{formState.errors.message.message}</span>}

                    <button className=" py-4 px-20 bg-indigo-600 rounded-xl text-white text-xl">Send</button>
                </form>
            </Container>
        </section>
    );
}

export default Contact;