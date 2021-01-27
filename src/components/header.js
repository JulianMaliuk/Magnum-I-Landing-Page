// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Button, Nav } from 'react-bootstrap';
import { changeLocale, useIntl, FormattedMessage } from "gatsby-plugin-intl"

const Header = () => {
  const intl = useIntl()
  
  return (
    <header>
      <Navbar variant="dark" expand="sm">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#reliable-protection"><FormattedMessage id='AboutSeries' /></Nav.Link>
            <Nav.Link href="#selection-system"><FormattedMessage id='ChooseWithUs' /></Nav.Link>
            <Nav.Link href="#systems"><FormattedMessage id='SeriesOverview' /></Nav.Link>
            <Nav.Link href="#faq"><FormattedMessage id='TypicalQuestions' /></Nav.Link>
            <Nav.Link href="#contacts"><FormattedMessage id='Contacts' /></Nav.Link>
              <Button 
                className="mx-1 mb-2 mb-sm-2 mb-md-0" 
                size="sm" 
                variant="outline-info" 
                active={intl.locale === 'uk'}
                onClick={() => changeLocale('uk')}>
                  ua</Button>
              <Button 
                className="mx-1" 
                size="sm" 
                variant="outline-info" 
                active={intl.locale === 'ru'}
                onClick={() => changeLocale('ru')}>
                  ru</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </ header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
