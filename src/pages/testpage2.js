import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Pagination } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel, TabContainer, TabContent, TabPane} from 'react-tabs'
import 'bootstrap/dist/css/bootstrap.min.css'
import vidstyles from './video.css'
import "react-tabs/style/react-tabs.css"
import styles from './styles.module.css'
import CustomCodeBlock from '../components/CustomCodeBlock'
import classnames from 'classnames'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'

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

hello  is some hype talk about business



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
"NJinius was created to help people, all ability levels develop their understanding 
of programming and business. We are creating a community of like-minded individuals who seek to 
expand and develop a 360 understanding of their respective industry. We hold workshops, tutorials 
and discussions in many different subject areas for this purpose, offering a relaxed environment 
to learn and develop new skills."
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
bookd club
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

function Hello() {
    const context = useDocusaurusContext()
    const { siteConfig = {} } = context
    const [visibleCodeExample, showCodeExample] = useState('READ')
    return (
        <Layout title="Hello">
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50vh',
                    fontSize: '20px',
                }}>
                <p>
                    Edit <code>pages/hello.js</code> and save to reload.

                </p>

            </div>

            {/* </div>
            <div className={vidstyles.videoContainer}>
                <iframe width="560" height="315" src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                    frameborder='0'
                    allow='autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture'
                    allowfullscreen
                    title='video'
                />

            </div>

            

            <div classname="Pagination">
                <Row xs="5">
                    <Col >1</Col>
                    <Col >2</Col>
                    <Col >3</Col>
                    <Col >4</Col>
                    <Col >5</Col>
                    <Col >7</Col>



                </Row>
            </div>

           
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
                        Software
                      </button>
                      <button
                        className={`button button--${
                          visibleCodeExample === 'SUBSCRIBE' ? 'info is-active' : 'info'
                        }`}
                        onClick={() => showCodeExample('SUBSCRIBE')}
                      >
                        Business
                      </button>
                      <button
                        className={`button button--${
                          visibleCodeExample === 'UMD' ? 'info is-active' : 'info '
                        }`}
                        onClick={() => showCodeExample('UMD')}
                      >
                        Book Club
                      </button>
                    </div>
                  </div>
                  <div className="col col--9 code-with-header">
                    {visibleCodeExample === 'READ' && (
                      <CustomCodeBlock
                        header="A step into the software world"
                        js={readExample}
                      />
                    )}
                    {visibleCodeExample === 'SUBSCRIBE' && (
                      <CustomCodeBlock
                        header="Share and exchange business expertise"
                        js={subscribeExample}
                      />
                    )}
                    {visibleCodeExample === 'CREATE' && (
                      <CustomCodeBlock header="Feed the ming with a variety of books" js={createExample} />
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
                      <CustomCodeBlock header="Feed the ming with a variety of books" js={umdExample} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section> */}



        </Layout>
    );
}

export default Hello;