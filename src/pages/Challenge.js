import React, { useState } from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import HowCard from '../components/HowCard'
import { Container, Row} from 'react-bootstrap'
import vidStyles from './video.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Challenge() {
    const context = useDocusaurusContext()
    const { siteConfig = {} } = context
    const [visibleCodeExample, showCodeExample] = useState('READ')
    return (
        <Layout title="Hello">
            <main className="ArchivePage" >
                {/* HEADER */}
                <header className={classnames('hero full', styles.heroBanner)}>
                    {/* HOW */}
                    <section className={styles.forTracks}>
                        <div className="container" color="blue">
                            <div className={classnames('row', styles.responsiveCentered)}>
                                <div className="col col--6 col--offset-3">
                                    <h2 className="">We're cooking something up...</h2>
                                </div>
                            </div>

                            <Row>
                                <Container>
                                    <div className={classnames('row', styles.responsiveCentered)}>

                                        <div className="col col--6 col--offset-3">  
                                            <img className="diagram" src="/static/img/pot.gif" />
                                            <br></br>
                                            <br></br>
                                            <h2 className="">Please check back soon!!!</h2>
                                        </div>
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