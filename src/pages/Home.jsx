import React from "react"

import Reveal from "react-reveal/Reveal"
import { withRouter } from "react-router-dom"
import styled from "styled-components"
import Abouthome from "../components/Abouthome"
import Carouselfeature from "../components/Carouselfeature"
import Carouselprojects from "../components/Carouselprojects"
import Footer from "../components/Footer"
import Slider from "../components/Sliderhome"
import { Efect } from "../styles/effect.styles"
import Gallery from "../components/Gallery"

const FlexContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 50px;
  gap: 40px;
  justify-content: center;
`

const Gap = styled.div`
  margin: 100px;
`

const GapMini = styled.div`
  margin: 50px;
`

export const InstaImages = [
  { src: "./img/instagram/image-11.jpg", alt: "Instagram Feed Image" },
  { src: "./img/instagram/image-12.jpg", alt: "Instagram Feed Image" },
  { src: "./img/instagram/image-13.jpg", alt: "Instagram Feed Image" },
  { src: "./img/instagram/image-14.jpg", alt: "Instagram Feed Image" },
  { src: "./img/instagram/image-15.jpg", alt: "Instagram Feed Image" },
  { src: "./img/instagram/image-16.jpg", alt: "Instagram Feed Image" },
].reverse()

const videoData = [
  {
    link: "https://www.youtube.com/embed/FyJsKRXnGkM",
  },
  {
    link: "https://www.youtube.com/embed/mGKykmmdkJc",
  },
  {
    link: "https://www.youtube.com/embed/ArBskCj6Vpg",
  },
]

const Home = ({ history }) => {
  return (
    <div>
      <Efect />

      <Reveal effect="fadeIn">
        <section className="jumbotron jumbomain">
          <Slider />
        </section>
      </Reveal>

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
        <FlexContainer>
          {videoData.map((video) => (
            <iframe
              width="580"
              height="315"
              src={video.link}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          ))}
        </FlexContainer>
      </Reveal>
      <Gap />
      <Reveal effect="fadeInUp">
        <FlexContainer>
          <img width="40px" height="40px" src="./img/insta-ico.png" alt="" />
          <h2>Instagram</h2>
        </FlexContainer>
        <Gallery Images={InstaImages} />
        <GapMini />
        <FlexContainer>
          <a href="https://www.instagram.com/grey.dstudio/">See more</a>
        </FlexContainer>
      </Reveal>
      <GapMini />
      <Footer />
    </div>
  )
}

export default withRouter(Home)
