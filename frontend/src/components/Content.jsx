import React from 'react'
import {Card, Container, Grid, Row, Text, Col, Spacer, Button} from '@nextui-org/react'
import TypingField from './TypingField'
import BlinkingCursor from './BlinkingCursor'

export default function Content() {
    const cardStyles = {
        background: 'linear-gradient(to right, #FFB938 -20%, #f33d4e 100%)',
    }

    return (
        <div>
            <Grid.Container gap={2} justify="center" css={{marginTop:'$10'}}>
                <Grid xs={12} md={6}>
                    <Container>
                        <Text
                            h4
                            weight="bold"
                        >
                            Hi There,
                        </Text>
                        <Text
                            h1
                            size={50}
                            css={{
                            textGradient: "45deg, $yellow600 -20%, $red600 100%",
                            }}
                            weight="bold"
                        >
                            I'm Sanjana Nilanka
                        </Text>
                        <Grid.Container>
                            <Grid>
                                <TypingField/>
                            </Grid>
                        </Grid.Container>
                        <Card css={{marginTop:'$8', marginBottom:'$8'}}>
                            <Card.Body>
                                <Text css={{textAlign:'justify'}} b>
                                    A passionate Full Stack Web Developer having an
                                    experience of building Web applications with
                                    JavaScript / Reactjs / Nodejs / Expressjs and some
                                    other cool libraries and frameworks. And also having experience of building
                                    native android application and windows software with kotlin (Android Developing) and C# (WPF Developing)
                                </Text>
                            </Card.Body>
                        </Card>
                        <Text h4>
                            Find Me On
                        </Text>
                        <Container gap={0}>
      <Row gap={1}>
        <Col>
          <Card css={{ $$cardColor: '$colors$primary' }}>
            <Card.Body>
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                1 of 2
              </Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card css={{ $$cardColor: '$colors$primary' }}>
            <Card.Body>
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                2 of 2
              </Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Spacer y={1} />
      <Row gap={1}>
        <Col>
          <Card css={{ $$cardColor: '$colors$primary' }}>
            <Card.Body>
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                1 of 3
              </Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card css={{ $$cardColor: '$colors$primary' }}>
            <Card.Body>
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                2 of 3
              </Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card css={{ $$cardColor: '$colors$primary' }}>
            <Card.Body>
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                3 of 3
              </Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
                    </Container>
                    
                </Grid>
                <Grid xs={12} md={6}>
                    <Container>
                        <Card style={cardStyles}>
                            <Card.Body>
                                
                            </Card.Body>
                        </Card>
                    </Container>
                </Grid>
            </Grid.Container>
        </div>
    )
}
