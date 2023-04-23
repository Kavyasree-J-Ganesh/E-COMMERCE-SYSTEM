// import HttpStatus from 'http-status-codes';
// import * as AdminService from '../services/admin.service';

// export const newUserAdmin = async (req, res, next) => {
//     try {
//         const data = await AdminService.newUserAdmin(req.body);
//         res.status(HttpStatus.CREATED).json({
//             code: HttpStatus.CREATED,
//             data: data,
//             message: 'User created successfully',
//         });
//     } catch (error) {
//         next(error);
//     }
// };

// //Log in
// export const loginAdmin = async (req, res, next) => {
//     try {
//         const data = await AdminService.loginAdmin(req.body);
//         res.status(HttpStatus.ACCEPTED).json({
//             code: HttpStatus.ACCEPTED,
//             data: data,
//             message: 'User Login Succesfully'
//         })
//     }
//     catch (error) {
//         next(error);
//     }
// };
