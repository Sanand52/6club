import "dotenv/config";

import express from "express";
import configViewEngine from "./config/configEngine.js";
import routes from "./routes/web.js";
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

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;

// Only listen if not in serverless environment
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

export default app;
