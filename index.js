const signupBtn = document.getElementById('signup-btn');
        const forgotPasswordBtn = document.getElementById('forgot-password-btn');
        const signinBtn = document.getElementById('signin-btn');

        signupBtn.addEventListener('click', () => {
            window.open('signup.html', '_blank'); // Open signup page in a new tab
        });

        forgotPasswordBtn.addEventListener('click', () => {
            window.open('forgot-password.html', '_blank'); // Open forgot password page in a new tab
        });

        
        
   