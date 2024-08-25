'use client'
import { cn } from "@/lib/utils";
import Container from "./Container";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Swal from 'sweetalert2'
import { PulseLoader } from "react-spinners";
import { useMutation } from "@tanstack/react-query";

const Contact = () => {
    const mutation = useMutation({
        mutationFn: async (data: FormData) => {
            return await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: data
            });
        },
        onSuccess: (data) => {
            Swal.fire({
                title: 'Success',
                text: 'Thank you! We will reply you soon.',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
            reset();
        },
        onError: (error) => {
            Swal.fire({
                title: 'Error',
                text: 'Something went wrong. Please try again.',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
    })

    const ContactSchema = z.object({
        name: z.string().min(1, { message: 'Name must be at least one character long.' }).max(50, { message: 'Name can be 50 characters long.' }),
        email: z.string().email({ message: 'Invalid email address.' }),
        message: z.string().min(10, { message: 'Message must be at least 10 characters long.' }).max(1000, { message: 'Message can be 1000 characters long.' }),
    })

    const { formState, register, handleSubmit, reset } = useForm<z.infer<typeof ContactSchema>>({
        resolver: zodResolver(ContactSchema),
        defaultValues: {
            name: 'admin',
            email: 'admin@gmail.com',
            message: 'Your message here'
        },
        mode: 'onChange'
    });


    const onSubmit2 = (data: z.infer<typeof ContactSchema>) => {
        const formData = new FormData();
        formData.append("access_key", "f1025c2d-832f-495a-86d1-91be54a452ec");
        formData.append("host", "Portfolio");
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("message", data.message);

        mutation.mutate(formData)
    };

    return (
        <section className="pb-[200px]">
            <Container className="flex flex-col items-center gap-10 ">
                <h2 className="text-3xl font-bold text-center uppercase">Contact</h2>
                <form onSubmit={handleSubmit(onSubmit2)} className="flex flex-col gap-5 items-center " >
                    <input
                        {...register('name')}
                        type="text"
                        placeholder="Name"
                        className={cn("focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-500 dark:bg-slate-800 dark:text-gray-300 xsm:min-w-[300px] sm:min-w-[500px] md:min-w-[600px] lg:min-w-[700px] border-2 outline-none shadow-none border-gray-300 rounded-xl p-2 text-gray-600", formState.errors.name && 'border-red-600')}
                    />
                    {formState.errors.name && <span className=" text-red-600">{formState.errors.name.message}</span>}

                    <input
                        {...register('email')}
                        type="email"
                        placeholder="Email"
                        className={cn("focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-500 dark:bg-slate-800 dark:text-gray-300 xsm:min-w-[300px] sm:min-w-[500px] md:min-w-[600px] lg:min-w-[700px] border-2 outline-none shadow-none border-gray-300 rounded-xl p-2 text-gray-600 min-w-[700px]", formState.errors.email && 'border-red-600')}
                    />
                    {formState.errors.email && <span className=" text-red-600">{formState.errors.email.message}</span>}

                    <textarea
                        {...register('message')}
                        placeholder="Message"
                        className={cn("focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-500 dark:bg-slate-800 dark:text-gray-300 xsm:min-w-[300px] sm:min-w-[500px] md:min-w-[600px] lg:min-w-[700px] border-2 outline-none shadow-none border-gray-300 rounded-xl p-2 text-gray-600 min-h-[200px] min-w-[700px]", formState.errors.message && 'border-red-600')}
                    />
                    {formState.errors.message && <span className=" text-red-600">{formState.errors.message.message}</span>}

                    <button disabled={mutation.isPending} className=" py-4 px-20 bg-indigo-600 rounded-xl text-white text-xl flex items-center justify-center">
                        {mutation.isPending ? <PulseLoader color="white" size={20} /> : 'Send'}
                    </button>
                </form>
            </Container>
        </section>
    );
}

export default Contact;