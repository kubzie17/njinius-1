import React from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import { Container, Row} from 'react-bootstrap'
import vidStyles from './video.css'


function BussVid1() {
    const context = useDocusaurusContext()
    const { siteConfig = {} } = context
    return (
        <Layout title="Businesss" description={siteConfig.tagline}>
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

                                        <h2>Businss Intelligence</h2>
                                        <div className={vidStyles.videoContainer} 
                                            style={{alignItems: 'center',
                                            display: 'inline',
                                            float: 'left',
                                            border: '1px solid black',
                                            margin: '5px 10px 10px 0px',}} 
                                            >
                                            <iframe width="560" height="315" src='https://www.youtube.com/embed/jkCCnwvO_fg'
                                                frameBorder='0'
                                                allow='autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture'
                                                allowFullScreen
                                            />
                                        </div>
                                        <h6>What is Business Intelligence?</h6>
                                        <p className="description">
                                            TO DO
                                        </p>                                     
                                    </div>
                                </Container>
                            </Row>

                            <Row>
                                <Container>
                                    <div className="App">

                                        <h2>Operations Management</h2>
                                        <div className={vidStyles.videoContainer} 
                                            style={{alignItems: 'center',
                                            display: 'inline',
                                            float: 'left',
                                            border: '1px solid black',
                                            margin: '5px 10px 10px 0px',}} >
                                            <iframe width="560" height="315" src='https://www.youtube.com/embed/DEuzzLled6k'
                                                frameBorder='0'
                                                allow='autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture'
                                                allowFullScreen
                                                title='video'
                                            />
                                        </div>   
                                        <h6>What is Operations Management?</h6>
                                        <p className="description">
                                            TO DO
                                        </p>                                      
                                    </div>
                                </Container>
                            </Row>

                            <Row>
                                <Container>
                                    <div className="App">

                                        <h2>Human Resources</h2>
                                        <div className={vidStyles.videoContainer} 
                                            style={{alignItems: 'center',
                                            display: 'inline',
                                            float: 'left',
                                            border: '1px solid black',
                                            margin: '5px 10px 10px 0px',}} >
                                            <iframe width="560" height="315" src='https://www.youtube.com/embed/aA1OlFHZWtU'
                                                frameBorder='0'
                                                allow='autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture'
                                                allowFullScreen
                                                title='video'
                                            />
                                        </div>
                                        <h6>What is Strategic Planning?</h6>
                                        <p className="description">
                                            The process of hiring and developing employees so that they become more valuable to the organization. 
                                            Human Resource Management includes conducting job analyses, planning personnel needs, recruiting the 
                                            right people for the job, orienting and training, managing wages and salaries, providing benefits and incentives, 
                                            evaluating performance, resolving disputes, and communicating with all employees at all levels. Examples of core 
                                            qualities of HR management are extensive knowledge of the industry, leadership, and effective negotiation skills. 
                                            Formerly called personnel management.
                                        </p>  
                                    </div>
                                </Container>
                            </Row>

                            <Row>
                                <Container>
                                    <div className="App">

                                        <h2>Accounting and Finance</h2>
                                        <div className={vidStyles.videoContainer} 
                                            style={{alignItems: 'center',
                                            display: 'inline',
                                            float: 'left',
                                            border: '1px solid black',
                                            margin: '5px 10px 10px 0px',}} >
                                            <iframe width="560" height="315" src='https://www.youtube.com/embed/YjkRSlTxsZM'
                                                frameBorder='0'
                                                allow='autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture'
                                                allowFullScreen
                                                title='video'
                                            />
                                        </div>
                                        <h6>What is Accounting and Finance?</h6>
                                        <p className="description">
                                            learn about external financial statements, internal managerial accounting reports, income tax systems 
                                            and how they interact in business decision-making. in this course, we review the accounting equation, 
                                            the three primary financial statements, how to use accounting basics to aid decision making, and how income 
                                            taxes figure into business and personal decisions.
        
                                        </p>               
                                    </div>
                                </Container>
                            </Row>

                            <Row>
                                <Container>
                                    <div className="App">
                                        
                                        <h2>Business Technology</h2>
                                        <div className={vidStyles.videoContainer} 
                                            style={{alignItems: 'center',
                                            display: 'inline',
                                            float: 'left',
                                            border: '1px solid black',
                                            margin: '5px 10px 10px 0px',}} >
                                            <iframe width="560" height="315" src='https://www.youtube.com/embed/ODS_jCocCwg'
                                                frameBorder='0'
                                                allow='autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture'
                                                allowFullScreen
                                                title='video'
                                            />
                                        </div>
                                        <h6>What is Business Technology?</h6>
                                        <p className="description">
                                            TO DO
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
                to={useBaseUrl('/bussVid1')}
                style={{ marginLeft: 200, marginTop: 10, float: "center" }}
                >
                previous
            </Link>
        </Layout >
    )
}

export default BussVid1