import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import NavigationMenu from "./components/Nav"
import Preloader from "./components/Preloader"
import ScrollToTopBtn from "./components/ScrollToTop"
import { declaredRoutes } from "./data"
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

  // useEffect(() => {
  //   ReactGa.initialize("G-LN45WH3Q5Q")
  //   ReactGa.pageview(window.location.pathname + window.location.search)
  // }, [])

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

          {declaredRoutes.map((route) => {
            return <Route path={route.path} exact component={route.component} />
          })}

          <ScrollToTopBtn />
        </div>
      )}
    </Router>
  )
}

export default App
