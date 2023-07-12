import { Modal, useModal, Button, Text, Link } from "@nextui-org/react";

export default function DescriptionPopup({title, description}) {
  const { setVisible, bindings } = useModal();
  const setTitle = title
  const setDescription = description

  return (
    <div>
      
      <Link css={{fontWeight:'$bold'}} onPress={() => setVisible(true)}>SEE MORE &nbsp;<i class="fa-solid fa-arrow-right-long"></i></Link>
    
      <Modal
        closeButton
        scroll
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
        css={{height:'70vh'}}
      >
        <Modal.Header>
          <Text 
            id="modal-title" 
            h3
            css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%",
            }}
            weight="bold"
          >
            {setTitle}
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text id="modal-description" css={{textAlign:'justify'}}>
            {setDescription}
          </Text>
        </Modal.Body>
        
  
      </Modal>
    </div>
  );
}
