const Joi = require('joi');
const { schema } = require('./models/user');
const jwt = require('jsonwebtoken');

const registerValidation = (data) => {
    const Schema = Joi.object(
        {
            name : Joi.string().min(6).max(255).required(),
            email : Joi.string().min(6).max(255).required(),
            password : Joi.string().min(6).max(255).required()
        });

        return Schema.validate(data);
}


const loginValidation = (data) => {
    const Schema = Joi.object(
        {
            email : Joi.string().min(6).max(255).required(),
            password : Joi.string().min(6).max(255).required()
        });

        return Schema.validate(data);
}

const verifyToken = (req,res,next) => {
    const token = req.header("auth-token");

    if(!token) return res.status(401).json({error: "Access Denied"});

    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    }
    catch(error){
        res.status(400).json({error: "Token not valid"});
    }
}

module.exports = { registerValidation,loginValidation,verifyToken };