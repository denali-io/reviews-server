// import faker
const fake = require('faker')
// import database
const db = require('./index.js')

const Promise = require('bluebird');

function getNumOfReviews () {
    return Math.floor(Math.random() * 10) + 1
}
function getNewUserId () {
    return Math.floor(Math.random() * 2000) + 1
}

const configureDB = () => {
    Promise.promisifyAll(db.connection);
    return db.connection.queryAsync(`DROP DATABASE Squawk;`)
    .then(() => {
        db.connection.queryAsync('CREATE DATABASE Squawk;')
    })
    .then(() => {
        db.connection.queryAsync('USE Squawk;')
    })
    .then(() => {
        // restaurants
        db.connection.queryAsync(`CREATE TABLE restaurants (
            id INTEGER AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(200) DEFAULT NULL
        );`)
    })
    .then(() => {
        // users
        db.connection.queryAsync(`CREATE TABLE users (
            user_id INTEGER AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(20) NOT NULL,
            profile_pic VARCHAR(300) DEFAULT NULL,
            reviews INTEGER DEFAULT 0,
            friends INT DEFAULT 0,
            photos INT DEFAULT 0,
            location VARCHAR(30)        
        );`)
    })
    .then(() => {
        // reviews
        db.connection.queryAsync(`CREATE TABLE reviews (
            review_id INTEGER AUTO_INCREMENT PRIMARY KEY,
            id_User INTEGER,
            id_Restaurants INTEGER,
            date VARCHAR(20) DEFAULT NULL,
            rating INTEGER NOT NULL,
            body TEXT,
            useful_count INTEGER,
            cool_count INTEGER,
            funny_count INTEGER,
            check_ins INTEGER,
            FOREIGN KEY (id_User) REFERENCES users(user_id),
            FOREIGN KEY (id_Restaurants) REFERENCES restaurants(id)
        );`)
    })
    .then(() => {
        // images
        db.connection.queryAsync(`CREATE TABLE images (
            id INT AUTO_INCREMENT PRIMARY KEY,
            url VARCHAR(50),
            reviewID INT,
            FOREIGN KEY (reviewID) REFERENCES reviews(review_id)
            );`)
    })
    .then(() => {
        // populate restaurants
        // generate 100 fake restaurants
        for (let i = 1; i < 101; i++) {
        // create fake restaurant name
        let restaurantName = (fake.company.companyName())
        // insert new row into restaurants
        db.connection.query(`INSERT INTO restaurants (name) VALUES ("${restaurantName}")`)
    }
    })
    .then(() => {
        // populate users
        for (let i = 1; i < 2000; i++) {
            let username = fake.name.firstName() + ' ' +  fake.name.lastName()[0] + '.';
            let pic = (fake.image.people(60,60))
            let reviews = fake.random.number({'min': 50, 'max': 1000})
            let friends = fake.random.number({'min': 50, 'max': 1000})
            let photos = fake.random.number({'min': 50, 'max': 1000})
            let location = (fake.address.city() + ', ' + fake.address.stateAbbr())        
            let queryString = `INSERT INTO users (name, profile_pic, reviews, friends, photos, location) VALUES ("${username}", "${pic}", "${reviews}", "${friends}", "${photos}", "${location}")`
            db.connection.query(queryString)
        }

    })
    .then(() => {
        // populate reviews
        // generate random number of reviews for each restaurant  
        for (let restaurantId = 1; restaurantId < 101; restaurantId++) {
            // create user collection to prevent repeats
            let usersCheckedIn = [];
            let numOfReviews = 1// getNumOfReviews()
            for (let i = 0; i < numOfReviews; i++) {
                // generate a fake userId between 1 & 2000
                let currentUser = getNewUserId()
                // if the user has not reviewed the current restaurant
                if (!usersCheckedIn.includes(currentUser)) {
                    // add the user to list of users that have checked in
                    usersCheckedIn.push(currentUser)
                    // generate a fake name
                    let fakeDate = (fake.date.between('2015-01-01', '2020-3-01').toDateString().split(' '))
                    fakeDate.shift()
                    fakeDate = (fakeDate.join('/'))
                    // generate a fake rating (integer 1 - 5)
                    let rating = fake.random.number({'min': 1, 'max': 5})
                    // generate a fake body of text
                    let numOfParagraphs = (Math.floor(Math.random() * 4) + 1)
                    let reviewBody = fake.lorem.paragraphs(numOfParagraphs, '\n  ')
                    
                    // generate a fake "useful" count (0 - 4)
                    let usefulCount = fake.random.number({'min': 1, 'max': 9})
                    // generate a fake "funny" count (0 - 4)
                    let funnyCount = fake.random.number({'min': 1, 'max': 6})
                    // generate a fake "cool" count (0 - 4)
                    let coolCount = fake.random.number({'min': 1, 'max': 3})
                    let checkin = fake.random.number({'min': 0, 'max': 3})
                    // EACH iteration: query db, insert into reviews
                    
                    let queryString = `INSERT INTO reviews (id_User, id_Restaurants, date, rating, body, useful_count, cool_count, funny_count) VALUES ("${currentUser}", "${restaurantId}", "${fakeDate}", "${rating}", "${reviewBody}", "${usefulCount}", "${coolCount}", "${funnyCount}")` 
                    db.connection.query(queryString)       
                }
            }
        }
    })
    .then(() => {
        // populate images
    })
    .catch((err) => {
        console.log('ERROR: ', err)
    })
    .finally(() => {
        db.connection.end((err) => {
            if (err) {
                console.log(err)
            } else {
                console.log('Connection closed')
            }
        });
    })
}

