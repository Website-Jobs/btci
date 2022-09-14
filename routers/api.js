const express = require("express");
const router = express();
const bcrypt = require("bcryptjs")

const Account = require("../models/accounts");

router.post("/create", async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashesPassword = bcrypt.hashSync(password, salt);
    await new Account({
        email: email,
        firstname: firstname,
        lastname: lastname,
        password: hashesPassword
    }).save()
        .then((result) => {
            console.log(result);
            res.status(200).json({ status: 1, accid: result.id, email: result.email });
        }).catch((err) => {
            res.status(404).json({ status: 0, err: err });
        })
})

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    await Account.findOne({ email: email })
        .then((result) => {
            const isValidUser = bcrypt.compareSync(password, result.password);
            if (isValidUser) {
                res.status(200).json({ status: 1, accid: result._id, email: result.email });
            } else {
                res.status(404).json({ status: 0, err: 'Account not found' });
            }
        }).catch((err) => {
            res.status(404).json({ status: 0, err: 'Account not found' });
        })
})


router.post("/info", async (req, res) => {
    const { token } = req.body;
    await Account.findOne({ _id: token })
        .then((result) => {
            res.status(200).json(
                {
                    status: 1,
                    accid: result.id,
                    email: result.email,
                    firstname: result.firstname,
                    lastname: result.lastname,
                    account: result.account,
                    lastseen: result.lastseen,
                });
        }).catch((err) => {
            res.status(404).json({ status: 0, err: 'Account not found' });
        })


})




router.get("/:token/info", async (req, res) => {
    const { token } = req.params;
    await Account.findOne({ _id: token })
        .then((result) => {
            res.status(200).json(
                {
                    status: 1,
                    accid: result.id,
                    email: result.email,
                    firstname: result.firstname,
                    lastname: result.lastname,
                    account: result.account,
                    lastseen: result.lastseen,
                });
        }).catch((err) => {
            res.status(404).json({ status: 0, err: 'Account not found' });
        })


})


router.get("*", (req, res) => {
    res.status(500).json({ err: 'invalid API route' })
})


module.exports = router;