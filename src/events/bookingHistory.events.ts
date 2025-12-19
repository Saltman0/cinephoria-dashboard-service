import * as dashboardRepository from "../repository/dashboard.repository";

export async function createBookingHistoryEvent(bookingHistory: { bookingId: number, date: string }): Promise<void> {
    await dashboardRepository.insertBookingHistory(bookingHistory.bookingId, bookingHistory.date);
}

export async function updateBookingHistoryEvent(
    bookingHistory: { id: string, bookingId: number, date: string }
): Promise<void>  {
    await dashboardRepository.updateBookingHistory(bookingHistory.id, bookingHistory.bookingId, bookingHistory.date);
}

export async function deleteBookingHistoryEvent(bookingHistory: { id: string }): Promise<void>  {
    await dashboardRepository.deleteBookingHistory(bookingHistory.id);
}