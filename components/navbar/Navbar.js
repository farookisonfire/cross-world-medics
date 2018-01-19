import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Icon } from 'semantic-ui-react';
import Transition from 'react-transition-group/Transition';
import { typeformURL } from '../../lib/constants';
import {
  mobileNavOpen,
  defaultStyle,
  transitionStyles,
  mobileNavCloseIcon,
  mobileNavOpenLogo,
  mobileNavLinks,
  mobileNavLink,
  mobileNavLinkLittle,
  mobileNavLinkContainer,
  mobileNavLinkLittleContainer,
} from './navStyles';

const duration = 300;

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMobileNav: false,
    };

    this.handleMobileIconClick = this.handleMobileIconClick.bind(this);
  }

  handleMobileIconClick() {
    const newState = {
      showMobileNav: !this.state.showMobileNav,
    };
    this.setState(newState);
  }

  render() {
    const NavIconWhite = (
      <Icon
        size="big"
        name="content"
        inverted
        color="grey"
        onClick={this.handleMobileIconClick} />
    );

    const MobileNavOpen = (
      <div className="mobile-nav-open" style={mobileNavOpen}>
        <div style={{
          backgroundColor: 'rgba(200,200,200,.7)',
          height: 60,
          borderBottom: '1px solid rgba(250,250,250,.3)'
        }}>
          <a href="/">
            <img alt="heart" className="nav-logo" style={mobileNavOpenLogo} src="https://s3.amazonaws.com/health-corps-international/CWM.png" />
          </a>
          <div className="mobile-nav-close-icon" style={mobileNavCloseIcon}>
            {NavIconWhite}
          </div>
        </div>
        <div className="mobile-nav-content">
          <ul style={mobileNavLinks}>
            <li style={mobileNavLinkContainer}>
              <Link href="/admissions"><p style={mobileNavLink}>Admissions</p></Link>
            </li>
            <li style={mobileNavLinkContainer}>
              <Link href="/learn"><a style={mobileNavLink}>Learn More</a></Link>
            </li>
            <li style={mobileNavLinkContainer}>
              <Link href="/experience"><a style={mobileNavLink}>The Experience</a></Link>
            </li>
            <li style={mobileNavLinkContainer}>
              <Link href="/contact"><a style={mobileNavLink}>Contact</a></Link>
            </li>
            <li style={mobileNavLinkContainer}>
              <a style={mobileNavLink} onClick={() => window.open(`${typeformURL}webhome`, '_blank')}>Apply Now</a>
            </li>
          </ul>
        </div>
      </div>
    );

    const MobileNav = MobileNavOpen;
    const {
      pageName = '',
    } = this.props;
    const isHome = pageName === '/';

    return (
      <div className={isHome ? 'navbar' : 'navbar-dark'}>
        <div className="navbar-elements">
          <a href="/">
            <img alt="heart" className="nav-logo" src="https://s3.amazonaws.com/health-corps-international/CWM.png" />
          </a>
          <ul className="nav-items">
            <li className="nav-item">
              <Link href="/admissions" >
                <a className={pageName === '/admissions' ? 'nav-link-dark active' : 'nav-link-dark'}> Admissions </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/learn">
                <a className={pageName === '/learn' ? 'nav-link-dark active' : 'nav-link-dark'}> Learn More </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/experience">
                <a className={pageName === '/experience' ? 'nav-link-dark active' : 'nav-link-dark'}> The Experience </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a className={pageName === '/contact' ? 'nav-link-dark active' : 'nav-link-dark'}>Contact </a>
              </Link>
            </li>
          </ul>
          <ul className="navbar-apply">
            <li>
              <p onClick={() => window.open(`${typeformURL}webhome`, '_blank')} className="navbar-apply-now">Apply Now</p>
            </li>
          </ul>
        </div>
        <div className="navbar-mobile">
          <a href="/">
            <img alt="heart" className="nav-logo-mobile" src="https://s3.amazonaws.com/health-corps-international/CWM.png" />
          </a>
          <div className="mobile-nav-icon">
            { NavIconWhite }
          </div>
          <Transition in={this.state.showMobileNav} timeout={duration}>
            {state => (
              <div style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}>
                {MobileNav}
              </div>
            )}
          </Transition>
        </div>
        <style jsx>{`
          .navbar {
            background-color: rgba(31,30,29,.5);
            margin-top: 0;
            position: absolute;
            padding-top: 5px;
            width: 100%;
            top: 0;
          }

          .navbar-dark {
            background-color: rgba(255,255,255,.75);
            margin-top: 0;
            position: absolute;
            padding-top: 5px;
            width: 100%;
            top: 0;
            height: 60px;
            border-bottom: 1px solid rgba(50,50,50,.3);
          }

          .navbar-elements {
            margin-left: 40px;
          }

          .nav-logo {
            width: 200px;
            position: absolute;
            top: -18px;
          }

          .nav-items {
            display: flex;
            list-style: none;
            position: absolute;
            left: 210px;
            top: 9px;
          }

          .nav-link {
            border-radius: 4px;
            padding: 8px;
            text-decoration: none;
            transition-property: background-color, color;
            transition-duration: 1s, 1s;
            color: black;
          }

          .nav-link:visited {
            color:black;
          }

          .nav-link:hover {
            background-color: rgba(50,50,50,.6);
            border: 1px solid #FB605B;
            border-radius: 4px;
            color: white;
          }

          .nav-item {

          }

          .nav-link-dark {
            border-radius: 4px;
            color: black;
            padding: 8px;
            text-decoration: none;
          }

          .nav-link-dark:visited {
            color: black;
          }

          .nav-link-dark:hover {
            border-radius: 4px;
            color: black;
          }
          .active {
            border-bottom: 2px solid red;
          }
          .navbar-apply {
            display: inline-block;
            list-style: none;
            position: absolute;
            top: -9px;
            right: 5%;
          }
          .navbar-apply-now {
            transition: 1s;
            padding: 15px 20px;
            color: white;
            cursor: pointer;
            background: rgb(0,196,204);
          }

          .navbar-mobile {
            display: none;
          }

          @media (max-width: 768px) {
            .navbar-elements {
              display: none;
            }

            .navbar-mobile {
              display: flex;
            }
            
            .navbar-logo {
              flex-grow: 1;
            }

            .nav-logo-mobile {
              margin-left: 15px;
              width: 150px;
              position: absolute;
              top: -6px;
            }

            .mobile-nav-icon {
              position: absolute;
              right: 15px;
              top: 15px;
              cursor: pointer;
            }

            .mobile-nav-open {
              background-color: black;
              height: 100vh;
              position: absolute;
              top: 0;
              width: 100%;
              z-index: 1;
            }

            .mobile-nav-close-icon {
              position: absolute;
              right: 15px;
              top: 33px;
              cursor: pointer;
              z-index: 2;
            }
          }
          `}</style>
      </div>
    );
  }
}

export default Navbar;
