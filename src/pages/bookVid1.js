import React, { useState } from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import vidStyles from './video.css'
import { Container, Row} from 'react-bootstrap'


function bookVid1() {
    const context = useDocusaurusContext()
    const { siteConfig = {} } = context
    return (
        <Layout title="Book Club" description={siteConfig.tagline}>
            <main className="ArchivePage" >
                {/* HEADER */}
                <header className={classnames('hero full', styles.heroBanner)}>
                    {/* HOW */}
                    <section className={styles.forTopics}>
                        <div className="container" color="blue">
                            <div className={classnames('row', styles.responsiveCentered)}>
                                <div className="col col--6 col--offset-3">
                                    <h2 className="">Book Club Sessions</h2>
                                    <p className="">Are you more of a visual learner, then look no further. Find the topic of your interest below and and enjoy the turorial </p>
                                </div>
                            </div>

                            <Row>
                                <Container>
                                    <div className="App">

                                        <h2>Abstraction</h2>
                                        <div className={vidStyles.videoContainer} 
                                            style={{alignItems: 'center',
                                            display: 'inline',
                                            float: 'left',
                                            border: '1px solid black',
                                            margin: '5px 10px 10px 0px',}} 
                                            >
                                            <iframe width="560" height="315" src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                                                frameBorder='0'
                                                allow='autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture'
                                                allowFullScreen
                                            />
                                        </div>
                                        <h6>What is Abstraction?</h6>
                                        <p className="description">
                                            Abstraction is one of the key concepts of object-oriented programming (OOP) languages. Its main goal is to handle complexity by 
                                            hiding unnecessary details from the user. That enables the user to implement more complex logic on top of the provided abstraction 
                                            without understanding or even thinking about all the hidden complexity.That’s a very generic concept that’s not limited to object-oriented 
                                            programming. You can find it everywhere in the real world.
                                        </p>                                     
                                    </div>
                                </Container>
                            </Row>

                            <Row>
                                <Container>
                                    <div className="App">

                                        <h2>Access Modifiers</h2>
                                        <div className={vidStyles.videoContainer} 
                                            style={{alignItems: 'center',
                                            display: 'inline',
                                            float: 'left',
                                            border: '1px solid black',
                                            margin: '5px 10px 10px 0px',}} >
                                            <iframe width="560" height="315" src='https://www.youtube.com/embed/5Z2g78DSxPs'
                                                frameBorder='0'
                                                allow='autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture'
                                                allowFullScreen
                                                title='video'
                                            />
                                        </div>   
                                        <h6>What are Access Modifiers?</h6>
                                        <p className="description">
                                            Access modifiers are used to specify the scope of accessibility of a member of a class or type of the class itself. For example, a public 
                                            class is accessible to everyone without any restrictions, while an internal class may be accessible to the assembly only. Access modifiers
                                            are used to implement encapsulation of OOP. Access modifiers allow you to define who does or who doesn't have access to certain features.
                                        </p>                                      
                                    </div>
                                </Container>
                            </Row>

                            <Row>
                                <Container>
                                    <div className="App">

                                        <h2>Arrays</h2>
                                        <div className={vidStyles.videoContainer} 
                                            style={{alignItems: 'center',
                                            display: 'inline',
                                            float: 'left',
                                            border: '1px solid black',
                                            margin: '5px 10px 10px 0px',}} >
                                            <iframe width="560" height="315" src='https://www.youtube.com/embed/1kLw8kZuccQ'
                                                frameBorder='0'
                                                allow='autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture'
                                                allowFullScreen
                                                title='video'
                                            />
                                        </div>
                                        <h6>What are Arrays?</h6>
                                        <p className="description">
                                        An array is a data structure consisting of a collection of elements (values or variables), each identified by at least one array index or key. 
                                        Depending on the language, array types may overlap (or be identified with) other data types that describe aggregates of values, such as lists 
                                        and strings. Array types are often implemented by array data structures, but sometimes by other means, such as hash tables, linked lists, or 
                                        search trees. In Python, the built-in array data structure is a list.
                                        </p>  
                                    </div>
                                </Container>
                            </Row>

                            <Row>
                                <Container>
                                    <div className="App">

                                        <h2>Classes</h2>
                                        <div className={vidStyles.videoContainer} 
                                            style={{alignItems: 'center',
                                            display: 'inline',
                                            float: 'left',
                                            border: '1px solid black',
                                            margin: '5px 10px 10px 0px',}} >
                                            <iframe width="560" height="315" src='https://www.youtube.com/embed/2BP8NhxjrO0'
                                                frameBorder='0'
                                                allow='autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture'
                                                allowFullScreen
                                                title='video'
                                            />
                                        </div>
                                        <h6>What are class Methods?</h6>
                                        <p className="description">
                                        a class is a blueprint for creating objects (a particular data structure), providing initial values for state
                                         (member variables or attributes), and implementations of behavior (member functions or methods). In many languages, 
                                         the class name is used as the name for the class (the template itself), the name for the default constructor of the 
                                         class (a subroutine that creates objects), and as the type of objects generated by instantiating the class
                                        </p>               
                                    </div>
                                </Container>
                            </Row>

                            <Row>
                                <Container>
                                    <div className="App">
                                        
                                        <h2>Constructors</h2>
                                        <div className={vidStyles.videoContainer} 
                                            style={{alignItems: 'center',
                                            display: 'inline',
                                            float: 'left',
                                            border: '1px solid black',
                                            margin: '5px 10px 10px 0px',}} >
                                            <iframe width="560" height="315" src='https://www.youtube.com/embed/_b7odUc7lg0'
                                                frameBorder='0'
                                                allow='autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture'
                                                allowFullScreen
                                                title='video'
                                            />
                                        </div>
                                        <h6>What are class Methods?</h6>
                                        <p className="description">
                                            A constructor is a member function of a class which initializes objects of a class Whenever an object is created, the constructor is 
                                            called automatically. A constructor is like an instance method that usually has the same name as the class, and can be used to set 
                                            the values of the members of an object, either to default or to user-defined values. However, although it resembles it, a constructor
                                            is not a proper method since it doesn’t have a return type
                                        </p>
                                    </div>
                                </Container>
                            </Row>   
                        </div>
                    </section>
                </header>
            </main>
            <Link
                className={classnames(
                    'button hero--button button--md button--secondary button--outline responsive-button',
                    styles.button
                )}
                to={useBaseUrl('/videos2')}
                style={{ marginLeft: 200, marginTop: 10, float: "center" }}
                >
                Next
            </Link>
        </Layout >
    )
}

export default bookVid1