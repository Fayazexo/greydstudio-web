import React from "react"

export default () => (
  <section className="container-fluid">
    <div className="row m-2-hor">
      <div className="col-md-6 pt-5">
        <div className="col-home">
          <div className="thumb">
            <img
              src="./img/Home-page-alone-photo.jpg"
              className="img-fluid"
              alt="#"
            />
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="dflex-center">
          <div className="col-home mt-md-0 mt-5">
            <div className="heading">
              Five Reasons Why You Should Choose{" "}
              <span className="color">Grey.D'Studio</span>
            </div>
            <div className="content">
              We believe that interior design is more than great functionality
              and beautiful aesthetics. We aim to make your home interiors a
              reflection of your personality. Your home should be something that
              you and your family take pride in and love to spend time in.
            </div>
            <ul className="list-home">
              <li>Attention To The Details</li>
              <li>Quality Of Our Work</li>
              <li>We Help You Save Money</li>
              <li>Using New Technologies</li>
              <li>Beautiful + Comfortable</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
)
