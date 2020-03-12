// import faker
const fake = require('faker')
const db = require('./index.js')

// import database?

// define function seedDatabase

// generate 100 fake restaurants
    // iterate from 1 - 100
        // fake company name
        let restaurantName = (fake.company.companyName())
        // EACH ITERATION: query db, insert into restaurants


// generate 100 fake users
    // iterate from 1 - 100
        
        let username = fake.name.firstName() + ' ' +  fake.name.lastName()[0] + '.';
        let pic = (fake.image.people(60,60))
        let reviews = fake.random.number({'min': 50, 'max': 1000})
        let friends = fake.random.number({'min': 50, 'max': 1000})
        let photos = fake.random.number({'min': 50, 'max': 1000})
        let location = (fake.address.city() + ', ' + fake.address.stateAbbr())
        
        // EACH ITERATION: query the db & insert into users

//generate 10 fake reviews for each fake restaurant

    // iterate from 1 - 100 (restaurant ID)
        // iterate from 1 - 10 (10 fake reviews for each restaurant)
             // generate a fake userID (INTEGER BETWEEN 1 - 100) (NO REPEATs)
             // generate a fake date
             let fakeDate = (fake.date.between('2015-01-01', '2020-3-01').toDateString().split(' '))
             fakeDate.shift()
             fakeDate = (fakeDate.join('/'))
             // generate a fake rating (integer 1 - 5)
             let rating = fake.random.number({'min': 1, 'max': 5})
             // generate a fake body of text
             let numOfParagraphs = (Math.floor(Math.random() * 10) + 1)
             let reviewBody = '  ' + fake.lorem.paragraphs(numOfParagraphs, '\n  ')
             // generate a fake "useful" count (0 - 4)
             let usefulCount = fake.random.number({'min': 1, 'max': 9})
             // generate a fake "funny" count (0 - 4)
             let funnyCount = fake.random.number({'min': 1, 'max': 6})
             // generate a fake "cool" count (0 - 4)
             let coolCount = fake.random.number({'min': 1, 'max': 3})
                // EACH iteration: query db, insert into reviews


// generate 0 - 3 images of food for a random number of reviews
            // console.log(fake.image.food(300, 200))


db.connection.query("INSERT INTO `reviews` (rating, body) VALUES (3, 'TEST!!!!!!!')")
// module.exports = {}