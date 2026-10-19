
function checkPassword(password) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (password === "1234") {
                resolve("Доступ открыт");
            } else {
                reject("Неверный пароль");
            }
        }, 1000);

    });
}


const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");
const message = document.getElementById("message");

async function login(password) {
    try {
        message.textContent = "Проверка пароля...";
        message.style.color = "black";
        loginButton.disabled = true;

        const result = await checkPassword(password);

        message.textContent = result;
        message.style.color = "lightgreen";

    } catch (error) {
        message.textContent = error;
        message.style.color = "tomato";

    } finally {
        loginButton.disabled = false;
    }
}

loginButton.addEventListener("click", () => {
    login(passwordInput.value);
});
