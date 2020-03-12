// import faker

// import database?

// define function seedDatabase

// generate 100 fake users
    // iterate from 1 - 100
        // create username
        // create profile pic
        // static number of reviews
        // static number of friends
        // static number of photos
        // fake location

        // EACH ITERATION: query the db & insert into users

// generate 100 fake restaurants
    // iterate from 1 - 100
        // fake company name

        // EACH ITERATION: query db, insert into restaurants


//generate 10 fake reviews for each fake restaurant

    // iterate from 1 - 100 (restaurant ID)
        // iterate from 1 - 10 (10 fake reviews for each restaurant)
             // generate a fake userID (INTEGER BETWEEN 1 - 100) (NO REPEATs)
             // generate a fake date
                // between 2017 - 2020
                // update DATE to a readable fromat (US)
             // generate a fake rating (integer 1 - 5)
             // generate a fake body of text
             // generate a fake "useful" count (0 - 4)
             // generate a fake "funny" count (0 - 4)
             // generate a fake "cool" count (0 - 4)

                // EACH iteration: query db, insert into reviews
            
        
