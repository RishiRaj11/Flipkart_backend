import mongoose from 'mongoose';

export const connection = async (URL) => {
    //{ useUnifiedTopology: true, useNewUrlParser: true }
    try {
        await mongoose.connect(URL);
        console.log("Database is connected successfully");
    } catch (error) {
        console.log("Error while connecting with DB  " + error);
    }
}
export default connection;