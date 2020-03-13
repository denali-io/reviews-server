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
// SELECT rating FROM reviews INNER JOIN users ON (reviews.id_User = users.user_id) WHERE (id_Restaurants = 44) ORDER BY reviews.rating DESC;
const getReviews = function(businessId, start, sort, search, callback) {
    
    if (sort === 'rating_desc') {
        sort = 'ORDER BY reviews.rating DESC'
    } else if (sort === 'rating_asc') {
        sort = 'ORDER BY reviews.rating ASC'
    }
    console.log(sort, 'FROM DATABASE')
    let queryString = 'SELECT * FROM reviews INNERJOIN'

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