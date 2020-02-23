const userModel = require('../db/models/UserModel')
const token = require('../utils/token')


module.exports = (app) => {

    app.post('/user/login',  (req, res) => {
        userModel.checkUserByEmail(req.body.email)
            .catch((err) => {console.log(err)})
            .then(result => {

                const jwtSignCallback = function (err, token) {
                    if (err) {
                        res.status(401).send()
                        console.log(err)
                    } else {
                        res.send({token: token})
                    }
                };
                if (result.rows[0].password_salt === req.body.password){
                    token.createToken({user: req.body.email},jwtSignCallback())
                        console.log(token.createToken({user: req.body.email},jwtSignCallback(err, token)))
                }

            })

        //3. Wygenerowanie tokena

    })

    app.post("/user/register", (req, res) => {
        userModel
            .insertUser(req.body)
            .catch(err => res.status(400).send(err))
            .then((result) => {
                console.log(result);
                res.send({status: "OK"});
            })
    });

}

