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

// SELECT * FROM reviews INNER JOIN users ON (reviews.id_User = users.user_id) WHERE (id_Restaurants = ${businessId});

// order reviews by highest rating
// SELECT rating FROM reviews INNER JOIN users ON (reviews.id_User = users.user_id) WHERE (id_Restaurants = 44) ORDER BY reviews.rating DESC;

// order reviews by most recent
// SELECT date FROM reviews INNER JOIN users ON (reviews.id_User = users.user_id) WHERE (id_Restaurants = 44) ORDER BY reviews.date DESC;


const getReviews = function(businessId, start, sort, search, callback) {
    
    if (sort === 'rating_desc') {
        sort = 'ORDER BY reviews.rating DESC'
    } else if (sort === 'rating_asc') {
        sort = 'ORDER BY reviews.rating ASC'
    } 
    
    let qString = `SELECT date FROM reviews INNER JOIN users ON (reviews.id_User = users.user_id) WHERE (id_Restaurants = 44) ORDER BY reviews.date DESC;`
    connection.query(qString, (err, results) => {
        if (err) {
            console.log(err)
        } else {
            console.log(results)
        }
    })
    // let queryString = 'SELECT * FROM reviews INNERJOIN'

}

getReviews()

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