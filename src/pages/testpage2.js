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

           
        <section className={styles.forTracks}>
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
            <div className="ForTracks">
              <div className="row">
                <div className="ButtonTabs col col--3">
                  <div>
                    <button
                      className={`button button--${visibleCodeExample === 'READ' ? 'info is-active' : 'info '
                        }`}
                      onClick={() => showCodeExample('READ')}
                    >
                      Software
                      </button>
                    <button
                      className={`button button--${visibleCodeExample === 'SUBSCRIBE' ? 'info is-active' : 'info'
                        }`}
                      onClick={() => showCodeExample('SUBSCRIBE')}
                    >
                      Business
                      </button>
                    <button
                      className={`button button--${visibleCodeExample === 'UMD' ? 'info is-active' : 'info '
                        }`}
                      onClick={() => showCodeExample('UMD')}
                    >
                      Book Club
                      </button>
                  </div>
                </div>
                <div className="col col--9 code-with-header">
                  {visibleCodeExample === 'READ' && (
                    <Card >
                      <Card.Body class="card text-white bg-dark">
                        <Card.Title ><small>on liner abut software</small></Card.Title>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Card.Text >Some intro about what Software Track is about</Card.Text>
                        <br></br>
                        <Link to={useBaseUrl('docs/track/software/index')}>
                          <Button variant="primary" to='docs/track/business/index' block>read more</Button>
                        </Link>
                      </Card.Body>

                    </Card>
                  )}
                  {visibleCodeExample === 'SUBSCRIBE' && (
                    <Card >
                      <Card.Body class="card text-white bg-dark">
                        <Card.Title ><small>on liner abut software</small></Card.Title>
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
                  {visibleCodeExample === 'UMD' && (
                    <Card >
                      <Card.Body class="card text-white bg-dark">
                        <Card.Title ><small>on liner abut software</small></Card.Title>
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
    );
}

export default Hello;