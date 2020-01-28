import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./src/routes/demoRoutes";

const app = express();
const PORT = 5000;

const corsOptions = {
  origin: function(origin, callback) {
    callback(null, true);
  },
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/demoDB", {
  useNewUrlParser: true
});

// bodyParser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
