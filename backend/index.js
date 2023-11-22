import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/database.js";
import sequelizeSetore from "connect-session-sequelize";
import userRoute from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";
//CB
import bendaRoute from "./routes/bendaRoute.js";
import bangunanRoute from "./routes/bangunanRoute.js";
import strukturRoute from "./routes/strukturRoute.js";
import situsRoute from "./routes/situsRoute.js";
import kawasanRoute from "./routes/kawasanRoute.js";
// OPK
import manuskripRoute from "./routes/manuskripRoute.js";
import tradisiRoute from "./routes/tradisiRoute.js";
import adatRoute from "./routes/adatRoute.js";
import ritusRoute from "./routes/ritusRoute.js";
import pengetahuanRoute from "./routes/pengetahuanRoute.js";
import teknologiRoute from "./routes/teknologiRoute.js";
import seniRoute from "./routes/seniRoute.js";
import bahasaRoute from "./routes/bahasaRoute.js";
import permainanRoute from "./routes/permainanRoute.js";
import olahragaRoute from "./routes/olahragaRoute.js";

dotenv.config();

const app = express();

// buat session
const sessionStore = new sequelizeSetore(session.Store);
const store = new sessionStore({
  db: db,
});

//Mengenerate database secara otomatis
// db.sync();

app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
    },
  })
);

//Middleware
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
//Middleware User
app.use(authRoute);
app.use(userRoute);
//Middleware CB
app.use(bendaRoute);
app.use(bangunanRoute);
app.use(strukturRoute);
app.use(situsRoute);
app.use(kawasanRoute);
//Middleware OPK
app.use(tradisiRoute);
app.use(manuskripRoute);
app.use(adatRoute);
app.use(ritusRoute);
app.use(pengetahuanRoute);
app.use(teknologiRoute);
app.use(seniRoute);
app.use(bahasaRoute);
app.use(permainanRoute);
app.use(olahragaRoute);

// membuat tabel session
// store.sync();

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on port ${process.env.APP_PORT}`);
});
