var firstNameInput = document.getElementById('firstName')
var lastNameInput = document.getElementById('lastName')
var describeInput = document.getElementById('describeYou')
var emailInput = document.getElementById('yourEmail')
var phoneInput = document.getElementById('phoneNumber')
var previewParagraph = document.getElementById('viewMain')
var rawParagraph = document.getElementById('viewRaw')

var updatePreview = function () {
  var firstName = firstNameInput.value
  var lastName = lastNameInput.value
  var describeYou = describeInput.value
  var yourEmail = emailInput.value
  var phoneNumber = phoneInput.value

  previewParagraph.innerHTML = '<b>Personal</b>' +
  '<br>' + 'Name: ' + firstName + ' ' + lastName +
  '<br>' + 'Description: ' + describeYou +
  '<br>' + '<b>Contact</b>' +
  '<br>' + '<a href="mailto:EMAIL_ADDRESS" target="_blank">Email:</a>' +
  yourEmail +
  '<br>' + '<a href="tel:PHONE_NUMBER" target="_blank">Phone Number:</a>' +
  phoneNumber

  rawParagraph.textContent = '<b>Personal</b>' +
  '<br>' + 'Name: ' + firstName + ' ' + lastName +
  '<br>' + 'Description: ' + describeYou +
  '<br>' + '<b>Contact</b>' +
  '<br>' + '<a href="mailto:EMAIL_ADDRESS" target="_blank">Email:</a>' +
  yourEmail +
  '<br>' + '<a href="tel:PHONE_NUMBER" target="_blank">Phone Number:</a>' +
  phoneNumber
}

firstNameInput.addEventListener('input', updatePreview)
lastNameInput.addEventListener('input', updatePreview)
describeInput.addEventListener('input', updatePreview)
emailInput.addEventListener('input', updatePreview)
phoneInput.addEventListener('input', updatePreview)
