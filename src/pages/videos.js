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



function Video() {
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

                                        <h2>Exception Handling</h2>
                                        <div style={{
                                            alignItems: 'center',
                                            display: 'inline',
                                            float: 'left',
                                            border: '1px solid black',
                                            margin: '5px 10px 10px 0px',
                                        }}>
                                            <ReactPlayer url="https://www.youtube.com/watch?v=HUBNt18RFbo"/>

                                        </div>
                                        
                                        <p className="description">{"The recorded video's description will go on here about the topic that was covered on the date mention above and the duration of the video. The video will either play from youtube or it will be a video within the reporitory"}</p>

                                    </div>

                                </Container>
                            </Row>

                            <Row>
                                <Container>
                                    <div className="App">

                                        <h2>Exception Handling</h2>
                                        <div style={{
                                            alignItems: 'center',
                                            display: 'inline',
                                            float: 'left',
                                            border: '1px solid black',
                                            margin: '5px 10px 10px 0px',
                                        }}>
                                            <ReactPlayer url="https://www.youtube.com/watch?v=HUBNt18RFbo" />

                                        </div>
                                        
                                        <p className="description">{"The recorded video's description will go on here about the topic that was covered on the date mention above and the duration of the video. The video will either play from youtube or it will be a video within the reporitory"}</p>

                                    </div>

                                </Container>
                            </Row>

                            <Row>
                                <Container>
                                    <div className="App">

                                        <h2>Exception Handling</h2>
                                        <div style={{
                                            alignItems: 'center',
                                            display: 'inline',
                                            float: 'left',
                                            border: '1px solid black',
                                            margin: '5px 10px 10px 0px',
                                        }}>
                                            <ReactPlayer url="https://www.youtube.com/watch?v=HUBNt18RFbo" />

                                        </div>
                                        
                                        <p className="description">{"The recorded video's description will go on here about the topic that was covered on the date mention above and the duration of the video. The video will either play from youtube or it will be a video within the reporitory"}</p>

                                    </div>

                                </Container>
                            </Row>

                            <Row>
                                <Container>
                                    <div className="App">

                                        <h2>Exception Handling</h2>
                                        <div style={{
                                            alignItems: 'center',
                                            display: 'inline',
                                            float: 'left',
                                            border: '1px solid black',
                                            margin: '5px 10px 10px 0px',
                                        }}>
                                            <ReactPlayer url="https://www.youtube.com/watch?v=HUBNt18RFbo" />

                                        </div>
                                        
                                        <p className="description">{"The recorded video's description will go on here about the topic that was covered on the date mention above and the duration of the video. The video will either play from youtube or it will be a video within the reporitory"}</p>

                                    </div>

                                </Container>
                            </Row>

                            <Row>
                                <Container>
                                    <div className="App">

                                        <h2>Exception Handling</h2>
                                        <div style={{
                                            alignItems: 'center',
                                            display: 'inline',
                                            float: 'left',
                                            border: '1px solid black',
                                            margin: '5px 10px 10px 0px',
                                        }}>
                                            <ReactPlayer url="https://www.youtube.com/watch?v=HUBNt18RFbo" />

                                        </div>
                                        
                                        <p className="description">{"The recorded video's description will go on here about the topic that was covered on the date mention above and the duration of the video. The video will either play from youtube or it will be a video within the reporitory"}</p>

                                    </div>

                                </Container>
                            </Row>
                            
                        </div>
                    </section>
                </header>
            </main>
        </Layout >
    )
}

export default Video