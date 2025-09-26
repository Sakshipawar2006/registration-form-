
let fnameInput = document.getElementById("firstName");
let fnameError = document.getElementById("fnameError");

fnameInput.addEventListener('blur', function() {
    let fname = fnameInput.value.trim();
    let namePattern = /^[A-Za-z]+$/;
    if (fname === "") {
        fnameError.textContent = "First name is required!!";
    } else if (!namePattern.test(fname)) {
        fnameError.textContent = "Only alphabets allowed!!";
    } else {
        fnameError.textContent = "";
    }
});


let fatherInput = document.getElementById("fatherName");
let fatherError = document.getElementById("fatherError");

fatherInput.addEventListener('blur', function() {
    let fatherName = fatherInput.value.trim();
    let namePattern = /^[A-Za-z]+$/;
    if (fatherName === "") {
        fatherError.textContent = "Father's name is required!!";
    } else if (!namePattern.test(fatherName)) {
        fatherError.textContent = "Only alphabets allowed!!";
    } else {
        fatherError.textContent = "";
    }
});


let lastNameInput = document.getElementById("lastName");
let lastError = document.getElementById("lastError");

lastNameInput.addEventListener('blur', function() {
    let lastName = lastNameInput.value.trim();
    let namePattern = /^[A-Za-z]+$/;
    if (lastName === "") {
        lastError.textContent = "Last name is required!!";
    } else if (!namePattern.test(lastName)) {
        lastError.textContent = "Only alphabets allowed!!";
    } else {
        lastError.textContent = "";
    }
});


let mNumberInput = document.getElementById("mNumber");
let mobError = document.getElementById("mobError");

mNumberInput.addEventListener('blur', function() {
    let mNumber = mNumberInput.value.trim();
    let pattern = /^[0-9]{10}$/;
    if (mNumber === "") {
        mobError.textContent = "Mobile Number is required!!";
    } else if (!pattern.test(mNumber)) {
        mobError.textContent = "Only 10 digits allowed!!";
    } else {
        mobError.textContent = "";
    }
});


let mailInput = document.getElementById("mail");
let mailError = document.getElementById("mailError");

mailInput.addEventListener('blur', function() {
    let mail = mailInput.value.trim();
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (mail === "") {
        mailError.textContent = "Email is required!!";
    } else if (!pattern.test(mail)) {
        mailError.textContent = "Invalid email format!!";
    } else {
        mailError.textContent = "";
    }
});


let hobbieInput = document.getElementById("hobbie");
let hobError = document.getElementById("hobError");

hobbieInput.addEventListener('blur', function() {
    let hobbie = hobbieInput.value.trim();
    let pattern = /^[A-Za-z\s]+$/;
    if (hobbie === "") {
        hobError.textContent = "Mention hobbies!!";
    } else if (!pattern.test(hobbie)) {
        hobError.textContent = "Mention hobbies correctly!!";
    } else {
        hobError.textContent = "";
    }
});


let addInput = document.getElementById("add");
let addError = document.getElementById("addError");

addInput.addEventListener('blur', function() {
    let add = addInput.value.trim();
    let pattern = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    if (add === "") {
        addError.textContent = "Address is required!!";
    } else if (!pattern.test(add)) {
        addError.textContent = "Address is invalid!!";
    } else {
        addError.textContent = "";
    }
});


let genderSelect = document.querySelector("select[name='gender']");
let genderError = document.getElementById("genderError");

genderSelect.addEventListener('change', function() {
    if (genderSelect.value === "") {
        genderError.textContent = "Please select gender!!";
    } else {
        genderError.textContent = "";
    }
});


let dobInput = document.getElementById("dob");
let dobError = document.getElementById("dobError");

dobInput.addEventListener('change', function() {
    let selectedDate=new Date(dobInput.value);
    let currentDate=new Date();
    if (dobInput.value === "") {
        dobError.textContent = "Please select date of birth!!";
    } else if(selectedDate> currentDate) {
       dobError.textContent ="date of birth cannot be in the future"
    }else{
        dobError.textContent = "";
    }
});


