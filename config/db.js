const mongoose = require('mongoose');
const config = require('config')
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await  mongoose.connect(db, {
      //to avoid any errors connecting to database and will gie promise
      useNewUrlParser: true,
      useCreateIndex: true,
      UseFindAndModify: false
    })
    console.log('mongoDB connected')
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }

}

module.exports = connectDB