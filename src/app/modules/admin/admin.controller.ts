import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { AdminService } from './admin.service';

const getAllAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AdminService.getAllAdmin(req);
        sendResponse(res, result);
    } catch (error) {
        next(error);
    }
};

const getAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AdminService.getAdmin(req);
        sendResponse(res, result);
    } catch (error) {
        next(error);
    }
};

const updateAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AdminService.updateAdmin(req);
        sendResponse(res, result);
    } catch (error) {
        next(error);
    }
};

const deleteAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AdminService.deleteAdmin(req);
        sendResponse(res, result);
    } catch (error) {
        next(error);
    }
};

export const AdminController = {
    getAllAdmin,
    getAdmin,
    updateAdmin,
    deleteAdmin
};