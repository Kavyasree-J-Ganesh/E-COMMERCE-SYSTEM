import User from '../models/user.model';
import bcrypt from 'bcrypt';
import Jwt from 'jsonwebtoken';


// create new user
export const userRegistration = async (body) => {
  const userExist = await User.findOne({ email: body.email });
  if (!userExist) {
    const salt = await bcrypt.genSalt(10);
    body.password = await bcrypt.hash(body.password, salt);
    const data = await User.create(body);
    return data;
  } else {
    throw new Error('User already exists');
  }
};


export const login = async (body, isAdmin = false) => {
  try {
    const user = await User.findOne({ email: body.email });
    console.log(body, "asdasdasdasdasd");
    if (!user) {
      throw new Error('Invalid Email');
    }

    const validPassword = await bcrypt.compare(body.password, user.password);
    if (!validPassword) {
      throw new Error('Invalid Password');
    }

    // If logging in as admin,user.isAdmin is true
    var token = Jwt.sign({ email: user.email, id: user._id }, process.env.USER_SECRET_KEY);

    return { isAdmin: user.isAdmin, token };
  } catch (error) {
    throw new Error(error);
  }
};

