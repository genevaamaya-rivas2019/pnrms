const express     = require('express')
const userRoutes = require('./routes/UserRoute')
const mongoose = require('mongoose');
const app   = express();
const port  =  process.env.PORT || 3000

app.use(express.json())
app.use(userRoutes)

const url = 'mongodb://localhost/bigdata';
mongoose.connect(url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() =>{
  console.log('Database @: '+ url);
}).catch(() =>{
  console.log('failed connected to database');
});

app.listen(port,() =>{
    console.log('server is up on ' + port);
})