import jwt from 'jsonwebtoken'

const adminAuth = async (req,res,next)=>{

    try {

        const {token} = req.headers;
        

        if (!token) {
            return res.json({success:false, message:"Not not Authorized login again"})
        }

        const tokenDecode = jwt.verify(token,process.env.JWT_SECRET);

        if (tokenDecode !== process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD) {
            return res.json({success:false, message:"Not Authorized login again"})
        }
        console.log('till here working')
        next();
        
        
    } catch (error) {
        console.log(error);
        res.json({succes:false, message:error.message})
        
    }
}

export default adminAuth;