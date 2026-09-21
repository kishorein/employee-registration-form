

const form = document.getElementById("employeeForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    document.querySelectorAll(".error").forEach((error) => {
        error.textContent = "";
    });

    document.getElementById("successMessage").textContent = "";

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const department = document.getElementById("department").value;

    let isValid = true;

    if (!name) {
        document.getElementById("nameError").textContent = "Name is required.";
        isValid = false;
    }

    if (!email) {
        document.getElementById("emailError").textContent = "Email is required.";
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email.";
        isValid = false;
    }

    if (!phone) {
        document.getElementById("phoneError").textContent = "Phone number is required.";
        isValid = false;
    } else if (!/^[0-9+\-\s()]{7,15}$/.test(phone)) {
        document.getElementById("phoneError").textContent = "Enter a valid phone number.";
        isValid = false;
    }

    if (!department) {
        document.getElementById("departmentError").textContent = "Department is required.";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("successMessage").textContent =
            "Employee registration submitted successfully!";
        form.reset();
    }
});

