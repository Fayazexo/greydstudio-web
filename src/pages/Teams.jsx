import React from "react"
import Reveal from "react-reveal/Reveal"
import { withRouter } from "react-router-dom"
import Footer from "../components/Footer"
import TeamsCor from "../components/TeamsCor"
import { Efect, Efect1, Efect2 } from "../styles/effect.styles"

const Teams = ({ history }) => {
  return (
    <div>
      <Efect />
      <Efect1 />
      <Efect2 />

      <div className="jumbotron head" />

      <Reveal effect="fadeInUp">
        <section className="container-fluid">
          <div className="row m-2-hor">
            <div className="col-12">
              <div className="heading">Our Team</div>
            </div>
            <div className="col-12">
              <TeamsCor />
            </div>
          </div>
        </section>
      </Reveal>
      <Footer />
    </div>
  )
}

export default withRouter(Teams)
