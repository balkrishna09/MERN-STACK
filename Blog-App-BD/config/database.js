const mongoose = require("mongoose");

require("dotenv").config();

const connectWithDb = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useNewReplSet: true,
    })
    .then(console.log("DB Connected"))
    .catch(err => {console.log("DB connection Failed")
    // console.log(err);
    process.exit(1);
});
};

module.exports= connectWithDb;