import database from "../config/database.config.ts";

export async function findBookingHistory(dateStart: string|null, dateEnd: string|null) {
    try {
        const bookingHistory = database.collection('bookingHistory');

        const start: Date|null = dateStart ? new Date(dateStart) : null;
        const end: Date|null = dateEnd ? new Date(dateEnd) : null;

        const query: any = {};
        if (start !== null && end !== null) {
            query.date = { $gte: start, $lte: end };
        } else if (start !== null) {
            query.date = { $gte: start };
        } else if (end !== null) {
            query.date = { $lte: end };
        }

        return await bookingHistory.find(query).toArray();
    } catch (error) {
        throw error;
    }
}

export async function insertBookingHistory(bookingId: number, date: string) {
    try {
        const bookingHistory = database.collection('bookingHistory');

        return await bookingHistory.insertOne({
            bookingId: bookingId,
            date: date
        });
    } catch (error) {
        throw error;
    }
}