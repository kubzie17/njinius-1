import React from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import { Container, Row} from 'react-bootstrap'
import vidStyles from './video.css'


function Video2() {
    const context = useDocusaurusContext()
    const { siteConfig = {} } = context
    return (
        <Layout title="Videos" description={siteConfig.tagline}>
            <main className="ArchivePage" >
                {/* HEADER */}
                <header className={classnames('hero full', styles.heroBanner)}>
                    {/* HOW */}
                    <section className={styles.forTopics}>
                        <div className="container" color="blue">
                            <div className={classnames('row', styles.responsiveCentered)}>
                                <div className="col col--6 col--offset-3">
                                    <h2 className="">Bussiness Sessions</h2>
                                    <p className="">Are you more of a visual learner, then look no further. Find the topic of your interest below and and enjoy the turorial </p>
                                </div>
                            </div>

                            <Row>
                                <Container>
                                    <div className="App">

                                        <h2>Data Types</h2>
                                        <div className={vidStyles.videoContainer} 
                                            style={{alignItems: 'center',
                                            display: 'inline',
                                            float: 'left',
                                            border: '1px solid black',
                                            margin: '5px 10px 10px 0px',}} >
                                            <iframe width="560" height="315" src='https://www.youtube.com/embed/eyB2Ikcc5oI'
                                                frameBorder='0'
                                                allow='autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture'
                                                allowFullScreen
                                                title='video'
                                            />
                                        </div>
                                        <h6>What are Data Types?</h6>
                                        <p className="description">
                                            Data type is essentially the format of which a specific variable, or piece of data is stored containing a specific type or range of values.
                                            When computer programs store data in variables, each variable must be assigned a specific data type. Some common data types include integers,
                                            floating point numbers, characters, strings, and arrays.
                                        </p>
                                    </div>
                                </Container>
                            </Row>

                            <Row>
                                <Container>
                                    <div className="App">

                                        <h2>Deconstructors</h2>
                                        <div className={vidStyles.videoContainer} 
                                            style={{alignItems: 'center',
                                            display: 'inline',
                                            float: 'left',
                                            border: '1px solid black',
                                            margin: '5px 10px 10px 0px',}} >
                                            <iframe width="560" height="315" src='https://www.youtube.com/embed/D8cWquReFqw'
                                                frameBorder='0'
                                                allow='autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture'
                                                allowFullScreen
                                                title='video'
                                            />
                                        </div>
                                        <h6>What are Deconstructors?</h6>
                                        <p className="description">
                                        Deconstructors, or more commonly known, destructors, are member functions which destruct or delete on object once its out of scope.
                                        Destructors are automatically called take no arguments, nor do they have a return type
                                        </p>
                                    </div>
                                </Container>
                            </Row>

                            <Row>
                                <Container>
                                    <div className="App">

                                        <h2>Exception Handling</h2>
                                        <div className={vidStyles.videoContainer} 
                                            style={{alignItems: 'center',
                                            display: 'inline',
                                            float: 'left',
                                            border: '1px solid black',
                                            margin: '5px 10px 10px 0px',}} >
                                            <iframe width="560" height="315" src='https://www.youtube.com/embed/EyXXLpFriMc'
                                                frameBorder='0'
                                                allow='autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture'
                                                allowFullScreen
                                                title='video'
                                            />
                                        </div>
                                        <h6>What is exception Handling?</h6>
                                        <p className="description">
                                        Exception handling is responding to exceptions when a computer program runs. An exception occurs when an unexpected event 
                                        happens that requires special processing. Examples include a user providing abnormal input, a file system error being 
                                        encountered when trying to read or write a file, or a program attempting to divide by zero. Exception handling attempts 
                                        to gracefully handle these situations so that a program (or worse, an entire system) does not crash
                                        </p>
                                    </div>
                                </Container>
                            </Row>

                            <Row>
                                <Container>
                                    <div className="App">

                                        <h2>Functions and Parameters</h2>
                                        <div className={vidStyles.videoContainer} 
                                            style={{alignItems: 'center',
                                            display: 'inline',
                                            float: 'left',
                                            border: '1px solid black',
                                            margin: '5px 10px 10px 0px',}} >
                                            <iframe width="560" height="315" src='https://www.youtube.com/embed/fQ_CBGVfGbM'
                                                frameBorder='0'
                                                allow='autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture'
                                                allowFullScreen
                                                title='video'
                                            />
                                        </div>
                                        <h6>What are functions and Parameters?</h6>
                                        <p className="description">
                                            A function is a piece of code which only runs when it is called. Functions usually take in parameters which are passed down from the 
                                            block of code of which it was called from. Parameters are also known as arguments. Parameters are just values you supply to the 
                                            function so that the function can do something utilising those values
                                        </p>
                                    </div>
                                </Container>
                            </Row>

                            <Row>
                                <Container>
                                    <div className="App">

                                        <h2>Inheritance</h2>
                                        <div className={vidStyles.videoContainer} 
                                            style={{alignItems: 'center',
                                            display: 'inline',
                                            float: 'left',
                                            border: '1px solid black',
                                            margin: '5px 10px 10px 0px',}} >
                                            <iframe width="560" height="315" src='https://www.youtube.com/embed/X8nYM8wdNRE'
                                                frameBorder='0'
                                                allow='autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture'
                                                allowFullScreen
                                                title='video'
                                            />
                                        </div>
                                        <h6>What is inheritance?</h6>
                                        <p className="description">
                                        Inheritance is a mechanism where you can to derive a class from another class for a hierarchy of classes that share a set of 
                                        attributes and methods.You can use it to declare different kinds of exceptions, add custom logic to existing frameworks, and even 
                                        map your domain model to a database. It allows software engineers to create class hierarchies, where classes and objects inherit 
                                        properties and behaviors from their 
                                        parent (or super) class. A class that inherits from a parent (or super) class is called a subclass or child class, and objects 
                                        that receive properties and behaviors from a parent through inheritance are referred to as child objects.
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
                    to={useBaseUrl('/videos')}
                    style={{ marginLeft: 200, marginTop: 10 }}
                  >
                    Previous
            </Link>
            <Link style={{position: "left", justifycontent: "right"}}
                    className={classnames(
                      'button hero--button button--md button--secondary button--outline responsive-button',
                      styles.button, 
                    )}
                    to={useBaseUrl('/videos3')}
                    style={{ marginRight: 200, marginTop: 10, float: "right" }}
                  >
                    Next
            </Link>
         
        </Layout >
    )
}

export default Video2