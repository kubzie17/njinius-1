import React from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import vidStyles from './video.css'
import { Container, Row} from 'react-bootstrap'


function Video3() {
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
                                    <h2 className="">Videos</h2>
                                    <p className="">Are you more of a visual learner, then look no further. Find the topic of your interest below and and enjoy the turorial </p>
                                </div>
                            </div>

                            <Row>
                                <Container>
                                    <div className="App">

                                        <h2>Loops</h2>
                                        <div className={vidStyles.videoContainer} 
                                            style={{alignItems: 'center',
                                            display: 'inline',
                                            float: 'left',
                                            border: '1px solid black',
                                            margin: '5px 10px 10px 0px',}} >
                                            <iframe width="560" height="315" src='https://www.youtube.com/embed/_1AwR-un4Hk'
                                                frameBorder='0'
                                                allow='autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture'
                                                allowFullScreen
                                                title='video'
                                            />
                                        </div>
                                        <h6>What are Loops?</h6>
                                        <p className="description">
                                            A loop is a pice of code which repeats the same sequence of code until a specific predefined condition is met. Several things can be done while reapeating
                                            a loop, including but not limited to adding sums, cycle through values, repeat function amongst other things
                                            There are three kind of loops, For loops, While Lopps and Do-while loop. Which loop is used is dependant on what is required for that loop.
                                        </p>
                                    </div>
                                </Container>
                            </Row>

                            <Row>
                                <Container>
                                    <div className="App">

                                    <h2>Member Initialisation</h2>
                                        <div className={vidStyles.videoContainer} 
                                            style={{alignItems: 'center',
                                            display: 'inline',
                                            float: 'left',
                                            border: '1px solid black',
                                            margin: '5px 10px 10px 0px',}} >
                                            <iframe width="560" height="315" src='https://www.youtube.com/embed/dNklocMxddU'
                                                frameBorder='0'
                                                allow='autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture'
                                                allowFullScreen
                                                title='video'
                                            />
                                        </div>  
                                        <h6>What is Member Initialisation</h6>
                                        <p className="description">
                                            A member is basically anything in the class, anything in the class is the member of teh class. Member initialisation is when the data 
                                            members of the class have been initialised. The list of members to be initialized is indicated with constructor as a comma-separated 
                                            list followed by a colon
                                        </p>
                                    </div>
                                </Container>
                            </Row>

                            <Row>
                                <Container>
                                    <div className="App">

                                        <h2>Methods</h2>
                                        <div className={vidStyles.videoContainer} 
                                            style={{alignItems: 'center',
                                            display: 'inline',
                                            float: 'left',
                                            border: '1px solid black',
                                            margin: '5px 10px 10px 0px',}} >
                                            <iframe width="560" height="315" src='https://www.youtube.com/embed/Ya4rxEfb2BQ'
                                                frameBorder='0'
                                                allow='autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture'
                                                allowFullScreen
                                                title='video'
                                            />
                                        </div>
                                        <h6>What are Methods?</h6>
                                        <p className="description">
                                        A method in object-oriented programming is a procedure associated with a class. A method defines the behavior of the objects 
                                        that are created from the class. Another way to say this is that a method is an action that an object is able to perform
                                        </p>
                                    </div>
                                </Container>
                            </Row>

                            <Row>
                                <Container>
                                    <div className="App">

                                        <h2>Function Overloads</h2>
                                        <div className={vidStyles.videoContainer} 
                                            style={{alignItems: 'center',
                                            display: 'inline',
                                            float: 'left',
                                            border: '1px solid black',
                                            margin: '5px 10px 10px 0px',}} >
                                            <iframe width="560" height="315" src='https://www.youtube.com/embed/IAMzWp3kS_k'
                                                frameBorder='0'
                                                allow='autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture'
                                                allowFullScreen
                                                title='video'
                                            />
                                        </div>        
                                        <h6>What are Overloads?</h6>
                                        <p className="description">
                                            Overloads or overloading is creating two or more members or functions with the exact ame name, only differing in either the number 
                                            of parameters each one takes, or the type of parameters each one takes. These diffarences ar the only way the compililer can 
                                            diffarentiate between the functions
                                        </p>
                                    </div>
                                </Container>
                            </Row>

                            <Row>
                                <Container>
                                    <div className="App">

                                        <h2>Pass By Reference</h2>
                                        <div className={vidStyles.videoContainer} 
                                            style={{alignItems: 'center',
                                            display: 'inline',
                                            float: 'left',
                                            border: '1px solid black',
                                            margin: '5px 10px 10px 0px',}} >
                                            <iframe width="560" height="315" src='https://www.youtube.com/embed/_ja8iizm7nk'
                                                frameBorder='0'
                                                allow='autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture'
                                                allowFullScreen
                                                title='video'
                                            />
                                        </div>
                                        <h6>What is Pass By Reference?</h6>
                                        <p className="description">
                                        Passing by by reference refers to a method of passing the address of an argument in the calling function to a corresponding 
                                        parameter in the called function. This allows the value of the argument in the calling function to be modified by the called function.
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
                    to={useBaseUrl('/videos2')}
                    style={{ marginLeft: 200, marginTop: 10 }}
                  >
                    Previous
            </Link>
            <Link style={{position: "left", justifycontent: "right"}}
                    className={classnames(
                      'button hero--button button--md button--secondary button--outline responsive-button',
                      styles.button, 
                    )}
                    to={useBaseUrl('/videos4')}
                    style={{ marginRight: 200, marginTop: 10, float: "right" }}
                  >
                    Next
            </Link>
        </Layout >
    )
}

export default Video3