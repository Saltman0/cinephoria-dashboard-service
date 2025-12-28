import * as dashboardRepository from "../repository/dashboard.repository.ts";

export async function createBookingHistoryEvent(bookingHistory : {bookingId: number, date: string}): Promise<void> {
    await dashboardRepository.insertBookingHistory(bookingHistory.bookingId, bookingHistory.date);
}

export async function deleteBookingHistoryEvent(bookingHistory: {bookingId: number}): Promise<void>  {
    await dashboardRepository.deleteBookingHistoryByBookingId(bookingHistory.bookingId);
}