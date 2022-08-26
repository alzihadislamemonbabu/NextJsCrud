const connectDb = require('../../../mongo/conn')
import nc from "next-connect"
const Customer = require('../../../mongo/details')



connectDb()

const handler = nc()
    .get(async (req, res) => {
        try {
            const data = await Customer.find({ name: req.body.name })
            for (const ud of data) {
                console.log(ud.name)
            }
            res.status(200).send(data[0])
        } catch (error) {

        }

    })
    .post(async (req, res) => {
        const data = Customer({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        })
        data.save().then(() => {
            res.status(200).send("data has been saved to db")
        }).catch((e) => {
            res.status(400).send("failed to save data to db")
        })
    })


export default handler;