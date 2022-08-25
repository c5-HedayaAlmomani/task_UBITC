const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;
app.use(express.json());
app.use(cors());
const db = require("./database/db");

// const userRouter = require("./routes/user");
// app.use("/user", userRouter);

// app.get("/h", (req, res) => {
//   res.json("hu");
// });

app.listen(PORT, () => {
  console.log("server working in port 5000");
});
