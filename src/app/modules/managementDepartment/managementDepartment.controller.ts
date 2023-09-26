import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { ManagementDepartmentService } from './managementDepartment.service';

const createDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ManagementDepartmentService.createDepartment(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ManagementDepartmentService.getAllDepartment(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ManagementDepartmentService.getDepartment(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ManagementDepartmentService.updateDepartment(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ManagementDepartmentService.deleteDepartment(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const ManagementDepartmentController = {
  createDepartment,
  getAllDepartment,
  getDepartment,
  updateDepartment,
  deleteDepartment
};
