import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // Allow your frontend Vite server
    credentials: true, // Allow cookies/headers if needed
  })
);
app.use(express.json());

// Login Route
app.post("/api/auth/login", (req, res) => {
  const { userName, password } = req.body;

  console.log("Login attempt:", { userName, password });

  // 1. Check if fields are present
  if (!userName || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  // 2. Mock Validation (Example: Password must be '123456')
  // For your testing, we will just accept any password >= 6 chars for now,
  // or you can set a specific hardcoded password.
  if (password.length < 6) {
    return res.status(401).json({ message: "Password too short (mock check)" });
  }

  // 3. Success Response
  res.json({
    accessToken: "mock_access_token_" + Math.random().toString(36).substr(2),
    roles: [2001, 5150], // Example roles
    user: { name: userName },
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
