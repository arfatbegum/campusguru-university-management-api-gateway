import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { RoomService } from './room.service';

const createRoom = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.createRoom(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllRoom = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.getAllRoom(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getRoom = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.getRoom(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOneRoom = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.updateOneRoom(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteRoom = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.deleteRoom(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const RoomController = {
  createRoom,
  getAllRoom,
  getRoom,
  updateOneRoom,
  deleteRoom
};
