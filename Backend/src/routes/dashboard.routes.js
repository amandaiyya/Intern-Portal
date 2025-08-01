import { Router } from 'express';
import data from '../Data/data.js';

const getDashboardData = (req, res) => {
    return res
    .status(200)
    .json({
        success: true,
        message: "Dashboard data fetched successfully",
        data: data.dashboard,
    })
}

const router = Router();

router.route("/").get(getDashboardData);

export default router;