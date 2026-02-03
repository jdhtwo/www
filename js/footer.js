document.addEventListener("DOMContentLoaded", function() {
    const footer = document.getElementById("footer");
    if (footer) {
        footer.innerHTML = `
            <hr>
            <h6>Contact: <a href="mailto:dan@danharding.link">Email</a> | <a href="tel:412-256-8824">Call/Text</a></h6>
        `;
    }
});