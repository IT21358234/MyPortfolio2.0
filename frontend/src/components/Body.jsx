import {Navbar, Button, Link, Text, Spacer, Grid, Avatar} from '@nextui-org/react'
import React, {useState} from 'react'
import { Card } from "@nextui-org/react"
import Content from './Content'


export default function Body({onToggleTheme}) {
    const [isDark, setIsDark] = useState(false)
    /*const { type, isDark } = useTheme();

    const handleChange = () => {
        const nextTheme = isDark ? 'light' : 'dark';
        window.localStorage.setItem('data-theme', nextTheme); // you can use any storage
        changeTheme(nextTheme);
    }*/
    /*const collapseItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ]*/

    const handleDarkThemeChange = (e) =>{
        setIsDark(true)
        localStorage.setItem('isDarkLocal', isDark);
    }
    
    const handleLightThemeChange = (e) =>{
        setIsDark(false)
        localStorage.setItem('isDarkLocal', isDark);
    }



    const[isHomeActive, setIsHomeActive] = useState(true)
    const[isSkillsActive, setIsSkillsActive] = useState(false)
    const[isEducationActive, setIsEducationActive] = useState(false)
    const[isContactActive, setIsContactActive] = useState(false)
    const[isServicesActive, setIsServicesActive] = useState(false)
    const[isProjectActive, setIsProjectActive] = useState(false)

    return (
        <div>
            <Navbar isBordered variant='sticky'>
                <Navbar.Brand>
                    <Grid>
                        <Avatar
                        size="lg"
                        src="/avatar.jpg"
                        color="warning"
                        bordered
                        />
                    </Grid>
                    <Spacer x={1} />
                    <Text h4 b color="inherit" hideIn="md">
                        &#60;SanjanaNilanka /&#62;
                    </Text>
                </Navbar.Brand>
                <Navbar.Content hideIn="sm" variant="default" enableCursorHighlight activeColor='warning'> 
                    <Navbar.Link href="#" isActive={isHomeActive}>Home</Navbar.Link>
                    <Navbar.Link href="#skills" isActive={isSkillsActive} >Skills</Navbar.Link>
                    <Navbar.Link href="#services" isActive={isServicesActive}>Services</Navbar.Link>
                    <Navbar.Link href="#education" isActive={isEducationActive}>Education</Navbar.Link>
                    <Navbar.Link href="#projects" isActive={isProjectActive}>Projects</Navbar.Link>
                    <Navbar.Link href="#contact" isActive={isContactActive}>Contact</Navbar.Link>
                </Navbar.Content>
                <Navbar.Content>
                    <Grid.Container gap={0} css={{ d: 'flex', flexWrap: 'nowrap' }}>
                        <Grid>
                            <Navbar.Link color="inherit" href="https://github.com/IT21358234" target='_blank'> 
                                <Card css={{background:'transparent'}}>
                                    <Card.Body css={{fontSize:'$3xl'}}>
                                        
                                        <iconify-icon icon="mdi:github"></iconify-icon>
                                    
                                    </Card.Body>
                                </Card>
                            </Navbar.Link>    
                        </Grid>
                        <Grid>
                            <Navbar.Link color="inherit" href="https://www.linkedin.com/in/sanjana-nilanka-02091319a/" target='_blank'>
                                <Card css={{background:'transparent'}}>
                                    <Card.Body css={{fontSize:'$3xl'}}>
                                        
                                        <iconify-icon icon="mdi:linkedin"></iconify-icon>
                                    
                                    </Card.Body>
                                </Card>
                            </Navbar.Link> 
                        </Grid>
                    </Grid.Container>
                    
                    <Navbar.Link onClick={onToggleTheme}>  
                        {!isDark && 
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                onClick={handleDarkThemeChange}
                            >
                                <circle cx="12" cy="12" r="5" />
                                <line x1="12" y1="1" x2="12" y2="3" />
                                <line x1="12" y1="21" x2="12" y2="23" />
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                <line x1="1" y1="12" x2="3" y2="12" />
                                <line x1="21" y1="12" x2="23" y2="12" />
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                            </svg>
                        }    
                        {isDark &&
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                onClick={handleLightThemeChange}
                            >
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                            </svg>
                        }
                        {isDark}
                    </Navbar.Link>
                    <Spacer x={0}/>
                    {/*<Navbar.Link color="inherit" href="#">
                        Login
                    </Navbar.Link>
                    
                    <Navbar.Item>
                        <Button auto flat as={Link} href="#">
                            Sign Up
                        </Button>
                    </Navbar.Item>*/}
                    <Navbar.Item hideIn='xs'>
                        <a href='/SanjanaNilankaResume.pdf' download>
                        <Button 
                            auto 
                            css={{ 
                                borderRadius: '$xs', // radii.xs
                                border: '2px solid $yellow600',
                                background: 'linear-gradient(to right, #FFB938, #f33d4e)', // colors.pink800
                                color: '$white',
                                height: '$12', // space[12]
                                boxShadow: '$md', // shadows.md
                                '&:hover': {
                                background: 'linear-gradient(to left, #FFB938, #f33d4e)',
                                borderColor:'$red600'
                                },
                            }}
                            >
                               Download Resume
                        </Button>
                        </a>
                    </Navbar.Item>
                    <Navbar.Toggle showIn="xs" />
                </Navbar.Content>
                <Navbar.Collapse disableAnimation showIn='xs'>
                    <Navbar.CollapseItem>
                        <Link color="inherit" href='#'>
                            Home
                        </Link>
                    </Navbar.CollapseItem>
                    <Navbar.CollapseItem>
                        <Link color="inherit" href='#'>
                            Skills
                        </Link>
                    </Navbar.CollapseItem>
                    <Navbar.CollapseItem>
                        <Link color="inherit" href='#'>
                            Services
                        </Link>
                    </Navbar.CollapseItem>
                    <Navbar.CollapseItem>
                        <Link color="inherit" href='#'>
                            Resume
                        </Link>
                    </Navbar.CollapseItem>
                    <Navbar.CollapseItem>
                        <Link color="inherit" href='#'>
                            Projects
                        </Link>
                    </Navbar.CollapseItem>
                    <Navbar.CollapseItem>
                        <Link color="inherit" href='#'>
                            Contact
                        </Link>
                    </Navbar.CollapseItem>
                    <Navbar.CollapseItem>
                        <Button 
                            auto 
                            css={{ 
                                borderRadius: '$xs', // radii.xs
                                border: '2px solid $yellow600',
                                background: 'linear-gradient(to right, #FFB938, #f33d4e)', // colors.pink800
                                color: '$white',
                                height: '$12', // space[12]
                                boxShadow: '$md', // shadows.md
                                '&:hover': {
                                background: 'linear-gradient(to left, #FFB938, #f33d4e)',
                                borderColor:'$red600'
                                },
                            }}
                            >
                               Download Resume
                        </Button>
                    </Navbar.CollapseItem>
                </Navbar.Collapse>
            </Navbar>
            <Content isDark={isDark}/>
        </div>
    )
}
