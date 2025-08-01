import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN
}))

app.use(express.json({limit: '16kb'}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))

import dashboardRouter from './routes/dashboard.routes.js';
import leaderboardRouter from './routes/leaderboard.routes.js';

app.use("/api/dashboard", dashboardRouter)
app.use("/api/leaderboard", leaderboardRouter)

export default app;