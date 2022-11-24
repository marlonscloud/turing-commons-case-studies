const mongoose = require('mongoose')

const { MongoClient, ServerApiVersion } = require('mongodb')

const connectDB = async () => {

    // console.log('Connecting')

    // const uri = "mongodb+srv://Rich:2AQJzTgnh6UnKQbu@casestudies.8aibcpd.mongodb.net/?retryWrites=true&w=majority"
    // const client = new MongoClient(uri, {
    //     useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1
    // })

    // client.connect(err => {
    //     const collection = client.db("Cases").collection("cases")
    //     console.log("connected")
    //     client.close()
    // })

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log(`Mongo DB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB