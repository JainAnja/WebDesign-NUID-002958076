const bcrypt = require("bcryptjs");
const dbo = require('../../api/config');

const loginUser = (req, res) => {
  const dbConnect = dbo.getDb();
  const query = {
    email_id: req.body.email_id
  };
  
  dbConnect
    .collection("users")
    .findOne(query, function (err, _result) {
      if (err) {
        res.status(400).send("Error while executing query");
      } else { // if email id found then verify password
        
        if (!_result) {
          console.log(req.body.email_id);
          console.log(_result);
          res.status(400).send(`User does not exist with given email id : ${query.email_id}` );
          return;
        }
        if (!bcrypt.compareSync(req.body.password, _result.password)) {
          res.status(400).send("Did not find user with given password. Please check the password");
          return;
        }
        else {
          res.status(200).send("Login successful");
        }
      }
    });
};

module.exports = {
  loginUser
};