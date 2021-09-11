import React, { useEffect, useState } from "react"
import { withRouter } from "react-router"
import GreyLogo from "../Assets/logowhite.svg"
import {
  Body,
  Container,
  LinkTag,
  Overlaybg,
  Page,
  SocialContainer,
  Wrapper,
} from "../styles/Navigation.styles"
import NavButton from "./NavButton"

const NavigationMenu = ({ history, hasBackground, setBackground }) => {
  const [isOn, setState] = useState(false)
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const [linking, setLink] = useState("")

  useEffect(() => {
    !!linking &&
      setTimeout(() => {
        switch (linking) {
          case "home":
            history.push("/")
            setState(false)
            setLink("")
            break
          case "about":
            history.push("/about")
            setState(false)
            setLink("")
            break
          case "projects":
            history.push("/projects")
            setState(false)
            setLink("")
            break
          case "news":
            history.push("/news")
            setState(false)
            setLink("")
            break
          case "teams":
            history.push("/teams")
            setState(false)
            setLink("")
            break
          case "landwanted":
            history.push("/landwanted")
            setState(false)
            setLink("")
            break
          case "contact":
            history.push("/contact")
            setState(false)
            setLink("")
            break
          default:
            setLink("")
        }
        setBackground(false)
        window.scrollTo(0, 0)
      }, 0)
  }, [linking, history, setBackground])

  useEffect(() => {
    shouldAnimate &&
      !isOn &&
      setTimeout(() => {
        setShouldAnimate(false)
      }, 0)
  }, [shouldAnimate, isOn])

  const closeHandler = () => {
    setShouldAnimate(true)
    setState(!isOn)
  }

  const setLinkHandler = (text) => {
    setShouldAnimate(true)
    setLink(text)
  }

  useEffect(() => {
    const header = document.getElementById("header")
    const totop = document.getElementById("scroll-to-top")
    const sticky = header.offsetTop
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky + 0) {
        header.classList.add("sticky")
        totop.classList.add("show")
      } else {
        header.classList.remove("sticky")
        totop.classList.remove("show")
      }
    })
    return () => {
      window.removeEventListener("scroll", scrollCallBack)
    }
  }, [])

  return (
    <header>
      <div id="header"></div>
      <div className="navBar">
        <div className="navLogo">
          <div className="logo">
            <img
              onClick={() => setLinkHandler("home")}
              src={GreyLogo}
              className="img-fluid logolink"
              alt="#"
            />
            {/* <span
              onClick={() => openLinks("tel:+8801989359890")}
              className="callus"
            >
              Call Us: +880 19 8935 9890
            </span> */}
          </div>
        </div>
        <div className="navLinks">
          <span onClick={() => setLinkHandler("home")} className="links">
            Home
          </span>
          <span onClick={() => setLinkHandler("about")} className="links">
            About
          </span>
          <span onClick={() => setLinkHandler("projects")} className="links">
            Projects
          </span>
          <span onClick={() => setLinkHandler("news")} className="links">
            News
          </span>
          <span onClick={() => setLinkHandler("teams")} className="links">
            Our Teams
          </span>
          <span onClick={() => setLinkHandler("landwanted")} className="links">
            Land Wanted
          </span>
          <span onClick={() => setLinkHandler("contact")} className="links">
            Contact Us
          </span>
        </div>
      </div>
      <Wrapper open={isOn} shouldAnimate={shouldAnimate}>
        <Overlaybg
          open={isOn}
          shouldAnimate={shouldAnimate}
          onClick={closeHandler}
        />
        <Container
          open={isOn}
          onClick={closeHandler}
          hasBackground={hasBackground}
        >
          <NavButton open={isOn} />
        </Container>
        <Body className="midwrpr" open={isOn} shouldAnimate={shouldAnimate}>
          <div className="conPage">
            <Page
              className="mainBtn"
              variant="home"
              onClick={() => setLinkHandler("home")}
            >
              <LinkTag>Home</LinkTag>
            </Page>
            <Page
              className="mainBtn"
              variant="about"
              onClick={() => setLinkHandler("about")}
            >
              <LinkTag>About</LinkTag>
            </Page>
            <Page
              className="mainBtn"
              variant="work"
              onClick={() => setLinkHandler("projects")}
            >
              <LinkTag>Projects</LinkTag>
            </Page>
            <Page
              className="mainBtn"
              variant="about"
              onClick={() => setLinkHandler("news")}
            >
              <LinkTag>News</LinkTag>
            </Page>
            <Page
              className="mainBtn"
              variant="about"
              onClick={() => setLinkHandler("teams")}
            >
              <LinkTag>Our Teams</LinkTag>
            </Page>
            <Page
              className="mainBtn"
              variant="about"
              onClick={() => setLinkHandler("landwanted")}
            >
              <LinkTag>Land Wanted</LinkTag>
            </Page>
            <Page
              className="mainBtn"
              variant="about"
              onClick={() => setLinkHandler("contact")}
            >
              <LinkTag>Contact Us</LinkTag>
            </Page>
          </div>

          <div className="info">
            <span>+880 19 8935 9890</span>
            <span className="link">info@greydstudio.net</span>
            <span>
              House 44/i, Flat A1, Road 4, Block D Bashundhara R/A, Dhaka 1229.
            </span>
          </div>
        </Body>
        <SocialContainer className="soc-icon" open={isOn}>
          <span>Follow us:</span>
          <span className="socicon">
            <i className="fa fa-facebook-f"></i>
          </span>
          <span className="socicon">
            <i className="fa fa-linkedin"></i>
          </span>
          <span className="socicon">
            <i className="fa fa-twitter"></i>
          </span>
          <span className="socicon">
            <i className="fa  fa-instagram"></i>
          </span>
        </SocialContainer>
      </Wrapper>
    </header>
  )
}

export default withRouter(NavigationMenu)
