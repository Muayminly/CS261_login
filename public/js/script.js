function submitLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Application-Key': 'TU5d9c2f64dba5a79b5703f16217099f581aa997f95cea8f85ee3303e96d2af4fa9389bf05fe88938703a7a4a10e198098'
        },
        body: JSON.stringify({"UserName" : "username","PassWord" : "password"})
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerText = data.message;
    })
    .catch(error => {console.error('Error:', error);
        document.getElementById('message').innerText = error.message;
    });
}



function call_REST_API_Hello() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const url = (
        'http://localhost:8080/hello?' +
        new URLSearchParams({ myName: username, lastName: password}).toString()
      );
    
    fetch(url)
    .then(response => response.text())
    .then(text => {
        document.getElementById('message').innerText = text;
    })
    .catch(error => console.error('Error:', error));
}
