//Validation
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
//Hooks
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form"

import Swal from 'sweetalert2'

const useContactForm = () => {
    const ContactSchema = z.object({
        name: z.string().min(1, { message: 'Name must be at least one character long.' }).max(50, { message: 'Name can be 50 characters long.' }),
        email: z.string().email({ message: 'Invalid email address.' }),
        message: z.string().min(10, { message: 'Message must be at least 10 characters long.' }).max(1000, { message: 'Message can be 1000 characters long.' }),
    })

    const form = useForm<z.infer<typeof ContactSchema>>({
        resolver: zodResolver(ContactSchema),
        // defaultValues: {
        //     name: 'admin',
        //     email: 'admin@gmail.com',
        //     message: 'Your message here'
        // },
        mode: 'onChange'
    });

    const onSubmit = (data: z.infer<typeof ContactSchema>) => {
        const formData = new FormData();
        formData.append("access_key", "f1025c2d-832f-495a-86d1-91be54a452ec");
        formData.append("host", "Portfolio");
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("message", data.message);

        sendMessage.mutate(formData)
    };

    const sendMessage = useMutation({
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
            form.reset();
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

    return { form, onSubmit, sendMessage }
}

export default useContactForm;