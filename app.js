// /* Request from Text File */
// document.getElementById('button').addEventListener('click', getText);

// function getText() {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', 'text.txt', true);

//   xhr.onprogress = function () {
//     console.log('READYSTATE', xhr.readyState);
//   };

//   xhr.onload = function () {
//     // console.log(this.responseText);
//     console.log('READYSTATE', xhr.readyState);

//     if (this.status === 200) {
//       document.getElementById(
//         'output'
//       ).innerHTML = `<p>${this.responseText}</p>`;
//     }
//   };

//   xhr.send();
// }

// status	// 200: "OK"
// 403: "Forbidden"
// 404: "Page not found"

// readyState	// Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

// /* Request single user from json file */
// document.getElementById('button1').addEventListener('click', getUser);

// function getUser() {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', 'user.json', true);

//   xhr.onload = function () {
//     if (this.status === 200) {
//       // console.log(this.responseText);

//       const user = JSON.parse(this.responseText);

//       const output = `
//         <ul>
//           <li>ID: ${user.id}</li>
//           <li>Name: ${user.name}</li>
//           <li>Email: ${user.email}</li>
//           <li>Phone: ${user.phone}</li>
//         </ul>
//       `;

//       document.getElementById('output1').innerHTML = output;
//     }
//   };

//   xhr.send();
// }

// /* Request multiple users from json file */
// document.getElementById('button2').addEventListener('click', getUsers);

// function getUsers() {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', 'users.json', true);

//   xhr.onload = function () {
//     if (this.status === 200) {
//       // console.log(this.responseText);

//       const users = JSON.parse(this.responseText);

//       let output = '';

//       users.forEach(function (user) {
//         output += `
//         <ul>
//         <li>ID: ${user.id}</li>
//         <li>Name: ${user.name}</li>
//         <li>Email: ${user.email}</li>
//         <li>Phone: ${user.phone}</li>
//       </ul>
//         `;
//       });

//       document.getElementById('output2').innerHTML = output;
//     }
//   };

//   xhr.send();
// }

/* Request users form external API */
document.getElementById('button').addEventListener('click', getExternalUsers);

function getExternalUsers() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);

      const users = JSON.parse(this.responseText);

      let output = '';

      users.forEach(function (user) {
        output += `
         <ul>
         <li>ID: ${user.id}</li>
         <li>Name: ${user.name}</li>
         <li>Email: ${user.email}</li>
         <li>Phone: ${user.phone}</li>
         
         </ul>
        `;
      });

      document.getElementById('output').innerHTML = output;
    }
  };

  xhr.send();
}
