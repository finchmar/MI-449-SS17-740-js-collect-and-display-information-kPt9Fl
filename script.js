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

  previewParagraph.innerHTML =
  '<b>Hi, my name is: </b>' + firstName + ' ' + lastName +
  '<br>' + describeYou +
  '<br>' + '<br>' +
  'If you\'re interested in a date, you can email me at: ' +
  '<a href="mailto:' + yourEmail + '" target="_blank">' + yourEmail + '</a>' +
  '<br>' + '<br>' + 'or give me a call at: ' +
  '<a href="tel:' + phoneNumber + '" target="_blank">' + phoneNumber + '</a>'

  rawParagraph.textContent =
  '<b>Hi, my name is: </b>' + firstName + ' ' + lastName +
  '<br>' + describeYou +
  '<br>' + '<br>' +
  'If you\'re interested in a date, you can email me at: ' +
  '<a href="mailto:' + yourEmail + '" target="_blank">' + yourEmail + '</a>' +
  '<br>' + '<br>' + 'or give me a call at: ' +
  '<a href="tel:' + phoneNumber + '" target="_blank">' + phoneNumber + '</a>'
}

firstNameInput.addEventListener('input', updatePreview)
lastNameInput.addEventListener('input', updatePreview)
describeInput.addEventListener('input', updatePreview)
emailInput.addEventListener('input', updatePreview)
phoneInput.addEventListener('input', updatePreview)
