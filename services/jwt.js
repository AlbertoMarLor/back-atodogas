const jwt = require("jwt-simple");
const moment = require('moment')


const secret = "CLAVE_SECRETA_del_proyecto_AtoDOGas";

const createToken = (user) => {
    const payload = {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        iat: moment().unix(),
        exp: moment().add(366, "days").unix()
    };

    return jwt.encode(payload, secret);
}


module.exports = {
    secret,
    createToken
}