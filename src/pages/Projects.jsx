import pictaverseVid from './../img/pictaverse.png';
import dungeonMov from './../img/dungeonDarkly.png';
import pigLatinMov from './../img/pigLatin.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import galaxyPic from './../img/solar-years.png';
import placepickerPic from './../img/placepicker.png';
import classes from './../components/Projects.module.css';
import { Chip } from '@mui/material';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        accent: {
            main: '#6bad65',
            light: '#E9DB5D',
            dark: '#A29415',
            contrastText: '#FFFFFF',
        },
    },
});

export default function Projects() {
    return (
        <div>
            <div className="container-narrow">
                <h1 style={{ textAlign: "center" }}><span style={{ color: "var(--color-accent-100)" }}>Featured</span> Projects</h1>
                <br />
                <p style={{ textAlign: "center" }}>Below are just a few of the personal projects I've worked on with
                    a bit of information on each as well as the languages, libraries, and/or frameworks used. </p>
                <div className="center-align">
                    <div className="projPage">
                        <br />

                        <h2 style={{ textAlign: "center", marginTop: "50px" }}>
                            React Projects
                        </h2>
                        <div className={classes.myContainer}>
                            <h3>Pictaverse</h3>
                            <Row>
                                <Col sm={5} md={5}>
                                    <img src={pictaverseVid} width="100%" alt='Pictaverse'/>
                                </Col>
                                <Col sm={5} md={5}>
                                    <h4 className={classes.projAbout}>
                                        <br />
                                        <em>This project is being re-worked currently. UI pictured to the left is old version and will be updated soon.</em>
                                        <br />
                                        <br />
                                        Pictaverse is a social-media app that acts as a user-driven travel-guide.
                                        Users are able to create "mini blog-style posts" and upload photos based around their travels,
                                        and from there give advice, recommendations, or general tips for others who may be interested
                                        in traveling there. Project features full CRUD functionality and user authentication & authorization via Firebase.<br /><br />
                                        <ThemeProvider theme={theme}>
                                            <Stack direction="row" spacing={1} style={{ display: "inline-block", whiteSpace: "pre-line" }}>
                                                <Chip label="React.js" variant="filled" color="accent" />
                                                <Chip label="Redux" variant="filled" color='accent' />
                                                <Chip label="Redux-Toolkit" variant="filled" color='accent' />
                                                <Chip label="Node.js" variant="filled" color='accent' />
                                                <Chip label="Firebase" variant="filled" color='accent' />
                                                <Chip label="Material UI" variant="filled" color='accent' />
                                                <Chip label="Mapbox" variant="filled" color='accent' />
                                                <Chip label="OpenWeatherMap" variant="filled" color='accent' />
                                            </Stack>
                                        </ThemeProvider>
                                    </h4>
                                </Col>
                                <Col sm={2} md={2}>
                                    <br />
                                    <h4>
                                        <a href="https://github.com/janetkarpenske/react-pictaverse-3">Original GH Repository</a>
                                    </h4>
                                    <br />
                                    <h4><a href='https://github.com/janetkarpenske/pictaverse-react'>New GH Repository (in-Progress)</a></h4>
                                </Col>
                            </Row>
                            <br />
                            <h3>Placepicker</h3>
                            <Row>
                                <Col sm={5}>
                                    <h4>
                                        <img src={placepickerPic} width="100%" alt='Placepicker'/>
                                    </h4>
                                </Col>
                                <Col sm={5}>
                                    <h4 className={classes.projAbout}>
                                        <br />
                                        Placepicker is a React.js application that uses a Node.js/express backend
                                        where a user can select places they wish to visit. Places are sorted by
                                        proximity to user via geolocation.
                                        <br />
                                        <br />
                                        <ThemeProvider theme={theme}>
                                            <Stack direction="row" spacing={1} style={{ display: "inline-block", whiteSpace: "pre-line" }}>
                                                <Chip label="React.js" variant="filled" color='accent' />
                                                <Chip label="Node.js" variant="filled" color='accent' />
                                                <Chip label="Express.js" variant="filled" color='accent' />
                                            </Stack>
                                        </ThemeProvider>
                                    </h4>
                                </Col>
                                <Col sm={2}>
                                    <br />
                                    <h4>

                                    </h4>
                                    <br />
                                </Col>
                            </Row>
                        </div>
                        <h2 style={{ textAlign: "center", marginTop: "50px" }}>
                            JavaScript Projects
                        </h2>
                        <br />
                        <div className={classes.myContainer}>
                            <h3>Dungeon, Darkly</h3>
                            <Row>
                                <Col sm={5}>
                                    <h4>
                                        <img src={dungeonMov} width="100%" alt='Dungeon, Darkly'/>
                                    </h4>
                                </Col>
                                <Col sm={5}>
                                    <h4 className={classes.projAbout}>
                                        Dungeon, Darkly is a *retro* text-based adventure game inspired by the classic old-school dungeon crawlers.
                                        Players can pick a character class, battle monsters, loot corpses, and inspect their surroundings as they
                                        navigate the sPoOky halls of Ravenhurst Manor.
                                        <br /><br />
                                        <ThemeProvider theme={theme}>
                                            <Stack direction="row" spacing={1} style={{ display: "inline-block", whiteSpace: "pre-line" }}>
                                                <Chip label="JavaScript" variant="filled" color='accent' />
                                                <Chip label="Node.js" variant="filled" color='accent' />
                                                <Chip label="JQuery" variant="filled" color='accent' />
                                            </Stack>
                                        </ThemeProvider>
                                    </h4>
                                </Col>
                                <Col sm={2}>
                                    <br />
                                    <h4>
                                        <a href="https://github.com/StollerSystem/Dungeon_Darkly">Github Repository</a>
                                    </h4>
                                    <br />
                                </Col>
                            </Row>

                            <br />
                            <h3>Pig Latin Translator</h3>
                            <Row>
                                <Col sm={5}>
                                    <h4>
                                        <img src={pigLatinMov} width="100%" alt='Pig Lating'/>
                                    </h4>
                                </Col>
                                <Col sm={5}>
                                    <h4 className={classes.projAbout}>
                                        Pig Latin is exactly what it sounds like! Enter a sentence into the form field and have it translated into Pig Latin.
                                    </h4>
                                </Col>
                                <Col sm={2}>
                                    <br />
                                    <h4>
                                        <a href="https://github.com/janetkarpenske/pig-latin">Github Repository</a>
                                    </h4>
                                    <br />
                                </Col>
                            </Row>
                            <br />
                            <h3>Supergalactic Age Calculator</h3>
                            <Row>
                                <Col sm={5}>
                                    <h4>
                                        <img src={galaxyPic} width="100%" alt='Intergalactic Age Calculator'/>
                                    </h4>
                                </Col>
                                <Col sm={5}>
                                    <h4 className={classes.projAbout}>
                                        This Intergalactic Age Calculator uses an api to convert a person's age in Earth years into their respective Mars, Venus, Jupiter, Saturn ages.
                                    </h4>
                                </Col>
                                <Col sm={2}>
                                    <br />
                                    <h4>
                                        <a href="https://github.com/janetkarpenske/solar-years">Github Repository</a>
                                    </h4>
                                    <br />
                                </Col>
                            </Row>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    )
}