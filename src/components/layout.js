/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Container, Row, Col } from 'react-bootstrap';
import { ScrollToTop } from ".";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <footer className='py-3'>
        <Container className="p-4 text-center">
          <Row>
            <Col sm></Col>
            <Col sm>© MCC Ukraine {new Date().getFullYear()}</Col>
            <Col sm className='text-md-right'>Created by <a href="mailto:Julian.maljuk@gmail.com">Julian Maliuk</a></Col>
          </Row>
        </Container>
      </footer>
      <ScrollToTop />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
