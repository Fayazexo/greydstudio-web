import React, { Component } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props
    return <div {...props}></div>
  }
}

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 5000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }

    return (
      <div className="slick slickproject">
        <Slider {...settings}>
          <CustomSlide className="itm" index={1}>
            <div
              onClick={() => window.open("/akramalikhan-interior")}
              className="bg"
            >
              <img
                src="./img/projects/Project-Banner-Akram-Ali-Khan-1st-Floor.jpg"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className="desc">
              <div className="tag">Interior</div>
              <div className="name">Akram Ali Khan 1st Floor</div>
            </div>
            <div className="icon">
              <span>View Project</span>
            </div>
          </CustomSlide>

          <CustomSlide className="itm" index={2}>
            <div
              onClick={() => window.open("/tushar-residence")}
              className="bg"
            >
              <img
                src="./img/projects/Project-Banner-Emon-Interior.jpg"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className="desc">
              <div className="tag">Exterior</div>
              <div className="name">Tushar Residence</div>
            </div>
            <div className="icon">
              <span>View Project</span>
            </div>
          </CustomSlide>

          <CustomSlide className="itm" index={3}>
            <div onClick={() => window.open(`/kalam-interior`)} className="bg">
              <img
                src="./img/projects/Project-Banner-Kalam-Interior.jpg"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className="desc">
              <div className="tag">Interior</div>
              <div className="name">Kalam</div>
            </div>
            <div className="icon">
              <span>View Project</span>
            </div>
          </CustomSlide>

          <CustomSlide className="itm" index={4}>
            <div onClick={() => window.open("/maruf-interior")} className="bg">
              <img
                src="./img/projects/Project-Banner-Maruf-Interior.jpg"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className="desc">
              <div className="tag">Interior</div>
              <div className="name">Maruf</div>
            </div>
            <div className="icon">
              <span>View Project</span>
            </div>
          </CustomSlide>

          <CustomSlide className="itm" index={5}>
            <div onClick={() => window.open("/bizli-plaza")} className="bg">
              <img
                src="./img/projects/Project-Banner-BIZLI-PLAZA.jpg"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className="desc">
              <div className="tag">Exterior</div>
              <div className="name">Bizli Plaza</div>
            </div>
            <div className="icon">
              <span>View Project</span>
            </div>
          </CustomSlide>

          <CustomSlide className="itm" index={6}>
            <div
              onClick={() => window.open("/mahadi&farah-interior")}
              className="bg"
            >
              <img
                src="./img/projects/Project-Banner-Mahadi-&-Farah-Interior.jpg"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className="desc">
              <div className="tag">Interior</div>
              <div className="name">Mahadi & Farah</div>
            </div>
            <div className="icon">
              <span>View Project</span>
            </div>
          </CustomSlide>
        </Slider>
      </div>
    )
  }
}
