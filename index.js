// TODO aptitudeassesment 
// TODO location 
// TODO internalAssesment
import express from "express"
const app = express()
const port = 3000
app.use(express.json())

app.post('/suggest-career', (req, res) => {
  const data = req.body
  res.json({});
})

app.listen(port, () => {
  console.log("HEllo from server")
})

