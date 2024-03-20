const express = require("express");
const cors = require("cors");
const bodyParser= require("body-parser");
const axios = require('axios');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

let companyData = { companyName:"Bannari Amman Institute of Technology",
                    OwnerName:"Sai Prashanth K",
                    rollNo:"7376221CS527",
                    ownerEmail:"saiprashanth.cs21@bitsathy.ac.in",
                    accessCode:"qaNXGH"
                }
async function fetch(){
    const res = await axios.post("http://20.244.56.144/products/register", companyData)
    console.log(res);
}

async function getSession(){
    const res = await axios.post("http://20.244.56.144/products/auth", {
        "companyName": "Bannari Amman Institute of Technology",
        "clientID": "85562419-ea5f-4bf7-a4cd-d1fb49d8ad1f",
        "clientSecret": "dicWGjXnMiIwPTLW",
        "ownerName": "Sai Prashanth K",
        "ownerEmail": "saiprashanth.cs21@bitsathy.ac.in",
        "rollNo": "7376221CS527"
      })
    return res.data.access_token;
}

async function getProducts(company, category, n, min, max){
    const access_token = await getSession();
    console.log(access_token);
    const res = await axios({method:'GET', url : `http://20.244.56.144/products/companies/${company}/categories/${category}/products?top=${n}&minPrice=${min}&maxPrice=${max}`, headers : {'Authorization': `Bearer ${access_token}`}});
    console.log(res);
    return res;
}

app.get("/getProducts/:company/:category/:n/:min/:max",async(req, res)=>{
    const company = req.params.company;
    const category = req.params.category;
    const n = (String)(req.params.n);
    const min = (String)(req.params.min);
    const max = (String)(req.params.max);

    console.log(company, category, n, min, max);
    const result = await getProducts(company, category, n, min,max);
    console.log(result.data);
    res.status(200).json({data:result.data})

})

app.listen(4000, ()=>console.log("Server running on 4000"));

