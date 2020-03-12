// import mysql
const mysql = require('mysql')
// import config for connection
const mysqlConfig = require('./config.js')

// create connection
const connection = mysql.createConnection(mysqlConfig)

// define functions to extract and update data

// const getReviewsByRestId = function (restaurauntId, callback)

// const updateVoteByReviewId = function (reviewId, category, callback)


// module.exports {
    // getReviews = getReviewsByRestId,
    // updateVote = updateVoteByReviewId
// }