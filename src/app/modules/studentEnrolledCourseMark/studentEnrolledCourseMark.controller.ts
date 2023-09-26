import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { StudentEnrolledCourseMarkService } from './studentEnrolledCourseMark.service';

const getAllStudentMarks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentEnrolledCourseMarkService.getAllStudentMarks(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getStudentMarks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentEnrolledCourseMarkService.getStudentMarks(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateStudentMarks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentEnrolledCourseMarkService.updateStudentMarks(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateCourseFinalMarks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentEnrolledCourseMarkService.updateCourseFinalMarks(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const StudentEnrolledCourseMarkController = {
  getAllStudentMarks,
  updateStudentMarks,
  updateCourseFinalMarks,
  getStudentMarks
};
