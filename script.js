<script>
        // JavaScript function to save form data locally
        function saveFormData() {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const address = document.getElementById('address').value;
            const comments = document.getElementById('comments').value;

            const formData = {
                name,
                email,
                phone,
                address,
                comments
            };

            // Save to local storage
            localStorage.setItem('contactFormData', JSON.stringify(formData));
            alert('Form data saved locally!');
        }
    </script>