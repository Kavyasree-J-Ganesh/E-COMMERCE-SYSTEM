import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service'


//New User Signup
export const newUser = async (req, res, next) => {
  try {
    const data = await UserService.userRegistration(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User created successfully'
    })
  }
  catch (error) {
    next(error);
  }
};

//Log in
export const login = async (req, res, next) => {
  try {
    const data = await UserService.login(req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      token:data.token,
      isAdmin: data.isAdmin,
      message: 'User Login Succesfully'
    })
  }
  catch (error) {
    next(error);
  }
};

