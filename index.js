const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();

app.use(express.json())

const ALL_USERS = [
  {
    username: "vamshi@gmail.com",
    password: "123",
    name: "vamshi",
  },
  {
    username: "bob@gmail.com",
    password: "123321",
    name: "bob",
  },
  {
    username: "alice@gmail.com",
    password: "123321",
    name: "alice",
  },
];


//MiddleWare

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  //hard use find function
    let userExist = false
    for(let i=0;i<ALL_USERS.length;i++){
        if(username  == ALL_USERS[i].username && ALL_USERS[i].password ==password){
            userExist =true
        }  
    }
    //using find function
    // const userExisted= ALL_USERS.find(user => user.username == username && user.password == password)!=undefined;
    return userExist
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username
    res.json({
      users:ALL_USERS.filter((value)=>{
        if(value.username== username){
          return false
        }else{
          return true
        }
      })
    })
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000)