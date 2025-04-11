import { User } from "../models/userModel.js";

export const signup = async (req, res) => {
    try {
        const {name, email, password, mobile, role} = req.body;
        const user = new User({
            name, 
            mobile, 
            email, 
            password,
            role
        });
        await user.save();
        return res.status(201).json({ 
            message: 'User registered', 
            user 
        });
    } catch (err) {
         return res.status(400).json({ 
            message: 'Error registering user', 
            error: err.message 
        });
    }
}

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({ 
                message: 'User not found', 
            });
        }
        if(user.password !== password) {
            return res.status(400).json({ 
                message: 'Invalid password', 
            });
        }
        return res.status(200).json({ 
            message: 'User logged in', 
            user 
        });
    } catch (err) {
         return res.status(400).json({ 
            message: 'Error logging in user', 
            error: err.message 
        });
    }
}