let fileInput = document.getElementById("file-input");
let errorMessage = document.getElementById("error-message");
let photoSection = document.getElementById("photo-section");

fileInput.addEventListener('change', function() {
    const file = fileInput.files[0];
    errorMessage.textContent = "";
    photoSection.innerHTML = "";

    if (file) {
        const validTypes = ["image/jpeg", "image/png"];
        if (!validTypes.includes(file.type)) {
            errorMessage.textContent = "Only JPG and PNG files are allowed.";
        } else if (file.size > 2 * 1024 * 1024) {
            errorMessage.textContent = "File size must be under 2MB.";
        } else {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement("img");
                img.src = e.target.result;
                img.style.maxWidth = "200px";
                img.style.maxHeight = "200px";
                img.style.marginTop = "10px";
                photoSection.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    } else {
        errorMessage.textContent = "Please upload a photo!!";
    }
});


document.getElementById("btn").addEventListener("click", function(event) {
    event.preventDefault();
    let valid = true;

  
    let fname = fnameInput.value.trim();
    if (fname === "" || !/^[A-Za-z]+$/.test(fname)) {
        fnameError.textContent = fname === "" ? "First name is required!!" : "Only alphabets allowed!!";
        valid = false;
    } else { fnameError.textContent = ""; }

    
    let fatherName = fatherInput.value.trim();
    if (fatherName === "" || !/^[A-Za-z]+$/.test(fatherName)) {
        fatherError.textContent = fatherName === "" ? "Father's name is required!!" : "Only alphabets allowed!!";
        valid = false;
    } else { fatherError.textContent = ""; }

    
    let lastName = lastNameInput.value.trim();
    if (lastName === "" || !/^[A-Za-z]+$/.test(lastName)) {
        lastError.textContent = lastName === "" ? "Last name is required!!" : "Only alphabets allowed!!";
        valid = false;
    } else { lastError.textContent = ""; }

   
    let mNumber = mNumberInput.value.trim();
    if (mNumber === "" || !/^[0-9]{10}$/.test(mNumber)) {
        mobError.textContent = mNumber === "" ? "Mobile number is required!!" : "Only 10 digits allowed!!";
        valid = false;
    } else { mobError.textContent = ""; }

    let mail = mailInput.value.trim();
    if (mail === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
        mailError.textContent = mail === "" ? "Email is required!!" : "Invalid email format!!";
        valid = false;
    } else { mailError.textContent = ""; }

    
    let hobbie = hobbieInput.value.trim();
    if (hobbie === "" || !/^[A-Za-z\s]+$/.test(hobbie)) {
        hobError.textContent = hobbie === "" ? "Mention hobbies!!" : "Mention hobbies correctly!!";
        valid = false;
    } else { hobError.textContent = ""; }

    let add = addInput.value.trim();
    if (add === "" || !/^[a-zA-Z0-9\s,.'-]{3,}$/.test(add)) {
        addError.textContent = add === "" ? "Address is required!!" : "Address is invalid!!";
        valid = false;
    } else { addError.textContent = ""; }

   
    if (genderSelect.value === "") {
        genderError.textContent = "Please select gender!!";
        valid = false;
    } else { genderError.textContent = ""; }

    
    if (dobInput.value === "") {
        dobError.textContent = "Please select date of birth!!";
        valid = false;
    } else { dobError.textContent = ""; }

   
    const file = fileInput.files[0];
    if (!file) {
        errorMessage.textContent = "Please upload a photo!!";
        valid = false;
    } else if (!["image/jpeg","image/png"].includes(file.type)) {
        errorMessage.textContent = "Only JPG and PNG files are allowed.";
        valid = false;
    } else if (file.size > 2*1024*1024) {
        errorMessage.textContent = "File size must be under 2MB.";
        valid = false;
    } else {
        errorMessage.textContent = "";
    }

    if (valid) {
        alert("Form submitted successfully!");
        window.location.href = "success.html";
    } else {
        document.getElementById("btnError").textContent = "Please fix the errors above!!";
    }
});
