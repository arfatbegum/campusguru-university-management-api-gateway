import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { OfferedCourseService } from './offeredCourse.service';

const createOfferedCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.createOfferedCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllOfferedCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.getAllOfferedCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getOfferedCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.getOfferedCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOfferedCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.updateOfferedCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteOfferedCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.deleteOfferedCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const OfferedCourseController = {
  getAllOfferedCourse,
  getOfferedCourse,
  updateOfferedCourse,
  deleteOfferedCourse,
  createOfferedCourse
};
