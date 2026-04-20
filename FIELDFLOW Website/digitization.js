const uploadBox = document.getElementById("uploadBox");
const fileInput = document.getElementById("fileInput");
const fileName = document.getElementById("fileName");
const form = document.getElementById("uploadForm");

// Click upload
uploadBox.addEventListener("click", () => {
    fileInput.click();
});

// File selection
fileInput.addEventListener("change", () => {
    if (fileInput.files.length > 0) {
        fileName.textContent = "Selected: " + fileInput.files[0].name;
    }
});

// Drag & drop
uploadBox.addEventListener("dragover", (e) => {
    e.preventDefault();
    uploadBox.style.borderColor = "#22c55e";
});

uploadBox.addEventListener("dragleave", () => {
    uploadBox.style.borderColor = "#334155";
});

uploadBox.addEventListener("drop", (e) => {
    e.preventDefault();
    fileInput.files = e.dataTransfer.files;
    fileName.textContent = "Selected: " + e.dataTransfer.files[0].name;
});

// Submit
form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Map submitted successfully!");
    form.reset();
    fileName.textContent = "";
});