import { Hotel } from "../models/hotel.model.js";

const createHotel = async (req,res) => {
     try{
    console.log('Inside create Hotel Controller');
    const{name,imageSrc,desc,price} =  req.body;
    const hotel = await Hotel.create({
        name,
        imageSrc,
        desc,
        price
        });
        
       res.status(201).json({message:"Hotel created successfully"});
    } catch(err) {
        console.log(`Error creating user`,err);
        res.status(500).json({message:"Error creating hotel"})
    }
};

const getAllHotels = async(req,res) =>{
    try{
    const hotels = await Hotel.find({});
     res.status(200).json(hotels);
    } catch(err) {
        console.log('Error finding hotels', err);
     res.status(500).json({message:"Error in finding hotels"})
    }
}

const getHotelsById = async(req,res) =>{
    try{
        const {id} = req.params;
        const hotels = await Hotel.findById(id);
        res.status(200).json({hotels});
    } catch(err) {
        res.status(500).json({message:"Error in finding hotel"})
    }
}

const updateHotels = async(req,res) => {
    try{
        const {id} = req.params;
        const hotel = await Hotel.findByIdAndUpdate({_id:id},req.body,{new:true});
        res.status(200).json({hotel});
    } catch(err) {
        res.status(500).json({message:"Cannot update hotel info"});
    }
}


export {createHotel,getAllHotels,getHotelsById,updateHotels}