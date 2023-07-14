import { Modal, useModal, Button, Text, Link, Grid } from "@nextui-org/react";

export default function ProjectPopup({title, description, githubLink, linkedinLink}) {
  const { setVisible, bindings } = useModal();
  const setTitle = title
  const setDescription = description
  /*const setGithubLink = githubLink
  const setLinkedinLink = linkedinLink*/

  return (
    <div>
      
      <Link css={{fontWeight:'$bold'}} onPress={() => setVisible(true)}>SEE MORE &nbsp;<i class="fa-solid fa-arrow-right-long" ></i></Link>
    
      <Modal
        closeButton
        scroll
        width="80%"
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
        <Modal.Footer>
            <Grid.Container gap={1} justify="center">
                <Grid>
                    <Button shadow color='warning' auto iconRight={<iconify-icon icon="mdi:linkedin"></iconify-icon>}>
                        Screen Record
                    </Button>
                </Grid>
                <Grid>
                    <Button shadow color='warning' auto iconRight={<iconify-icon icon="mdi:github"></iconify-icon>}>
                        Source Code
                    </Button>
                </Grid>
            </Grid.Container>
            
            
        </Modal.Footer>
  
      </Modal>
    </div>
  );
}
