/**
 * script.js
 * Functionality for the Pet Care Professional Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
    const recForm = document.getElementById('recForm');
    const recContainer = document.getElementById('rec-container');
    const popup = document.getElementById('popup');
    const homeBtn = document.getElementById('homeBtn');

    // Task 1: The Home icon works correctly and navigates to the top of the page
    if (homeBtn) {
        homeBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Task 3: showPopup is triggered only when a new recommendation is submitted
    function showPopup() {
        if (popup) {
            popup.style.display = 'flex';
            setTimeout(() => {
                popup.style.display = 'none';
            }, 3000);
        }
    }

    if (recForm) {
        recForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('recName');
            const textInput = document.getElementById('recText');

            if (nameInput.value && textInput.value) {
                // Add new recommendation card
                const newRec = document.createElement('div');
                newRec.className = 'rec-card';
                newRec.innerHTML = `
                    <p class="rec-text">"${textInput.value}"</p>
                    <p class="rec-author"><strong>— ${nameInput.value}</strong></p>
                `;

                recContainer.appendChild(newRec);

                // Reset form
                nameInput.value = '';
                textInput.value = '';

                // Trigger popup
                showPopup();
            }
        });
    }
});
