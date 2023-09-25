import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { AcademicFacultyService } from './academicFaculty.service';

const createAcademicFaculty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.createAcademicFaculty(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllAcademicFaculty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.getAllAcademicFaculty(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};


const getAcademicFaculty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.getAcademicFaculty(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateAcademicFaculty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.updateAcademicFaculty(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteAcademicFaculty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.deleteAcademicFaculty(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AcademicFacultyController = {
  createAcademicFaculty,
  getAllAcademicFaculty,
  getAcademicFaculty,
  updateAcademicFaculty,
  deleteAcademicFaculty,
};
