/* eslint-disable radix */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const db = require('./db');
// console.log(db.getReviews)
const port = 5000;

app.use(express.static(path.join(__dirname, '../client/public')));
// app.use(bodyParser);


app.get('/', (req, res) => {
  res.send('HELLO FROM SQUAWK!!!');
});

app.get('/restaurants/:restaurantId', (req, res) => {
  console.log(req.query)
  const restaurant = req.params.restaurantId;
  const start = parseInt(req.query.start);
  const sort = req.query.sort_by;
  const search = req.query.q;
  db.getReviews(restaurant, start, sort, search, (err, results) => {
    if (err) {
      res.sendStatus(err);
    } else {
      res.send(results);
    }
  });
});
app.get('/reviews/:restaurantId', (req, res) => {
  let query;
  if (req.query.q) {
    query = req.query.q;
    db.getQueryTotal(req.params.restaurantId, query, (err, results) => {
      if (err) {
        res.sendStatus(err);
      } else {
        const count = (JSON.stringify(results).slice(14, 16));
        res.send(count);
      }
    });
  } else {
    db.getTotalReviews(req.params.restaurantId, (err, results) => {
      if (err) {
        res.sendStatus(err);
      } else {
        const count = (JSON.stringify(results).slice(14, 16));
        res.send(count);
      }
    });
  }
});

app.get('/reviewId/:reviewId', (req, res) => {
// http://localhost:5000/reviewId/9676?value=cool_count&voted=true
  const voteInfo = {
    id: Number(req.params.reviewId),
    voteType: req.query.value,
    voted: req.query.voted,
  };
  console.log(voteInfo);
  db.updateReviewVote(voteInfo, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
});

app.listen(port, () => console.log(`SQUAWK listening on port ${port}!`));
