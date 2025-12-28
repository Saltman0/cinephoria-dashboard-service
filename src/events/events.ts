import EventEmitter from "node:events";
import * as bookingHistoryEvents from "./bookingHistory.events.ts";

export const eventEmitter: EventEmitter = new EventEmitter();

eventEmitter.on(
    "messageReceived",
    async (message: { type: string, event: string, body: any }): Promise<void> => {
    try {
        const actions: { [key: string]: (message: any) => Promise<void> } = {
            "createBookingHistory": bookingHistoryEvents.createBookingHistoryEvent,
            "deleteBookingHistory": bookingHistoryEvents.deleteBookingHistoryEvent
        };

        const key: string = `${message.event}${message.type.charAt(0).toUpperCase() + message.type.slice(1)}`;

        if (actions[key]) {
            await actions[key](message.body);
        } else {
            console.log("Invalid type or event !");
        }
    } catch (error) {
        throw error;
    }
});