import React, { useEffect, useState } from "react"
import Reveal from "react-reveal/Reveal"
import { withRouter } from "react-router-dom"
import Footer from "../components/Footer"
import { projectList } from "../data/"
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
            {projectList.map((project) => {
              return (
                <div className="col-md-4 slick slickproject p-3">
                  <div className="slick-slide d-block">
                    <div>
                      <div className="itm">
                        <LinkWrap active={toCase === project.projectUrl}>
                          <Overlay
                            active={!!toCase}
                            onMouseDown={(e) => setCoords(e.nativeEvent.x)}
                            onMouseUp={(e) =>
                              handleCaseSwap(e.nativeEvent, project.projectUrl)
                            }
                          >
                            <div className="bg">
                              <img
                                src={project.coverUrl}
                                className="img-fluid"
                                alt="Imageworks"
                              />
                            </div>
                            <div className="desc">
                              <div className="tag">{project.category}</div>
                              <div className="name">{project.projectName}</div>
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
              )
            })}
          </div>
        </section>
      </Reveal>

      <Footer />
    </div>
  )
}

export default withRouter(Works)
