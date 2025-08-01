import 'dotenv/config'
import app from './app.js';

const port = process.env.port;

app.on("error", (error) => {
    console.log("ERROR: ", error);
    throw error;
})

app.listen(port || 8000, () => {
    console.log(`Server is running at http://localhost:${port}`);
})