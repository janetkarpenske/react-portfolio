import classes from './../components/Home.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function HomePage() {
    //12:31
    return (
        <div>
            <section className={classes.home}>
                <div className={classes.homeContent}>
                    <h1>Hi, I'm Janet Karpenske.</h1>
                    <h3>Software Developer</h3>
                    <p>
                        Hello and welcome!
                        <br /><br />Based in the Vancouver WA/Portland OR area, I am a software engineer
                        with ~4 years of hands-on experience in Fullstack & Frontend development.
                        Over the course of this time, I've honed a keen eye for details and a passion for creating beautiful and natural UI/UX designs.
                        While I typically work with JavaScript frameworks and libraries such as React.js and Vue.js, (and much more),
                        I also work in C# .Net and have experience in SQL and database management as well.
                    </p>
                    <p>For professional inquiries please send me an email or connect via LinkedIn.</p>
                    <br />
                    <h4><b style={{ color: "var(--color-accent-100)" }}>Email</b> janetkarpenske@gmail.com</h4>
                    <div className={classes.homeSci}>
                        <a href="https://www.linkedin.com/in/janet-karpenske/" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon fontSize='large' />
                        </a>
                        <a href="https://github.com/janetkarpenske" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon fontSize='large' />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}