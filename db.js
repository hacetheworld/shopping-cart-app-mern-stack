const mongoose = require("mongoose");

module.exports = mongoose.connect(`${process.env.DB_CONNECT}`, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected...');

});