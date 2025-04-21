const jwt = require("jsonwebtoken");


const users = [
    { username: "ajay", password: "12345" },
    { username: "himanshu", password: "67892" },
  ];
  const accounts = [
    { accountType: "checking", username: "ajay", balance: "10000" },
    { accountType: "saving", username: "rohan", balance: "20000" },
    { accountType: "saving", username: "shohan", balance: "30000" },
    { accountType: "checking", username: "mohan", balance: "40000" },
  ];
function authmiddleware (req, res, next) {
    const authheaders = req.headers["authorization"];
    //   console.log(authheaders)
    if (authheaders) {
      let token = authheaders.split(" ")[1];
      //    console.log( token)
      // Vrify the token
  
      try {
        const decoded = jwt.verify(token, "SECRETKEY");
        if (decoded) {
          const username = decoded.username;
          const persistuser = users.filter((user) => user.username === username);
          if (persistuser) {
             next()// carry with the original request
           
          } else {
            // user does not exist
            res.json({ success: false, message: "User does not Exist" });
          }
        } else {
          // decoding fails
          res
            .status(401)
            .json({
              success: false,
              message: "No Authentication Header is not found",
            });
        }
      } catch (error) {
        res
        .status(401)
        .json({
          success: false,
          message: "Token has been changed",
        });
      }
    } else {
      // no auhrnentications headers
  
      res
        .status(401)
        .json({
          success: false,
          message: "No Authentication Header is not found",
        });
    }
}

module.exports = authmiddleware;