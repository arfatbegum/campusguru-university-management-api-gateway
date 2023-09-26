import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';

import { StudentEnrolledCourseValidation } from './studentEnrolledCourse.validation';
import { StudentEnrolledCourseController } from './studentEnrolledCourse.controller';

const router = express.Router();

router.get('/', StudentEnrolledCourseController.getAllStudentEnrolledCourse);
router.get('/:id', StudentEnrolledCourseController.getStudentEnrolledCourse);

router.post(
  '/',
  validateRequest(StudentEnrolledCourseValidation.create),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  StudentEnrolledCourseController.createStudentEnrolledCourse
);

router.patch(
  '/:id',
  validateRequest(StudentEnrolledCourseValidation.update),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  StudentEnrolledCourseController.updateStudentEnrolledCourse
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  StudentEnrolledCourseController.deleteStudentEnrolledCourse
);

export const StudentEnrolledCourseRoutes = router;
