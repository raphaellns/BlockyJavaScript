const dropHeaders = document.querySelectorAll(".clickable-header");

dropHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const dropdownContent = header.nextElementSibling;

        // Toggle display
        if (dropdownContent.style.display === "flex") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "flex";
        }
    });
});