const mongoose = require("mongoose");

const connectDB = () => {
	const database = "mongodb+srv://senthilsomeshwar2002:mYKWQktfHX407kYT@cluster0.nwvdtsx.mongodb.net/?retryWrites=true&w=majority";
	mongoose.set("strictQuery", true);
	mongoose.connect(database, { useUnifiedTopology: true, useNewUrlParser: true })
    	.then(() => console.log('Database Connected...'))
   	 	.catch(err => console.log(err));
}

module.exports = connectDB;