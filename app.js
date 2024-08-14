
function displayUserInfo() {
    const nameDiv = document.createElement('div');
    nameDiv.textContent = 'Name:Tanveez';
    nameDiv.style.fontSize = '20px';
    nameDiv.style.marginBottom = '10px';
    const passwordDiv = document.createElement('div');
    passwordDiv.textContent = 'Password:1234';
    passwordDiv.style.fontSize = '20px';
    passwordDiv.style.color = 'red';
    document.body.appendChild(nameDiv);
    document.body.appendChild(passwordDiv);
}

window.onload = displayUserInfo;
