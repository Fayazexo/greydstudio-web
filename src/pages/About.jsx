import React from "react"
import Reveal from "react-reveal/Reveal"
import { withRouter } from "react-router-dom"
import Accomplish from "../components/Accomplish"
import Footer from "../components/Footer"
import { Efect, Efect1, Efect2 } from "../styles/effect.styles"

const About = ({ history }) => (
  <div>
    <Efect />
    <Efect1 />
    <Efect2 />

    <div className="jumbotron head" />

    {/* <Reveal effect="fadeIn">
          <section className="jumbotron imgtop">
            <img src="./img/imgabout.jpg" className="img-fluid" alt="#" />
          </section>
        </Reveal> */}

    {/* <Reveal effect="fadeInUp">
      <section className="container-fluid">
        <div className="row m-2-hor">
          <div className="col-12">
            <div className="heading">Our Expertnesses</div>
          </div>
          <div className="col-12">
            <Carouselfeature />
          </div>
        </div>
      </section>
    </Reveal> */}

    <Reveal effect="fadeIn">
      <section className="container-fluid pb-2">
        <div className="row m-2-hor">
          <div className="col-md-4">
            <h1>About </h1>
            <h1>
              Grey.<span className="color">D'</span>Studio
            </h1>
          </div>
          <div className="col-md-8">
            <div className="content">
              Grey.D'Studio is an architectural consultancy & development agency
              that started its expedition back in 2013 and gained market
              popularity, retrieving its fame in 2017. On the journey, we
              accomplished several projects and construction throughout the
              country. The Grey.D'Studio team provides a bunch of skilled and
              experienced people who have their hands on devising creative
              interior design solutions.
            </div>
            <div className="content">
              From the balcony to the interiors of your dream room, we the
              Grey.D'Studio will provide you with the most preferable and
              desired architectural consultancy. Over the years we are truly
              gratified to attain the credence and love of our clients.
            </div>
          </div>
        </div>
      </section>
    </Reveal>

    <Reveal effect="fadeIn">
      <section className="container-fluid pb-2">
        <div className="row m-2-hor">
          <div className="col-md-4">
            <h1>
              Our <span className="color">Projects</span>
            </h1>
          </div>
          <div className="col-md-8">
            <div className="content">
              Our most propitious team has produced a collection of incredible
              works as they are displayed throughout the country. Over the years
              several projects have been accomplished around the capital. We are
              really thrilled to be the happiness of our clients and being a
              part of fulfilling their dreams.
            </div>
          </div>
        </div>
      </section>
    </Reveal>

    <Reveal effect="fadeIn">
      <section className="container-fluid pb-8">
        <div className="row m-2-hor">
          <div className="col-md-4">
            <h1>
              Our <span className="color">Mission</span>
            </h1>
          </div>
          <div className="col-md-8">
            <div className="content">
              Our mission is to present our clients the best they could perceive
              having to dwell in a domestic environment and getting the global
              endurance, to ensure the entire worth of their money to our most
              promising service and amenities.
            </div>
          </div>
        </div>
      </section>
    </Reveal>

    <Reveal effect="fadeInUp">
      <Accomplish />
    </Reveal>

    {/* <Reveal effect="fadeInUp">
          <Abouthome />
        </Reveal> */}

    {/* <section className="container-fluid bggray mt-5 pb-0">
          <div className="row m-2-hor">
            <div className="col-12">
              <Carouselclient />
            </div>
          </div>
        </section> */}

    {/* <section className="container-fluid bggray">
          <div className="row m-2-hor">
            <div className="col-12">
              <Carouselclientb />
            </div>
          </div>
        </section> */}

    {/* <Reveal effect="fadeInUp">
          <section className="container-fluid">
            <div className="row m-2-hor">
              <div className="col-12">
                <div className="heading">Our Team</div>
              </div>
              <div className="col-12">
                <Carouselteam />
              </div>
            </div>
          </section>
        </Reveal> */}

    {/* <Reveal effect="fadeInUp">
          <Accomplish />
        </Reveal> */}

    {/* <Reveal effect="fadeInUp">
          <section className="container-fluid py-0">
            <div className="row m-2-hor">
              <div className="col-12">
                <div className="heading">Our Projects</div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 p-0">
                <Carouselprojects />
              </div>
            </div>
          </section>
        </Reveal> */}

    <Footer />
  </div>
)

export default withRouter(About)
