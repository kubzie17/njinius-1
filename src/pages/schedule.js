import React, { useState } from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './styles.module.css'
import CustomCodeBlock from '../components/CustomCodeBlock'


function Schedule() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  const [visibleCodeExample, showCodeExample] = useState('READ')
  return (
    <Layout title="Schedule" description={siteConfig.tagline}>
      <main className="SchedulePage" >
        {/* HEADER */}
        <header className={classnames('hero full', styles.heroBanner)}>
            {/* For Devs */}
          <section className={styles.forTracks}>
            <div className="container">
              <div className={classnames('row', styles.responsiveCentered)}>
                <div className="col col--6 col--offset-3">
                  <h2 className="">For Developers</h2>
                  <p className="">
                    Below are different Track 
                    <strong className="has-emphasis">Schedules</strong> so you can start planning 
                    which events to attend. Please watch out for Support Materials in our Documents Sections   
                  </p>
                </div>
              </div>

              <div className="ForTracks">
                <div className="row">
                  <div className="ButtonTabs col col--3">
                    <div>
                      <button
                        className={`button button--${
                          visibleCodeExample === 'READ' ? 'info is-active' : 'info '
                        }`}
                        onClick={() => showCodeExample('READ')}
                      >
                        Software Workshops
                      </button>
                      <button
                        className={`button button--${
                          visibleCodeExample === 'SUBSCRIBE' ? 'info is-active' : 'info'
                        }`}
                        onClick={() => showCodeExample('SUBSCRIBE')}
                      >
                        Business Workshops
                      </button>
                      <button
                        className={`button button--${
                          visibleCodeExample === 'UMD' ? 'info is-active' : 'info '
                        }`}
                        onClick={() => showCodeExample('UMD')}
                      >
                        Book Clubs
                      </button>
                    </div>
                  </div>

                  <div className="col col--9 code-with-header">
                    {visibleCodeExample === 'READ' && (
                      <CustomCodeBlock
                        header="Get all public rooms and their messages"
                        js={readExample}
                      />
                    )}
                    {visibleCodeExample === 'SUBSCRIBE' && (
                      <CustomCodeBlock
                        header="Receive realtime messages in an example chat room"
                        js={subscribeExample}
                      />
                    )}
                    {visibleCodeExample === 'CREATE' && (
                      <CustomCodeBlock header="Create a new chat room" js={createExample} />
                    )}
                    {visibleCodeExample === 'UPDATE' && (
                      <CustomCodeBlock header="Update a user" js={updateExample} />
                    )}
                    {visibleCodeExample === 'NODETS' && (
                      <CustomCodeBlock
                        header="Server-side & client-side TypeScript support e.g. in Next.js API routes"
                        js={nodeTSExample}
                      />
                    )}
                    {visibleCodeExample === 'UMD' && (
                      <CustomCodeBlock header="Supabase-js standalone bundle" js={umdExample} />
                    )}
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
export default Schedule
    