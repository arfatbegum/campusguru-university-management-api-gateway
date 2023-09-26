import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { FacultyController } from './faculty.controller';
import { FacultyValidation } from './faculty.validations';

const router = express.Router();

router.get('/', FacultyController.getAllFaculty);

router.get('/profile/:id', FacultyController.getFacultyProfile);
router.get('/my-courses', auth(ENUM_USER_ROLE.FACULTY), FacultyController.getMyCourses);
router.get(
    '/my-course-students',
    auth(ENUM_USER_ROLE.FACULTY),
    FacultyController.getMyCourseStudents
);

router.get('/:id', FacultyController.getFaculty);

router.patch(
    '/:id',
    validateRequest(FacultyValidation.updateFaculty),
    auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    FacultyController.updateFaculty
);

router.delete(
    '/:id',
    auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    FacultyController.deleteFaculty
);

export const FacultyRoutes = router;