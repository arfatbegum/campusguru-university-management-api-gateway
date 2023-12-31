import { Request } from "express";
import { CoreService as HttpService } from "../../../shared/axios"
import { IGenericResponse } from "../../../interfaces/common";

const createSemester = async (req: Request): Promise<IGenericResponse> => {
    const response: IGenericResponse = await HttpService.post('/academicSemesters', req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    })
    return response;
};

const getAllSemesters = async (req: Request): Promise<IGenericResponse> => {
    const response: IGenericResponse = await HttpService.get('/academicSemesters', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    })
    return response;
};

const updateSemester = async (req: Request): Promise<IGenericResponse> => {
    const { id } = req.params;
    const response: IGenericResponse = await HttpService.patch(`/academicSemesters/${id}`, req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    })
    return response;
};

const getSingleSemester = async (req: Request): Promise<IGenericResponse> => {
    const { id } = req.params;
    const response: IGenericResponse = await HttpService.get(`/academicSemesters/${id}`, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
};

const deleteSemester = async (req: Request): Promise<IGenericResponse> => {
    const { id } = req.params;
    const response: IGenericResponse = await HttpService.delete(`/academicSemesters/${id}`, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return response;
};

export const AcademicSemesterService = {
    createSemester,
    getAllSemesters,
    updateSemester,
    getSingleSemester,
    deleteSemester
}