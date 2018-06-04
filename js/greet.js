var InputTextElement = document.querySelector(".InputText");
var languageTypeRadioElement = document.querySelector(".languageTypeRadio");
var GreetbtnElement = document.querySelector(".Greetbtn");
var countElement = document.querySelector('.greetCount');
var namegreetElement = document.querySelector(".namegreeted");
var ClearbtnElement = document.querySelector(".Clearbtn");

var referenceUser = localStorage.getItem('users');
var storedUsers = referenceUser ? JSON.parse(referenceUser) : {};

var factoryGreet = GreetmeFunction(storedUsers);
countElement.innerHTML = factoryGreet.counter();
var Greetme = function() {
  var checkedRadio = document.querySelector("input[name='languageType']:checked");
  if (checkedRadio) {
    var person = InputTextElement.value.toUpperCase();
    var language = checkedRadio.value;

    if (person === undefined || person === "") {
      namegreetElement.innerHTML = 'enter valid name';
      return;
    }

    namegreetElement.innerHTML = factoryGreet.greet(person, language);
    localStorage.setItem('users', JSON.stringify(factoryGreet.getNames()));
    countElement.innerHTML = factoryGreet.counter();
    InputTextElement.innerHTML = '';
  }
  else{
      namegreetElement.innerHTML = 'select language';

  }
}

GreetbtnElement.addEventListener('click', function(){
  Greetme();
  InputTextElement.value = '';
});

ClearbtnElement.addEventListener('click', function() {
  //factoryGreet.clear();
  localStorage.clear();
  location.reload();
});
