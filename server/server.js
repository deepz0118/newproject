// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const authRoutes = require("./routes/auth");
// const foodRoutes = require("./routes/foodRoutes");
// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());


// // Connect to MongoDB
// mongoose.connect("mongodb://localhost:27017/food-donation-db", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => console.log("MongoDB connected"))
// .catch(err => console.error("MongoDB connection error:", err));

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/food", foodRoutes);

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
const authRoutes = require("./routes/auth");
const foodRoutes = require("./routes/foodRoutes");
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/food-donation-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',  // You can use any other service like Outlook, Yahoo, etc.
  auth: {
    user: 'your-email@gmail.com', // Your email
    pass: 'your-email-password'    // Your email password or App Password
  }
});

// Function to send email to the restaurant
const sendEmail = (restaurantEmail, subject, message) => {
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: restaurantEmail,
    subject: subject,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email: ", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/food", foodRoutes);

// Sample route to send a food request email
app.post("/api/send-food-request", (req, res) => {
  const { restaurantEmail, foodDetails } = req.body; // Expecting restaurant email and food request details

  // Subject and body for the email
  const subject = "Food Request Notification";
  const message = `
    Dear Restaurant,

    You have received a new food request.

    Food Details:
    Hotel Name: ${foodDetails.hotelName}
    Location: ${foodDetails.location}
    Food Type: ${foodDetails.foodType}
    Quantity: ${foodDetails.quantity}
    Expiry: ${foodDetails.expiry}
    
    Please respond accordingly.

    Best Regards,
    Food Donation System
  `;

  // Send email
  sendEmail(restaurantEmail, subject, message);

  res.status(200).json({ message: "Food request email sent!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
