const router = require('express').Router();
const UserModel = require('../../models/users');
const bcrypt = require('bcrypt');
const jwt = require('../../services/jwt');
const check = require('../../middlewares/auth');


/* REGISTER */
router.post('/', async (req, res) => {

    try {
        const existingUser = await UserModel.find({
            $or: [
                { email: req.body.email },
                { username: req.body.username },
            ]
        })

        if (existingUser.length >= 1) {
            return res.status(200).json({
                status: "error",
                message: 'El usuario ya existe'
            })
        } else {

            let pwd = await bcrypt.hash(req.body.password, 10);
            req.body.password = pwd

            const user = new UserModel(req.body);

            const response = await user.save();

            res.status(201).json({
                status: "success",
                data: response
            })

        }


    } catch (error) {
        res.status(500).json({
            status: "error",
            error: error.message
        })
    }
});

/* LOGIN */

router.post('/login', async (req, res) => {

    const { body } = req;

    try {

        const user = await UserModel.findOne({ email: body.email })
        if (!user) {
            return res.status(400).json({
                status: "error",
                message: "Email o password incorrectos"
            })
        }
        console.log(user);
        const pwd = bcrypt.compareSync(body.password, user.password)

        if (!pwd) {
            return res.status(400).json({
                status: "error",
                message: "Email o password incorrectos"
            })
        }

        const token = jwt.createToken(user)

        return res.status(200).json({
            status: "success",
            message: "Te has identificado correctamente",
            user: {
                id: user._id,
                username: user.username,
                role: user.role
            },
            token
        })


    } catch (error) {
        res.status(500).json({
            status: "error",
            error: error.message
        })
    }
});

/* GETBYID */

router.get('/:id', check.auth, async (req, res) => {

    const { id } = req.params;

    try {
        const user = await UserModel.findOne({ _id: id })
        res.status(200).json({
            status: "success",
            data: user
        })

    } catch (error) {
        res.status(500).json({
            status: "error",
            error: error.message
        })
    }
});

module.exports = router;
