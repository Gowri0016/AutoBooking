document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Booking Successful!');
});

document.getElementById('trackingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Tracking Information Retrieved!');
});

document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Payment Successful!');
});
