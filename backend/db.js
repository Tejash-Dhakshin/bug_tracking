const {Pool} = require('pg');

const pool = new Pool({
    user : "postgres",
    password : "2004",
    host : "localhost",
    port : 5432,
    database : 'bug_tracking'
})
if (pool){
    console.log("DB connceted");
}

module.exports = pool