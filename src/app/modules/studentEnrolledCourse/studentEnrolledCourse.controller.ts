import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { StudentEnrolledCourseService } from './studentEnrolledCourse.service';


const createStudentEnrolledCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentEnrolledCourseService.createStudentEnrolledCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllStudentEnrolledCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentEnrolledCourseService.getAllStudentEnrolledCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getStudentEnrolledCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentEnrolledCourseService.getStudentEnrolledCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateStudentEnrolledCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentEnrolledCourseService.updateStudentEnrolledCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteStudentEnrolledCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentEnrolledCourseService.deleteStudentEnrolledCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const StudentEnrolledCourseController = {
  createStudentEnrolledCourse,
  getAllStudentEnrolledCourse,
  getStudentEnrolledCourse,
  updateStudentEnrolledCourse,
  deleteStudentEnrolledCourse
};
