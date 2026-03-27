import React from "react"

const App = () => {
  const tmp = [
    "asdf",
    "asdf",
    "asdf",
    "asdf",
    "asdf",
    "asdf",
    "asdf",
    "asdf",
    "asdf",
  ]
  return (
    <>
      {/* {
        tmp.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <h1>{item}</h1>
              <img src="/demo.webp" width='200'/>
            </React.Fragment>
          )
        })
      } */}

      {
        Array(100).fill('hello').map((item, index) => {
          return (
            <React.Fragment key={index}>
              <h1>{item}</h1>
              <img src="/demo.webp" width='200'/>
            </React.Fragment>
          )
        })
      }
    </>
  )
}

export default App