const mongo = require('mongoose');
const mongo_url = 'mongodb://localhost/resthub';
mongo.connect(mongo_url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,useFindAndModify:false
});
const db =mongo.connection;
db ? console.log('Database connected successfully') : console.log('Error');
module.exports= db; 