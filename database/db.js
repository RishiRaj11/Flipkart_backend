import mongoose from 'mongoose';
//mongodb+srv://rraj58361:rraj58361@cluster1.zwoaucw.mongodb.net/?retryWrites=true&w=majority
//  mongodb://user:12345@ac-vcnzpyk-shard-00-00.x4r6ano.mongodb.net:27017,ac-vcnzpyk-shard-00-01.x4r6ano.mongodb.net:27017,ac-vcnzpyk-shard-00-02.x4r6ano.mongodb.net:27017/?ssl=true&replicaSet=atlas-l5leoa-shard-0&authSource=admin&retryWrites=true&w=majority

export const connection = async (URL) => {

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log("Database is connected successfully");
    } catch (error) {
        console.log("Error while connecting with DB  " + error);
    }
}
export default connection;