
        // Welcome message with name
        document.addEventListener('DOMContentLoaded', function() {
            const welcomeText = document.getElementById('welcome-text');
            const name = 'Muhammad Aka Sahadi';
            welcomeText.textContent = `Hi ${name}`;
            
            // Update current time
            updateCurrentTime();
            setInterval(updateCurrentTime, 1000);
        });

        // Smooth scrolling navigation
        function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('navbar-scroll');
            } else {
                navbar.classList.remove('navbar-scroll');
            }
        });

        // Form validation and submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nama = document.getElementById('nama').value;
            const tanggal = document.getElementById('tanggal').value;
            const gender = document.querySelector('input[name="gender"]:checked')?.value;
            const pesan = document.getElementById('pesan').value;
            
            // Validate form
            if (!nama || !tanggal || !gender || !pesan) {
                alert('Please fill in all fields');
                return;
            }
            
            // Display results
            document.getElementById('resultNama').textContent = nama;
            document.getElementById('resultTanggal').textContent = formatDate(tanggal);
            document.getElementById('resultGender').textContent = gender;
            document.getElementById('resultPesan').textContent = pesan;
            
            // Success message
            alert('Form submitted successfully!');
        });

        // Update current time
        function updateCurrentTime() {
            const now = new Date();
            const options = { 
                weekday: 'short', 
                year: 'numeric', 
                month: 'short', 
                day: '2-digit', 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit',
                timeZoneName: 'short'
            };
            
            const timeString = now.toLocaleDateString('en-US', options);
            document.getElementById('currentTime').textContent = `Current time : ${timeString}`;
        }

        // Format date
        function formatDate(dateString) {
            const date = new Date(dateString);
            const options = { 
                day: '2-digit', 
                month: '2-digit', 
                year: 'numeric' 
            };
            return date.toLocaleDateString('id-ID', options);
        }

        // Responsive design handlers
        window.addEventListener('resize', function() {
            // Handle any responsive adjustments if needed
        });