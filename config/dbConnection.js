const mongoose = require("mongoose");

const connectDB = () => {
	const database = process.env.MONGO_URI;
	mongoose.set("strictQuery", true);
	mongoose.connect(database, { useUnifiedTopology: true, useNewUrlParser: true })
    	.then(() => console.log('Database Connected...'))
   	 	.catch(err => console.log(err));
}

module.exports = connectDB;