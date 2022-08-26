const connectDb = require('../../../mongo/conn')
import nc from "next-connect"
const Customer = require('../../../mongo/details')


connectDb()

const handler = nc()

    .get((req, res) => {
        res.send("Hello world");
    })
    .post(async (req, res) => {
        const data = Customer({
            name: req.body.name,
            email: req.body.email
        })
        data.save().then(() => {
            res.send("good")
        }).catch((e) => {
            res.send("failed")
        })
    })


export default handler;