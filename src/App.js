import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ImageCarousel from './components/ImageCarousel'

function App() {
  return (
    <>
      <div className='container-fluid pt-5'>
        <Row className='row '>
          <Col className='col-lg-1'></Col>
          <Col className='col-lg-10'><ImageCarousel/></Col>
          <Col className='col-lg-1'></Col>
          
        </Row>
      </div>
    </>
  )
}

export default App
