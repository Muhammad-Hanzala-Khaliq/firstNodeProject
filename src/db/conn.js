const mongoose = require('mongoose');

mongoose.connect(process.env.DB_PATH).then(()=>{
    console.log('DB CONNECTED')
}).catch((e)=>{
    console.log(e)
})