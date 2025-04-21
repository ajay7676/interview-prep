// Import Express
const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const authniCate = require("./middleware/authmiddleware")

// Create an Express application
const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use(cors());

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello World from Express!!!!!");
});

global.users = [
  { username: "ajay", password: "12345" },
  { username: "himanshu", password: "67892" },
];
global.accounts = [
  { accountType: "checking", username: "ajay", balance: "10000" },
  { accountType: "saving", username: "rohan", balance: "20000" },
  { accountType: "saving", username: "shohan", balance: "30000" },
  { accountType: "checking", username: "mohan", balance: "40000" },
];

app.use(express.json());

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    // Genrate Web tokens
    const token = jwt.sign({ username: user.username }, "SECRETKEY");
    res.json({ success: true, token: token });
  } else {
    // respones we get . user is not authenticate
    res.json({ success: false, message: "Not authenticated" });
  }
});

app.post('/deposit',authniCate , (res,req) =>{
    

})

app.get("/accounts/:username",authniCate , (req, res) => {
   const username = req.params.username;
   const userAccount =accounts.filter((account) => account.username === username);
   res.json(userAccount)

});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
