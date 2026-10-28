
const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "12345") {
        message.textContent = "Login berhasil!";
        message.style.color = "green";

        // Pindah ke dashboard setelah login berhasil
        // Aktifkan jika file dashboard sudah tersedia:
        // window.location.href = "../dashboard/index.html";

    } else {
        message.textContent = "Username atau password salah!";
        message.style.color = "red";
    }
});
