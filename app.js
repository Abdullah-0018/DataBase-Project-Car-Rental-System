const express = require("express");
const sql = require("mssql");
const bcrypt = require("bcrypt");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());

const config = {
  server: "localhost",
  database: "RegistrationDB",
  user: "test",
  password: "test",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
  port: 1433,
};

const connectDb = async () => {
  try {
    await sql.connect(config);
    console.log("Connected to SQL Server ✅");
  } catch (err) {
    console.error("Database connection error:", err.message);
  }
};

app.post("/api/users", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    const query = `
      INSERT INTO dbo.registration (username, email, password)
      VALUES (@username, @Email, @Password)
    `;
    const pool = await sql.connect(config);
    const request = pool.request();
    request.input("username", sql.NVarChar, username);
    request.input("Email", sql.NVarChar, email);
    request.input("Password", sql.NVarChar, password);

    await request.query(query);

    res.status(201).json({
      success: true,
      message: `User '${username}' added successfully.`,
    });
  } catch (err) {
    console.error("SQL error during insertion:", err);
    res.status(400).json({ success: false, error: err.message });
  }
});

app.get("/api/users", async (req, res) => {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query("SELECT * FROM dbo.registration");
    res.status(200).json(result.recordset);
  } catch (err) {
    console.error("SQL error during retrieval:", err);
    res.status(400).json({ success: false, error: err.message });
  }
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Email and password are required" });
  }

  try {
    const pool = await sql.connect(config);
    const result = await pool
      .request()
      .input("email", sql.NVarChar, email)
      .input("password", sql.NVarChar, password)
      .query(
        "SELECT * FROM dbo.registration WHERE Email = @email AND Password = @password"
      );

    if (result.recordset.length > 0) {
      res.status(200).json({
        success: true,
        message: "Login successful",
        user: result.recordset[0],
      });
    } else {
      res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }
  } catch (err) {
    console.error("SQL error during login:", err);
    res
      .status(500)
      .json({ success: false, message: "An error occurred during login" });
  }
});

app.post("/api/booktestride", async (req, res) => {
  const { username, carModel, startDate, endDate } = req.body;
  if (!username || !carModel || !startDate || !endDate) {
    return res
      .status(400)
      .json({ success: false, message: "Incomplete data, all are required" });
  }
  try {
    const pool = await sql.connect(config);

    const query = `
      INSERT INTO dbo.bookings (username, carModel, startDate, endDate)
      VALUES (@username, @carModel, @startDate, @endDate)
    `;

    const request = pool.request();
    request.input("username", sql.NVarChar, username);
    request.input("carModel", sql.NVarChar, carModel);
    request.input("startDate", sql.NVarChar, startDate);
    request.input("endDate", sql.NVarChar, endDate);
    await request.query(query);

    res.status(201).json({
      success: true,
      message: `User '${username}' added successfully.`,
    });
  } catch (err) {
    console.error("SQL error during insertion:", err);
    res.status(400).json({ success: false, error: err.message });
  }
});

app.post("/api/service", async (req, res) => {
  const { Name, password, email, message } = req.body;
  if (!Name || !password || !email || !message) {
    return res
      .status(400)
      .json({ success: false, message: "Incomplete data, all are required" });
  }
  try {
    const pool = await sql.connect(config);

    const query = `
      INSERT INTO dbo.contact_form (Name, password, email, message)
      VALUES (@Name, @password, @email, @message)
    `;

    const request = pool.request();
    request.input("Name", sql.NVarChar, Name);
    request.input("password", sql.NVarChar, password);
    request.input("email", sql.NVarChar, email);
    request.input("message", sql.NVarChar, message);
    await request.query(query);

    res.status(201).json({
      success: true,
      message: `User '${Name}' added successfully.`,
    });
  } catch (err) {
    console.error("SQL error during insertion:", err);
    res.status(400).json({ success: false, error: err.message });
  }
});

app.get("/api/booktestride", async (req, res) => {
  try {
    const pool = await sql.connect(config);
    const query = "SELECT * FROM dbo.bookings"; // Adjust table name if needed
    const result = await pool.request().query(query);

    if (result.recordset.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No bookings found.",
      });
    }

    res.status(200).json({
      success: true,
      bookings: result.recordset,
    });
  } catch (err) {
    console.error("Error fetching bookings:", err);
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
});

app.put("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = `
      UPDATE dbo.registration
      SET username = @username, email = @Email, password = @Password
      WHERE id = @Id
    `;
    const pool = await sql.connect(config);
    const request = pool.request();
    request.input("Id", sql.Int, id);
    request.input("username", sql.NVarChar, username);
    request.input("Email", sql.NVarChar, email);
    request.input("Password", sql.NVarChar, hashedPassword);

    const result = await request.query(query);
    res.status(200).json({
      success: true,
      message: `User '${username}' updated successfully.`,
    });
  } catch (err) {
    console.error("SQL error during update:", err);
    res.status(400).json({ success: false, error: err.message });
  }
});

app.delete("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const query = `DELETE FROM dbo.registration WHERE id = @Id`;
    const pool = await sql.connect(config);
    const request = pool.request();
    request.input("Id", sql.Int, id);

    const result = await request.query(query);
    res.status(200).json({
      success: true,
      message: `User with ID ${id} deleted successfully.`,
    });
  } catch (err) {
    console.error("SQL error during deletion:", err);
    res.status(400).json({ success: false, error: err.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  connectDb();
  console.log(`Server running on http://localhost:${PORT}`);
});
