import React, { useState } from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'


function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  const [visibleCodeExample, showCodeExample] = useState('READ')
  return (
    <Layout title={`${siteConfig.title}`} description={siteConfig.tagline}>
      <main className="HomePage" >
        {/* HEADER */}
        <header className={classnames('hero full', styles.heroBanner)}>
          <div className="container">
  
            <div className="row">
              <div className="col col--5">
                
                <h2 className="hero__title">Welcome to NJinius Hub where iron sharpens iron...</h2>
                <p className="hero__subtitle">
                <p>Njinius is a one stop shop for a variety of knowledge between the channels of software, business and book clubs. Find the track right for you and induldge in a world of learning, or even shar your knowledge and expertise. So come, join us and lets do something NJinius!</p>
                </p>
                
              </div>
              <div className="col col--7">
                <img className="njinius" src='/static/img/njinaltlogo.png' height="380" width="390"/>
                {/* <CustomCodeBlock
                 // header="Query your PostgreSQL database and listen in real-time."
                  //js={heroExample}
                  <img =
                /> */}
              </div>
            </div>
          </div>
        </header>

        <body className={classnames('hero full', styles.heroBanner)}>
          <div className="container">
  
            <div className="row">
              <div className="col col--5">
              <img className="aboutlogo" src='/static/img/aboutus.jpg' height="380" width="350"/>
                
              </div>
              <div className="col col--7">
              <h2 className="hero__title" style={{ textAlign: "center"}}>{siteConfig.tagline}</h2>
                <p className="hero__subtitle">
                <p>NJinius was created to help people of all ability levels develop their understanding of programming and business. We are creating a community of like-minded individuals who seek to expand and develop a 360 understanding of their respective industry. 
                    We hold workshops, tutorials and discussions in many different subject areas for this purpose, offering a relaxed environment to learn and develop new skills.</p>
                </p>
                <div>
                  <Link
                    className={classnames(
                      'button hero--button button--md button--secondary button--outline responsive-button',
                      styles.button
                    )}
                    to={useBaseUrl('docs')}
                    style={{ marginLeft: 200, marginTop: 10 }}
                  >
                    Learn More
                  </Link>
                 
                </div>
              </div>
            </div>
          </div>
        </body>

        {/* Something for everyne */}
          <section className={styles.forDevelopers}>
            <div className="container">
              <div className={classnames('row', styles.responsiveCentered)}>
                <div className="col col--6 col--offset-3">
                  <h2 className="">Something For Everyone</h2>
                  <p className="">
                    Below are different  
                    <strong className="has-emphasis"> Tracks</strong> so you so there is definitely something for everyone. So why don't 
                    you pick your favorite track and get started with fun learning and collaboration
                  </p>
                </div>
              </div>
              <Tabs>
                <TabList>
                    <Tab>Software</Tab>
                    <Tab >Business</Tab>
                    <Tab>Book Club</Tab>
                </TabList>

                <TabPanel>
                    <p>
                    NJinius was created to help people, all ability levels develop their understanding 
                    of programming and business. We are creating a community of like-minded individuals who seek to 
                    expand and develop a 360 understanding of their respective industry. We hold workshops, tutorials 
                    and discussions in many different subject areas for this purpose, offering a relaxed environment 
                    to learn and develop new skills.
                    </p>
                    
                </TabPanel>
                <TabPanel>
                    <p>
                        <b>Luigi</b> (<i>Japanese: ルイージ Hepburn: Ruīji, [ɾɯ.iː.dʑi̥]</i>) (<i>English: /luˈiːdʒi/;
                        Italian: [luˈiːdʒi]</i>) is a fictional character featured in video games and related media
                        released by Nintendo. Created by prominent game designer Shigeru Miyamoto, Luigi is portrayed
                        as the slightly younger but taller fraternal twin brother of Nintendo's mascot Mario, and
                        appears in many games throughout the Mario franchise, often as a sidekick to his brother.
                    </p>
                    <p>
                        Source:{' '}
                        <a href="https://en.wikipedia.org/wiki/Luigi" target="_blank">
                            Wikipedia</a>
                    </p>
                </TabPanel>
                <TabPanel>
                    <p>
                        <b>Princess Peach</b> (<i>Japanese: ピーチ姫 Hepburn: Pīchi-hime, [piː.tɕi̥ çi̥.me]</i>)
                            is a character in Nintendo's Mario franchise. Originally created by Shigeru Miyamoto,
                            Peach is the princess of the fictional Mushroom Kingdom, which is constantly under
                            attack by Bowser. She often plays the damsel in distress role within the series and
                            is the lead female. She is often portrayed as Mario's love interest and has appeared
                            in Super Princess Peach, where she is the main playable character.
                    </p>
                    <p>
                        Source:{' '}
                        <a href="https://en.wikipedia.org/wiki/Princess_Peach" target="_blank">
                            Wikipedia</a>
                    </p>
                </TabPanel>  
            </Tabs>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Home