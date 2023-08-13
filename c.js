const loginButton = document.querySelector('.loginButton');
const studentId = document.getElementsByName('studentIDNumber');
const password = document.getElementsByName('password');

console.log('OK!');
console.log(loginButton);
console.log(studentId);
console.log(password);

loginButton.addEventListener('click', () => {
    console.log('click');
});
