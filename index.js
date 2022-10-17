// Create a database named blog.
  use blog

// Create a collection called 'articles'.

db.createCollection('articles')

// Insert multiple documents(at least 3) into articles. It should have fields
// title as string
// createdAt as date
// details as String

//
//
// author as nested object
// author should have
// name
// email
// age
// example author: {name: 'abc', email: 'abc@gmail', age: 25}

let documents = 
    [
    {
        title: "user1",
            createdAt: "2,8,2002",
        details: '',
        author: {
            name: 'rubi',
            email: 'rubi@gmail.com',
            age: '10',
        },
        tags: ['js', 'mongo']
    },
    {
        title: "user2",
        createdAt: "2,8,2002",
        details: 'utterpredesh',
        author: {
            name: 'ajay',
            email: 'ajay@gmail.com',
            age: '30'
        },
        tags: ['node', 'html']
    },
    {
        title: "user3",
        createdAt: "3,3,2003",
        details: 'mp',
        author: {
            name: 'sunil',
            email: 'sunil@gmail.com',
            age: '100'
        },
        tags: ['css', 'html']
    },
    {
        title: "user4",
        createdAt: "4,4,2004",
        details: 'kanpur',
        author: {
            name: 'mohan',
            email: 'mohan@gmail.com',
            age: '39'
        },
        tags: ['php', 'python']
    }
    ]

    // Find all the articles using db.COLLECTION_NAME.find()

db.articles.find({})
// Find a document using _id field.
db.articles.findOne({ _id: ObjectId("634bcc7a0158db3647e6cf25") })

// Find documents using title
db.articles.findOne({ title: 'singer' })

// Find documents using author's name field.
db.articles.find({'author.name':'harsh'})

// Find document using a specific tag.
db.articles.find({})

// Update title of a document using its _id field.

db.articles.update({ _id: ObjectId("634bcc7a0158db3647e6cf25") }, { $set: { title: 'change  bloging' } })

// Update a author's name using article's title.
db.articles.update({ _id: ObjectId("634bcc7a0158db3647e6cf25") }, { $set: {'author.name':'harshita'} })

// Rename details field to description from all articles in articles collection.
db.articles.update({},{$rename:{details:'description'}},{multi:true})

// Add additional tag in a specific document.

db.articles.update({ title: 'change title'}, { $push: {tags:"newjava"} })

// Update an article's title using $set and without $set.  // Write the differences here ?

db.articles.update({}, { $set: { title: 'change title' } }, { multi: true })

// find an article using title and increment author's age by 5.

db.articles.update({ title: 'change title' }, {$inc:{'author.age':5}})

// Delete a document using _id field with db.COLLECTION_NAME.remove().

db.articles.remove({ _id: ObjectId("634bd0980158db3647e6cf28"), })

// Insert above data into database to perform below queries:-
db.articles.insertMany([
  {
    age: 49,
    name: "Maurice Brock",
    email: "wuk@hibpiz.ch",
    gender: "Female",
    sports: ["cricket", "football"],
    scores: [24, 35, 18, 16],
    weight: 45,
  },
  {
    age: 37,
    birthday: "7/15/1986",
    name: "Virgie Cunningham",
    email: "ezogafa@de.gm",
    gender: "Male",
    sports: ["football"],
    scores: [17, 35, 43],
    weight: 52,
  },
  {
    age: 48,
    birthday: "5/14/1961",
    name: "Alexander Holt",
    email: "han@mu.pe",
    gender: "Male",
    sports: ["cricket", "football", "TT"],
    scores: [24, 30, 16],
    weight: 55,
  },
  {
    age: 53,
    birthday: "11/15/1963",
    name: "Derek Dawson",
    email: "polril@now.de",
    gender: "Male",
    sports: ["cricket", "hockey"],
    scores: [20, 15, 38, 23],
    weight: 49,
  },
  {
    age: 34,
    birthday: "7/24/1964",
    name: "Cynthia Cobb",
    email: "wujjarpob@jecimpar.gu",
    gender: "Female",
    sports: ["cricket"],
    scores: [41, 17, 28],
    weight: 51,
  },
  {
    age: 33,
    birthday: "10/26/1982",
    name: "Isabella Atkins",
    email: "ononuzas@givhoz.ca",
    gender: "Female",
    sports: ["cricket", "football", "hockey", "TT"],
    scores: [14, 38, 29, 45, 20],
    weight: 49,
  },
  {
    age: 47,
    birthday: "10/12/1978",
    name: "Katharine Bryan",
    email: "zo@pebi.sa",
    gender: "Male",
    sports: ["TT", "hockey", "khokho"],
    scores: [27, 20, 34],
    weight: 58,
  },
  {
    age: 41,
    birthday: "1/28/1991",
    name: "Beatrice Fleming",
    email: "ufufsa@pujizren.tk",
    gender: "Female",
    sports: ["football", "khokho"],
    scores: [30, 20, 15, 29, 43],
    weight: 47,
  },
  {
    age: 26,
    birthday: "3/23/1998",
    name: "Tom Fields",
    email: "wasodjow@ofaba.gf",
    gender: "Female",
    sports: ["khokho"],
    scores: [37, 29, 18, 43, 49],
    weight: 50,
  },
  {
    age: 33,
    birthday: "11/14/1960",
    name: "Steve Ortega",
    email: "dupus@ca.ls",
    gender: "Female",
    sports: ["cricket", "football", "hockey"],
    scores: [12, 15, 20],
    weight: 51,
  },
  {
    age: 24,
    birthday: "1/5/1994",
    name: "Suraj Kumar",
    weight: 50,
    gender: "Male",
    sports: ["football", "cricket", "TT"],
  },
])


// Find all males who play cricket.

db.articles.find({ gender: 'Male', sports: 'cricket' })

// Update user with extra golf field in sports array whose name is "Steve Ortega".
db.articles.update({ name: 'Steve Ortega' }, { $push:{sports:'golf'}})

// Find all users who play either 'football' or 'cricket'.
db.articles.find({ sports: {$in:['football','cricket']} })
// Find all users whose name includes 'ri' in their name.
db.articles.find({name:/ri/i})