const mongoose = require("mongoose");

const connect = async () => {
    try {
        mongoose.connect("mongodb+srv://julianajsf95:qKZI8B4uTnrL5vhO@cluster0.r4hjxbw.mongodb.net/armazenamento",
        {useNewUrlParser: true,
            useUnifiedTopology: true
        }
        )
        console.log("está on");
    } catch (error) {
        console.log(error)
    }
};

module.exports = {connect};