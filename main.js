var typed = new Typed(".text", {
    strings: ["Web Engineer", "Frontend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.getElementById("resumeLink").addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior

    const fileUrl = "https://drive.google.com/file/d/1ahC4t05L4DhSL1G47gILOdbxXckanC0s/view?usp=sharing";
    const fileId = "1ahC4t05L4DhSL1G47gILOdbxXckanC0s";
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    // Open the resume in a new tab
    window.open(fileUrl, "_blank");

    // Automatically start downloading after 2 seconds
    setTimeout(() => {
        window.location.href = downloadUrl;
    }, 2000); // 2-second delay
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navbar = document.querySelector("navbar");
  
    hamburger.addEventListener("click", function () {
      navbar.classList.toggle("active");
    });
  });
