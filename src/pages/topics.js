import React, { useState } from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import HowCard from '../components/HowCard'


function Archive() {
    const context = useDocusaurusContext()
    const { siteConfig = {} } = context
    return (
        <Layout title="Topics" description={siteConfig.tagline}>
            <main className="ArchivePage" >
                <header className={classnames('hero full', styles.heroBanner)}>
                    <section className={styles.forTopics}>
                        <div className="container" color="blue">
                            <div className={classnames('row', styles.responsiveCentered)}>
                                <div className="col col--6 col--offset-3">
                                    <h2 className="">Topics</h2>
                                    <p className="">
                                        Njinius mostly consist of 3 topics, Business, Software and Bookcase. Pick your topics and get involved
                                    </p>
                                </div>
                            </div>

                            <div className="HowSections row is-multiline">
                                <div className={'col col--4 '}>
                                    <div>
                                        <Link
                                            to={useBaseUrl('docs/topic/business/index')}>
                                            <img className="diagram" src="/static/img/businesstopic.jpg" height="261.06" width="348" />
                                        </Link>
                                    </div>

                                    <div>
                                        <HowCard
                                            title="Business"
                                            description={
                                                <>For everything Business, the business topic is the way to go</>
                                            }
                                            featureTitle="What it entails?"
                                            features={[
                                                'Virtual round-table business discussions',
                                                'Share advice and knowledge',
                                                'Business Resources ',
                                            ]}
                                        />
                                    </div>
                                </div>

                                <div className={'col col--4 '}>
                                    <div>
                                        <Link
                                            to={useBaseUrl('docs/topics/software/index')}>
                                            <img className="diagram" src="/static/img/softwaretopic.jpg" height="261.06" width="348" />
                                        </Link>
                                    </div>

                                    <div>
                                        <HowCard
                                            title="Software"
                                            description={<>Enter the software topic and join in everything software</>}
                                            featureTitle="What you can expect"
                                            features={[
                                                'Raise software issues/challenges',
                                                'share your expertise',
                                                'Solve the weekly challenges',
                                            ]}
                                        />
                                    </div>
                                </div>

                                <div className={'col col--4 '}>

                                    <div>
                                        <Link
                                            to={useBaseUrl('docs/topics/bookClub/index')}>
                                            <img className="diagram" src="/static/img/bookClub2.jpg" height="261.06" width="348" />
                                        </Link>
                                    </div>
                                    <div>
                                        <HowCard

                                            title="Book Club"
                                            description={<>Enrich the mind with book club and share favorites</>}
                                            featureTitle="Build"
                                            features={[
                                                'Discuss your favorite/inspirational books',
                                                'Recommend books to other members',
                                                'Realtime chat apps',
                                            ]}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </header>
            </main>

        </Layout>
    )
}

export default Archive