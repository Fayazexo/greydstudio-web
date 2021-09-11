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
      dots: false,
      infinite: false,
      speed: 500,
      autoPlay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 5000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
          },
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
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
      <div className="slick">
        <Slider {...settings}>
          <CustomSlide className="itm" index={1}>
            <div className="bg">
              <img
                src="./img/feature/architectural-design-consultancy.jpg"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className="desc">
              <div className="name">Architectural Consultancy</div>
            </div>
            <div className="flexxxo">
              <button type="button" class="btn btn-light color">
                Ongoing
              </button>
              <button type="button" class="btn btn-light color">
                Completed
              </button>
            </div>
          </CustomSlide>

          <CustomSlide className="itm" index={2}>
            <div className="bg">
              <img
                src="./img/feature/Building-Development.jpg"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className="desc">
              <div className="name">Building Development</div>
            </div>
            <div className="flexxxo">
              <button type="button" class="btn btn-light color">
                Residential
              </button>
              <button type="button" class="btn btn-light color">
                Commercial
              </button>
            </div>
          </CustomSlide>

          <CustomSlide className="itm" index={3}>
            <div className="bg">
              <img
                src="./img/feature/Construction-Management.jpg"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className="desc">
              <div className="name">Construction Management</div>
            </div>
            <div className="flexxxo">
              <button type="button" class="btn btn-light color">
                Ongoing
              </button>
              <button type="button" class="btn btn-light color">
                Completed
              </button>
            </div>
          </CustomSlide>
        </Slider>
        <Slider {...settings}>
          <CustomSlide className="itm" index={4}>
            <div className="bg">
              <img
                src="./img/feature/Interior-design.jpg"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className="desc">
              <div className="name">Interior Design</div>
            </div>
            <div className="flexxxo">
              <button type="button" class="btn btn-light color">
                Residential
              </button>
              <button type="button" class="btn btn-light color">
                Commercial
              </button>
            </div>
          </CustomSlide>
          <CustomSlide className="itm" index={4}>
            <div className="bg">
              <img
                src="./img/feature/Furniture-design.jpg"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className="desc">
              <div className="name">Furniture Design</div>
            </div>
            <div className="flexxxo">
              <button type="button" class="btn btn-light color">
                Home
              </button>
              <button type="button" class="btn btn-light color">
                Office
              </button>
            </div>
          </CustomSlide>
          <CustomSlide className="itm" index={5}>
            <div className="bg">
              <img
                src="./img/feature/Landscaping.jpg"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className="desc">
              <div className="name">Landscaping</div>
            </div>
            <div className="flexxxo">
              <button type="button" class="btn btn-light color">
                Ongoing
              </button>
              <button type="button" class="btn btn-light color">
                Completed
              </button>
            </div>
          </CustomSlide>
        </Slider>
      </div>
    )
  }
}
