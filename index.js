const express = require("express")

const app = express()
//our app is the api that we are building
//and it's import of the express package
//the import is a fuction so we add parentheses to call the function

app.use(express.json())

const PORT = 8080

//here the server listens for a request from the client
app.get("/tshirt", (req, res) => {
  res.status(200).send({
    tshirt: "👕",
    size: "large"
  })
})

//here the server listens for an update
app.post("/tshirt/:id", (req, res) => {
  const { id } = req.params
  const { logo } = req.body

  if (!logo) {
    res.status(418).send({ message: "We need a logo!" })
  }

  res.send({
    tshirt: `👕 with your ${logo} and ID of ${id}`
  })
})

//calling the post method gives a 500 error, why?
//express doesn't parse the json body by default
//so we need to install a middleware for that

//a middleware tells express to parse the body object to json
//before it is acted upon by our callback function

app.listen(PORT, () => {
  console.log(`it's alive on http://localhost:${PORT}`)
})
