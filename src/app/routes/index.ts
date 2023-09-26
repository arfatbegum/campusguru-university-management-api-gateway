import express from 'express';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.routes';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.routes';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.routes';
import { BuildingRoutes } from '../modules/building/building.routes';
import { RoomRoutes } from '../modules/room/room.routes';
import { CourseRoutes } from '../modules/course/course.routes';
import { SemesterRegistrationRoutes } from '../modules/semesterRegistration/semesterRegistration.routes';
import { OfferedCourseRoutes } from '../modules/offeredCourse/offeredCourse.routes';
import { OfferedCourseSectionRoutes } from '../modules/offeredCourseSection/offeredCourseSection.routes';
import { OfferedCourseClassScheduleRoutes } from '../modules/offeredCourseClassSchedule/offeredCourseClassSchedule.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-faculties',
    routes: AcademicFacultyRoutes
  },
  {
    path: '/academic-departments',
    routes: AcademicDepartmentRoutes
  },
  {
    path: '/academic-semesters',
    routes: AcademicSemesterRoutes
  },
  {
    path: '/buildings',
    routes: BuildingRoutes
  },
  {
    path: '/rooms',
    routes: RoomRoutes
  },
  {
    path: '/courses',
    routes: CourseRoutes
  },
  {
    path: '/semester-registrations',
    routes: SemesterRegistrationRoutes
  },
  {
    path: '/offered-courses',
    routes: OfferedCourseRoutes
  },
  {
    path: '/offered-course-sections',
    routes: OfferedCourseSectionRoutes
  },
  {
    path: '/offered-course-class-schedules',
    routes: OfferedCourseClassScheduleRoutes
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
