import { Navbar, Link, Text, Avatar, Dropdown, Grid, Spacer, Card, Button } from "@nextui-org/react";


export default function BodyTest() {
  const collapseItems = [
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
  ];
  const cardStyles = {
    background: 'linear-gradient(to right, #FFB938 -20%, #f33d4e 100%)',
}
  return (
      <Navbar isBordered variant="sticky">
        
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          
          <Grid>
                        <Avatar
                        size="lg"
                        src="/avatar.jpg"
                        color="warning"
                        bordered
                        />
                    </Grid>
                    <Spacer x={1} />
                    <Text h4 b color="inherit" hideIn="xs">
                        &#60;SanjanaNilanka /&#62;
                    </Text>
        </Navbar.Brand>

        <Navbar.Content
          enableCursorHighlight
          activeColor="warning"
          hideIn="xs"
          variant="default"
        >
          <Navbar.Link href="#">Home</Navbar.Link>
          <Navbar.Link href="#">
            Skills
          </Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Resume</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Content>
        
        <Navbar.Content>
                    <Grid.Container gap={0} css={{ d: 'flex', flexWrap: 'nowrap' }}>
                        <Grid>
                            <Navbar.Link color="inherit" href="https://github.com/IT21358234">
                                <Card css={{background:'transparent'}}>
                                    <Card.Body css={{fontSize:'$3xl'}}>
                                        
                                        <iconify-icon icon="mdi:github"></iconify-icon>
                                    
                                    </Card.Body>
                                </Card>
                            </Navbar.Link>    
                        </Grid>
                        <Grid>
                            <Navbar.Link color="inherit" href="https://www.linkedin.com/in/sanjana-nilanka-02091319a/">
                                <Card css={{background:'transparent'}}>
                                    <Card.Body css={{fontSize:'$3xl'}}>
                                        
                                        <iconify-icon icon="mdi:linkedin"></iconify-icon>
                                    
                                    </Card.Body>
                                </Card>
                            </Navbar.Link> 
                        </Grid>
                    </Grid.Container>
                    
                    <Navbar.Link>  
                        {/*!isDark && 
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
                        */}
                    </Navbar.Link>
                    <Navbar.Toggle showIn="xs" />
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
                    </Navbar.Item>
                </Navbar.Content>
        <Navbar.Collapse disableAnimation showIn='xs'>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="warning"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
  );
}
