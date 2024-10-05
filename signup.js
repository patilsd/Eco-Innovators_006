let authToken = localStorage.getItem("authToken");
if(authToken)
window.location.href="index.html"
document.querySelector("#signupForm").addEventListener("submit", signUp)


function signUp() {
    event.preventDefault()
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value
    signupWithFetch(email, password)
}


const signupWithFetch = (email, password) => {
    const secrete = getSecret();
    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${secrete.apiKey}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
            returnSecureToken: true
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert(data.error.message)

            }
            else {
                alert("Succesfully signup")
                window.location.href = "login.html"
            }

        })
        .catch(error => {
            alert(data.error.message)
            //console.error('Error signing up:', error.message);
        });
};

// Example usage
// signupWithFetch('user@example.com', 'password123');