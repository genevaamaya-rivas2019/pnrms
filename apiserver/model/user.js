const mongoose  = require('mongoose')
const jwt  = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const UserSchema  = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim: true
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength: 7
    }
});

const User = mongoose.model('User', UserSchema);

UserSchema.methods.newAuthToken = async function(){
    const user  = this
    const token =  jwt.sign({ _id: user.id.toString() },'fralauth', {expiresIn: "7 days"})
    user.tokens = user.tokens.concat({ token })
    await user.save()
    return token
}

UserSchema.pre('save', async function(next){
    const user = this
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

module.exports = User;