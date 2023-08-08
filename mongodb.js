const {MongoClient}=require('mongodb');
const url="mongodb://localhost:27017"

const database='student';
const client=new MongoClient(url);

const dbConnect=async()=>{
    const result=await client.connect();
    const db=await result.db(database);
    return db.collection('profile');
}

module.exports=dbConnect;

// const { MongoClient } = require('mongodb');

// const url = 'mongodb://localhost:27017';
// const database = 'student';
// const client = new MongoClient(url);

// const dbConnect = async () => {
//   try {
//     await client.connect();
//     const db = client.db(database);
//     return db.collection('profile');
//   } catch (error) {
//     console.error('Error connecting to the database:', error);
//     return null;
//   } finally {
//     await client.close();
//   }
// };

// module.exports = dbConnect;
