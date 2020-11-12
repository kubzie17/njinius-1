import React, { useState } from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import CustomCodeBlock from '../components/CustomCodeBlock'
import GithubCard from '../components/GithubCard'
import HowCard from '../components/HowCard'
import { repos } from '../data/github'
import { Container, Row, Col, Button, Alert, Breadcrumb, Card } from 'react-bootstrap'
import VideoPlayer from 'react-video-js-player';
import Car from "../../static/videos/car.mp4"
import Var from "../../static/videos/van.mp4"
import bik from "../../static/videos/bike.mp4"
import ReactPlayer from "react-player"
import Pagination from "react-js-pagination"



function Video4() {
    const context = useDocusaurusContext()
    const imgUrl1 = '/static/img/undraw_docusaurus_mountain.svg';
    const imgUrl2 = '/static/img/undraw_docusaurus_react.svg';
    const imgUrl3 = '/static/img/undraw_docusaurus_tree.svg';
    const videoSrc = Car;
    const videoSrc2 = Var;
    const videoSrc3 = bik;
    const { siteConfig = {} } = context
    const [visibleCodeExample, showCodeExample] = useState('READ')
    return (
        <Layout title="Videos" description={siteConfig.tagline}>
            <main className="ArchivePage" >
                {/* HEADER */}
                <header className={classnames('hero full', styles.heroBanner)}>
                    {/* HOW */}
                    <section className={styles.forDevelopers}>
                        <div className="container" color="blue">
                            <div className={classnames('row', styles.responsiveCentered)}>
                                <div className="col col--6 col--offset-3">
                                    <h2 className="">Videos</h2>
                                    <p className="">Are you more of a visual learner, then look no further. Find the topic of your interest below and and enjoy the turorial </p>
                                </div>
                            </div>

                            <Row>
                                <Container>
                                    <div className="App">

                                        <h2>Pointers</h2>
                                        <div className={styles.videoContainer} 
                                            style={{alignItems: 'center',
                                            display: 'inline',
                                            float: 'left',
                                            border: '1px solid black',
                                            margin: '5px 10px 10px 0px',}} >
                                            <iframe width="560" height="315" src='https://www.youtube.com/embed/DTxHyVn0ODg'
                                                frameBorder='0'
                                                allow='autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture'
                                                allowFullScreen
                                                title='video'
                                            />
                                        </div>
                                        <h6>What are Pointers?</h6>
                                        <p className="description">
                                            Pointers are special variables in programming that are used to store addresses,  rather than values, of other variables.
                                            Unlike other variables that hold values of a certain type, pointer holds the address of a variable. For example, an integer variable 
                                            holds (or you can say stores) an integer value, however an integer pointer holds the address of a integer variable.
                                            Pointers are mostly used when theres a need to optimise the programme to run faster and use less memory and provides a degree of control
                                            over use of memory. 
                                        </p>
                                        
                                    </div>

                                </Container>
                            </Row>

                            <Row>
                                <Container>
                                    <div className="App">

                                        <h2>Polymorphism</h2>
                                        <div className={styles.videoContainer} 
                                            style={{alignItems: 'center',
                                            display: 'inline',
                                            float: 'left',
                                            border: '1px solid black',
                                            margin: '5px 10px 10px 0px',}} >
                                            <iframe width="560" height="315" src='https://www.youtube.com/embed/bP-Trkf8hNA'
                                                frameBorder='0'
                                                allow='autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture'
                                                allowFullScreen
                                                title='video'
                                            />
                                        </div>
                                        <h6>What is Polymorph?</h6>
                                        <p className="description">
                                            Polymorphism in programming, is the ability of of an object to on many forms. Polymorphic code allows a program to process 
                                            objects diffarently depending on their data type or class, with the ability to redefine methods for derived classes
                                        </p>
                                        
                                    </div>

                                </Container>
                            </Row>

                            <Row>
                                <Container>
                                    <div className="App">

                                        <h2>Property</h2>
                                        <div className={styles.videoContainer} 
                                            style={{alignItems: 'center',
                                            display: 'inline',
                                            float: 'left',
                                            border: '1px solid black',
                                            margin: '5px 10px 10px 0px',}} >
                                            <iframe width="560" height="315" src='https://www.youtube.com/embed/gvQziNULkdY'
                                                frameBorder='0'
                                                allow='autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture'
                                                allowFullScreen
                                                title='video'
                                            />
                                        </div>
                                        <h6>What are Properties?</h6>
                                        <p className="description">
                                            Properties, also known as getters and setters, allow us to controll how a variable is accesed and changed. The g"getter" retreives values and "setters"
                                            set them. These usual have no side effects.
                                        </p>
                                        
                                    </div>

                                </Container>
                            </Row>

                            <Row>
                                <Container>
                                    <div className="App">

                                        <h2>Reference</h2>
                                        <div className={styles.videoContainer} 
                                            style={{alignItems: 'center',
                                            display: 'inline',
                                            float: 'left',
                                            border: '1px solid black',
                                            margin: '5px 10px 10px 0px',}} >
                                            <iframe width="560" height="315" src='https://www.youtube.com/embed/IzoFn3dfsPA'
                                                frameBorder='0'
                                                allow='autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture'
                                                allowFullScreen
                                                title='video'
                                            />
                                        </div>
                                        <h6>What is a Reference?</h6>
                                        <p className="description">
                                            A reference is essentiall an address which points to where something, and object or variable, is stored. When we assign an object to a 
                                            variable, in essence we are actually 
                                            assigning a reference a reference to tha variable, to the object. These are mostly used when passing an object to a function. If objects 
                                            werent passed by reference, when a new copy is created, it will consume alot of CPU time and memowy
                                            of which wil be a watse. using references avoids this. 
                                            
                                        </p>
                                        
                                    </div>

                                </Container>
                            </Row>

                            <Row>
                                <Container>
                                    <div className="App">

                                        <h2>Switch Statement</h2>
                                        <div className={styles.videoContainer} 
                                            style={{alignItems: 'center',
                                            display: 'inline',
                                            float: 'left',
                                            border: '1px solid black',
                                            margin: '5px 10px 10px 0px',}} >
                                            <iframe width="560" height="315" src='https://www.youtube.com/embed/HUBNt18RFbo'
                                                frameBorder='0'
                                                allow='autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture'
                                                allowFullScreen
                                                title='video'
                                            />
                                        </div>
                                        <h6>What is a Switch Statement?</h6>
                                        <p className="description">
                                            Switch statements are a block of code which allow the programme to compare a value or case with multiple value or cases.
                                            when a matching case is found, then the associated block of code to said case is then executed. Each of the cases or values
                                            within the switch statement is called an identifier, which is the one compared to against the value provided to the switch statement.
                                            Switch statement are usually used in place of "if-else" statement. This is because with "if-else" statements, complexity of the code is 
                                            increased when the number of options is increased, leading to a difficult to read code. The Switch statement simplifies this.
                                        </p>
                


                                    </div>

                                </Container>
                            </Row>
                            
                        </div>
                    </section>
                </header>
            </main>
            <Link
                    className={classnames(
                      'button hero--button button--md button--secondary button--outline responsive-button',
                      styles.button
                    )}
                    to={useBaseUrl('/videos3')}
                    style={{ marginLeft: 200, marginTop: 10, float: "center" }}
                  >
                    Previous
                  </Link>
        </Layout >
    )
}

export default Video4