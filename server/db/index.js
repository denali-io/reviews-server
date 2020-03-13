// import mysql
const mysql = require('mysql')
// import config for connection
const mysqlConfig = require('./config.js')
// create connection
const connection = mysql.createConnection(mysqlConfig);

connection.connect((err) => {
    if (err) {
        console.log('FAILED TO CONNECT TO DB');
    } else {
        console.log('CONNECTED TO DB')
    }
})

const getReviews = function(businessId, start, sort, search, callback) {
    console.log(businessId, start, sort, search, 'FROM DATABASE')

}



// define functions to extract and update data

// const getReviewsByRestId = function (restaurauntId, callback)
    // InnerJoins
    // InnerJoins
    // InnerJoins
// const updateVoteByReviewId = function (reviewId, category, callback)


// module.exports {
    // getReviews = getReviewsByRestId,
    // updateVote = updateVoteByReviewId
// }

module.exports.connection = connection;
module.exports.getReviews = getReviews;