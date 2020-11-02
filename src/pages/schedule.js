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


const subscribeExample = `
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
import { createClient } from '@supabase/supabase-js'

// Initialize 
const supabaseUrl = 'https://chat-room.supabase.co'
const supabaseKey = 'public-anon-key'
const supabase = createClient(supabaseUrl, supabaseKey)

// Get public rooms and their messages
const publicRooms = await supabase
  .from('rooms')
  .select(\`
    name,
    messages ( text )
  \`)
  .eq('public', true)
`.trim()
const createExample = `
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



function Schedule() {
    const context = useDocusaurusContext()
    const { siteConfig = {} } = context
    const [visibleCodeExample, showCodeExample] = useState('READ')
    return (
      <Layout title={`${siteConfig.title}`} description={siteConfig.tagline}>
        <main className="SchedulePage" >
          {/* HEADER */}
          <header className={classnames('hero full', styles.heroBanner)}>
              {/* For Devs */}
<section className={styles.forDevelopers}>
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



          </header>
        </main>
      </Layout>
      )
    }
    
    export default Schedule
    