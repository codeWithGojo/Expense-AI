require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const expenseRoutes = require("./routes/expenses");
const incomeRoutes = require("./routes/income");
const goalRoutes = require("./routes/goals");
const aiRoutes = require("./routes/ai");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => res.json({ status: "ok" }));

app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/income", incomeRoutes);
app.use("/api/goals", goalRoutes);
app.use("/api/ai", aiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`ExpenseAI backend running on port ${PORT}`));
