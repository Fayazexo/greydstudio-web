import React, { Component, createRef, Fragment } from "react"
import Reveal from "react-reveal/Reveal"
import { withRouter } from "react-router"
import Footer from "../components/Footer"
import Gallery from "../components/Gallery"
import ProjectView from "../components/ProjectView"
import {
  BackArrow,
  BackButton,
  CaseWrapper,
  ClientTag,
  Hero,
  TechniqueTitle,
  Title,
} from "../styles/Case.styles"
import { Efectr, Efectr1, Efectr2 } from "../styles/effect.styles"

export const Images = [
  { src: "./img/projects/Kalam/Kalam-1.jpg", alt: "Kalam Interior" },
  { src: "./img/projects/Kalam/Kalam-2.jpg", alt: "Kalam Interior" },
  { src: "./img/projects/Kalam/Kalam-3.jpg", alt: "Kalam Interior" },
  { src: "./img/projects/Kalam/Kalam-4.jpg", alt: "Kalam Interior" },
  { src: "./img/projects/Kalam/Kalam-5.jpg", alt: "Kalam Interior" },
  { src: "./img/projects/Kalam/Kalam-6.jpg", alt: "Kalam Interior" },
]

export const Infos = [
  {
    title: "Architech",
    content: "Rahmatul Aziz",
  },
  {
    title: "Land Area",
    content: "31.94 katha",
  },
  {
    title: "Orientation of the Land",
    content: "North-South",
  },
  {
    title: "Facing",
    content: "South",
  },
  {
    title: "Front Road",
    content: "52 feet wide",
  },
  {
    title: "Number of Apartments",
    content: "24",
  },
  {
    title: "Size of Units",
    content: "6,100 - 6,800 sft (approx)",
  },
  {
    title: "Number of Basements",
    content: "02",
  },
  {
    title: "Number of Car Parking",
    content: "102",
  },
  {
    title: "RAJUK Approval No.",
    content: "127/15/420",
  },
]

export const TableData = [
  {
    title: "Category",
    content: "Interiors",
  },
  {
    title: "Client",
    content: "Kalam Interior",
  },
  {
    title: "Status",
    content: "Ongoing",
  },
  {
    title: "Project Type",
    content: "Interior Design",
  },
]

const projectSummary = {
  title: "Kalam",
  category: "Interiors",
  details:
    "The large wood panel of this entertainment unit is what gives it the classic, warm feel. the drawers and cupboards ensure that there is plenty of storage for all your electronics and knick-knacks. go for this classic wood and white combo or pick shades that go well with the rest of your decor",
}

const backgroundUrl = "./img/projects/big/Project-Cover-Kalam-Interior.jpg"

export const Tags = ["Inspiration", "Decoration", "Interior", "Minimal"]

export const VideoUrl = "https://www.youtube.com/embed/mGKykmmdkJc"

export const ScrollTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0, 0), [location])
  return children
}

class Case extends Component {
  constructor(props) {
    super(props)
    this.introRef = createRef()

    this.state = {
      toBack: false,
      introTop: 0,
      hasBackground: false,
      animateCase: "",
    }
  }

  componentDidUpdate() {
    if (this.state.toBack) {
      setTimeout(() => {
        this.props.history.push("/projects")
      }, 400)
    }
    if (this.state.animateCase) {
      setTimeout(() => {
        this.props.history.push(this.state.animateCase)
        window.scrollTo(0, 0)
      }, 400)
    }
  }

  render() {
    return (
      <Fragment>
        <Efectr />
        <Efectr1 />
        <Efectr2 />
        <ScrollTop>
          <CaseWrapper>
            <Reveal effect="fadeIn">
              <Hero
                className="mainhero"
                style={{
                  backgroundImage: `url(${backgroundUrl})`,
                }}
              >
                <div className="herocaption">
                  <BackButton
                    className="backdetail"
                    onClick={() =>
                      this.setState({ toBack: true, hasBackground: false })
                    }
                    toBack={this.state.toBack}
                    hasBackground={this.state.hasBackground}
                  >
                    <BackArrow src="./img/back.png" alt="Back to Projects" />
                    <span>Back </span>
                  </BackButton>
                  <ClientTag>{projectSummary.category}</ClientTag>
                  <Title>{projectSummary.title}</Title>
                  <TechniqueTitle></TechniqueTitle>
                </div>
              </Hero>
            </Reveal>

            <section className="container-fluid" id="detailproject">
              <div className="row m-2-hor">
                <div className="col-md-8">
                  <p className="content">{projectSummary.details}</p>
                </div>
                <div className="col-md-4 sticky">
                  <ul className="detailproject pb-4">
                    {TableData.map((data) => {
                      return (
                        <li>
                          <span className="tile">{data.title}</span>
                          <span>{data.content}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </section>

            <ProjectView Infos={Infos} Images={Images} VideoUrl={VideoUrl}>
              <Gallery Images={Images} />
            </ProjectView>

            <div className="col-md-12">
              <div className="tags">
                <span className="heading">Tags :</span>

                {Tags.map((tag) => (
                  <span className="content">{tag}</span>
                ))}
              </div>
            </div>
            <div className="col-md-12">
              <div className="share">
                <span className="heading">Share :</span>
                <span className="content">
                  <i
                    onClick={() =>
                      window.open(
                        `https://www.facebook.com/share.php?u=${window.location.href}`
                      )
                    }
                    className="fa fa-facebook-f"
                  ></i>
                </span>
              </div>
            </div>
          </CaseWrapper>
        </ScrollTop>

        <Footer />
      </Fragment>
    )
  }
}

export default withRouter(Case)
