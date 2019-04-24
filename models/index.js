const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/auth-app'

mongoose.connect(DB_URL, {useNewUrlParser: true, useFindAndModify: false})
    .then(()=> console.log('mongo duuuude'))
    .catch((err)=>console.log(err));

module.exports = {
    User: require('./user'),
}