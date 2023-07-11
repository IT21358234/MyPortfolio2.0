import React from 'react'
import {Card, Container, Grid, Row, Text, Col, Spacer, Button, Link, Image} from '@nextui-org/react'
import TypingField from './TypingField'
import BlinkingCursor from './BlinkingCursor'

export default function Content() {
    const cardStyles = {
        background: 'linear-gradient(to right, #FFB938 -20%, #f33d4e 100%)',
    }

    return (
        <div>
            <Grid.Container gap={2} justify="center" css={{marginTop:'$8'}}>
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
                        <Text h4 css={{textAlign:'center'}}>
                            Find Me On
                        </Text>


                        <Grid.Container gap={2} justify="center" css={{color:'$white'}}> 
                            <Grid >
                                <Link href='https://github.com/IT21358234'>
                                    <Card style={cardStyles}>
                                        <Card.Body css={{fontSize:'$3xl',color:'$white', width:'70px', textAlign:'center'}}>
                                            <i class="fa fa-github" aria-hidden="true" ></i>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Grid>
                            <Grid >
                                <Link>
                                    <Card style={cardStyles}>
                                        <Card.Body css={{fontSize:'$3xl',color:'$white', width:'70px', textAlign:'center'}}>
                                            <i class="fa fa-linkedin" aria-hidden="true" ></i>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Grid>
                            <Grid >
                                <Link>
                                    <Card style={cardStyles}>
                                        <Card.Body css={{fontSize:'$3xl',color:'$white', width:'70px', textAlign:'center'}}>
                                            <i class="fa fa-instagram" aria-hidden="true" ></i>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Grid>
                            <Grid >
                                <Link>
                                    <Card style={cardStyles}>
                                        <Card.Body css={{fontSize:'$3xl',color:'$white', width:'70px', textAlign:'center'}}>
                                            <i class="fa fa-twitter" aria-hidden="true" ></i>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Grid>
                            <Grid >
                                <Link>
                                    <Card style={cardStyles}>
                                        <Card.Body css={{fontSize:'$3xl',color:'$white', width:'70px', textAlign:'center'}}>
                                            <i class="fa fa-facebook" aria-hidden="true"></i>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Grid>
                        </Grid.Container>

                        
                    </Container>

                </Grid>
                <Grid xs={12} md={6}>
                    <Container>
                        <Card  css={{ marginBottom:'$8', height:'56vh', paddingTop:'$-10', background:'transparent'}}>
                            <Card.Body>
                                <Image
                                    height={600}
                                    src="/me.png"
                                    alt="Default Image"
                                    objectFit="cover"
                                />
                            </Card.Body>
                        </Card>
                        
                        <Text h4 css={{textAlign:'center'}}>
                            Contact Me
                        </Text>

                        <Grid.Container gap={2} justify="center" css={{color:'$white'}}> 
                            <Grid >
                                <Link href='https://github.com/IT21358234'>
                                    <Card style={cardStyles}>
                                        <Card.Body css={{fontSize:'$3xl',color:'$white', width:'70px', textAlign:'center'}}>
                                            <i class="fa fa-phone" aria-hidden="true" ></i>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Grid>
                            <Grid >
                                <Link href='https://github.com/IT21358234'>
                                    <Card style={cardStyles}>
                                        <Card.Body css={{fontSize:'$3xl',color:'$white', width:'70px', textAlign:'center'}}>
                                            <i class="fa fa-whatsapp" aria-hidden="true" ></i>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Grid>
                            <Grid >
                                <Link href='https://github.com/IT21358234'>
                                    <Card style={cardStyles}>
                                        <Card.Body css={{fontSize:'$3xl',color:'$white', width:'70px', textAlign:'center'}}>
                                            <i class="fa fa-envelope-o" aria-hidden="true" ></i>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Grid>
                        </Grid.Container>
                    </Container>
                    
                </Grid>
            </Grid.Container>
            
            <hr style={{border:'solid 2px', margin:'40px'}}/>

            <Text size={40} css={{textAlign:'center', fontWeight:'$extrabold', fontFamily:'monospace'}}>
                Skills
            </Text>
            <Grid.Container gap={2} justify="center" css={{marginTop:'$8'}}>
                <Grid xs={12} md={6}>
                    <Container>
                        <Text h5 size={20}>
                            Programming Languages
                        </Text>
                        <Card css={{marginTop:'$8', marginBottom:'$8'}}>
                            <Card.Body>
                                <Grid.Container gap={2} justify="center" css={{color:'$white'}}> 
                                    <Grid >
                                        <Link>
                                            <Card css={{background:'transparent'}}>
                                                <Card.Body css={{fontSize:'$7xl', textAlign:'center'}}>
                                                    <i class="fa-brands fa-java"></i>
                                                    <Text h3>Java</Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Grid>
                                    <Grid >
                                        <Link>
                                            <Card css={{background:'transparent'}}>
                                                <Card.Body css={{fontSize:'$7xl', textAlign:'center'}}>
                                                    <i class="fa-brands fa-python"></i>
                                                    <Text h3>Python</Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Grid>
                                    <Grid >
                                        <Link>
                                            <Card css={{background:'transparent'}}>
                                                <Card.Body css={{fontSize:'$7xl', textAlign:'center'}}>
                                                    <i class="fa-brands fa-android"></i>
                                                    <Text h3>Kotlin</Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Grid>
                                    <Grid >
                                        <Link>
                                            <Card css={{background:'transparent'}}>
                                                <Card.Body css={{fontSize:'$7xl', textAlign:'center'}}>
                                                    <iconify-icon icon="simple-icons:dart"></iconify-icon>
                                                    <Text h3>Dart</Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Grid>
                                    <Grid >
                                        <Link>
                                            <Card css={{background:'transparent'}}>
                                                <Card.Body css={{fontSize:'$7xl', textAlign:'center'}}>
                                                    <iconify-icon icon="teenyicons:c-sharp-solid"></iconify-icon>
                                                    <Text h3>C#</Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Grid>
                                    <Grid >
                                        <Link>
                                            <Card css={{background:'transparent'}}>
                                                <Card.Body css={{fontSize:'$7xl', textAlign:'center'}}>
                                                    <iconify-icon icon="file-icons:c"></iconify-icon>
                                                    <Text h3>C++</Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Grid>
                                    <Grid >
                                        <Link>
                                            <Card css={{background:'transparent'}}>
                                                <Card.Body css={{fontSize:'$7xl', textAlign:'center'}}>
                                                    <i class="fa-brands fa-php"></i>
                                                    <Text h3>PHP</Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Grid>
                                </Grid.Container>
                            </Card.Body>
                        </Card>
                    </Container>
                </Grid>
                <Grid xs={12} md={6}>
                    <Container>
                        <Text h5 size={20}>
                            Web Technologies
                        </Text>
                        <Card css={{marginTop:'$8', marginBottom:'$8'}}>
                            <Card.Body>
                                <Grid.Container gap={2} justify="center" css={{color:'$white'}}> 
                                    <Grid >
                                        <Link>
                                            <Card css={{background:'transparent'}}>
                                                <Card.Body css={{fontSize:'$7xl', textAlign:'center'}}>
                                                    <i class="fa-brands fa-square-js"></i>
                                                    <Text h3>JavaScript</Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Grid>
                                    <Grid >
                                        <Link>
                                            <Card css={{background:'transparent'}}>
                                                <Card.Body css={{fontSize:'$7xl', textAlign:'center'}}>
                                                    <i class="fa-brands fa-html5"></i>
                                                    <Text h3>HTML5</Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Grid>
                                    <Grid >
                                        <Link>
                                            <Card css={{background:'transparent'}}>
                                                <Card.Body css={{fontSize:'$7xl', textAlign:'center'}}>
                                                    <i class="fa-brands fa-css3-alt"></i>
                                                    <Text h3>CSS</Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Grid>
                                </Grid.Container>
                            </Card.Body>
                        </Card>
                    </Container>
                    <Container>
                        <Text h5 size={20}>
                            Other
                        </Text>
                        <Card css={{marginTop:'$8', marginBottom:'$8'}}>
                            <Card.Body>
                                <Grid.Container gap={2} justify="center" css={{color:'$white'}}> 
                                    <Grid >
                                        <Link>
                                            <Card css={{background:'transparent'}}>
                                                <Card.Body css={{fontSize:'$7xl', textAlign:'center'}}>
                                                    <iconify-icon icon="bi:git"></iconify-icon>
                                                    <Text h3>Git</Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Grid>
                                    <Grid >
                                        <Link>
                                            <Card css={{background:'transparent'}}>
                                                <Card.Body css={{fontSize:'$7xl', textAlign:'center'}}>
                                                    <iconify-icon icon="solar:figma-linear"></iconify-icon>
                                                    <Text h3>Figma</Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Grid>
                                    <Grid >
                                        <Link>
                                            <Card css={{background:'transparent'}}>
                                                <Card.Body css={{fontSize:'$7xl', textAlign:'center'}}>
                                                    <iconify-icon icon="simple-icons:postman"></iconify-icon>
                                                    <Text h3>Postman</Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Grid>
                                </Grid.Container>
                            </Card.Body>
                        </Card>
                    </Container>
                </Grid>
            </Grid.Container>
            <Grid.Container gap={2} justify="center" css={{marginTop:'$8'}}>
                <Grid xs={12} md={6}>
                    <Container>
                        <Text h5 size={20}>
                            Frameworks & Libraries
                        </Text>
                        <Card css={{marginTop:'$8', marginBottom:'$8'}}>
                            <Card.Body>
                                <Grid.Container gap={2} justify="center" css={{color:'$white'}}> 
                                    <Grid >
                                        <Link>
                                            <Card css={{background:'transparent'}}>
                                                <Card.Body css={{fontSize:'$7xl', textAlign:'center'}}>
                                                    <i class="fa-brands fa-react"></i>
                                                    <Text h3>ReactJS</Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Grid>
                                    <Grid >
                                        <Link>
                                            <Card css={{background:'transparent'}}>
                                                <Card.Body css={{fontSize:'$7xl', textAlign:'center'}}>
                                                    <i class="fa-brands fa-node-js"></i>
                                                    <Text h3>ExpressJS</Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Grid>
                                    <Grid >
                                        <Link>
                                            <Card css={{background:'transparent'}}>
                                                <Card.Body css={{fontSize:'$7xl', textAlign:'center'}}>
                                                    <iconify-icon icon="simple-icons:django"></iconify-icon>
                                                    <Text h3>Django</Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Grid>
                                    <Grid >
                                        <Link>
                                            <Card css={{background:'transparent'}}>
                                                <Card.Body css={{fontSize:'$7xl', textAlign:'center'}}>
                                                    <iconify-icon icon="material-symbols:flutter"></iconify-icon>
                                                    <Text h3>Flutter</Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Grid>
                                </Grid.Container>
                            </Card.Body>
                        </Card>
                    </Container>
                </Grid>
                <Grid xs={12} md={6}>
                    <Container>
                        <Text h5 size={20}>
                            Database
                        </Text>
                        <Card css={{marginTop:'$8', marginBottom:'$8'}}>
                            <Card.Body>
                                <Grid.Container gap={2} justify="center" css={{color:'$white'}}> 
                                    <Grid >
                                        <Link>
                                            <Card css={{background:'transparent'}}>
                                                <Card.Body css={{fontSize:'$7xl', textAlign:'center'}}>
                                                    <iconify-icon icon="devicon-plain:mysql"></iconify-icon>
                                                    <Text h3>MySQL</Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Grid>
                                    <Grid >
                                        <Link>
                                            <Card css={{background:'transparent'}}>
                                                <Card.Body css={{fontSize:'$7xl', textAlign:'center'}}>
                                                    <iconify-icon icon="bxl:mongodb"></iconify-icon>
                                                    <Text h3>MongoDB</Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Grid>
                                    <Grid >
                                        <Link>
                                            <Card css={{background:'transparent'}}>
                                                <Card.Body css={{fontSize:'$7xl', textAlign:'center'}}>
                                                    <iconify-icon icon="mdi:firebase"></iconify-icon>
                                                    <Text h3>Firebase</Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Grid>
                                    <Grid >
                                        <Link>
                                            <Card css={{background:'transparent'}}>
                                                <Card.Body css={{fontSize:'$7xl', textAlign:'center'}}>
                                                    <iconify-icon icon="simple-icons:sqlite"></iconify-icon>
                                                    <Text h3>SQLite</Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Grid>
                                </Grid.Container>
                            </Card.Body>
                        </Card>
                    </Container>
                </Grid>
            </Grid.Container>



            <hr style={{border:'solid 2px', margin:'40px'}}/>

            <Text size={40} css={{textAlign:'center', fontWeight:'$extrabold', fontFamily:'monospace'}}>
                Services
            </Text>


        </div>
    )
}
