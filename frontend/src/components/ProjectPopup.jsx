import { Modal, useModal, Button, Text, Link, Grid, Image, Spacer } from "@nextui-org/react";
import {useState, useEffect} from "react";

export default function ProjectPopup({title, description, githubLink, linkedinLink, logoPath, isDark}) {
  const { setVisible, bindings } = useModal();
  const setTitle = title
  const setDescription = description
  const setGithubLink = githubLink
  const setLinkedinLink = linkedinLink
  const setLogoPath = logoPath

  const [containerStyle, setContainerStyle] = useState('')

  useEffect(() => {
    if(isDark === true){
      setContainerStyle('scrollable-container scrollable-container-light-popup')
    }
    if (isDark === false){
      setContainerStyle('scrollable-container scrollable-container-dark-popup')
    }
  },[isDark])

  return (
    <div>
      
      <Link css={{fontWeight:'$bold'}} onPress={() => setVisible(true)}>SEE MORE &nbsp;<i class="fa-solid fa-arrow-right-long" ></i></Link>
    
      <Modal
        closeButton
        scroll
        width="75%"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
        css={{height:'70vh'}}
        blur
      >
        <Modal.Header css={{paddingBottom:'$10'}}>
          <Grid.Container justify="center" gap={0}>
            <Grid md={3}>
              <Text 
                id="modal-title" 
                h3
                css={{
                textGradient: "45deg, $yellow600 -20%, $red600 100%",
                textAlign:'center'
                }}
                weight="bold"
              >
                {setTitle}
              </Text>
            </Grid>
            <Grid md={3} xs={0}>
              {(setDescription === '4' || setDescription ==='5' || setDescription === '3') &&
                <Image width={100} src={setLogoPath}/>              
              }
              {(setDescription === '1' || setDescription === '2' || setDescription ==='6') &&
                <Image width={200} src={setLogoPath}/>              
              }
              
            </Grid>
          </Grid.Container>
          
          
        </Modal.Header>
        <Modal.Body>
          {/*<Image src="/under-construction.gif"/>*/}
          <Grid.Container justify="space-between" gap={2} className={containerStyle}>
            {/*<Grid md={4} xs={12} css={{overflow:'hidden'}}> 
              <Card css={{height:'30vh'}}>
                <Card.Body css={{height:'50px'}}>
                  <Image src={setLogoPath}/>
                </Card.Body>
              </Card>
              
              <Card css={{height:'30vh'}}>
                <Card.Body css={{height:'50px'}}>
                  <Image src={setLogoPath}/>
                </Card.Body>
              </Card>
            
              
              
            </Grid>*/}
          <Grid  md={12} xs={12} css={{paddingTop:'$0'}}>
              
              {setDescription === '1' && 
                <Text size={18} css={{textAlign:'justify', paddingTop:'$0'}}>
                  This website management system was developed to learn react function components and improve my skill related to MERN web developing. I design and develop entire system using MERN stack.
                  <Spacer/>
                  Functions that I implemeted in 'MovieMaven' Website Management System
                  <br/>
                  🔗 Adding Movies<br/>
                  🔗 Managing Movies (Updating, Deleting, etc.)<br/>
                  🔗 User (Admins, Moderators, etc.) Management<br/>
                  🔗 Updating & Deleting Other Purchase Details<br/>
                  🔗 Displaying Movie Details<br/>
                  🔗 Displaying User Details<br/>
                  🔗 Handling Users<br/>
                  <Spacer/>

                  Used Technologies & Tools:
                  <br/>

                  <iconify-icon icon="ph:stack"></iconify-icon>&nbsp;&nbsp;&nbsp;MERN Stack<br/>
                  <iconify-icon icon="bxl:mongodb"></iconify-icon>&nbsp;&nbsp;&nbsp;MongoDB<br/>
                  <iconify-icon icon="simple-icons:express"></iconify-icon>&nbsp;&nbsp;&nbsp;ExpressJs<br/>
                  <iconify-icon icon="simple-icons:react"></iconify-icon>&nbsp;&nbsp;&nbsp;React js<br/>
                  <iconify-icon icon="akar-icons:node-fill"></iconify-icon>&nbsp;&nbsp;&nbsp;Node js<br/>
                  <iconify-icon icon="bi:git"></iconify-icon>&nbsp;&nbsp;&nbsp;Git<br/>
                  <iconify-icon icon="bi:github"></iconify-icon>&nbsp;&nbsp;&nbsp;GitHub<br/>
                  <iconify-icon icon="akar-icons:vscode-fill"></iconify-icon>&nbsp;&nbsp;&nbsp;VS Code<br/>
                  <iconify-icon icon="simple-icons:postman"></iconify-icon>&nbsp;&nbsp;&nbsp;Postman<br/>
                  <iconify-icon icon="akar-icons:figma-fill"></iconify-icon>&nbsp;&nbsp;&nbsp;Figma
                  <Spacer/>

                  This project was developed by me only for academic purposes. ©2023
                </Text>
              }
              {setDescription === '2' && 
                <Text size={18} css={{textAlign:'justify', paddingTop:'$0'}}>
                  This web application was developed for the 2nd year 2nd semester project of ITP(Information Technology Project) module at SLIIT. 8 Members contributed to develop this web application. I contribute to develop the Purchasing Management Subsystem of this Encore Management System.
                  <Spacer/>
                  Functions that I implemeted in Purchasing Management Subsytem:-
                  <br/>
                  🔗 Placing Stock Orders<br/>
                  🔗 Managing Stock Orders (Canceling, Changing, Updating, Deleting, etc.)<br/>
                  🔗 Adding Other Purchase Details<br/>
                  🔗 Updating & Deleting Other Purchase Details<br/>
                  🔗 Displaying Both Purchase Details<br/>
                  🔗 Calculate Some Data <br/>
                  🔗 Report Generating <br/>
                  🔗 Generated Reports Convert to PDF for Downloading <br/>
                  🔗 Graph Generating<br/>
                  🔗 Send Email
                  <Spacer/>

                  <Spacer/>

                  Used Technologies & Tools:
                  <br/>

                  <iconify-icon icon="ph:stack"></iconify-icon>&nbsp;&nbsp;&nbsp;MERN Stack<br/>
                  <iconify-icon icon="bxl:mongodb"></iconify-icon>&nbsp;&nbsp;&nbsp;MongoDB<br/>
                  <iconify-icon icon="simple-icons:express"></iconify-icon>&nbsp;&nbsp;&nbsp;ExpressJs<br/>
                  <iconify-icon icon="simple-icons:react"></iconify-icon>&nbsp;&nbsp;&nbsp;React js<br/>
                  <iconify-icon icon="akar-icons:node-fill"></iconify-icon>&nbsp;&nbsp;&nbsp;Node js<br/>
                  <iconify-icon icon="bi:git"></iconify-icon>&nbsp;&nbsp;&nbsp;Git<br/>
                  <iconify-icon icon="bi:github"></iconify-icon>&nbsp;&nbsp;&nbsp;GitHub<br/>
                  <iconify-icon icon="akar-icons:vscode-fill"></iconify-icon>&nbsp;&nbsp;&nbsp;VS Code<br/>
                  <iconify-icon icon="simple-icons:postman"></iconify-icon>&nbsp;&nbsp;&nbsp;Postman<br/>
                  <iconify-icon icon="akar-icons:figma-fill"></iconify-icon>&nbsp;&nbsp;&nbsp;Figma
                  <Spacer/>

                  This project was developed by our project team only for academic purposes. ©2023
                </Text>
              }
              {setDescription === '3' && 
                <Text size={18} css={{textAlign:'justify', paddingTop:'$0'}}>
                  This android application was developed for the 2nd year 2nd semester project of MAD(Mobile Application Development) module at SLIIT. 4 Members contributed to develop this application. I contribute to develop the Hotel and Restaurant sub componant of the app.
                  <Spacer/>
                  Functions that I implemeted in Purchasing Management Subsytem:-
                  <br/>
                  🔗 Register Hotel / Restaurant Owners<br/>
                  🔗 Register Hotels / Restaurants<br/>
                  🔗 Login<br/>
                  🔗 Adding rooms, meals, packages for hotels<br/>
                  🔗 Adding Meals, Combo Packages, for Restaurant<br/>
                  🔗 Managing Added Data(Updating, Deleting, etc.)<br/>
                  🔗 Hotel and Restaurant Displaying in Tourist Side<br/>
                  🔗 Book Hotel in Tourist Side<br/>
                  🔗 Deactivating Hotel / Restaurant Account<br/>
                  <Spacer/>

                  Hotel or Restaurant owners can create their profile with inserting their details After creating, they can add various additional data relevant to their business. adding rooms details, adding meal details, adding package details are some of them. They also can update or delete those data anytime. Hotel and Restaurant profiles are desplaying in tourist side and owners should add business data properly get the tourist atraction. When tourist booka hotel owner will be notified and owner need to accept or decline it. Also app calculate some data (income, profile views, ratings, etc.) and desplaying to get some idea about their own bussiness. And also Hotel or Restaurant owner can update their personal details any time and can deactivate account anytime.
                  <Spacer/>

                  Used Technologies & Tools:
                  <br/>

                  <iconify-icon icon="simple-icons:android"></iconify-icon>&nbsp;&nbsp;&nbsp;Kotlin<br/>
                  <iconify-icon icon="bi:filetype-xml"></iconify-icon>&nbsp;&nbsp;&nbsp;XML<br/>
                  <iconify-icon icon="simple-icons:firebase"></iconify-icon>&nbsp;&nbsp;&nbsp;Firebase<br/>
                  <iconify-icon icon="simple-icons:androidstudio"></iconify-icon>&nbsp;&nbsp;&nbsp;Android Studio<br/>
                  <iconify-icon icon="bi:git"></iconify-icon>&nbsp;&nbsp;&nbsp;Git<br/>
                  <iconify-icon icon="bi:github"></iconify-icon>&nbsp;&nbsp;&nbsp;GitHub<br/>
                  <iconify-icon icon="akar-icons:figma-fill"></iconify-icon>&nbsp;&nbsp;&nbsp;Figma
                  <Spacer/>

                  This project was developed by our project team only for academic purposes. ©2023
                </Text>
              }
              {setDescription === '4' && 
                <Text size={18} css={{textAlign:'justify', paddingTop:'$0'}}>
                  This web based system was developed for the 2nd year 1st semester project of OOP(Object Oriented Programming) module at SLIIT. 3 Members contributed to develop this web system. I contribute to develop the Purchasing Management Subsystem of this inventory Management System of ZOHO Online Store.
                  <Spacer/>
                  Functions that I implemeted in Purchasing Management Subsytem:-
                  <br/>
                  🔗 Login of Inventory Mnagement System<br/>
                  🔗 Placing Stock Orders<br/>
                  🔗 Managing Stock Orders (Canceling, Changing, Updating, Deleting, etc.)<br/>
                  🔗 Displaying Stock Order Details<br/>
                  🔗 Calculate Some Data <br/>
                  <Spacer/>

                  Used Technologies & Tools:
                  <br/>

                  <i class="fa-brands fa-html5"></i>&nbsp;&nbsp;&nbsp;HTML5<br/>
                  <i class="fa-brands fa-css3-alt"></i>&nbsp;&nbsp;&nbsp;CSS<br/>
                  <iconify-icon icon="fa6-brands:square-js"></iconify-icon>&nbsp;&nbsp;&nbsp;JavaScript<br/>
                  <iconify-icon icon="cib:java"></iconify-icon>&nbsp;&nbsp;&nbsp;Java<br/>
                  <iconify-icon icon="devicon-plain:mysql"></iconify-icon>&nbsp;&nbsp;&nbsp;mySQL<br/>
                  <iconify-icon icon="bi:git"></iconify-icon>&nbsp;&nbsp;&nbsp;Git<br/>
                  <iconify-icon icon="bi:github"></iconify-icon>&nbsp;&nbsp;&nbsp;GitHub<br/>
                  <iconify-icon icon="devicon-plain:eclipse"></iconify-icon>&nbsp;&nbsp;&nbsp;Eclips<br/>
                  <iconify-icon icon="akar-icons:figma-fill"></iconify-icon>&nbsp;&nbsp;&nbsp;Figma
                  <Spacer/>

                  This project was developed by our project team only for academic purposes. ©2022
                </Text>
              }
              {setDescription === '5' && 
                <Text size={18} css={{textAlign:'justify', paddingTop:'$0'}}>
                  This website was implemented for the 1st year 2nd semester project of IWT(Introduction to Web Technologies) module at SLIIT. 5 Members contributed to develop this website. I contribute to implement user profile, book and vehicle category pages and admin settings.
                  <Spacer/>
                    This is a ecommerce website. users can register in website and buy goods. user can search goods by name and user also can see the goods in variuos category. And they can add them to cart or directly buy goods that they want   
                  <Spacer/>

                  Used Technologies & Tools:
                  <br/>

                  <i class="fa-brands fa-html5"></i>&nbsp;&nbsp;&nbsp;HTML5<br/>
                  <i class="fa-brands fa-css3-alt"></i>&nbsp;&nbsp;&nbsp;CSS<br/>
                  <iconify-icon icon="fa6-brands:square-js"></iconify-icon>&nbsp;&nbsp;&nbsp;JavaScript<br/>
                  <iconify-icon icon="akar-icons:php-fill"></iconify-icon>&nbsp;&nbsp;&nbsp;PHP<br/>
                  <iconify-icon icon="bi:filetype-sql"></iconify-icon>&nbsp;&nbsp;&nbsp;SQL<br/>
                  <iconify-icon icon="bi:git"></iconify-icon>&nbsp;&nbsp;&nbsp;Git<br/>
                  <iconify-icon icon="bi:github"></iconify-icon>&nbsp;&nbsp;&nbsp;GitHub<br/>
                  <iconify-icon icon="akar-icons:vscode-fill"></iconify-icon>&nbsp;&nbsp;&nbsp;VS Code<br/>
                  <iconify-icon icon="logos:mockflow-icon"></iconify-icon>&nbsp;&nbsp;&nbsp;MockFlow
                  <Spacer/>

                  This project was developed by our project team only for academic purposes. ©2023
                </Text>
              }
              {setDescription === '6' && 
                <Text size={18} css={{textAlign:'justify', paddingTop:'$0'}}>
                  This website is implementing to improve my skills. This is not completed yet. Main task of this web site is downloading movies. I'm using MERN stack and NextUI to create this website
                  <Spacer/>
                  User can register with the website. but they not required to register or login for downloading movie they can directly browse movies and download them. When user register and login to site, they can add movies to watch list and favourite list also they can rate movies and add reviews. Additionaly, they can add comments to movies and request movies to add for downloading. In this site not only for downloading movie. users can also see the short description about movies and mant other details in under each movie title.
                  <Spacer/>

                  Used Technologies & Tools:
                  <br/>

                  <iconify-icon icon="ph:stack"></iconify-icon>&nbsp;&nbsp;&nbsp;MERN Stack<br/>
                  <iconify-icon icon="bxl:mongodb"></iconify-icon>&nbsp;&nbsp;&nbsp;MongoDB<br/>
                  <iconify-icon icon="simple-icons:express"></iconify-icon>&nbsp;&nbsp;&nbsp;ExpressJs<br/>
                  <iconify-icon icon="simple-icons:react"></iconify-icon>&nbsp;&nbsp;&nbsp;React js<br/>
                  <iconify-icon icon="akar-icons:node-fill"></iconify-icon>&nbsp;&nbsp;&nbsp;Node js<br/>
                  <iconify-icon icon="bi:git"></iconify-icon>&nbsp;&nbsp;&nbsp;Git<br/>
                  <iconify-icon icon="bi:github"></iconify-icon>&nbsp;&nbsp;&nbsp;GitHub<br/>
                  <iconify-icon icon="akar-icons:vscode-fill"></iconify-icon>&nbsp;&nbsp;&nbsp;VS Code<br/>
                  <iconify-icon icon="simple-icons:postman"></iconify-icon>&nbsp;&nbsp;&nbsp;Postman<br/>
                  <iconify-icon icon="akar-icons:figma-fill"></iconify-icon>&nbsp;&nbsp;&nbsp;Figma
                  <Spacer/>

                  This project was developed by me only for academic purposes. ©2023
                </Text>
              }
              
            </Grid>
          </Grid.Container>
          
        </Modal.Body>
        <Modal.Footer>
            <Grid.Container gap={1} justify="center">
                <Grid>
                    <Button href={setLinkedinLink} shadow color='warning' auto iconRight={<iconify-icon icon="mdi:linkedin"></iconify-icon>}>
                        More Details
                    </Button>
                </Grid>
                <Grid>
                  <Link href={setGithubLink}>
                    <Button href={setGithubLink} shadow color='warning' auto iconRight={<iconify-icon icon="mdi:github"></iconify-icon>}>
                        Source Code
                    </Button>
                  </Link>
                </Grid>
            </Grid.Container>
            
            
        </Modal.Footer>
  
      </Modal>
    </div>
  );
}
