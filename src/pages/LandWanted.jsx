import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Reveal from "react-reveal/Reveal"
import { withRouter } from "react-router-dom"
import Footer from "../components/Footer"
import { Efect, Efect1, Efect2 } from "../styles/effect.styles"

const LandOwners = ({ history }) => {
  const [showMessage, setShowMessage] = useState(false)
  const [showError, setShowError] = useState(false)
  const { register, handleSubmit } = useForm()

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
    const {
      locality,
      address,
      landsize,
      roadwidth,
      landcategory,
      facing,
      features,
      landowner,
      contact,
      email,
      phone,
    } = ir
    pd("http://167.71.205.73/land-wanted-forms", {
      Locality: locality,
      Address: address,
      Land_Size: landsize,
      Width_In_Front: roadwidth,
      Land_Category: landcategory,
      Facing: facing,
      Attractive_Features: features,
      Land_Owner_Name: landowner,
      Contact_Person: contact,
      Email: email,
      Phone: phone,
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
            <div className="col-12 center">
              <h1>
                Provide Information About Your{" "}
                <span className="color">Land</span>
              </h1>
            </div>
          </div>
        </section>
      </Reveal>
      <Reveal effect="fadeInUp">
        <section className="container pt-0">
          <div className="row">
            <div className="col-md-12">
              <div className="form-side">
                <form className="formcontact" onSubmit={handleSubmit(os)}>
                  <section className="container p-2">
                    <div className="row">
                      <div className="col-12">
                        <h3>Land Information</h3>
                      </div>
                    </div>
                  </section>
                  <label>Locality</label>
                  <input
                    placeholder="Area/neighbourhood the land is located"
                    type="text"
                    name="locality"
                    {...register("locality", { required: true })}
                  />
                  <label>Address</label>
                  <input
                    placeholder="Full address of the land"
                    type="text"
                    name="address"
                    {...register("address", {
                      required: true,
                    })}
                  />
                  <label>Size of the Land</label>
                  <input
                    placeholder="Size of the land in kathas (rounded)"
                    type="text"
                    name="landsize"
                    {...register("landsize", {
                      required: true,
                    })}
                  />
                  <label>Width of the road in front</label>
                  <input
                    type="text"
                    placeholder="In feet"
                    name="roadwidth"
                    required
                    {...register("roadwidth", {
                      required: true,
                    })}
                  />
                  <label>Category of land</label>
                  <select {...register("landcategory", { required: true })}>
                    <option value="Freehold or didn't choose any">
                      Select Option (Default: Freehold)
                    </option>
                    <option value="Freehold">Freehold</option>
                    <option value="Leasehold">Leasehold</option>
                  </select>
                  <label>Facing</label>
                  <select {...register("facing", { required: true })}>
                    <option value="East">East (Default)</option>
                    <option value="West">West</option>
                    <option value="North">North</option>
                    <option value="South">South</option>
                  </select>
                  <label>Attractive features (optional)</label>
                  <select {...register("features", { required: true })}>
                    <option value="None or didn't choose any">
                      Select Option (Default: None)
                    </option>
                    <option value="Lakeside">Lakeside</option>
                    <option value="Cornerplot">Corner Plot</option>
                    <option value="Parkview">Park View</option>
                    <option value="Mainroad">Main Road</option>
                    <option value="Others">Others</option>
                  </select>
                  <section className="container p-2">
                    <div className="row">
                      <div className="col-12">
                        <h3>Land Owner's Profile</h3>
                      </div>
                    </div>
                  </section>
                  <label>Name of the Landowner</label>
                  <input
                    placeholder="Full name of the registered landowner"
                    type="text"
                    name="landowner"
                    required
                    {...register("landowner", { required: true })}
                  />
                  <label>Contact Person</label>
                  <input
                    placeholder="Name (If different from the landowner)"
                    type="text"
                    name="contact"
                    {...register("contact")}
                  />
                  <label>Email ID</label>
                  <input
                    placeholder="Contact person's email address"
                    type="text"
                    name="email"
                    {...register("email")}
                  />
                  <label>Contact Number</label>
                  <input
                    placeholder="Contact person's number"
                    type="text"
                    name="phone"
                    required
                    {...register("phone", { required: true })}
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
                    <span>Receive a call</span>
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

export default withRouter(LandOwners)
