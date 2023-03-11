import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { useEffect } from "react"

function ModalBox() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    let handleAccept = () => {
        localStorage.setItem("T&C", true)
        onClose()
    }
    useEffect(() => {
        let show = JSON.parse(localStorage.getItem("T&C"))
        if (!show) {
            onOpen()
        }

    }, [])
    return (
        <>
            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create your account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        hellaksdbfkjasbdkf kasbdkf b
                        hellaksdbfkjasbdkf kasbdkf b
                        hellaksdbfkjasbdkf kasbdkf b
                        hellaksdbfkjasbdkf kasbdkf b
                        hellaksdbfkjasbdkf kasbdkf b
                        hellaksdbfkjasbdkf kasbdkf b
                        hellaksdbfkjasbdkf kasbdkf b
                        hellaksdbfkjasbdkf kasbdkf b
                        hellaksdbfkjasbdkf kasbdkf b
                        hellaksdbfkjasbdkf kasbdkf b
                        hellaksdbfkjasbdkf kasbdkf b
                        hellaksdbfkjasbdkf kasbdkf b
                        hellaksdbfkjasbdkf kasbdkf b
                        hellaksdbfkjasbdkf kasbdkf b

                    </ModalBody>

                    <ModalFooter gap={2}>

                        <Button colorScheme='blue' onClick={onClose}>Cancel</Button>
                        <Button colorScheme='blue' onClick={() => handleAccept()} mr={3}>
                            Accept
                        </Button>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export { ModalBox }