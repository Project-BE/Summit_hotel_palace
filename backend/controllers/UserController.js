const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = class UserController {

    static async register(req, res){
        const {name, email, phone, password, confirmpassword} = req.body

        //validations
        if(!name){
            res.status(422).json({ message: `O nome é obrigatório!`})
            return
        }
        if(!email){
            res.status(422).json({ message: `O email é obrigatório!`})
            return
        }
        if(!phone){
            res.status(422).json({ message: `O telefone é obrigatório!`})
            return
        }
        if(!password){
            res.status(422).json({ message: `A senha é obrigatório!`})
            return
        }
        if(!confirmpassword){
            res.status(422).json({ message: `Repita sua senha!`})
            return
        }

        if(password !== confirmpassword){
            res.status(422).json({ message: `Suas senhas não convergem` })
            return
        }

        //check if user exists

        const userExists = await User.findOne({ email:email })
        
        if(userExists){
            res.status(422).json({ message: `Email em uso. Digite um email válido!` })
            return
        }
        
        //create password
        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)

        //create user
        const user = new User({
            name,
            email,
            phone,
            password:passwordHash,
        })
        try{
            const newUser = await user.save()
            res.status(201).json({
                message: 'Usuário criado',
                newUser,
            })
        } catch{
            res.status(500).json({message: error})
        }

    }
}