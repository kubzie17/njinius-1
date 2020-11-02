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

const heroExample = `
const messages = Njinius
  .from('messages')
  .select(\`
    id, text,
    user ( id, name )
  \`)

const newMessages = supabase
  .from('messages')
  .on('INSERT', message => console.log('New message!', message) )
  .subscribe()
`.trim()
const subscribeExample = `

hello this is some hype talk about software



import { createClient } from '@supabase/supabase-js'

// Initialize 
const supabaseUrl = 'https://chat-room.supabase.co'
const supabaseKey = 'public-anon-key'
const supabase = createClient(supabaseUrl, supabaseKey)

// Get notified of all new chat messages
const realtime = supabase
  .from('messages')
  .on('INSERT', message => {
    console.log('New message!', message)
  })
  .subscribe()
`.trim()
const readExample = `
NJinius was created to help people of all ability levels develop their understanding 
of programming and business. We are creating a community of like-minded individuals who seek to 
expand and develop a 360 understanding of their respective industry. We hold workshops, tutorials 
and discussions in many different subject areas for this purpose, offering a relaxed environment 
to learn and develop new skills.
`.trim()
const createExample = `
hellos this is some hype talk about software
hellos this is some hype talk about software


import { createClient } from '@supabase/supabase-js'

// Initialize 
const supabaseUrl = 'https://chat-room.supabase.co'
const supabaseKey = 'public-anon-key'
const supabase = createClient(supabaseUrl, supabaseKey)

// Create a new chat room
const newRoom = await supabase
  .from('rooms')
  .insert({ name: 'Supabase Fan Club', public: true })
`.trim()
const updateExample = `
import { createClient } from '@supabase/supabase-js'

// Initialize 
const supabaseUrl = 'https://chat-room.supabase.co'
const supabaseKey = 'public-anon-key'
const supabase = createClient(supabaseUrl, supabaseKey)

// Update multiple users
const updatedUsers = await supabase
  .from('users')
  .eq('account_type', 'paid')
  .update({ highlight_color: 'gold' })
`.trim()
const nodeTSExample = `
import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY
);

type User = {
  id: string;
  username: string;
  status: 'ONLINE' | 'OFFLINE';
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const allOnlineUsers = await supabase
    .from<User>('users')
    .select('*')
    .eq('status', 'ONLINE');
  res.status(200).json(allOnlineUsers);
};
`.trim()

const umdExample = `
<script src="https://unpkg.com/@supabase/supabase-js/umd/supabase.js"></script>

<script>
  // Initialize
  const supabaseUrl = 'https://chat-room.supabase.co'
  const supabaseKey = 'public-anon-key'
  const supabase = Supabase.createClient(supabaseUrl, supabaseKey)

  // Get public rooms and their messages
  supabase
    .from('rooms')
    .select(\`
      name,
      messages ( text )
    \`)
    .eq('public', true)
    .then(response => {
      // Do something with the response
    })
</script>
`.trim()

const features = [
  {
    title: <>Chat apps</>,
    imageUrl: '',
    description: <>Build a realtime chat application using PostgreSQL and Expo</>,
    href: '/docs/guides/examples',
  },
  {
    title: <>Realtime dashboards</>,
    imageUrl: '',
    description: <>Build live dashboards using PostgreSQL and D3.js</>,
    href: '/docs/guides/examples',
  },
  {
    title: <>Logging</>,
    imageUrl: '',
    description: <>Log all your database changes to an immutable logging system</>,
    href: '/docs/guides/examples',
  },
  {
    title: <>Realtime Games</>,
    imageUrl: '',
    description: <>Keep all players in-sync with game actions and leader dashboards.</>,
    href: '/docs/guides/examples',
  },
  {
    title: <>Streaming analytics</>,
    imageUrl: '',
    description: <>Send actions and events to your data warehouses.</>,
    href: '/docs/guides/examples',
  },
  {
    title: <>Backoffice and Admin</>,
    imageUrl: '',
    description: <>Build admin dashboards without stressing about conflict resolution.</>,
    href: '/docs/guides/examples',
  },
]

