const loginButton = document.querySelector('.loginButton');
const studentId = document.querySelector('[name="studentIDNumber"]');
const password = document.querySelector('[name="password"]');

console.log('OK!');
console.log(loginButton);
console.log(studentId);
console.log(password);

loginButton.addEventListener('click', () => {
    console.log('click');

    if (studentId && password) {
        console.log(studentId.value);
        console.log(password.value);
    }
});
