/**
 * WEB222 - Final assessment
 *
 * I declare that my assessment is wholly my own work in accordance with Seneca Academic Policy. 
 * No part of this assessment has been copied manually or electronically from any other source 
 * (including web sites) except for the information supplied by the WEB222 instructors and / or 
 * made available in this assessment for my use. I also declare that no part of this assignment has 
 * been distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       SHOVANA SHRESTHA
 *      Student ID: 110726239
 *      Date:       07-04-2024
 **/

 document.addEventListener('DOMContentLoaded', function() {
    const resumeButton = document.querySelector('.resume-button');
    const resumeDownloadLink = document.getElementById('resume-download-link');
    const contactButton = document.querySelector('.contact-button');
    const contactFormSection = document.getElementById('contact-form-section');
    const arrowIcon = document.querySelector('.arrow');

    // Resume button click event
    resumeButton.addEventListener('click', function() {
        resumeDownloadLink.click();
    });

    // Contact button click event to show contact form
    contactButton.addEventListener('click', function(event) {
        event.preventDefault(); 
        contactFormSection.style.display = "block"; // Show the contact form
    });

    // Close the contact form when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === contactFormSection) {
            contactFormSection.style.display = "none";
        }
    });

    // Contact button click event to navigate to contact.html
    contactButton.addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.href = 'contact.html'; // Navigate to contact.html
    });
    

    // Arrow icon click event to scroll to next section
    let isNextSection = true; 
    arrowIcon.addEventListener('click', function() {
        const currentSection = isNextSection ? document.querySelector('.header-section') : document.querySelector('.about-section');
        const targetSection = isNextSection ? document.querySelector('.about-section') : document.querySelector('.education-section');

        // Scroll to the target section
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            isNextSection = !isNextSection; 
        }
    });
});

