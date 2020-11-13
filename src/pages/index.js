import React, { useState } from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import { Button, Card } from 'react-bootstrap'
import 'react-tabs/style/react-tabs.css'


function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  const [visibleCodeExample, showCodeExample] = useState('software')
  return (
    <Layout title={`${siteConfig.title}`} description={siteConfig.tagline}>

      {/* HEADER */}
      <header className={classnames('hero full', styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className="col col--5">
              <h2 className="hero__title">Welcome to NJinius Hub where iron sharpens iron...</h2>
              <p className="hero__subtitle">
                Njinius is a one stop shop for a variety of knowledge between the channels of software, business and book clubs. Find the track right for you and induldge in a world of learning, or even shar your knowledge and expertise. So come, join us and lets do something NJinius!
              </p>
            </div>

            <div className="col col--7">
              <img className="njinius" src='/static/img/njinaltlogo.png' height="380" width="390" />
            </div>

          </div>
        </div>
    </header>

    <main className={classnames('hero full', styles.heroBanner)}>
      <div className="container">

        <div className="row">
          <div className="col col--5">
            <img className="aboutlogo" src='/static/img/aboutus.jpg' height="380" width="350" />
          </div>

          <div className="col col--7">
            <h2 className="hero__title" style={{ textAlign: "center" }}>{siteConfig.tagline}</h2>
            <p className="hero__subtitle">
              NJinius was created to help people of all ability levels develop their understanding of programming and business. We are creating a community of like-minded individuals who seek to expand and develop a 360 understanding of their respective industry.
              We hold workshops, tutorials and discussions in many different subject areas for this purpose, offering a relaxed environment to learn and develop new skills.
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
    </main>

    {/* Something for everyne */}
    <section className={styles.forTracks}>
      <div className="container">
        <div className={classnames('row', styles.responsiveCentered)}>
          <div className="col col--6 col--offset-3">
            <h2 className="">Something For Everyone</h2>
            <p className="">
              Below are different <strong className="has-emphasis"> Tracks</strong> so you so there is definitely something for everyone. So why don't
                  you pick your favorite track and get started with fun learning and collaboration
            </p>
          </div>
        </div>
        <div className="ForTracks">
          <div className="row">
            <div className="ButtonTabs col col--3">
              <div>
                <button
                  className={`button button--${visibleCodeExample === 'software' ? 'info is-active' : 'info '
                    }`}
                  onClick={() => showCodeExample('software')}
                >
                  Software
                    </button>
                <button
                  className={`button button--${visibleCodeExample === 'business' ? 'info is-active' : 'info'
                    }`}
                  onClick={() => showCodeExample('business')}
                >
                  Business
                    </button>
                <button
                  className={`button button--${visibleCodeExample === 'bookClub' ? 'info is-active' : 'info '
                    }`}
                  onClick={() => showCodeExample('bookClub')}
                >
                  Book Club
                    </button>
              </div>
            </div>
            <div className="col col--9 code-with-header">
              {visibleCodeExample === 'software' && (
                <Card >
                  <Card.Body className="card text-white bg-dark">
                    <Card.Title ><small>one liner about Software</small></Card.Title>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Card.Text >Some intro about what Software Track is about. typing this longer to be able to test the responsivenes on mobile </Card.Text>
                    <br></br>
                    <Link to={useBaseUrl('docs/track/software/index')}>
                      <Button variant="primary" to='docs/track/business/index' block>read more</Button>
                    </Link>
                  </Card.Body>
                </Card>
              )}
              {visibleCodeExample === 'business' && (
                <Card >
                  <Card.Body className="card text-white bg-dark">
                    <Card.Title ><small>one liner about Business</small></Card.Title>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Card.Text >Some intro about what Business Track is about</Card.Text>
                    <br></br>
                    <Link to={useBaseUrl('docs/track/business/index')}>
                      <Button variant="primary" to='docs/track/business/index' block>read more</Button>
                    </Link>
                  </Card.Body>

                </Card>
              )}
              {visibleCodeExample === 'bookClub' && (
                <Card >
                  <Card.Body className="card text-white bg-dark">
                    <Card.Title ><small>one liner abut Bookclub</small></Card.Title>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Card.Text >Some intro about what Book club Track is about</Card.Text>
                    <br></br>
                    <Link to={useBaseUrl('docs/track/bookClub/index')}>
                      <Button variant="primary" to='docs/track/business/index' block>read more</Button>
                    </Link>
                  </Card.Body>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
  )
}

export default Home