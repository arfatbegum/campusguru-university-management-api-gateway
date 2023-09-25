import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { BuildingService } from './building.service';

const createBuilding = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.createBuilding(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};


const getAllBuilding = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.getAllBuilding(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getBuilding = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.getBuilding(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOneBuilding = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.updateOneBuilding(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteBuilding = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.deleteBuilding(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const BuildingController = {
  createBuilding,
  getAllBuilding,
  getBuilding,
  updateOneBuilding,
  deleteBuilding
};
