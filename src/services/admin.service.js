import Admin from '../models/admin.model';
import bcrypt from 'bcrypt';
import Jwt from 'jsonwebtoken';

//create new user
export const newUserAdmin = async (body) => {
    const userexist = await Admin.findOne({ email: body.email });
    if (!userexist) {
        const salt = await bcrypt.genSalt(10);
        body.password = await bcrypt.hash(body.password, salt);
        const data = await Admin.create(body);
        return data;
    } else {
        throw new Error('User already exist');
    }
};

// login user
export const loginAdmin = async (body) => {
    try {
        const admin = await Admin.findOne({ email: body.email });
        if (!admin) throw new Error('Invalid Email');

        const validPassword = await bcrypt.compare(body.password, admin.password);
        if (!validPassword) throw new Error('Invalid Password');
        else {
            const token = Jwt.sign({ email: admin.email, id: admin._id }, process.env.SECRET_KEY);
            return { admin: admin, token: token };
        }
    } catch (error) {
        throw new Error(error);
    }
};
