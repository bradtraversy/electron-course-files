const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'ADD YOUR DB STRING',
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      }
    )

    console.log('MongoDB Connected')
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

module.exports = connectDB
