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
                    <ModalHeader>TERMS & CONDITIONS</ModalHeader>

                    <ModalBody pb={6}>

                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Facere modi voluptatibus deleniti dolores assumenda,
                        ad tempora ipsa doloribus.
                        Quo facere dicta delectus voluptate eaque in dignissimos facilis ut
                        mollitia placeat, nobis quasi neque culpa fugiat id.
                        Obcaecati quod pariatur nesciunt provident sunt iste. Voluptas dolor delectus voluptatum sint, fuga reprehenderit!
                        ad tempora ipsa doloribus.
                        Quo facere dicta delectus voluptate eaque in dignissimos facilis ut
                        mollitia placeat, nobis quasi neque culpa fugiat id.
                        Obcaecati quod pariatur nesciunt provident sunt iste. Voluptas dolor delectus voluptatum sint, fuga reprehenderit!

                    </ModalBody>

                    <ModalFooter gap={2} display={"flex"} w={"100%"} justifyContent={"space-around"}>

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