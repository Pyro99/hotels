import { User } from "../models/user.model.js";

const getAllUsers = async(req,res) => {
    try{
        const users = await User.find({});
        res.status(200).json({users});
    }catch(err) {
        res.status(500).json({message:"Cannot get users"});
    }
}

const createUser = async (req,res) =>{
    const{userName,password} = req.body;

    if([userName,password].some(field => field?.trim() === "")) {
        throw new Error("All fields are required");
    }

    const existedUser = await User.findOne({ userName });
    if(existedUser) {
     throw new Error("Username already exists");
    }

    const user = await User.create({
        userName:userName.toLowerCase(),
        password
        });

    const createdUser = await User.findById(user._id);

    if(!createdUser) {
        throw new Error("Something went wrong while creating the user")
    }
    
        return res.status(201).json({message:"User created successfully"});
}

const loginUser = async(req ,res) =>{
    const {userName, password} = req.body;
    console.log(`username`,userName);

    const user = await User.findOne({userName});
    if(!user) {
        throw new Error("User not found");
    }
    const validatePassword = user.isPasswordCorrect(password);
    if(!password) {
        throw new Error("Password is incorrect. Please try again.")
    }

    res.status(200).json({
        user
    })
}


const updateUser = async(req,res) => {
    try{
    const {id} = req.params;
    const user = await User.findByIdAndUpdate({_id:id},req.body,{new:true});
    res.status(200).json({user});
    }catch(err) {
        res.status(500).json({message:"Cannot update user"});
    }
}


export {loginUser,createUser,updateUser,getAllUsers};
