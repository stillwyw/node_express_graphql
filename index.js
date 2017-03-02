var express = require('express')
var Sequelize = require('sequelize');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

///////////////////////////////////////////////////////////////

var sequelize = new Sequelize('api_test_dev', 'yunwei', '', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

var User = sequelize.define('users', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  createdAt: {
      type: Sequelize.DATE,
      field: 'created_at'
    },
  updatedAt: {
      type: Sequelize.DATE,
      field: 'updated_at'
    }
});

var app = express()


app.get('/', function (req, res) {
  User.findById(1).then(function(user) {
    res.json(user)
  })
})

app.get('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})

app.get('/users/:user_id/checkins', function (req, res) {
  res.send(req.params)
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})