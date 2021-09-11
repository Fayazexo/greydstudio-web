import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Reveal from "react-reveal/Reveal"
import { withRouter } from "react-router-dom"
import Footer from "../components/Footer"
import { Efect, Efect1, Efect2 } from "../styles/effect.styles"

const Contact = ({ history }) => {
  const [showMessage, setShowMessage] = useState(false)
  const [showError, setShowError] = useState(false)
  const { register, handleSubmit } = useForm("")

  async function pd(u = "", d = {}) {
    const r = await fetch(u, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(d),
    })
    return r.json()
  }
  async function os(ir) {
    const { n, e, p, m } = ir
    pd("http://167.71.205.73/contact-forms", {
      Name: n,
      Email: e,
      Phone: p,
      Message: m,
    }).then((d) => {
      if (d.statusCode === 400) {
        setTimeout(() => {
          setShowError(true)
        }, 1000)
        setTimeout(() => {
          setShowError(false)
        }, 5000)
      } else {
        setTimeout(() => {
          setShowMessage(true)
        }, 1000)
        setTimeout(() => {
          setShowMessage(false)
        }, 5000)
      }
    })
  }

  return (
    <div>
      <Efect />
      <Efect1 />
      <Efect2 />

      <div className="jumbotron head" />

      <Reveal effect="fadeInUp">
        <section className="container">
          <div className="row">
            <div className="col-12">
              <h1>
                Get in touch with us to Design <br />
                your Dream home
              </h1>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className="container pt-0">
          <div className="row">
            <div className="col-md-6">
              <div className="text-side">
                <h3 className="heading">
                  Talk with our expert <span class="color">D'</span>esigners{" "}
                </h3>
                <p>
                  Just with few clicks, you can start talking with us about your
                  dream home design, Use the form to submit your information and
                  we will be in touch right away.
                </p>
                <div className="address">
                  <div className="heading">Our Office</div>
                  <div className="list">
                    <i className="fa fa-map-marker"></i>
                    House 44/i, Flat A1, Road 4, Block D Bashundhara R/A, Dhaka
                    1229.
                  </div>
                  <div className="list">
                    <i className="fa fa-envelope-o"></i>
                    <a
                      href="mailto:contact_info@homekins.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      info@greydstudio.net
                    </a>
                  </div>
                  <div className="list">
                    <i className="fa fa-phone"></i>
                    +880 19 8935 9890
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-side">
                <form className="formcontact" onSubmit={handleSubmit(os)}>
                  <label>Name</label>
                  <input
                    placeholder="Enter your name"
                    type="text"
                    name="name"
                    {...register("n", { required: true })}
                  />
                  <label>Email</label>
                  <input
                    placeholder="Enter your email address"
                    type="email"
                    name="email"
                    {...register("e", {
                      required: true,
                    })}
                  />
                  <label>Phone</label>
                  <input
                    placeholder="Enter your phone number"
                    type="phone"
                    name="phone"
                    {...register("p", {
                      required: true,
                    })}
                  />
                  <label>Message</label>
                  <textarea
                    placeholder="Enter your message"
                    name="message"
                    required
                    {...register("m")}
                  />
                  {showMessage && (
                    <div id="success">Your message has been sent.</div>
                  )}
                  {showError && (
                    <div id="failed">
                      Message failed, Try entering valid information.
                    </div>
                  )}
                  <button type="submit" id="buttonsent">
                    <span className="shine"></span>
                    <span>Send</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Footer />
    </div>
  )
}

export default withRouter(Contact)
