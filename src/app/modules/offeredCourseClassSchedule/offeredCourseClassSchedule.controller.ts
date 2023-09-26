import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { OfferedCourseClassScheduleService } from './offeredCourseClassSchedule.service';

const createOfferedCourseClassSchedule = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseClassScheduleService.createOfferedCourseClassSchedule(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllOfferedCourseClassSchedule = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseClassScheduleService.getAllOfferedCourseClassSchedule(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getOfferedCourseClassSchedule = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseClassScheduleService.getOfferedCourseClassSchedule(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOfferedCourseClassSchedule = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseClassScheduleService.updateOfferedCourseClassSchedule(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteOfferedCourseClassSchedule = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseClassScheduleService.deleteOfferedCourseClassSchedule(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const OfferedCourseClassScheduleController = {
  createOfferedCourseClassSchedule,
  getAllOfferedCourseClassSchedule,
  getOfferedCourseClassSchedule,
  updateOfferedCourseClassSchedule,
  deleteOfferedCourseClassSchedule
};
