const mongoose = require('mongoose');

const mongoURI = 'mongodb://harshsss:123@ac-r3itkug-shard-00-00.ze6tu1w.mongodb.net:27017,ac-r3itkug-shard-00-01.ze6tu1w.mongodb.net:27017,ac-r3itkug-shard-00-02.ze6tu1w.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-6li3mc-shard-0&authSource=admin&retryWrites=true&w=majority';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Connected to MongoDB");
    const fetchedData = await mongoose.connection.db.collection("food_items");
    const foodCategory = await mongoose.connection.db.collection("foodCategory");
try {
  const data = await fetchedData.find({}).toArray();
  const catData = await foodCategory.find({}).toArray();
  global.food_items = data;
  global.foodCategory = catData;
  
} catch (err) {
  console.error(err);
}


  } catch (err) {
    console.log("---", err);
  }
};

module.exports = mongoDB;
