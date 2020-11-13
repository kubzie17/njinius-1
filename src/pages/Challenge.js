import React, { useState } from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './styles.module.css'
import { Container, Row} from 'react-bootstrap'
import vidStyles from './video.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Challenge() {
    const context = useDocusaurusContext()
    return (
        <Layout title="Hello">
            <main className="ArchivePage" >
                {/* HEADER */}
                <header className={classnames('hero full', styles.heroBanner)}>
                    {/* HOW */}
                    <section className={styles.forTracks}>
                        <div className="container" color="blue">
                          
                            <Row>
                                <Container>
                                    <div className="App">

                                        <h2>We're cooking something up...</h2>
                                        <br></br>
                                        <div className={vidStyles.videoContainer} 
                                            >
                                             <img className="diagram" src="/static/img/pot.gif"  />
                                        </div>
                                        <h2>Please check again soon</h2>
                                        <br></br>
                                        <br></br>
                                        
                                    </div>
                                </Container>
                            </Row>
                            
                        </div>
                    </section>
                </header>
            </main>
        </Layout>
    );
}

export default Challenge;