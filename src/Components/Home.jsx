import React from 'react'
import Navi from './NavigationBar/Navigationbar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css'
function Home() {
  return (
    <Container className='all'>
      <Row>
        <Navi/>
      </Row>
      <Row>

          <div>
          <div className='left-nav child containt'>
                 left
          </div>
          <div className='right-nav child containt'>
               Right
          </div> 
          </div>
     
      </Row>
    </Container>
  )
}

export default Home
