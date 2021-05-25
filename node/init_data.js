const db = require ('./dbconnectors/sqlite-connector') // you need the connection to the database and Campus model
const bycrypt = require('bcryptjs')

const seed = async () => {
  console.log("123");

  await db.sequelize.sync({force: true}) //sync to your database!
  console.log("123");

  const salt = await bycrypt.genSalt(10);
  hashpassword = await bycrypt.hash("123456", salt)
  console.log(hashpassword);
  const harvard = await db.user.create({
    name: 'Harvard',
    email: '123456@qq.com',
    password: hashpassword
  })
  console.log(harvard);
  const stonybrook = await db.user.create({
    name: 'Stony Brook University',
    email:'100 Nicolls Rd, Stony Brook, NY 11794',
    password: 'It is one of four university centers of the State University of New York system.'
  })
  db.sequelize.close() //close your db connection else the connection stays alive else your process hangs.
  console.log('Seed Successful!') //Have a prompt to let you know everything is working correctly!
}

seed() //initialize the sync!