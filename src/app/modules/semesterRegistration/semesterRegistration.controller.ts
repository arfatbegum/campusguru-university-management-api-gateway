import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { SemesterRegistrationService } from './semesterRegistration.service';

const createSemesterRegistration = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.createSemesterRegistration(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllSemesterRegistration = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.getAllSemesterRegistration(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSemesterRegistration = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.getSemesterRegistration(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOneSemesterRegistration = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.updateOneSemesterRegistration(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteSemesterRegistration = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.deleteSemesterRegistration(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getMyRegistration = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.getMyRegistration(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const startRegistration = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.startRegistration(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const mySemesterRegistrationCourses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.mySemesterRegistrationCourses(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const enrollIntoCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.enrollIntoCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const withDrawFromCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.withDrawFromCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const confirmRegistration = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.confirmRegistration(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const startNewSemester = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.startNewSemester(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const SemesterRegistrationController = {
  createSemesterRegistration,
  getAllSemesterRegistration,
  getSemesterRegistration,
  updateOneSemesterRegistration,
  deleteSemesterRegistration,
  getMyRegistration,
  startRegistration,
  mySemesterRegistrationCourses,
  enrollIntoCourse,
  withDrawFromCourse,
  confirmRegistration,
  startNewSemester
};
