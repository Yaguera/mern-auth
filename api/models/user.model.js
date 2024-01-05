import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    }
}, {timestamps: true}); 
// cada usuario tera 2 extra information, time of creation and time of edit. (pode ser usado no futuro paara filtrar por tempo por ex)

const User = mongoose.model('User', userSchema);

export default User;