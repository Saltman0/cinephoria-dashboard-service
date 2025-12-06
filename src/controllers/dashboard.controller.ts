import { Request, Response } from "express";
import * as dashboardRepository from "../repository/dashboard.repository.ts";

export async function getBookingHistory(req: Request, res: Response): Promise<Response> {
    try {
        const dateStart: string|null = <string> req.query.dateStart ?? null;
        const dateEnd: string|null = <string> req.query.dateEnd ?? null;

        const bookingHistory = await dashboardRepository.findBookingHistory(dateStart, dateEnd);

        res.status(200).json(bookingHistory);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({message: error.message});
        }
    }
}

export async function createBookingHistory(req: Request, res: Response) {
    try {
        const bookingHistory = await dashboardRepository.insertBookingHistory(
            req.body.bookingId,
            req.body.date
        );

        res.status(201).json(bookingHistory.insertedId.id);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({message: error.message});
        }
    }
}