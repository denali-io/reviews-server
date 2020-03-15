// import mysql
const mysql = require('mysql');
// import config for connection
const mysqlConfig = require('./config.js');
// create connection
const connection = mysql.createConnection(mysqlConfig);

connection.connect((err) => {
  if (err) {
    console.log('FAILED TO CONNECT TO DB');
  } else {
    console.log('CONNECTED TO DB');
  }
});

// SELECT * FROM reviews INNER JOIN users ON (reviews.id_User = users.user_id)
// WHERE (id_Restaurants = ${businessId});

// order reviews by highest rating
// SELECT rating FROM reviews INNER JOIN users ON (reviews.id_User = users.user_id)
// WHERE (id_Restaurants = 44) ORDER BY reviews.rating DESC;

// order reviews by most recent

// `SELECT date FROM reviews INNER JOIN users ON (reviews.id_User = users.user_id) 
// WHERE (id_Restaurants = 44) ORDER BY reviews.date DESC;`

// SEARCH TEXT for latin words
// SELECT body FROM reviews WHERE body LIKE '%maxime eum%';

// SEARCH TEXT for 'nihil' and order reviews by descending rating
// SELECT rating FROM reviews INNER JOIN users ON (reviews.id_User = users.user_id) WHERE
// (id_Restaurants = 44 AND body LIKE '%nihil%') ORDER BY reviews.rating DESC;

// SEARCH TEXT for 'nihil' and order reviews by descending date
// SELECT rating FROM reviews INNER JOIN users ON (reviews.id_User = users.user_id) 
// WHERE (id_Restaurants = 44 AND body LIKE '%nihil%') ORDER BY reviews.date DESC;


function getReviews(businessId, start = '', sort = null, search = null, callback) {
  let sortBy = '';
  if (sort !== null) {
    if (sort === 'rating_desc') {
      sortBy = 'ORDER BY reviews.rating DESC';
    } else if (sort === 'rating_asc') {
      sortBy = 'ORDER BY reviews.rating ASC';
    } else if (sort === 'date_asc') {
      sortBy = 'ORDER BY reviews.date ASC';
    } else if (sort === 'date_desc') {
      sortBy = 'ORDER BY reviews.date DESC';
    }
  } else {
    sortBy = '';
  }
  let searchQuery = '';

  if (search !== null) {
    searchQuery = ` AND body LIKE '%${search}%'`;
  } else {
    searchQuery = '';
  }

  console.log(search, sortBy, start);
  const queryString = `SELECT * FROM reviews INNER JOIN users ON (reviews.id_User = users.user_id) WHERE (id_Restaurants = ${businessId}${searchQuery});`;

  // let qString =  `SELECT date FROM reviews INNER JOIN users ON (reviews.id_User = users.user_id)
  // WHERE (id_Restaurants = 44) ORDER BY reviews.date DESC;`
  connection.query(queryString, callback, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
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
