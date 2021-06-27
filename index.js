const express = require('express')  //express mode get
const app = express() //app make
const port = 5000  // port number


const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://chuchu:chu123@utubeclone.wo9of.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true,useFindAndModify:false
}).then(()=> console.log('MongoDB Connected...')).catch(err=> console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!  HI H,I')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})