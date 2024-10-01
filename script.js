// Handle QR scan simulation and form submission
document.getElementById('scanQRButton').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;

    if (name && contact) {
        // Store user details in session storage
        sessionStorage.setItem('userName', name);
        sessionStorage.setItem('userContact', contact);

        // Simulate QR scan success and redirect to notification page
        alert('QR Code scanned successfully!');
        window.location.href = 'notification.html'; // Redirect to the notification page
    } else {
        alert('Please enter both name and contact number.');
    }
});
