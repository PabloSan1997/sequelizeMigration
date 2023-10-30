
require('dotenv').config();

const variables = {
    port:process.env.PORT||3000,
    url_database:process.env.URL_DATABASE
}

module.exports={variables}