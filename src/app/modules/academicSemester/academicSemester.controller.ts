import { NextFunction, Request, Response } from "express";
import { AcademicSemesterService } from "./academicSemester.service";
import sendResponse from "../../../shared/response";

const createSemester = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicSemesterService.createSemester(req);
        sendResponse(res, result);
    } catch (err) {
        next(err);
    }
};

const getAllSemesters = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicSemesterService.getAllSemesters(req);
        sendResponse(res, result);
    } catch (err) {
        next(err);
    }
};
const updateSemester = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicSemesterService.updateSemester(req);
        sendResponse(res, result);
    } catch (err) {
        next(err);
    }
};

const getSingleSemester = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicSemesterService.getSingleSemester(req);
        sendResponse(res, result);
    } catch (error) {
        next(error);
    }
};

const deleteSemester = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicSemesterService.deleteSemester(req);
        sendResponse(res, result);
    } catch (error) {
        next(error);
    }
};

export const AcademicSemesterController = {
    createSemester,
    getAllSemesters,
    updateSemester,
    getSingleSemester,
    deleteSemester
}