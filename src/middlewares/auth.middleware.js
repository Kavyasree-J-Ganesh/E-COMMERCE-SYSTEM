import jwt from 'jsonwebtoken';
import HttpStatus from 'http-status-codes';

export const userAuth = async (req, res, next) => {
  try {
    let bearerToken = req.header('Authorization');
    if (!bearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'
      };
    bearerToken = bearerToken.split(' ')[1];

    const user = await jwt.verify(bearerToken, process.env.USER_SECRET_KEY);
    req.body.userId = user.email
    next();
  } catch (error) {
    next(error);
  }
};


// export const adminAuth = async (req, res, next) => {
//   try {
//     let bearerToken = req.header('Authorization');
//     if (!bearerToken)
//       throw {
//         code: HttpStatus.BAD_REQUEST,
//         message: 'Authorization token is required'
//       };
//     bearerToken = bearerToken.split(' ')[1];

//     const admin = await jwt.verify(bearerToken, process.env.ADMIN_SECRET_KEY);
//     // if (!admin.isAdmin) {
//     //   throw {
//     //     code: HttpStatus.UNAUTHORIZED,
//     //     message: 'You are not authorized to access this resource'
//     //   };
//     // }
//     req.body.userId = admin.email;
//     next();
//   } catch (error) {
//     next(error);
//   }
// };
