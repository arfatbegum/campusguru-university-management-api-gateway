import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { RoomService } from './course.service';

const createCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.createCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.getAllCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.getCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOneCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.updateOneCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.deleteCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const CourseController = {
  createCourse,
  getAllCourse,
  getCourse,
  updateOneCourse,
  deleteCourse
};
