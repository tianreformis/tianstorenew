'use client'
import axios from 'axios';

import * as z from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Modal from '../ui/modal'
import { useStoreModal } from '@/hooks/use-store-modal'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useState } from 'react';
import { Axis3DIcon } from 'lucide-react';
import toast from 'react-hot-toast';

const formSchema = z.object({
    name: z.string().min(1),
})






export const StoreModal = () => {
    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        //TODO:buat toko
        try {
            setLoading(true);
            const response = await axios.post("api/stores", values);
            //window.location.assign(`/${response.data.id}`);
            console.log(response.data);
            toast.success("Berhasil Membuat Toko");
            window.location.assign(`/${response.data.id}`);
        }
        catch (error) {
            toast.error("Gagal Membuat Toko");
        }
        finally {
            setLoading(false);
        }
    }

    const storeModal = useStoreModal();

    return (
        <Modal
            title="Buat Store"
            description="Tambahkan Toko untuk membuat toko dan kategori"

            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            <div>
                <div className='p-2 pb-4 space-y-4'>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name='name'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Nama Toko"
                                                disabled={loading}
                                                {...field}

                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}

                            />

                            <div className='flex pt-6 space-x-2 justify-end items-center w-full'>
                                <Button
                                    variant='outline'
                                    onClick={storeModal.onClose}
                                    disabled={loading}

                                >
                                    Cancel</Button>
                                <Button type='submit'
                                    disabled={loading}
                                >
                                    Continue
                                </Button>
                            </div>




                        </form>


                    </Form>
                </div>
            </div>
        </Modal>
    )
}