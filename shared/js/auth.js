const loginForm = document.getElementById('loginForm');
const roleSelect = document.getElementById('roleSelect');
const message = document.getElementById('loginMessage');

const dummyUsers = {
  student: { email: "student@sus.com", password: "123456" },
  teacher: { email: "teacher@sus.com", password: "123456" },
  admin:   { email: "admin@sus.com",   password: "123456" }
};

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const role = roleSelect.value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const user = dummyUsers[role];

  if (user && email === user.email && password === user.password) {
    localStorage.setItem("userRole", role);
    message.textContent = "Login successful! Redirecting...";
    message.style.color = "green";

    setTimeout(() => {
      window.location.href = `./${role}/dashboard.html`;
    }, 1000);
  } else {
    message.textContent = "Invalid credentials!";
    message.style.color = "red";
  }
});
