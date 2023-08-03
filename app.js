const express = require('express')

const app = express()
const data= require('./data.json')

app.get('/api', (req, res) => {
    res.send('Hello, this is working');
   
})

app.get('/api/all', (req, res) => {
    res.send(data);
   
})

app.get('/api/random', (req, res) => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomFood = data[randomIndex];
    res.json(randomFood);
  });

  app.get('/api/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const foodItem = data.find((item) => item.id === id); 
    res.json(foodItem);
})


app.listen(3000, ()=>{
    console.log('Server listening on port 3000')
});

