import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { AcademicDepartmentService } from './academicDepartment.service';

const createAcademicDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicDepartmentService.createAcademicDepartment(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllAcademicDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicDepartmentService.getAllAcademicDepartment(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAcademicDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicDepartmentService.getAcademicDepartment(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateAcademicDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicDepartmentService.updateAcademicDepartment(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteAcademicDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicDepartmentService.deleteAcademicDepartment(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AcademicDepartmentController = {
  getAllAcademicDepartment,
  getAcademicDepartment,
  updateAcademicDepartment,
  deleteAcademicDepartment,
  createAcademicDepartment
};
