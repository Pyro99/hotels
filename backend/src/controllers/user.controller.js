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
       return res.status(400).json({ message: 'Username already exists' });
    }

    const user = await User.create({
        userName,
        password
        });

    const createdUser = await User.findById(user._id);

    if(!createdUser) {
        throw new Error("Something went wrong while creating the user")
    }
    
        return res.status(201).json({message:"User created successfully"});
}

const loginUser = async(req ,res) =>{
    try{
    const {userName, password} = req.body;

    const user = await User.findOne({userName});
    if(!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    const validatePassword = await user.isPasswordCorrect(password);
    if(!password) {
        return res.status(401).json({ message: 'Invalid password' });
    }

    res.status(200).json({
        message: 'Login successful',
        user
    })
} catch(error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ message: 'Failed to login user' });
  }
}


const getUserById = async(req,res) => {
    try{
    const {userId} = req.params;
    const user = await User.findById(userId);
    if(!user) {
        return res.status(404).json({ message: 'User not found' });
    }
        res.status(200).json({user});
    }catch(error) {
        console.error('Error getting user:', error);
        res.status(500).json({ message: 'Failed to get user' });
    }
}


export {loginUser,createUser,getAllUsers,getUserById};
