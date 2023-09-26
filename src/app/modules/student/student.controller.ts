import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { StudentService } from './student.service';

const getAllStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentService.getAllStudent(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getMyCourses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentService.getMyCourses(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getMyAcademicInfos = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentService.getMyAcademicInfos(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getMyCourseSchedules = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentService.getMyCourseSchedules(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentService.getStudent(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getStudentProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentService.getStudentProfile(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log("controller")
    const result = await StudentService.updateStudent(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentService.deleteStudent(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const StudentController = {
  getAllStudent,
  getStudent,
  updateStudent,
  deleteStudent,
  getMyCourses,
  getMyCourseSchedules,
  getMyAcademicInfos,
  getStudentProfile
};
