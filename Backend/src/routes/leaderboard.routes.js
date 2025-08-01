import { Router } from 'express';
import data from '../Data/data.js';

const getLeaderboardData = (req, res) => {
    return res
    .status(200)
    .json({
        success: true,
        message: "Leaderboard data fetched successfully",
        data: data.leaderboard,
    })
}

const router = Router();

router.route("/").get(getLeaderboardData);

export default router;