function Feature({ imageUrl, title, description, href }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={classnames('col col--4 m-b-md', styles.feature)}>
      <Link className={classnames('card', styles.featureCard)} to={href}>
        <div className="card__body">
          {imgUrl && (
            <div className="">
              <img className={styles.featureImage} src={imgUrl} alt={title} />
            </div>
          )}
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  )
}

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
                
                <h2 className="hero__title">Welcome to NJinius Engineering Club where iron sharpens iron...</h2>
                <p className="hero__subtitle">
                <p>   Join us and do something NJinius!</p>
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
              <img className="aboutlogo" src='/static/img/njinaltlogo.png' height="380" width="390"/>
                
              </div>
              <div className="col col--7">
              <h2 className="hero__title" style={{ marginLeft: 200}}>{siteConfig.tagline}</h2>
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
                {/* <CustomCodeBlock
                 // header="Query your PostgreSQL database and listen in real-time."
                  //js={heroExample}
                  <img =
                /> */}
              </div>
            </div>
          </div>
        </body>

        {/* <section
          style={{
            padding: 30,
            color: "blue",
          }}
          className="hero is--dark"
        >
          <div
            className="container "
            color= "blue"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <img src="/img/yc-gray.png" alt="Y Combinator" width="50" />
            <p
              style={{
                color: "blue",
                fontWeight: 'bold',
                padding: '0px 20px',
                margin: 0,
                display: 'inline-block',
              }}
            >
              Backed by Y Combinator
            </p>
          </div>
        </section> */}

        {/* HOW */}
        {/* <section className={'section-lg'}>
          <div className="container"  color="blue">
            <div className={classnames('row', styles.responsiveCentered)}>
              <div className="col col--6 col--offset-3">
                <h2 className="">How it works</h2>
                <p className="">
                  Supabase helps you build faster, so you can focus on your core products.
                </p>
              </div>
            </div>

            <div className="HowSections row is-multiline">
              <div className={'col col--4 '}>
                <div>
                  <img
                    className="diagram"
                    src="/img/how-replication.png"
                    alt="Database replication"
                  />
                </div>
                <div>
                  <HowCard
                    title="Built with PostgreSQL"
                    description={
                      <>Sign up and query your Postgres database in less than 2 minutes.</>
                    }
                    featureTitle="You get"
                    features={[
                      'Full Postgres database',
                      'Instant RESTful API',
                      'Realtime notifications via websockets',
                    ]}
                  />
                </div>
              </div>

              <div className={'col col--4 '}>
                <div>
                  <img className="diagram" src="/img/how-transformation.png" alt="Supabase" />
                </div>
                <div>
                  <HowCard
                    title="Supabase handles the magic"
                    description={<>Supabase handles the stuff you're usually too busy to build.</>}
                    featureTitle="You get"
                    features={[
                      'APIs always in sync with your schema',
                      'Custom API docs for your schema',
                      'Built-in security & monitoring',
                    ]}
                  />
                </div>
              </div>

              <div className={'col col--4 '}>
                <div>
                  <img className="diagram" src="/img/how-client-libs.png" alt="Client libraries" />
                </div>
                <div>
                  <HowCard
                    title="Build realtime applications"
                    description={<>Supabase provides libraries and examples to get you started.</>}
                    featureTitle="Build"
                    features={[
                      'Auto-updating dashboards',
                      'IoT applications',
                      'Realtime chat apps',
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* For Devs */}
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
              <div className="ForDevelopers">
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

        {/* USE CASES */}
        {/* <section className={'section-lg'}>
          <div className="container">
            <h2 className="">Use Cases</h2>
            <div className="row is-multiline">
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section> */}

        {/* <section className={'section-lg'}>
          <div className="container">
            <div className={classnames('row', styles.centered)}>
              <div className="col col--6 col--offset-3">
                <h2 className="">Self-documenting</h2>
                <p className="">
                  We introspect your database to give you instant, custom documentation for your
                  REST and Realtime APIs.
                </p>
              </div>
            </div>

            <div className={classnames('row', styles.centered)}>
              <div className="col">
                <img
                  className={''}
                  src={'/img/custom-docs.png'}
                  alt={'Self-documenting dashboards'}
                />
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className={'section-lg'}>
          <div className="container">
            <div className={classnames('row', styles.centered)}>
              <div className="col col--6 col--offset-3">
                <h2 className="">Table view</h2>
                <p className="">Start building your database directly from the dashboard.</p>
              </div>
            </div>

            <div className={classnames('row', styles.centered)}>
              <div className="col">
                <img
                  className={''}
                  src={'/img/table-view.png'}
                  alt={'Self-documenting dashboards'}
                />
              </div>
            </div>
          </div>
        </section> */}

        {/* OSS */}
        {/* <section className={'section-lg'}>
          <div className="container">
            <div className={classnames('row', styles.responsiveCentered)}>
              <div className="col col--6 col--offset-3">
                <h2 className="">Open source</h2>
                <p className="">
                  Supabase <Link to={'/oss'}>loves open source</Link>. Follow us on{' '}
                  <a href="https://github.com/supabase">GitHub</a>. <strong>Watch</strong> the
                  releases of each repo to get notified when we are ready for Beta launch.
                </p>
              </div>
            </div>

            <div className="row is-multiline">
              {repos
                .filter((x) => ['supabase', 'realtime', 'postgres', 'pg-api'].includes(x.name))
                .map((props, idx) => (
                  <div className={'col col--6'} key={idx}>
                    <GithubCard
                      key={idx}
                      title={props.name}
                      description={props.description}
                      href={props.html_url}
                      stars={props.stargazers_count}
                      handle={props.full_name}
                    />
                  </div>
                ))}
            </div>
            <div style={{ textAlign: 'right' }}>
              <a href="/oss">See more →</a>
            </div>
          </div>
        </section>

        <section
          style={{
            marginTop: 100,
            padding: '50px 0',
            borderTop: '1px solid var(--custom-border-color)',
          }}
          className="hero is--dark"
        >
          <div className="container">
            <div>
              <h2
                style={{
                  margin: 10,
                }}
              >
                Enterprise sponsors
              </h2>
            </div>
            <div className="">
              <a
                href={'http://worklife.vc/'}
                target="_blank"
                style={{
                  height: 150,
                  margin: 10,
                }}
              >
                <img src="/img/worklife-dark.png" alt="WorkLife VC" />
              </a>
              <a
                href={'https://github.com/sponsors/supabase'}
                target="_blank"
                style={{
                  height: 150,
                  margin: 10,
                }}
              >
                <img src="/img/new-sponsor-dark.png" alt="Become a sponsor" />
              </a>
            </div>
          </div>
        </section> */}
      </main>
    </Layout>
  )
}

export default Home