import React from 'react'
import Navi from './NavigationBar/Navigationbar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css'
function Home() {
  return (
    <Container>
      <Row>
        <Navi/>
      </Row>
      <Row>

      
          <div className='left-nav'>
                left
          </div>
          <div className='right-nav'>
                Right
          </div>
       
      </Row>
    </Container>
  )
}

export default Home
