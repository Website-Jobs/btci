const express = require("express");
const router = express();
// const bscrypt = require("bscrypt")

const Account = require("../../../models/accounts");


router.post("/accounts/create", async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    console.log(req.body);

    const newAccount = await new Account({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password
    })
    await newAccount.save()
        .then((result) => {
            if (!result) {
                res.status(500).json({ status: 0, err: 'Account not found' });
            } else {
                console.log(result);
                res.status(200).json({ status: 1, accid: result._id, email: result.email });
            }
        }).catch((err) => {
            res.status(500).json({ status: 0, err: 'Account not found' });
        })

})


router.post("/accounts/login", async (req, res) => {
    const { email, password } = req.body;
    await Account.findOne({ email: email })
        .then((result) => {
            if (!result) {
                res.status(500).json({ status: 0, err: 'Account not found' });
            } else {
                res.status(200).json({ user: 'agu chux' });
            }
        }).catch((err) => {
            res.status(500).json({ status: 0, err: 'Account not found' });
        })
})


router.post("/accounts/userexist", async (req, res) => {
    const { email } = req.body;
    await Account.findOne({ email: email })
        .then((result) => {
            if (!result) {
                res.status(500).json({ status: 0, err: 'Account not found' });
            } else {
                res.status(200).json({ status: 1, accid: result._id });
            }
        }).catch((err) => {
            res.status(500).json({ status: 0, err: 'Account not found' });
        })
})





router.get("*", (req, res) => {
    res.status(500).json({ err: 'invalid API route' })
})


module.exports = router;