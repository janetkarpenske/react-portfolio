import classes from './../components/About.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AboutPage() {

    return (
        <div className="container-narrow">
            <h1 style={{ textAlign: "center" }}>About <span style={{ color: "var(--color-accent-100)" }}>Me</span></h1>
            <br />
            <p className={classes.description}>I am a full-stack and front-end web developer based in the Vancouver, WA/Portland, OR area.
                In total I have ~4 years of professional experience, culminating from both an internship and long-term position.
                <br />
                <br />
                My coding journey began when I enrolled in Epicodus, an intensive code school based out of Portland,
                where I earned my Certificate of Web and App Development. As part of that program I gained over 1000 hours of
                hands-on coding experience with JavaScript, C#, and React, as well as an internship with a Seattle-based startup.
                In addition to my software education I also possess an Associates degree in Business Administration and Finance from Clark College, which was followed by 
                a year of undergraduate coursework at
                Washington State University. There I gained a deep understanding of business architecture, and while I enjoyed and valued my time studying Business at WSU I missed working with code,
                which I had done as a side-hobby prior, and decided I wanted to pursue software as a full-time career instead.
                <br/><br/>I have numerous
                GitHub repositories showcasing my projects and have experience. While I typically work with JavaScript, HTML, and CSS,
                I also have experience with C#, SQL, and TypeScript.
                In addition I have extensive experience with various lubraries and frameworks such as React.js and Vue.js, as well
                as styling libraries such as Bootstrap, Material UI, Vuetify, and more.
                I have also worked with both SQL-based relational databases, via SSMS and PostGresSQL, and non-relational databases like Firestore.</p>
            <br />
            <hr />
            <h1 style={{ textAlign: "center", marginTop: "50px", color: "var(--color-accent-100)" }}>Skills</h1>
            <br /><br />
            <Container>
                <Row>

                    <Col className={classes.border}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <h2 style={{ textAlign: "center", color: "var(--color-accent-100)" }}>Languages</h2>
                        <br />
                        <ul className={classes.skillsList}>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>SQL</li>
                            <li>C#</li>
                        </ul>
                    </Col>
                    <Col className={classes.border}>
                        <h2 style={{ textAlign: "center", color: "var(--color-accent-100)" }}>Technologies & Skills</h2>
                        <br />
                        <ul className={classes.list}>
                            <li>React.js</li>
                            <li>Redux</li>
                            <li>React Router</li>
                            <li>Material UI</li>
                            <li>Bootstrap</li>
                            <li>Vue.js</li>
                            <li>Pinia</li>
                            <li>Vue Router</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>Scrum & Agile Methodologies</li>
                            <li>Firebase</li>
                            <li>SSMS</li>
                            <li>Postgres</li>
                        </ul>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}