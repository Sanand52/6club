import "dotenv/config";

import express from "express";
import configViewEngine from "./config/configEngine.js";
import routes from "./routes/web.js";
import cronJobController from "./controllers/cronJobController.js";
import socketIoController from "./controllers/socketIoController.js";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3060;

app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup viewEngine
configViewEngine(app);

// init Web Routes
routes.initWebRouter(app);

// Cron game 1 Phut (only run locally, not on Vercel)
if (process.env.NODE_ENV !== 'production') {
  cronJobController.cronJobGame1p(null);
  socketIoController.sendMessageAdmin(null);
}

// 404 handler
app.all('*', (req, res) => {
  return res.status(404).render("404.ejs");
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
  console.log(`Connected success http://localhost:${port}`);
});

export default app;
