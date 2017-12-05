const express = require('express');
const {json} = require('body-parser');
const cors =require('cors');
const axios = require('axios');
const port = 3001;
const app = express();



app.use(cors());
app.use(json());
//Build server, use yarn build when total project is ready for implementation
//app.use(express.static('${__dirname}/public/build'));

//Get quote info from API

app.get('/api/getQuote', function(req, res){
    axios.get('http://quotes.stormconsultancy.co.uk/random.json').then(response =>{
        return res.send(response.data)
    }).catch(console.log)
})
// app.post('/api/postQuote', function(req,res){
//     axios.post('https://api.twitter.com/1.1/statuses/update.json?status=Maybe%20he%27ll%20finally%20find%20his%20keys.%20%23peterfalk', querystring.stringify({quote: this.state.quote, author: this.state.author})).catch(console.log)
// }






app.listen(port, function(){
    console.log("I'm listening at port 3001");
})