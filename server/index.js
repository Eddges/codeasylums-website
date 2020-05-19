const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
var cors = require('cors');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/api/saveLead', (req, res) => {
  const fname = req.query.fname || 'Missing';
  const lname = req.query.lname || 'Missing';
  const email = req.query.email || 'Missing';
  const phone = req.query.phone || 123234345679;
  const course = req.query.course || 'Missing';
  const experience = req.query.exp || 'Missing';
  var data=[
    {
        "Attribute": "FirstName",
        "Value": fname
    },
    {
        "Attribute": "LastName",
        "Value": lname
    },
    {
        "Attribute": "EmailAddress",
        "Value": email
    },
    {
        "Attribute": "Phone",
        "Value": phone
    },
    {
        "Attribute": "Course",
        "Value": course
    },
    {
        "Attribute": "Experience",
        "Value": experience
    }
];
  axios
  .post('https://api-in21.leadsquared.com/v2/LeadManagement.svc/Lead.Capture?accessKey=u$r9b4f434d7930c6a4a01ee95d25f49860&secretKey=5fa328205477ae3e74ea80f5e6f225be1ba6e2cf', data)
  .then(ress => {
    console.log(`statusCode: ${ress.statusCode}`);
    console.log(ress);
    res.send("true");
  })
  .catch(error => {
    console.error(error);
    res.send("false");
  })
  //res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.listen(4001, () =>
  console.log('Express server is running on localhost:4001')
);