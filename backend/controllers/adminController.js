import validator from 'validator';
import bycrypt from 'bcrypt';
import { v2 as cloudinary } from 'cloudinary';
import doctorModel from '../models/doctorModle.js';

//api for adding doctor
const addDoctor = async (req, res) => {

    try {

        const { name, email, password, speciality, degree, experience, about,  fees, address } = req.body;
        const imageFile = req.file
        console.log({name, email, password, speciality, degree, experience, about,  fees, address},imageFile);
        
        //checking for all data to add doctor
        if (!name || !email || !password || !speciality || !degree || !experience || !about ||  !fees || !address ) {
            return res.json({ success: false, message: "All fields are required" });
        }
        //validating email
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Invalid Email" });
        }
        //validating password
        if (password.length < 8) {
            return res.json({ success: false, message: "Password must be 8 characters" });
        }

        // //hashing password
        const salt = await bycrypt.genSalt(10);
        const hashedPassword = await bycrypt.hash(password, salt);

        //upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
        const imageUrl = imageUpload.secure_url;
        const doctorData = {
            name, 
            email,
            password: hashedPassword,
            image: imageUrl,
            speciality,
            degree,
            experience,
            about,
            fees,
            address: JSON.parse(address),
            date: Date.now()
        }
        const newDoctor = new doctorModel(doctorData);
        await newDoctor.save();
        res.json({ success: true, message: "Doctor Added" });



    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}
export { addDoctor }