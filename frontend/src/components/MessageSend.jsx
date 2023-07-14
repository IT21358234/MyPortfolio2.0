import React, {useState} from 'react'
import {Grid, Container, Card, Input, Textarea, Button} from '@nextui-org/react'
import axios from 'axios'
import ToastMsg from './ToastMsg'

export default function MessageSend() {
    
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[subject, setSubject] = useState('')
    const[msg, setMsg] = useState('')

    const[status, setStatus] = useState('')
    const[isToast, setIsToast] = useState(false)

    const sendMsg = async(e) => {

        try{
            const response = await axios.post('https://formspree.io/f/xbjvjeag',{
                name,
                email,
                subject,
                msg,
            })
            if(response.status === 200){
                setStatus('success')
                setIsToast(true)
                setTimeout(
                    setIsToast(false), 4000
                )
            }
        }catch(error){
            setStatus('failed')
        }
    } 

    return (
        <Grid xs={12} sm={8}>
            <Container>
                <Card css={{marginTop:'$8', marginBottom:'$8',padding:'$12'}}>
                    <Card.Body css={{paddingTop:'$10'}}>
                        <Input clearable bordered labelPlaceholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}} color='warning' css={{border:'2px solid $yellow600', }}/>
                    </Card.Body>
                    <Card.Body css={{paddingTop:'$10'}}>
                        <Input clearable bordered labelPlaceholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} type='email' color='warning' css={{border:'2px solid $yellow600', }}/>
                    </Card.Body>
                    <Card.Body css={{paddingTop:'$10'}}>
                        <Input clearable bordered labelPlaceholder="Subject" value={subject} onChange={(e)=>{setSubject(e.target.value)}} color='warning' css={{border:'2px solid $yellow600'}}/>
                    </Card.Body>
                    <Card.Body css={{paddingTop:'$10'}}>
                        <Textarea
                            bordered
                            value={msg} onChange={(e)=>{setMsg(e.target.value)}}
                            color='warning'
                            css={{border:'2px solid $yellow600'}}
                            labelPlaceholder="Bordered Textarea"
                            minRows={10}
                        />
                    </Card.Body>
                    <Grid.Container justify='space-around'>
                        <Grid>
                            <Button 
                                auto 
                                css={{ 
                                    borderRadius: '$xs', 
                                    border: '2px solid $yellow600',
                                    background: 'linear-gradient(to right, #FFB938, #f33d4e)',
                                    color: '$white',
                                    height: '$15', 
                                    boxShadow: '$md', 
                                    margin:'$8',
                                    fontSize:'$1xl',
                                    '&:hover': {
                                    background: 'linear-gradient(to left, #FFB938, #f33d4e)',
                                    borderColor:'$red600'
                                    
                                    },
                                }}
                                onClick={sendMsg}
                                >
                                Send Message
                            </Button>
                            {isToast && <ToastMsg msg={status} />}
                            
                        </Grid>
                    </Grid.Container>
                </Card>
            </Container>
            
        </Grid>
    )
}
