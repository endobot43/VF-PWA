

function setColor(color) {
  var oldColor = Cookies.get('color');
  if(oldColor !== undefined){
    var oldElement = document.getElementById(oldColor);
    oldElement.classList.remove('btn-group-selected');
    oldElement.classList.add('btn-group-outlined');
  }
  Cookies.set('color', color);
  var element = document.getElementById(color);
  element.classList.remove('btn-group-outlined');
  element.classList.add('btn-group-selected');
  checkInputs()
}

function removeColor(){
  Cookies.remove('color')
  Cookies.remove('session-reminder')
  location.href = '/'
}

function checkInputs() {
  var color = Cookies.get('color');
  var element = document.getElementById('continueButton');
  if(color !== undefined) {
    element.classList.remove('disabled')
  }
}
function gotoPage() {
  var days = ['sun','mon','tue','wed','thu','fri','sat']
  // var today = days[new Date().getDay()]
  var today = 'sun';
  var color = Cookies.get('color');
  var page = `${today}-${color}.html`
  console.log('color: ', color)
  if(color !== undefined && today !== 'fri'&& today !== 'sat'){
    location.href=page
  }
}