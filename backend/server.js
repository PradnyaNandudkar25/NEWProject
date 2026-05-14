
const express = require('express');
const db=require('./config/db');

const cors=require('cors');

const userRoutes=require('./routes/userRoutes');
const postRoutes=require('./routes/postRoutes');
const productRoutes=require('./routes/productRoutes');
const countryRoutes=require('./routes/countryRoutes');


const app = express()
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors(
  {
    origin:'http://localhost:3000',
    methods:['GET','POST','PUT','DELETE','PATCH'],
    credentials:true
  }

));

const port = 5000

app.use('/api',userRoutes);
app.use('/api',postRoutes);
app.use('/api',productRoutes);
app.use('/api',countryRoutes);



app.get('/:id',(req,res) =>{
  console.log(req.params);
});


// app.get('/', (req, res) => {
//   res.send('Hello from Express server');
// })

app.listen(port, () => {
  console.log(`server is running on the port ${port}`)
})







