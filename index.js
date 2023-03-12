const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// user: dbuser3
// pass: k1ES5qrkd0gvBU2S

const uri =
  "mongodb+srv://dbuser3:k1ES5qrkd0gvBU2S@cluster0.xgh8h2c.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const userCollection = client.db("nodeMongoCrudRecap").collection("users");
    const user = {
      name: "Mark Zuckerberg",
      email: "mark@zuckerberg.com",
    };
    const result = await userCollection.insertOne(user);
    console.log(result);
  } finally {
  }
}

run().catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello from node mongo server");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
