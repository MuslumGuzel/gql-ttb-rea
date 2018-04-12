var config = {};

config.database = {};
config.web = {};
 
config.database.url = 'mongodb://localhost:27017/gql-testmongo';
//config.database.url = 'mongodb://mus:test123@ds239309.mlab.com:39309/gql-testmongo';
config.default_stuff =  ['red','green','blue','apple','yellow','orange','politics'];
config.web.port = process.env.WEB_PORT || 9980;

module.exports = config;