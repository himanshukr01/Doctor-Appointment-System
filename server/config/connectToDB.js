const mongoose = require('mongoose');

const connectToDB = () => {
  mongoose
    .connect('mongodb+srv://himanshukr1505892:<db_password>@cluster0.imnoc.mongodb.net/notepad', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to MongoDB Atlas');
    })
    .catch((err) => {
      throw new Error(`Could not connect to MongoDB: ${err}`);
    });
};

module.exports = connectToDB;
