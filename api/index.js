import "dotenv/config";
import express from "express";
import configViewEngine from "../src/config/configEngine.js";
import routes from "../src/routes/web.js";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup viewEngine
configViewEngine(app);

// init Web Routes
routes.initWebRouter(app);

// 404 handler
app.all('*', (req, res) => {
  return res.status(404).render("404.ejs");
});

export default app;