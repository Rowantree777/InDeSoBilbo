
import { MongoClient } from "mongodb";

async function newReg (titolo,dataodierna,utente,tipoprenotazione) {

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://Strade:5300etsd@cluster0.qrpit.mongodb.net/IDLDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    const database = client.db("IDLDatabase");
    const prenotation = database.collection("IDLRegistrazioni");
    // create a document to insert
    const doc = {
      title: titolo,
      date: dataodierna,
      user: utente, 
      stato : tipoprenotazione
    }
    const result = await prenotation.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
}
//edit
newReg("lo_squalo", "12/04/2021", "enricostrade", "in_attesa");
