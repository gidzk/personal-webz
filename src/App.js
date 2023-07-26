import "./style/App.scss"
import React from "react"
import DiagonalBackground from "./components/diagonal-background/DiagonalBackground"

function App() {
  return (
    <section id="wrapper" className="skewed">
      <DiagonalBackground
        headingMain="John"
        headingSecondary="Gidskehaug"
        leftText={{ heading: "DEVELOPER ", text: "Check my work" }}
        rightText={{ heading: "PRODUCER", text: "Check my music" }}
      />
    </section>
  )
}

export default App
