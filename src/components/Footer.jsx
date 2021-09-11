import React from "react"
export default () => (
  <footer className="container-fluid black_more">
    <div className="bg-footer">
      <img src="./img/footer-img.jpg" alt="bg-footer" />
    </div>
    <div className="row m-2-hor">
      <div className="col-md-4">
        <div className="footer-col">
          <div className="heading">
            <h2>About Us</h2>
          </div>
          <div className="content font-600">
            <p>
              GREY.D’STUDIO is one of the fastest growing business entity in
              Bangladesh. The group invested in potential business sectors and
              shows incremental growth in a competitive market dynamic.
            </p>
          </div>
          <div className="content font-600">
            <p>
              GREY.D’STUDIO was born with a thirst to construct high quality
              building.
            </p>
          </div>
          <div
            className="link-call"
            onClick={() => window.open("mailto:info@greydstudio.net", "_self")}
          >
            info@greydstudio.net
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div className="footer-col"></div>
      </div>
      <div className="col-md-2">
        <div className="footer-col"></div>
      </div>
      <div className="col-md-4">
        <div className="footer-col">
          <div className="heading right">Call Us</div>
          <div className="content right flexo">
            <span
              onClick={() => window.open("tel:+8801989359890")}
              className="link right font-600"
            >
              +880 19 8935 9890
            </span>
          </div>
          <div className="heading right">Office Address</div>
          <div className="content right font-600">
            <p>
              House 44/i, Flat A1, Road 4, Block D <br />
              Bashundhara R/A, Dhaka 1229.
            </p>
            <div
              onClick={() =>
                window.open("https://www.facebook.com/grey.dstudio")
              }
              className="socialicon"
            >
              <span className="shine"></span>
              <i className="fa fa-facebook-f"></i>
            </div>
            <div
              onClick={() =>
                window.open("https://www.instagram.com/grey.dstudio")
              }
              className="socialicon"
            >
              <span className="shine"></span>
              <i className="fa fa-linkedin"></i>
            </div>
            <div
              onClick={() =>
                window.open(
                  "https://www.youtube.com/channel/UC3xp7sMMGt5N3e5j_5VyhKg"
                )
              }
              className="socialicon"
            >
              <span className="shine"></span>
              <i className="fa fa-youtube"></i>
            </div>
            <div
              onClick={() =>
                window.open("https://www.instagram.com/grey.dstudio")
              }
              className="socialicon"
            >
              <span className="shine"></span>
              <i className="fa fa-instagram"></i>
            </div>
          </div>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Type your email..."
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-secondary color"
                type="button"
                id="button-addon2"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="subfooter">
      <div className="row m-2-hor">
        <div className="col-md-6">
          <div className="content font-600">
            © 14-2021 by GREY.D’STUDIO LTD.
          </div>
        </div>
      </div>
    </div>
  </footer>
)
