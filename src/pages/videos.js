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
import Car from "/Development/injinius/static/videos/car.mp4"
import Var from "/Development/injinius/static/videos/van.mp4"
import bik from "/Development/injinius/static/videos/bike.mp4"



function Archive() {
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
        <Layout title={`${siteConfig.title}`} description={siteConfig.tagline}>
            <main className="ArchivePage" >
                {/* HEADER */}
                <header className={classnames('hero full', styles.heroBanner)}>
                    {/* HOW */}
                    <section className={styles.forDevelopers}>
                        <div className="container" color="blue">
                            <div className={classnames('row', styles.responsiveCentered)}>
                                <div className="col col--6 col--offset-3">
                                    <h2 className="">Tracks</h2>
                                    <p className="">Njinius mostly consist of 3 tracks, Business, Software and Bookcase. Pick your track and get involved </p>
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

                                            <VideoPlayer src={videoSrc} poster={imgUrl1} width="270" height="155" />
                                        </div>
                                        <h6>30/10/2020  25:37</h6>
                                        <p className="description">{"The recorded video's description will go on here about the topic that was covered on the date mention above and the duration of the video. The video will either play from youtube or it will be a video within the reporitory"}</p>

                                    </div>

                                </Container>
                            </Row>



                            <Row>
                                <Container>
                                    <div className="App2">
                                        <h2>Video 2 title</h2>
                                        <div style={{
                                            alignItems: 'center',
                                            display: 'inline',
                                            float: 'left',
                                            border: '1px solid black',
                                            margin: '5px 10px 10px 0px',
                                        }}>
                                            <VideoPlayer src={videoSrc2} poster={imgUrl2} width="270" height="155" />

                                        </div>
                                        <h6>30/10/2020  25:37</h6>
                                        <p className="descript">{"this is the description of the video"}</p>

                                    </div>
                                </Container>
                            </Row>

                            <Row>
                                <Container>
                                    <div className="App3">
                                        <h1>Video 3 title</h1>
                                        <div
                                            style={{
                                                alignItems: 'center',
                                                display: 'inline',
                                                float: 'left',
                                                border: '1px solid black',
                                                margin: '5px 10px 10px 0px',
                                            }}>
                                            <VideoPlayer src={videoSrc3} poster={imgUrl3} width="270" height="155" />
                                        </div>
                                        <h6>30/10/2020  25:37</h6>
                                        <p className="descript">{"this is the description of the video"}</p>
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

export default Archive