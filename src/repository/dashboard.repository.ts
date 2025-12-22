import {MongoClient, ServerApiVersion, DeleteResult} from "mongodb";
import {ObjectId} from "bson";
import process from "node:process

export async function findBookingHistory(dateStart: string|null, dateEnd: string|null) {
    const client: MongoClient = new MongoClient(process.env.MONGODB_URI, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    try {
        await client.connect();

        const start: number|null = dateStart ? new Date(dateStart) : null;
        const end: number|null = dateEnd ? new Date(dateEnd) : null;

        const query: any = {};
        if (start !== null && end !== null) {
            query.date = { $gte: start, $lte: end };
        } else if (start !== null) {
            query.date = { $gte: start };
        } else if (end !== null) {
            query.date = { $lte: end };
        }

        return await client.db("dashboard").collection('bookingHistory').find(query).toArray();
    } catch (error) {
        throw error;
    } finally {
        await client.close();
    }
}

export async function insertBookingHistory(bookingId: number, date: string) {
    const client: MongoClient = new MongoClient(process.env.MONGODB_URI, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    try {
        await client.connect();

        return await client.db("dashboard").collection('bookingHistory').insertOne({
            bookingId: bookingId,
            date: new Date(date)
        });
    } catch (error) {
        throw error;
    } finally {
        client.close();
    }
}

export async function updateBookingHistory(id: string, bookingId: number|null, date: string|null) {
    const client: MongoClient = new MongoClient(process.env.MONGODB_URI, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    try {
        await client.connect();

        return await client.db("dashboard").collection('bookingHistory').updateOne(
            { _id: new ObjectId(id) },
            { $set: { bookingId: bookingId, date: new Date(date) } }
        );
    } catch (error) {
        throw error;
    } finally {
        client.close();
    }
}

export async function deleteBookingHistory(bookingHistoryId: number): Promise<number> {
    const client: MongoClient = new MongoClient(process.env.MONGODB_URI, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    try {
        await client.connect();

        const result: DeleteResult = await client.db("dashboard")
            .collection('bookingHistory')
            .deleteOne({ _id: new ObjectId(bookingHistoryId) });

        return result.deletedCount;
    } catch (error) {
        throw error;
    } finally {
        client.close();
    }
}
