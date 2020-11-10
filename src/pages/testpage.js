import React from 'react';
import Layout from '@theme/Layout';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Pagination } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './video.css'
import "react-tabs/style/react-tabs.css"

function Hello() {
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
            <div className={styles.videoContainer}>
                <iframe width="560" height="315" src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                    frameborder='0'
                    allow='autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture'
                    allowfullscreen
                    title='video'
                />

            </div>

            <Tabs>
                <TabList>
                    <Tab>Software</Tab>
                    <Tab >Business</Tab>
                    <Tab>Book Club</Tab>
                </TabList>

                <TabPanel>
                    <p>
                        <b>Mario</b> (<i>Japanese: マリオ Hepburn: Mario, [ma.ɾʲi.o]</i>) (<i>English:
                        /ˈmɑːrioʊ/; Italian: [ˈmaːrjo]</i>) is a fictional character in the Mario video
                        game franchise, owned by Nintendo and created by Japanese video game designer
                        Shigeru Miyamoto. Serving as the company's mascot and the eponymous protagonist
                        of the series, Mario has appeared in over 200 video games since his creation.
                        Depicted as a short, pudgy, Italian plumber who resides in the Mushroom
                        Kingdom, his adventures generally center upon rescuing Princess Peach from the
                        Koopa villain Bowser. His younger brother and sidekick is Luigi.
                    </p>
                    <p>
                        Source:{' '}
                        <a href="https://en.wikipedia.org/wiki/Mario" target="_blank">
                            Wikipedia</a>
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


        </Layout>
    );
}

export default Hello;