import {Router} from "express";
import * as dashboardController from "../controllers/dashboard.controller.ts";
import passport from "../middleware/passport.ts";

const router: Router = Router();

router.get("/dashboard/bookingHistory", dashboardController.getBookingHistory);
router.post(
    "/dashboard/bookingHistory",
    passport.authenticate("jwt", { session: false }),
    dashboardController.createBookingHistory
);
router.put(
    "/dashboard/bookingHistory/:bookingHistoryId",
    passport.authenticate("jwt", { session: false }),
    dashboardController.updateBookingHistory
);
router.delete(
    "/dashboard/bookingHistory/:bookingHistoryId",
    passport.authenticate("jwt", { session: false }),
    dashboardController.deleteBookingHistory
);

export default router;