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
                <div className={classes.myform}>
                    <h1 style={{ color: "var(--color-accent-100)" }}>Contact Me</h1>
                    <p>For professional inquiries please send me an email or connect via LinkedIn.</p>
                    <br />
                    <p><b style={{ color: "var(--color-accent-100)" }}>Email</b><br /> janetkarpenske@gmail.com</p>
                    <br />
                    <p><b style={{ color: "var(--color-accent-100)" }}>LinkedIn</b><br /> <a href="https://www.linkedin.com/in/janet-karpenske/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "white" }}>
                        LinkedIn
                    </a></p>
                    <br />
                    <p></p>
                </div>
            </Box>
        </div>
    )
}