// Room availability logic
let roomsAvailable = {
    single: 30,
    shared: 30,
    premium: 20
};

// Open the modal
function openModal() {
    document.getElementById("bookingModal").style.display = "block";
}

// Close the modal
function closeModal() {
    document.getElementById("bookingModal").style.display = "none";
}

// Book a room
function bookRoom() {
    const roomType = document.getElementById("roomType").value;
    const name = document.getElementById("name").value;

    // Check room availability
    if (roomsAvailable[roomType] > 0) {
        roomsAvailable[roomType]--; // Decrement room count
        alert(`Booking confirmed for ${name}. ${roomsAvailable[roomType]} ${roomType} rooms left.`);
        closeModal();
    } else {
        alert(`Sorry, no ${roomType} rooms available.`);
    }
}

// Show the booking modal
function showModal() {
    document.getElementById("bookingModal").style.display = "block";
}

// Hide the booking modal
function closeModal() {
    document.getElementById("bookingModal").style.display = "none";
}

// Booking confirmation logic
function bookRoom() {
    const roomType = document.getElementById("roomType").value;
    const name = document.getElementById("name").value;

    if (roomType && name) {
        alert(`Thank you, ${name}! Your booking for a ${roomType} room has been confirmed.`);
        closeModal();
    } else {
        alert("Please fill out all required fields.");
    }
}
