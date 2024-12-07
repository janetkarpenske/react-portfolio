import { useRef } from 'react';
import classes from './../components/Contact.module.css';
//Material UI Imports
import TextField from '@mui/material/TextField';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

export default function Contact() {
    let name = useRef();
    let userEmail = useRef();
    let message = useRef();
    const handleContactMe = () => {
        //do stuff
        if (!name) {
            return false;
        }
        if (!userEmail) {
            return false;

        }
        if (!message) {
            return false;
        }
        console.log(name.current.value, userEmail.current.value, message.current.value)
        alert('Your message was successfully sent!');
    }

    return (
        <div className="container-narrow">
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center", marginTop: "8%" }}>

                <br />
                <form onSubmit={handleContactMe}>
                    <h2>Contact Me</h2>
                    <p>Use form below or contact me via email: janetkarpenske@gmail.com</p>
                    <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                        <TextField
                            id="standard-basic"
                            label="Enter Your Name"
                            variant="standard"
                            color="secondary"
                            name="name"
                            required
                            inputRef={name} />
                    </FormControl>
                    <br />
                    <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                        <TextField
                            id="standard-basic"
                            label="Enter Your Email"
                            variant="standard"
                            color="secondary"
                            name="userEmail"
                            required
                            inputRef={userEmail} />
                    </FormControl>
                    <br />
                    <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                        <TextareaAutosize
                            minRows={5}
                            id="standard-basic"
                            label="Enter Your Message"
                            variant="standard"
                            color="secondary"
                            name="message"
                            required
                            ref={message} />
                    </FormControl>
                    <br />
                    <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                        <Button onClick={handleContactMe} color="secondary" variant='outlined'>Send Message</Button>
                    </FormControl>
                </form>
            </Box>
        </div>
    )
}