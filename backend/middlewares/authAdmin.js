import jwt from 'jsonwebtoken';

// Admin authentication middleware
const authAdmin = async (req, res, next) => {
    try {
        const {atoken} = req.headers
if(!atoken){
    return res.json({success:false,message:"not authorized"})
}

      

        console.log("Extracted Token:", atoken); // Debugging log

        // Verify token
        const token_decoded = jwt.verify(atoken, process.env.JWT_SECRET);

        console.log("Decoded Token:", token_decoded); // Debugging log

        // Check if the decoded email matches admin email
        if (token_decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({success:false,message:"not authorized"})
        }

        next(); // Proceed to next middleware/controller

    } catch (error) {
        
        console.error("Auth error:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

export default authAdmin;
