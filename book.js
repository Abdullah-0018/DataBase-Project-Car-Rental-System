document.getElementById("bookingForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const bookingId = document.getElementById("bookingId").value;
  const username = document.getElementById("username").value;
  const carModel = document.getElementById("carModel").value;
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;

  // Display booking information
  alert(`
      Booking Confirmed!
      Booking ID: ${bookingId}
      Username: ${username}
      Car Model: ${carModel}
      Start Date: ${startDate}
      End Date: ${endDate}
    `);

  // Optionally, clear the form after submission
  document.getElementById("bookingForm").reset();
});

if (data.success) {
  alert(data.message); // Booking success message
} else {
  alert(`Error: ${data.message}`); // Error message
}
const response = await fetch("http://localhost:3000/api/bookings", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    bookingId,
    username,
    carModel,
    startDate,
    endDate,
  }),
});
