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

function Archive() {
    const context = useDocusaurusContext()
    const { siteConfig = {} } = context
    const [visibleCodeExample, showCodeExample] = useState('READ')
    return (
      <Layout title="Tracks" description={siteConfig.tagline}>
        <main className="ArchivePage" >
          {/* HEADER */}
          <header className={classnames('hero full', styles.heroBanner)}>
              
              {/* HOW */}
            <section className={styles.forDevelopers}>
            <div className="container"  color="blue">
                <div className={classnames('row', styles.responsiveCentered)}>
                <div className="col col--6 col--offset-3">
                    <h2 className="">Tracks</h2>
                    <p className="">
                    Njinius mostly consist of 3 tracks, Business, Software and Bookcase. Pick your track and get involved
                    </p>
                </div>
                </div>

                <div className="HowSections row is-multiline">
                <div className={'col col--4 '}>
                    <div>
                        <Link
                            to={useBaseUrl('docs')}>
                            <img className="diagram" src="/static/img/business.png"  height="261.06" width="348"/>
                        </Link>
                    </div>
                   
                    <div>
                    <HowCard
                        title="Business"
                        description={
                        <>For everything Business, the business track is the way to go</>
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
                            to={useBaseUrl('docs')}>
                            <img className="diagram" src="/static/img/software.jpeg"  height="261.06" width="348"/>
                        </Link>
                    </div>

                    <div>
                    <HowCard
                        title="Software"
                        description={<>Enter the software track and join in everything software</>}
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
                            to={useBaseUrl('docs')}>
                            <img className="diagram" src="/static/img/book.jpg"  height="261.06" width="348"/>
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