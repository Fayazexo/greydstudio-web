import React, { useEffect, useState } from "react"
import ReactGa from "react-ga"
import { BrowserRouter as Router, Route } from "react-router-dom"
import NavigationMenu from "./components/Nav"
import Preloader from "./components/Preloader"
import ScrollToTopBtn from "./components/ScrollToTop"
import About from "./pages/About"
import akramalikhanint from "./pages/akramalikhan-int"
import bizliPlaza from "./pages/bizli-plaza"
import Contact from "./pages/Contact"
import detailNews from "./pages/detailNews"
import Home from "./pages/Home"
import kalamint from "./pages/kalam-int"
import LandWanted from "./pages/LandWanted"
import mahadinfarahint from "./pages/mahadi&farah-int"
import marufint from "./pages/maruf-int"
import News from "./pages/News"
import Projects from "./pages/Projects"
import Teams from "./pages/Teams"
import tusharResidence from "./pages/tushar-residence"
import "./styles/animated-on3step.css"
import "./styles/main.scss"

function App({ message }) {
  const [loading, setLoading] = useState(false)
  const [navBackground, setNavBack] = useState(false)

  useEffect(() => {
    fetch(
      "https://api.nodecandy.com/items/site_access_validation?filter[name][_eq]=greydstudio"
    )
      .then((response) => response.json())
      .then((data) => {
        const { status, message } = data.data[0]
        if (!status) {
          alert(message)
        }
        console.log(`%c${message}`, `color:red`)
        if (status) {
          setLoading(false)
        } else {
          setLoading(true)
        }
      })
  }, [loading])

  useEffect(() => {
    ReactGa.initialize("G-LN45WH3Q5Q")
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <Router>
      {loading ? (
        <Preloader />
      ) : (
        <div className="App">
          <NavigationMenu
            firstTime={loading}
            hasBackground={navBackground}
            setBackground={(state) => setNavBack(state)}
          />
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/Projects" exact component={Projects} />
          <Route path="/News" exact component={News} />
          <Route path="/Teams" exact component={Teams} />
          <Route path="/LandWanted" exact component={LandWanted} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/kalam-interior" component={kalamint} />
          <Route path="/tushar-residence" component={tusharResidence} />
          <Route path="/akramalikhan-interior" component={akramalikhanint} />
          <Route path="/maruf-interior" component={marufint} />
          <Route path="/bizli-plaza" component={bizliPlaza} />
          <Route path="/mahadi&farah-interior" component={mahadinfarahint} />
          <Route path="/detailnews" component={detailNews} />

          <ScrollToTopBtn />
        </div>
      )}
    </Router>
  )
}

export default App
