import React from "react"
import Reveal from "react-reveal/Reveal"
import { withRouter } from "react-router-dom"
import Abouthome from "../components/Abouthome"
import Carouselfeature from "../components/Carouselfeature"
import Carouselprojects from "../components/Carouselprojects"
import Footer from "../components/Footer"
import Slider from "../components/Sliderhome"
import { Efect } from "../styles/effect.styles"
import { LinkWrap, Overlay } from "../styles/Work.styles"

const Home = ({ history }) => {
  return (
    <div>
      <Efect />

      <Reveal effect="fadeIn">
        <section className="jumbotron jumbomain">
          <Slider />
        </section>
      </Reveal>

      {/* <Featurehome /> */}

      <Reveal effect="fadeInUp">
        <Abouthome />
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className="container-fluid">
          <div className="row m-2-hor">
            <div className="col-12">
              <div className="heading">What we have expertise on</div>
            </div>
            <div className="col-12">
              <Carouselfeature />
            </div>
          </div>
        </section>
      </Reveal>

      {/* <Reveal effect="fadeInUp">
        <section className="container-fluid py-0">
          <div className="row m-2-hor">
            <div className="col-12">
              <Carouselclient />
            </div>
          </div>
        </section>
      </Reveal> */}

      {/* <Reveal effect="fadeInUp">
        <section className="container-fluid">
          <div className="row m-2-hor">
            <div className="col-12">
              <Carouselclientb />
            </div>
          </div>
        </section>
      </Reveal> */}

      <Reveal effect="fadeInUp">
        <section className="container-fluid py-0">
          <div className="row m-2-hor">
            <div className="col-12">
              <div className="heading">Projects we worked on</div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 p-0">
              <Carouselprojects />
            </div>
          </div>
        </section>
      </Reveal>

      {/* <Reveal effect="fadeInUp">
        <section className="container-fluid">
          <div className="row m-2-hor">
            <div className="col-12">
              <div className="heading">Meet our Team</div>
            </div>
            <div className="col-12">
              <TeamsCor />
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <Accomplish />
    </Reveal>*/}
      <Reveal effect="fadeInUp">
        <section className="container-fluid pb-0">
          <div className="row m-2-hor">
            <div className="col-md-12">
              <h1 className="heading mt-5">Latest News About Our Works</h1>
            </div>
          </div>
        </section>
      </Reveal>
      <Reveal effect="fadeInUp">
        <section className="container-fluid">
          <div className="row m-2-hor">
            <div className="col-md-4 slick slicknews p-3 mb-0">
              <div className="slick-slide d-block">
                <div className="mr-0">
                  <div className="itm mr-0">
                    <LinkWrap>
                      <Overlay>
                        <div className="bg">
                          <img
                            src="./img/news/news1.jpg"
                            className="img-fluid"
                            alt="Imageteam"
                          />
                        </div>
                        <div className="desc">
                          <div className="date"> Aug 24, 2021</div>
                          <div className="name">
                            Project GREEN EDGE by Grey.D'Studio
                          </div>
                        </div>
                        <div className="icon">
                          <span
                            onClick={() =>
                              window.open("https://youtu.be/ArBskCj6Vpg")
                            }
                          >
                            Watch on YouTube
                          </span>
                        </div>
                      </Overlay>
                    </LinkWrap>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 slick slicknews p-3 mb-0">
              <div className="slick-slide d-block">
                <div className="mr-0">
                  <div className="itm mr-0">
                    <LinkWrap>
                      <Overlay>
                        <div className="bg">
                          <img
                            src="./img/news/news2.jpg"
                            className="img-fluid"
                            alt="Imageteam"
                          />
                        </div>
                        <div className="desc">
                          <div className="date"> Mar 12, 2021</div>
                          <div className="name">
                            Berger Home Diaries - Fabulous House 2
                          </div>
                        </div>
                        <div className="icon">
                          <span
                            onClick={() =>
                              window.open("https://youtu.be/FyJsKRXnGkM")
                            }
                          >
                            Watch on YouTube
                          </span>
                        </div>
                      </Overlay>
                    </LinkWrap>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 slick slicknews p-3 mb-0">
              <div className="slick-slide d-block">
                <div className="mr-0">
                  <div className="itm mr-0">
                    <LinkWrap>
                      <Overlay>
                        <div className="bg">
                          <img
                            src="./img/news/news3.jpg"
                            className="img-fluid"
                            alt="Imageteam"
                          />
                        </div>
                        <div className="desc">
                          <div className="date"> Sept 08, 2020</div>
                          <div className="name">
                            Berger Home Diaries - Fabulous House 1
                          </div>
                        </div>
                        <div className="icon">
                          <span
                            onClick={() =>
                              window.open("https://youtu.be/mGKykmmdkJc")
                            }
                          >
                            Watch on YouTube
                          </span>
                        </div>
                      </Overlay>
                    </LinkWrap>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Footer />
    </div>
  )
}

export default withRouter(Home)
