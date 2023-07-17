import React from 'react'
import {Card, Container, Grid, Text, Link, Image, Badge, Spacer} from '@nextui-org/react'
import DescriptionPopup from './DescriptionPopup'
import ProjectPopup from './ProjectPopup'
import AutoTypingField from './AutoTypingField'
import MessageSend from './MessageSend'

export default function Content({isDark}) {
    const cardStyles = {
        background: 'linear-gradient(to right, #FFB938 -20%, #f33d4e 100%)',
    }

    const webDebvelopment = "With expertise in the MERN stack (MongoDB, Express.js, React, and Node.js), I offer comprehensive full-stack web development services. From designing and implementing efficient backend APIs using Node.js and Express.js to developing dynamic and interactive user interfaces with React, I can help bring your web application ideas to life. Leveraging MongoDB as the database, I ensure seamless data management and create scalable and performant web solutions tailored to your specific requirements. Whether it's building a responsive e-commerce platform or a modern web application, I am well-versed in the latest tools and technologies of the MERN stack to deliver high-quality and robust web solutions.Additionally, I have besic kowledge about developing web app combining Django and react."


    const  email = 'sanjananilankaperer@gmail.com'
    const phone = '+94729449616'

    return (
        <div>
            <section id='home' style={{top:'-400px'}}></section>
            <Grid.Container gap={2} justify="center" css={{marginTop:'$8'}}>
                <Grid xs={12} md={8}>
                    <Container>
                        <Text
                            h4
                            weight="bold"
                        >
                            Hi There, {isDark && <span>Hello</span>}
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
                                <AutoTypingField/>
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
                                <Link href='https://github.com/IT21358234' target='_blank'>
                                    <Card style={cardStyles}>
                                        <Card.Body css={{fontSize:'$3xl',color:'$white', width:'70px', textAlign:'center'}}>
                                            <i class="fa fa-github" aria-hidden="true" ></i>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Grid>
                            <Grid >
                                <Link href='https://www.linkedin.com/in/sanjana-nilanka-02091319a/' target='_blank'>
                                    <Card style={cardStyles}>
                                        <Card.Body css={{fontSize:'$3xl',color:'$white', width:'70px', textAlign:'center'}}>
                                            <i class="fa fa-linkedin" aria-hidden="true" ></i>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Grid>
                            <Grid >
                                <Link href='https://www.instagram.com/nilanka_sn/' target='_blank'>
                                    <Card style={cardStyles}>
                                        <Card.Body css={{fontSize:'$3xl',color:'$white', width:'70px', textAlign:'center'}}>
                                            <i class="fa fa-instagram" aria-hidden="true" ></i>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Grid>
                            <Grid >
                                <Link href='https://twitter.com/Nilanka_SN' target='_blank'>
                                    <Card style={cardStyles}>
                                        <Card.Body css={{fontSize:'$3xl',color:'$white', width:'70px', textAlign:'center'}}>
                                            <i class="fa fa-twitter" aria-hidden="true" ></i>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Grid>
                            <Grid >
                                <Link href='https://web.facebook.com/nilanka.sanjana/' target='_blank'>
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
                <Grid xs={12} md={4}>
                    <Container>
                        <Card  css={{ marginBottom:'$8', height:'fit-content'}}>
                            <Card.Body>
                                <Image
                                    height={300}
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
                                    <Card style={cardStyles} >
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
            <section id='skills'></section>
            <hr style={{border:'solid 1px', margin:'40px'}}/>
                            
            <Text size={50} css={{textAlign:'center', fontWeight:'$extrabold', fontFamily:'arial'}}>
                Skills
            </Text>
            <Grid.Container gap={2} justify="center" css={{marginTop:'$8'}}>
                <Grid xs={12} md={6}>
                    <Container>
                        <Text
                            h5
                            size={20}
                            css={{
                                textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                marginTop:'$5'
                            }}
                        >
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
                <Grid xs={12} md={3}>
                    <Container>
                        <Text
                            h5
                            size={20}
                            css={{
                                textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                marginTop:'$5'
                            }}
                        >
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
                </Grid>
                <Grid xs={12} md={3}>
                    <Container>
                        <Text
                            h5
                            size={20}
                            css={{
                                textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                marginTop:'$5'
                            }}
                        >
                            Other Skills
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
                        <Text
                            h5
                            size={20}
                            css={{
                                textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                marginTop:'$5'
                            }}
                        >
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
                        <Text
                            h5
                            size={20}
                            css={{
                                textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                marginTop:'$5'
                            }}
                        >
                            Databases
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


            <spin id='education'></spin>

            <hr style={{border:'solid 1px', margin:'40px'}}/>
            
            <Text size={50} css={{textAlign:'center', fontWeight:'$extrabold', fontFamily:'arial'}}>
                Education
            </Text>

            <Grid.Container gap={2} justify='space-between' css={{marginTop:'$8'}}>
                <Grid md={6} xs={12}>
                    <Container>
                        <Card>
                            <Card.Body>
                                <Grid.Container justify='space-between'>
                                    <Grid md={4} xs={12}>
                                        <Container>
                                            <Image src='/AV.png' width={300} />
                                        </Container>
                                    </Grid>
                                    <Grid md={8} xs={12}>
                                        <Container>
                                            <Grid.Container justify='space-between'>
                                                <Grid>
                                                    <Text
                                                        h3
                                                        css={{
                                                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                                        }}
                                                        weight="bold"
                                                    >
                                                        Asoka Vidyalaya
                                                    </Text>
                                                </Grid>
                                                <Grid>
                                                    <Badge variant='bordered' size="md" color='warning' css={{background:'linear-gradient(to right, #FFB938, #f33d4e)', color:'White', fontWeight:'$bold'}}>Colombo 10</Badge>
                                                </Grid>
                                            </Grid.Container>
                                            <Text css={{fontWeight:'$semibold'}}>
                                                (2012 - 2020)
                                            </Text>
                                            <Spacer/>
                                            <Text b css={{textAlign:'justify'}}>
                                                I'm done my ordinary level and advanced level education at Asoka Vidyalaya
                                            </Text>
                                        </Container>
                                    </Grid>
                                </Grid.Container>
                            </Card.Body>
                        </Card>
                    </Container>
                </Grid>
                <Grid md={6} xs={12}>
                    <Container>
                        <Card>
                            <Card.Body>
                                <Grid.Container justify='space-between'>
                                    <Grid md={4} xs={12}>
                                        <Container>
                                            <Image src='/SLIIT.png' width={134} />
                                        </Container>
                                    </Grid>
                                    <Grid md={8} xs={12}>
                                        <Container>
                                            <Grid.Container justify='space-between'>
                                                <Grid>
                                                    <Text
                                                        h3
                                                        css={{
                                                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                                        }}
                                                        weight="bold"
                                                    >
                                                        SLIIT
                                                    </Text>
                                                </Grid>
                                                <Grid>
                                                    <Badge variant='bordered' size="md" color='warning' css={{background:'linear-gradient(to right, #FFB938, #f33d4e)', color:'White', fontWeight:'$bold'}}>Malabe</Badge>
                                                </Grid>
                                            </Grid.Container>
                                            <Text css={{fontWeight:'$semibold'}}>
                                                (2021 - Present)
                                            </Text>
                                            <Spacer/>
                                            <Text b>
                                                I'm currently doing my higher studies at Sri Lanka Institute of Information Technology
                                            </Text>
                                        </Container>
                                    </Grid>
                                </Grid.Container>
                            </Card.Body>
                        </Card>
                    </Container>
                </Grid>
            </Grid.Container>

            <spin id='services'></spin>

            <hr style={{border:'solid 1px', margin:'40px'}}/>
            
            <Text size={50} css={{textAlign:'center', fontWeight:'$extrabold', fontFamily:'arial'}}>
                Services
            </Text>

            
            <Grid.Container gap={2} justify="center">
                <Grid xs={12} md={6} lg={0}>
                    <Container>
                        <Card css={{marginTop:'$8', marginBottom:'$8', padding:'$5 $10'}}>
                            <Card.Body>
                                <Grid.Container justify='space-between'>
                                    <Grid> 
                                        <Text
                                            h3
                                            css={{
                                            textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                            }}
                                            weight="bold"
                                        >
                                            Full Stack Web Development
                                        </Text>
                                        <Spacer/>
                                    </Grid>
                                    <Grid>
                                        <Grid.Container justify='space-between' gap={1}>
                                            <Grid>
                                                <Badge variant='bordered' size="md" color='warning' css={{background:'linear-gradient(to right, #FFB938, #f33d4e)', color:'White', fontWeight:'$bold'}}>MERN</Badge>
                                            </Grid>
                                            <Grid>
                                                <Badge variant='bordered' size="md" color='warning' css={{background:'linear-gradient(to right, #FFB938, #f33d4e)', color:'White', fontWeight:'$bold'}}>React + Django</Badge>                                          
                                            </Grid>
                                        </Grid.Container>
                                        
                                    </Grid>
                                </Grid.Container>
                                
                                <Text b css={{textAlign:'justify'}}>
                                    Having good experience and best knowledge about Full Stack Web Developing using MERN stack<br/>
                                </Text><Spacer y={0.5}/>
                                <Text  b css={{textAlign:'justify'}}>
                                    Having experience to design atractive and user friendly UI and develop them using React<br/>
                                </Text><Spacer y={0.5}/>
                                <Text  b css={{textAlign:'justify'}}>
                                    Additionaly, Having besic knowledge about Backend Developing using Django framework
                                        
                                </Text><Spacer y={0.5}/>
                                <DescriptionPopup title='Full Stack Web Development' description={webDebvelopment} />
                                
                            </Card.Body>
                        </Card>
                    </Container>
                </Grid>
                <Grid xs={12} md={6} lg={0}>
                    <Container>
                        <Card css={{marginTop:'$8', marginBottom:'$8', padding:'$5 $10'}}>
                            <Card.Body>
                                <Grid.Container justify='space-between'>
                                    <Grid>
                                        <Text
                                            h3
                                            css={{
                                            textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                            }}
                                            weight="bold"
                                        >
                                            Android App Development
                                        </Text>
                                        <Spacer/>
                                    </Grid>
                                    <Grid>
                                        <Grid.Container justify='space-between' gap={1}>
                                            <Grid>
                                                <Badge variant='bordered' size="md" color='warning' css={{background:'linear-gradient(to right, #FFB938, #f33d4e)', color:'White', fontWeight:'$bold'}}>Kotlin</Badge>
                                            </Grid>
                                            <Grid>
                                                <Badge variant='bordered' size="md" color='warning' css={{background:'linear-gradient(to right, #FFB938, #f33d4e)', color:'White', fontWeight:'$bold'}}>Flutter</Badge>                                          
                                            </Grid>
                                            <Grid>
                                                <Badge variant='bordered' size="md" color='warning' css={{background:'linear-gradient(to right, #FFB938, #f33d4e)', color:'White', fontWeight:'$bold'}}>Dart</Badge>                                          
                                            </Grid>
                                        </Grid.Container>
                                        
                                    </Grid>
                                </Grid.Container>
                                
                                <Text b css={{textAlign:'justify'}}>
                                    
                                    Having good experience about native android development using Kotlin and some libreries for android development<br/>
                                </Text><Spacer y={0.5}/>
                                <Text  b css={{textAlign:'justify'}}>
                                    Also I can design and develop attractive and user friendly UI using Android Studio<br/>
                                </Text><Spacer y={0.5}/>
                                <Text  b css={{textAlign:'justify'}}>
                                    Additionaly, I have besic knowledge about flutter framework and Dart language. 
                                        
                                </Text><Spacer y={0.5}/>
                                <DescriptionPopup title='Android App Development' description={webDebvelopment}/>
                            </Card.Body>
                        </Card>
                    </Container>
                </Grid>
                <Grid xs={12} md={6} lg={0}>
                    <Container>
                        <Card css={{marginTop:'$8', marginBottom:'$8', padding:'$5 $10'}}>
                            <Card.Body>
                            <Grid.Container justify='space-between'>
                                    <Grid>
                                        <Text
                                            h3
                                            css={{
                                            textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                            }}
                                            weight="bold"
                                        >
                                            UI/UX Designing & Developing
                                        </Text>
                                        <Spacer/>
                                    </Grid>
                                    <Grid>
                                        <Grid.Container justify='space-between' gap={1}>
                                            <Grid>
                                                <Badge variant='bordered' size="md" color='warning' css={{background:'linear-gradient(to right, #FFB938, #f33d4e)', color:'White', fontWeight:'$bold'}}>Figma</Badge>
                                            </Grid>
                                            <Grid>
                                                <Badge variant='bordered' size="md" color='warning' css={{background:'linear-gradient(to right, #FFB938, #f33d4e)', color:'White', fontWeight:'$bold'}}>React</Badge>                                          
                                            </Grid>
                                            <Grid>
                                                <Badge variant='bordered' size="md" color='warning' css={{background:'linear-gradient(to right, #FFB938, #f33d4e)', color:'White', fontWeight:'$bold'}}>HTML</Badge>                                          
                                            </Grid>
                                        </Grid.Container>
                                        
                                    </Grid>
                                </Grid.Container>
                                
                                <Text b css={{textAlign:'justify'}}>
                                    
                                Having good experience to work in Figma (an online UI designing platform) <br/>
                                </Text><Spacer y={0.5}/>
                                <Text  b css={{textAlign:'justify'}}>
                                Having best experience to develop UIs using React framework, HTML and CSS<br/>
                                </Text><Spacer y={0.5}/>
                                <Text  b css={{textAlign:'justify'}}>
                                Additionaly, I can develop proper UIs for mobile and windows (WPF) applications using android studion and visual studio
                                        
                                </Text><Spacer y={0.5}/>
                                <DescriptionPopup title='UI/UX Designing & Developing' description={webDebvelopment}/>
                            </Card.Body>
                        </Card>
                    </Container>
                </Grid>
                <Grid xs={12} md={6} lg={0}>
                    <Container>
                        <Card css={{marginTop:'$8', marginBottom:'$8', padding:'$5 $10'}}>
                            <Card.Body>
                            <Grid.Container justify='space-between'>
                                    <Grid>
                                        <Text
                                            h3
                                            css={{
                                            textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                            }}
                                            weight="bold"
                                        >
                                            WPF Development
                                        </Text>
                                        <Spacer/>
                                    </Grid>
                                    <Grid>
                                        <Grid.Container justify='space-between' gap={1}>
                                            <Grid>
                                                <Badge variant='bordered' size="md" color='warning' css={{background:'linear-gradient(to right, #FFB938, #f33d4e)', color:'White', fontWeight:'$bold'}}>C#</Badge>
                                            </Grid>
                                            <Grid>
                                                <Badge variant='bordered' size="md" color='warning' css={{background:'linear-gradient(to right, #FFB938, #f33d4e)', color:'White', fontWeight:'$bold'}}>.NET</Badge>                                          
                                            </Grid>
                                        </Grid.Container>
                                        
                                    </Grid>
                                </Grid.Container>
                                
                                <Text b css={{textAlign:'justify'}}>
                                    
                                    Having besic knowledge for developing backend of WPF app using C# language<br/>
                                </Text><Spacer y={0.5}/>
                                <Text  b css={{textAlign:'justify'}}>
                                    Also Having besic knowledge to develop windows app using flutter framework and dart language<br/>
                                </Text><Spacer y={0.5}/>
                                <Text  b css={{textAlign:'justify'}}>
                                    Additionaly, I can design and develop attractive and user friendly UI using Visual Studio
                                        
                                </Text><Spacer y={0.5}/>
                                <DescriptionPopup title='WPF Development' description={webDebvelopment}/>
                            </Card.Body>
                        </Card>
                    </Container>
                </Grid>
            </Grid.Container>
            <spin id='projects'></spin>

            <hr style={{border:'solid 1px', margin:'40px'}}/>

            <Text size={50} css={{textAlign:'center', fontWeight:'$extrabold', fontFamily:'arial'}} >
                Projects
            </Text>

            
            <Grid.Container  justify="center" css={{marginTop:'$8', marginBottom:'$8'}}>
                <Grid xs={12} sm={4}>
                    <Container>
                        <Card css={{marginTop:'$8', marginBottom:'$8', paddingLeft:'$8', paddingRight:'$8'}}>
                            <Card.Body>
                                <Spacer/>
                                {isDark && <Image src='/moviemaven-logo-black.png' alt='Project Poster' height={100} css={{width:'100%'}}/>}
                                {!isDark && <Image src='/moviemaven-logo-white.png' alt='Project Poster' height={100} css={{width:'100%'}}/>}
                                <Spacer/>
                                <Text
                                    h4
                                    css={{
                                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                        marginTop:'$5'
                                    }}
                                    weight="bold"
                                >
                                    Movie Maven - Admin
                                </Text>
                                <Text css={{textAlign:'justify'}}>
                                    This is a Web System for managing the 'MovieMaven' Movie Downloading WebSite. MERN Stack is used to develop this.
                                </Text>
                                <Spacer y={3.5}/>
                                <ProjectPopup title='Movie Maven - Admin' description='1' githubLink='' linkedinLink='' logoPath={'/moviemaven-logo.png'}/>
                            </Card.Body>
                        </Card>
                    </Container>
                </Grid>
                <Grid xs={12} sm={4}>
                    <Container>
                        <Card css={{marginTop:'$8', marginBottom:'$8', paddingLeft:'$8', paddingRight:'$8'}}>
                            <Card.Body>
                                <Spacer/>
                                {isDark && <Image src='/encore-logo-black.png' alt='Project Poster' height={100} css={{width:'100%'}}/>}
                                {!isDark && <Image src='/encore-logo-white.png' alt='Project Poster' height={100} css={{width:'100%'}}/>}
                                <Spacer/>
                                <Text
                                    h4
                                    css={{
                                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                        marginTop:'$5'
                                    }}
                                    weight="bold"
                                >
                                    Encore Thrift Store
                                </Text>
                                <Text css={{textAlign:'justify'}}>
                                    This is a Web System for managing the Encore Thirft Store. MERN Stack is used to develop this
                                </Text>
                                <Spacer y={4.8}/>
                                <ProjectPopup title='Encore Thrift Store' description='2' githubLink='' linkedinLink='' logoPath={'/encore-logo.png'}/>
                            </Card.Body>
                        </Card>
                        
                    </Container>
                </Grid>
                <Grid xs={12} sm={4}>
                    <Container>
                        <Card css={{marginTop:'$8', marginBottom:'$8', paddingLeft:'$8', paddingRight:'$8'}}>
                            <Card.Body>
                                <Spacer/>
                                {isDark && <Image src='/travelite-logo-black.png' alt='Project Poster' height={100} css={{width:'100%'}}/>}
                                {!isDark && <Image src='/travelite-logo-white.png' alt='Project Poster' height={100} css={{width:'100%'}}/>}
                                <Spacer/>
                                <Text
                                    h4
                                    css={{
                                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                        marginTop:'$5'
                                    }}
                                    weight="bold"
                                >
                                    Travelite
                                </Text>
                                <Text css={{textAlign:'justify'}}>
                                    This is a Mobile App that implemented to improve tourism in Sri Lanka. This App was implemented for toursts, hotel and restaurant owners and transport providers. This is a Android Native Development using Kotlin
                                </Text>
                                <Spacer/>
                                <ProjectPopup title='Travelite' description='3' githubLink='' linkedinLink='' logoPath={'/travelite-logo.png'}/>
                            </Card.Body>
                        </Card>
                    </Container>
                </Grid>
                
            </Grid.Container>


            <Grid.Container gap={1} justify="center">
                <Grid xs={12} sm={4}>
                    <Container>
                        <Card css={{marginTop:'$8', marginBottom:'$8', paddingLeft:'$8', paddingRight:'$8'}}>
                            <Card.Body>
                                <Spacer/>
                                {isDark && <Image src='/zoho-logo-black.png' alt='Project Poster' height={100} css={{width:'100%'}}/>}
                                {!isDark && <Image src='/zoho-logo-white.png' alt='Project Poster' height={100} css={{width:'100%'}}/>}
                                <Spacer/>
                                <Text
                                    h4
                                    css={{
                                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                        marginTop:'$5'
                                    }}
                                    weight="bold"
                                >
                                    Zoho Online Store
                                </Text>
                                <Text css={{textAlign:'justify'}}>
                                    This is a Web System to mange the inventory of Zoho Online Store. This was implemented with all function of Stock Manger, Purchasing Manager & Shipping Manager. HTML, CSS, JS and Java Sevlet were used.
                                </Text>
                                <Spacer/>
                                <ProjectPopup title='Zoho Online Store' description='4' githubLink='' linkedinLink='' logoPath={'/zoho-logo-black.png'}/>
                            </Card.Body>
                        </Card>
                    </Container>
                </Grid>
                <Grid xs={12} sm={4}>
                    <Container>
                        <Card css={{marginTop:'$8', marginBottom:'$8', paddingLeft:'$8', paddingRight:'$8'}}>
                            <Card.Body>
                                <Spacer/>
                                {isDark && <Image src='/yourchoice-logo-black.png' alt='Project Poster' height={100} css={{width:'100%'}}/>}
                                {!isDark && <Image src='/yourchoice-logo-white.png' alt='Project Poster' height={100} css={{width:'100%'}}/>}
                                <Spacer/>
                                <Text
                                    h4
                                    css={{
                                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                        marginTop:'$5'
                                    }}
                                    weight="bold"
                                >
                                    YourChoice Online Store
                                </Text>
                                <Text css={{textAlign:'justify'}}>
                                    This is a E commerce Web Site. Users can purchase various thing under various categories. HTML, CSS, JS, PHP, SQL are used to implement this site
                                </Text>
                                <Spacer y={3.5}/>
                                <ProjectPopup title='YourChoice Online Store' description='5' githubLink='' linkedinLink='' logoPath={'/yourchoice-logo.png'}/>
                            </Card.Body>
                        </Card>
                    </Container>
                </Grid>
                <Grid xs={12} sm={4}>
                    <Container>
                        <Card css={{marginTop:'$8', marginBottom:'$8', paddingLeft:'$8', paddingRight:'$8'}}>
                            <Card.Body>
                                <Spacer/>
                                {isDark && <Image src='/moviemaven-logo-black.png' alt='Project Poster' height={100} css={{width:'100%'}}/>}
                                {!isDark && <Image src='/moviemaven-logo-white.png' alt='Project Poster' height={100} css={{width:'100%'}}/>}
                                <Spacer/>
                                <Text
                                    h4
                                    css={{
                                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                        marginTop:'$5'
                                    }}
                                    weight="bold"
                                >
                                    Movie Maven - Website
                                </Text>
                                <Text css={{textAlign:'justify'}}>
                                    This is a Web System for managing the Encore Thirft Store. MERN Stack is used to develop this
                                </Text>
                                <Spacer y={4.8}/>
                                <ProjectPopup title='Movie Maven - Admin' description='6' githubLink='' linkedinLink='' logoPath={'/moviemaven-logo.png'}/>
                            </Card.Body>
                        </Card>
                        
                    </Container>
                </Grid>
                
                
            </Grid.Container>
            <spin id='contact'></spin>

            <hr style={{border:'solid 1px', margin:'40px'}}/>

            <Text size={50} css={{textAlign:'center', fontWeight:'$extrabold', fontFamily:'arial'}}>
                Contact
            </Text>

            <Grid.Container gap={1} justify="center" css={{marginTop:'$8', marginBottom:'$8'}}>
                <Grid xs={12} sm={4}>
                    <Container>
                        <Card css={{marginTop:'$8', marginBottom:'$8',padding:'$4',paddingLeft:'$12'}}>
                            <Card.Body>
                                <Text
                                    h4
                                    css={{
                                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                        marginTop:'$5'
                                    }}
                                >
                                    Contact Details
                                </Text>
                                <table>
                                    <tr>
                                        <td style={{width:'40px'}}>
                                        <Text size={25}><iconify-icon icon="fluent:mail-32-filled"></iconify-icon></Text>
                                        </td>
                                        <td >
                                        <Text>
                                            <Link 
                                                href={`mailto:${email}`} 
                                                onClick={() => {
                                                    window.location.href = `mailto:${email}`
                                                }}
                                            >
                                                sanjananilankaperera@gmail.com
                                            </Link>
                                        </Text>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{width:'40px'}}>
                                        <Text size={25}><iconify-icon icon="solar:phone-bold"></iconify-icon></Text>
                                        </td>
                                        <td >
                                        <Text>
                                            <Link href={`tel:${phone}`}>
                                                +94 72 944 9616
                                            </Link>
                                        </Text>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{width:'40px'}}>
                                        <Text size={25}><iconify-icon icon="logos:whatsapp-icon"></iconify-icon></Text>
                                        </td>
                                        <td >
                                        <Text>
                                            <Link href={`https://wa.me/${phone}`}>
                                                +94 72 944 9616
                                            </Link>
                                        </Text>
                                        </td>
                                    </tr>
                                </table>

                                <Text
                                    h4
                                    css={{
                                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                        marginTop:'$5'
                                    }}
                                >
                                    Professional Profiles
                                </Text>

                                <table>
                                    <tr>
                                        <td style={{width:'40px'}}>
                                        <Text size={25}><iconify-icon icon="skill-icons:linkedin"></iconify-icon></Text>
                                        </td>
                                        <td >
                                        <Text>
                                            <Link href={`https://www.linkedin.com/in/sanjana-nilanka-02091319a/`} target='_blank'>
                                                Sanjana Nilanka
                                            </Link>
                                        </Text>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{width:'40px'}}>
                                        <Text size={25}><iconify-icon icon="akar-icons:github-fill"></iconify-icon></Text>
                                        </td>
                                        <td >
                                        <Text>
                                            <Link href={`https://github.com/IT21358234`} target='_blank'>
                                                Nilanka
                                            </Link>
                                        </Text>
                                        </td>
                                    </tr>
                                </table>
                                
                                <Text
                                    h4
                                    css={{
                                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                        marginTop:'$5'
                                    }}
                                >
                                    Social Media
                                </Text>
                                
                                
                                <table>
                                    <tr>
                                        <td style={{width:'40px'}}>
                                        <Text size={25}><iconify-icon icon="devicon:twitter"></iconify-icon></Text>
                                        </td>
                                        <td >
                                        <Text>
                                            <Link href={`https://twitter.com/Nilanka_SN`} target='_blank'>
                                                Nilanka
                                            </Link>
                                        </Text>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{width:'40px'}}>
                                        <Text size={25}><iconify-icon icon="skill-icons:instagram"></iconify-icon></Text>
                                        </td>
                                        <td >
                                        <Text>
                                            <Link href={`https://www.instagram.com/nilanka_sn/`} target='_blank'>
                                                Nilanka
                                            </Link>
                                        </Text>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{width:'40px'}}>
                                        <Text size={25}><iconify-icon icon="logos:facebook"></iconify-icon></Text>
                                        </td>
                                        <td >
                                        <Text>
                                            <Link href={`https://web.facebook.com/nilanka.sanjana/`} target='_blank'>
                                                Sanjana Nilanka
                                            </Link>
                                        </Text>
                                        </td>
                                    </tr>
                                </table>
                            </Card.Body>
                        </Card>
                    </Container>
                </Grid>
                <MessageSend isDark={isDark}/>
            </Grid.Container>


            <hr style={{border:'solid 1px', margin:'40px', marginBottom:'10px'}}/>
            <Text css={{textAlign:'center', marginBottom:'20px'}}>
                © 2023. All rights reserved by Sanjana Nilanka.
            </Text>

        </div>
    )
}