configureDB()


    //CREATE N EXT ABLES
    // CREATE REVIEWS TABLES
// define function to seed restaurants into database

/*
function seedRestaurants() {
    // generate 100 fake restaurants
    for (let i = 1; i < 101; i++) {
        // create fake restaurant name
        let restaurantName = (fake.company.companyName())
        // insert new row into restaurants
        db.connection.query(`INSERT INTO restaurants (name) VALUES ("${restaurantName}")`)
    }
}

// define function to seed fake users into database
function seedUsers() {
    for (let i = 1; i < 2000; i++) {
        let username = fake.name.firstName() + ' ' +  fake.name.lastName()[0] + '.';
        let pic = (fake.image.people(60,60))
        let reviews = fake.random.number({'min': 50, 'max': 1000})
        let friends = fake.random.number({'min': 50, 'max': 1000})
        let photos = fake.random.number({'min': 50, 'max': 1000})
        let location = (fake.address.city() + ', ' + fake.address.stateAbbr())        
        let queryString = `INSERT INTO users (name, profile_pic, reviews, friends, photos, location) VALUES ("${username}", "${pic}", "${reviews}", "${friends}", "${photos}", "${location}")`
        db.connection.query(queryString)
    }

}

function getNumOfReviews () {
    return Math.floor(Math.random() * 10) + 1
}
function getNewUserId () {
    return Math.floor(Math.random() * 2000) + 1
}

function seedReviews() {
    // generate random number of reviews for each restaurant  
    for (let restaurantId = 1; restaurantId < 101; restaurantId++) {
        // create user collection to prevent repeats
        let usersCheckedIn = [];
        let numOfReviews = getNumOfReviews()
        for (let i = 0; i < numOfReviews; i++) {
            // generate a fake userId between 1 & 2000
            let currentUser = getNewUserId()
            // if the user has not reviewed the current restaurant
            if (!usersCheckedIn.includes(currentUser)) {
                // add the user to list of users that have checked in
                usersCheckedIn.push(currentUser)
                // generate a fake name
                let fakeDate = (fake.date.between('2015-01-01', '2020-3-01').toDateString().split(' '))
                fakeDate.shift()
                fakeDate = (fakeDate.join('/'))
                // generate a fake rating (integer 1 - 5)
                let rating = fake.random.number({'min': 1, 'max': 5})
                // generate a fake body of text
                let numOfParagraphs = (Math.floor(Math.random() * 4) + 1)
                let reviewBody = fake.lorem.paragraphs(numOfParagraphs, '\n  ')
                
                // generate a fake "useful" count (0 - 4)
                let usefulCount = fake.random.number({'min': 1, 'max': 9})
                // generate a fake "funny" count (0 - 4)
                let funnyCount = fake.random.number({'min': 1, 'max': 6})
                // generate a fake "cool" count (0 - 4)
                let coolCount = fake.random.number({'min': 1, 'max': 3})
                let checkin = fake.random.number({'min': 0, 'max': 3})
                   // EACH iteration: query db, insert into reviews
                
                let queryString = `INSERT INTO reviews (id_User, id_Restaurants, date, rating, body, useful_count, cool_count, funny_count) VALUES ("${currentUser}", "${restaurantId}", "${fakeDate}", "${rating}", "${reviewBody}", "${usefulCount}", "${coolCount}", "${funnyCount}")` 
                db.connection.query(queryString)       
            }
        }
    }
}

// function seedAllData () {
//     seedRestaurants()
//     seedUsers()
//     seedReviews()
// }

// seedAllData()
seedUsers();
 
//generate X number fake reviews for each fake restaurant


        // iterate from 1 - 10 (10 fake reviews for each restaurant)
             // generate a fake userID (INTEGER BETWEEN 1 - 100) (NO REPEATs)
             // generate a fake date
            //  let fakeDate = (fake.date.between('2015-01-01', '2020-3-01').toDateString().split(' '))
            //  fakeDate.shift()
            //  fakeDate = (fakeDate.join('/'))
            //  // generate a fake rating (integer 1 - 5)
            //  let rating = fake.random.number({'min': 1, 'max': 5})
            //  // generate a fake body of text
            //  let numOfParagraphs = (Math.floor(Math.random() * 10) + 1)
            //  let reviewBody = '  ' + fake.lorem.paragraphs(numOfParagraphs, '\n  ')
            //  // generate a fake "useful" count (0 - 4)
            //  let usefulCount = fake.random.number({'min': 1, 'max': 9})
            //  // generate a fake "funny" count (0 - 4)
            //  let funnyCount = fake.random.number({'min': 1, 'max': 6})
            //  // generate a fake "cool" count (0 - 4)
            //  let coolCount = fake.random.number({'min': 1, 'max': 3})
                // EACH iteration: query db, insert into reviews


// generate 0 - 3 images of food for a random number of reviews
            // console.log(fake.image.food(300, 200))


// db.connection.query("INSERT INTO `reviews` (rating, body) VALUES (3, 'TEST!!!!!!!')")
// module.exports = {}

//                 let numOfParagraphs = (Math.floor(Math.random() * 5) + 1)
//                 let reviewBody = fake.lorem.paragraphs(numOfParagraphs)
//                 console.log(reviewBody)
//                 r = 4
// db.connection.query(`INSERT INTO reviews (rating, body) VALUES (${4}, "${reviewBody}")`)

*/