'use client'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./dialog"

interface ModalProps {
    title: string,
    children: React.ReactNode,
    isOpen: boolean,
    onClose: () => void,
    description: string,

}

const Modal = ({ title, children, isOpen, onClose, description }: ModalProps) => {

    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }

    }
    return (
        <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {title}
                    </DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>

                </DialogHeader>
                {children}
            </DialogContent>

        </Dialog>

    )
}


export default Modal;