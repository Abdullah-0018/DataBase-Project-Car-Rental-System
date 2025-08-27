// function viewUsers() {
//   const output = document.getElementById("admin-output");
//   output.innerHTML = `
//       <h3>Users Management</h3>
//       <table>
//           <thead>
//               <tr>
//                   <th>User ID</th>
//                   <th>Name</th>
//                   <th>Email</th>
//                   <th>Actions</th>
//               </tr>
//           </thead>
//           <tbody>
//               <tr>
//                   <td>1</td>
//                   <td>Abdullah</td>
//                   <td>abdullah018@example.com</td>
//                   <td>
//                       <button onclick="editUser(1)">Edit</button>
//                       <button onclick="deleteUser(1)">Delete</button>
//                   </td>
//               </tr>
//               <tr>
//                   <td>2</td>
//                   <td>Talha</td>
//                   <td>talha004@example.com</td>
//                   <td>
//                       <button onclick="editUser(2)">Edit</button>
//                       <button onclick="deleteUser(2)">Delete</button>
//                   </td>
//               </tr>
//               <tr>
//                   <td>3</td>
//                   <td>Daniyal</td>
//                   <td>daniyal042@example.com</td>
//                   <td>
//                       <button onclick="editUser(3)">Edit</button>
//                       <button onclick="deleteUser(3)">Delete</button>
//                   </td>
//               </tr>
//           </tbody>
//       </table>
//   `;
// }

// function manageCars() {
//   const output = document.getElementById("admin-output");
//   output.innerHTML = `
//       <h3>Car Inventory Management</h3>
//       <button onclick="addCar()">Add New Car</button>
//       <table>
//           <thead>
//               <tr>
//                   <th>Car ID</th>
//                   <th>Model</th>
//                   <th>Year</th>
//                   <th>Daily Rate</th>
//                   <th>Actions</th>
//               </tr>
//           </thead>
//           <tbody>
//               <tr>
//                   <td>101</td>
//                   <td>Audi R8</td>
//                   <td>2022</td>
//                   <td>$120</td>
//                   <td>
//                       <button onclick="editCar(101)">Edit</button>
//                       <button onclick="deleteCar(101)">Delete</button>
//                   </td>
//               </tr>
//               <tr>
//                   <td>102</td>
//                   <td>Tesla Model 3</td>
//                   <td>2023</td>
//                   <td>$150</td>
//                   <td>
//                       <button onclick="editCar(102)">Edit</button>
//                       <button onclick="deleteCar(102)">Delete</button>
//                   </td>
//               </tr>
//               <tr>
//                   <td>103</td>
//                   <td>Mercedes-Benz</td>
//                   <td>2024</td>
//                   <td>$180</td>
//                   <td>
//                       <button onclick="editCar(103)">Edit</button>
//                       <button onclick="deleteCar(103)">Delete</button>
//                   </td>
//               </tr>
//           </tbody>
//       </table>
//   `;
// }

// function viewBookings() {
//   const output = document.getElementById("admin-output");
//   output.innerHTML = `
//       <h3>Bookings Management</h3>
//       <table>
//           <thead>
//               <tr>
//                   <th>Booking ID</th>
//                   <th>User Name</th>
//                   <th>Car Model</th>
//                   <th>Start Date</th>
//                   <th>End Date</th>
//                   <th>Actions</th>
//               </tr>
//           </thead>
//           <tbody>
//               <tr>
//                   <td>201</td>
//                   <td>Abdullah</td>
//                   <td>Audi R8</td>
//                   <td>2024-11-15</td>
//                   <td>2024-11-20</td>
//                   <td>
//                       <button onclick="confirmBooking(201)">Confirm</button>
//                       <button onclick="cancelBooking(201)">Cancel</button>
//                   </td>
//               </tr>
//               <tr>
//                   <td>202</td>
//                   <td>Talha</td>
//                   <td>Tesla Model 3</td>
//                   <td>2024-11-18</td>
//                   <td>2024-11-22</td>
//                   <td>
//                       <button onclick="confirmBooking(202)">Confirm</button>
//                       <button onclick="cancelBooking(202)">Cancel</button>
//                   </td>
//               </tr>
//               <tr>
//                   <td>203</td>
//                   <td>Daniyal</td>
//                   <td>Mercedes-Benz</td>
//                   <td>2024-11-10</td>
//                   <td>2024-11-20</td>
//                   <td>
//                       <button onclick="confirmBooking(203)">Confirm</button>
//                       <button onclick="cancelBooking(203)">Cancel</button>
//                   </td>
//               </tr>
//           </tbody>
//       </table>
//   `;
// }

// function editUser(userId) {
//   alert(`Edit User with ID: ${userId}`);
// }

// function deleteUser(userId) {
//   alert(`Delete User with ID: ${userId}`);
// }

// function addCar() {
//   alert("Add a new car to the inventory.");
// }

// function editCar(carId) {
//   alert(`Edit Car with ID: ${carId}`);
// }

// function deleteCar(carId) {
//   alert(`Delete Car with ID: ${carId}`);
// }

// function confirmBooking(bookingId) {
//   alert(`Confirm Booking with ID: ${bookingId}`);
// }

// function cancelBooking(bookingId) {
//   alert(`Cancel Booking with ID: ${bookingId}`);
// }
