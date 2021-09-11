import React, { useEffect, useState } from "react"
import Reveal from "react-reveal/Reveal"
import { withRouter } from "react-router-dom"
import Footer from "../components/Footer"
import { Efect, Efect1, Efect2 } from "../styles/effect.styles"
import { LinkWrap, Overlay } from "../styles/Work.styles"

const Works = ({ history }) => {
  const [toCase, setCase] = useState("")
  const [coord, setCoords] = useState()

  useEffect(() => {
    toCase &&
      setTimeout(() => {
        history.push(toCase)
      }, 600)
  }, [toCase, history])

  const handleCaseSwap = (e, uri) =>
    e.x < coord + 15 && e.x > coord - 15 && setCase(uri)

  return (
    <div>
      <Efect />
      <Efect1 />
      <Efect2 />

      <div className="jumbotron head" />

      <Reveal effect="fadeInUp">
        <section className="container-fluid pb-0">
          <div className="row m-2-hor">
            <div className="col-md-12">
              <h1 className="heading mt-5">
                Find design ideas from our design gallery
              </h1>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className="container-fluid">
          <div className="row m-2-hor">
            <div className="col-md-4 slick slickproject p-3">
              <div className="slick-slide d-block">
                <div>
                  <div className="itm">
                    <LinkWrap active={toCase === "/akramalikhan-interior"}>
                      <Overlay
                        active={!!toCase}
                        onMouseDown={(e) => setCoords(e.nativeEvent.x)}
                        onMouseUp={(e) =>
                          handleCaseSwap(
                            e.nativeEvent,
                            "/akramalikhan-interior"
                          )
                        }
                      >
                        <div className="bg">
                          <img
                            src="./img/projects/Project-Banner-Akram-Ali-Khan-1st-Floor.jpg"
                            className="img-fluid"
                            alt="Imageworks"
                          />
                        </div>
                        <div className="desc">
                          <div className="tag">Interior</div>
                          <div className="name">Akram Ali Khan 1st Floor</div>
                        </div>
                        <div className="icon">
                          <span>View Project</span>
                        </div>
                      </Overlay>
                    </LinkWrap>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 slick slickproject p-3">
              <div className="slick-slide d-block">
                <div>
                  <div className="itm">
                    <LinkWrap active={toCase === "/tushar-residence"}>
                      <Overlay
                        active={!!toCase}
                        onMouseDown={(e) => setCoords(e.nativeEvent.x)}
                        onMouseUp={(e) =>
                          handleCaseSwap(e.nativeEvent, "/tushar-residence")
                        }
                      >
                        <div className="bg">
                          <img
                            src="./img/projects/Project-Banner-Tushar-Residence.jpg"
                            className="img-fluid"
                            alt="Imageworks"
                          />
                        </div>
                        <div className="desc">
                          <div className="tag">Exterior</div>
                          <div className="name">Tushar Residence</div>
                        </div>
                        <div className="icon">
                          <span>View Project</span>
                        </div>
                      </Overlay>
                    </LinkWrap>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 slick slickproject p-3">
              <div className="slick-slide d-block">
                <div>
                  <div className="itm">
                    <LinkWrap active={toCase === "/kalam-interior"}>
                      <Overlay
                        active={!!toCase}
                        onMouseDown={(e) => setCoords(e.nativeEvent.x)}
                        onMouseUp={(e) =>
                          handleCaseSwap(e.nativeEvent, "/kalam-interior")
                        }
                      >
                        <div className="bg">
                          <img
                            src="./img/projects/Project-Banner-Kalam-Interior.jpg"
                            className="img-fluid"
                            alt="Imageworks"
                          />
                        </div>
                        <div className="desc">
                          <div className="tag">Interior</div>
                          <div className="name">Kalam</div>
                        </div>
                        <div className="icon">
                          <span>View Project</span>
                        </div>
                      </Overlay>
                    </LinkWrap>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 slick slickproject p-3">
              <div className="slick-slide d-block">
                <div>
                  <div className="itm">
                    <LinkWrap active={toCase === "/maruf-interior"}>
                      <Overlay
                        active={!!toCase}
                        onMouseDown={(e) => setCoords(e.nativeEvent.x)}
                        onMouseUp={(e) =>
                          handleCaseSwap(e.nativeEvent, "/maruf-interior")
                        }
                      >
                        <div className="bg">
                          <img
                            src="./img/projects/Project-Banner-Maruf-Interior.jpg"
                            className="img-fluid"
                            alt="Imageworks"
                          />
                        </div>
                        <div className="desc">
                          <div className="tag">Interior</div>
                          <div className="name">Maruf</div>
                        </div>
                        <div className="icon">
                          <span>View Project</span>
                        </div>
                      </Overlay>
                    </LinkWrap>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 slick slickproject p-3">
              <div className="slick-slide d-block">
                <div>
                  <div className="itm">
                    <LinkWrap active={toCase === "/bizli-plaza"}>
                      <Overlay
                        active={!!toCase}
                        onMouseDown={(e) => setCoords(e.nativeEvent.x)}
                        onMouseUp={(e) =>
                          handleCaseSwap(e.nativeEvent, "/bizli-plaza")
                        }
                      >
                        <div className="bg">
                          <img
                            src="./img/projects/Project-Banner-BIZLI-PLAZA.jpg"
                            className="img-fluid"
                            alt="Imageworks"
                          />
                        </div>
                        <div className="desc">
                          <div className="tag">Exterior</div>
                          <div className="name">Bizli Plaza</div>
                        </div>
                        <div className="icon">
                          <span>View Project</span>
                        </div>
                      </Overlay>
                    </LinkWrap>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 slick slickproject p-3">
              <div className="slick-slide d-block">
                <div>
                  <div className="itm">
                    <LinkWrap active={toCase === "/mahadi&farah-interior"}>
                      <Overlay
                        active={!!toCase}
                        onMouseDown={(e) => setCoords(e.nativeEvent.x)}
                        onMouseUp={(e) =>
                          handleCaseSwap(
                            e.nativeEvent,
                            "/mahadi&farah-interior"
                          )
                        }
                      >
                        <div className="bg">
                          <img
                            src="./img/projects/Project-Banner-Mahadi-&-Farah-Interior.jpg"
                            className="img-fluid"
                            alt="Imageworks"
                          />
                        </div>
                        <div className="desc">
                          <div className="tag">Interior</div>
                          <div className="name">Mahadi & Farah</div>
                        </div>
                        <div className="icon">
                          <span>View Project</span>
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

export default withRouter(Works)
