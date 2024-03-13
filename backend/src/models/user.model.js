import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema({
    userName : {
        type: String,
        required: true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    bookingHistory : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking"
    }]
});

userSchema.pre('save', async function(next) {
    if(this.isModified("password")){
       this.password = await bcrypt.hash(this.password,10); 
    }
    next();
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password);
}


export const User = mongoose.model('User',userSchema);