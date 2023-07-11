import {Navbar, Button, Link, Text, Spacer, Grid} from '@nextui-org/react'
import React, {useEffect, useState} from 'react'
import { styled, Card, Container } from "@nextui-org/react"
import { Switch, changeTheme, useTheme } from '@nextui-org/react'
import Content from './Content'


export default function Body({onToggleTheme}) {
    const [isDark, setIsDark] = useState(false)
    /*const { type, isDark } = useTheme();

    const handleChange = () => {
        const nextTheme = isDark ? 'light' : 'dark';
        window.localStorage.setItem('data-theme', nextTheme); // you can use any storage
        changeTheme(nextTheme);
    }*/

    const handleDarkThemeChange = (e) =>{
        setIsDark(true)
        localStorage.setItem('isDarkLocal', isDark);
    }
    
    const handleLightThemeChange = (e) =>{
        setIsDark(false)
        localStorage.setItem('isDarkLocal', isDark);
    }

    return (
        <div>
            <Navbar isBordered variant='sticky'>
                <Navbar.Brand>
                    <Text h4 b color="inherit" hideIn="xs">
                        &#60;SanjanaNilanka /&#62;
                    </Text>
                </Navbar.Brand>
                <Navbar.Content hideIn="xs">
                    <Navbar.Link href="#">Home</Navbar.Link>
                    <Navbar.Link href="#">About</Navbar.Link>
                    <Navbar.Link href="#">Services</Navbar.Link>
                    <Navbar.Link href="#">Education</Navbar.Link>
                    <Navbar.Link href="#">Project</Navbar.Link>
                    <Navbar.Link href="#">Contact</Navbar.Link>
                </Navbar.Content>
                <Navbar.Content>
                    <Grid.Container gap={2} css={{ d: 'flex', flexWrap: 'nowrap' }}>
                        <Grid>
                            <Button auto rounded flat>
                                <Navbar.Link color="inherit" href="#">
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
                                    >
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                    </svg>
                                </Navbar.Link>
                            </Button>
                        </Grid>
                        <Grid>
                            <Button auto rounded>
                                <Navbar.Link color="inherit" href="#">
                                <i class="fa-brands fa-linkedin"></i>
                                </Navbar.Link>
                            </Button>
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
                    <Navbar.Link color="inherit" href="#">
                        Login
                    </Navbar.Link>
                    
                    <Navbar.Item>
                        <Button auto flat as={Link} href="#">
                            Sign Up
                        </Button>
                    </Navbar.Item>
                </Navbar.Content>
            </Navbar>
            <Content/>
        </div>
    )
}
