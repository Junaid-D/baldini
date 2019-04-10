fetch('/class/api/list') // Returns a Promise for the GET request
  .then(function (response) {
    // Check if the request returned a valid code
    if (response.ok) {
      return response.json()
    } // Return the response parse as JSON if code is valid
    else { throw 'Failed to load classlist: response code invalid!' }
  })
  .then(function (data) { // Display the JSON data appropriately
    // Retrieve the classList outer element
    let classList = document.getElementById('classList')
    // Iterate through all students
    data.forEach(function (student) {
      // Create a new list entry
      let li = document.createElement('LI')
      let liText = document.createTextNode(student)
      // Append the class to the list element
      li.className += 'student'
      // Append list text to list item and list item to list
      li.appendChild(liText)
      classList.appendChild(li)
    })
  })
  .catch(function (e) { // Process error for request
    alert(e) // Displays a browser alert with the error message.
  // This will be the string thrown in line 7 IF the
  // response code is the reason for jumping to this
  // catch() function.
  })

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('fux').addEventListener('click', function () {
    console.log(document.getElementById('newStudentInput').value)
    let student = { student: '' }
    student.student = document.getElementById('newStudentInput').value
    post('/class/api/create', student)

    fetch('/class/api/list') // Returns a Promise for the GET request
      .then(function (response) {
        // Check if the request returned a valid code
        if (response.ok) {
          return response.json()
        } // Return the response parse as JSON if code is valid
        else { throw 'Failed to load classlist: response code invalid!' }
      })
      .then(function (data) { // Display the JSON data appropriately
        // Retrieve the classList outer element
        let classList = document.getElementById('classList')
        classList.innerHTML = ''
        // Iterate through all students
        data.forEach(function (student) {
          // Create a new list entry
          let li = document.createElement('LI')
          let liText = document.createTextNode(student)
          // Append the class to the list element
          li.className += 'student'
          // Append list text to list item and list item to list
          li.appendChild(liText)
          classList.appendChild(li)
        })
      })
      .catch(function (e) { // Process error for request
        alert(e) // Displays a browser alert with the error message.
      // This will be the string thrown in line 7 IF the
      // response code is the reason for jumping to this
      // catch() function.
      })
  })
})

function post (path, params, method) {
  method = method || 'post' // Set method to post by default if not specified.

  // The rest of this code assumes you are not using a library.
  // It can be made less wordy if you use one.
  var form = document.createElement('form')
  form.setAttribute('method', method)
  form.setAttribute('action', path)

  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      var hiddenField = document.createElement('input')
      hiddenField.setAttribute('type', 'hidden')
      hiddenField.setAttribute('name', key)
      hiddenField.setAttribute('value', params[key])

      form.appendChild(hiddenField)
    }
  }

  document.body.appendChild(form)
  form.submit()
}
