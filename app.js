
async function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const output = document.getElementById('output');

    if (!fileInput.files.length) {
        output.textContent = "Please select a .zip file.";
        return;
    }

    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    output.textContent = "Uploading...";

    try {
        const response = await fetch("fetch("https://gitplay-backend.onrender.com/api/something")", {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        output.textContent = JSON.stringify(data, null, 2);
    } catch (err) {
        output.textContent = "Error uploading file: " + err.message;
    }
}
