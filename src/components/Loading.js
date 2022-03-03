import React from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'

export default function Loading() {
  return (
    <Container>
        <Row className="justify-content-center">
            <Col xl={4} className="text-center"><Spinner animation="border" /></Col>
        </Row>
    </Container>
  )
}
