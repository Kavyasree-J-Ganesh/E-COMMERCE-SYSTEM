import User from '../models/user.model';
import bcrypt from 'bcrypt';
import Jwt from 'jsonwebtoken';


//create new user
export const newUser = async (body) => {

  const userexist = await User.findOne({ email: body.email });
  if (!userexist) {
    const salt = await bcrypt.genSalt(10);
    body.password = await bcrypt.hash(body.password, salt);
    const data = await User.create(body);
    return data;
  } else {
    throw new Error('User already exist');
  }
};


// login user
export const login = async (body) => {
  try {
    const user = await User.findOne({ email: body.email });
    if (!user) throw new Error('Invalid Email');

    const validPassword = await bcrypt.compare(body.password, user.password);
    if (!validPassword) throw new Error('Invalid Password');
    else
      var token = Jwt.sign(
        { email: user.email, id: user._id }, process.env.SECRET_KEY);
    return user, token;
  } catch (error) {
    throw new Error(error);
  }
};