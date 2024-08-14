var isopen = false;

function openPlayerConfig(event){
    editedPlayer = +event.target.dataset.playerid;
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none ';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event){
    event.preventDefault();
    const formData = new FormData(event.target); 
    const enteredPlayername = formData.get('playername').trim(); 

    if (!enteredPlayername){
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContent = 'Please enter a valid name!';
        return;      
    }

    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayername;

    players[editedPlayer - 1].name = enteredPlayername;

    closePlayerConfig();
      errorsOutputElement.textContent = '';
}

function darkmode() {

    if (isopen == false){
        bodyConfigurationElement.style.backgroundColor = '#111111';
        mainHeaderColor.style.backgroundColor = 'rgb(71, 0, 129)';
        BtnConfigColor.style.backgroundColor = 'rgb(71, 0, 129)';
        BtnConfigColor.style.border = 'rgb(71, 0, 129)';
        ColorPlayerConfig1.style.backgroundColor = '#818181';
        ColorPlayerConfig2.style.backgroundColor = '#818181';
        overlayColorElement.style.backgroundColor = '#111111';
        overlayColorElement.style.color = 'white';
        
    } else {
        bodyConfigurationElement.style.backgroundColor = 'rgb(247, 239, 247)';
        mainHeaderColor.style.backgroundColor = 'rgb(140, 0, 255)';
        BtnConfigColor.style.backgroundColor = 'rgb(140, 0, 255)';
        BtnConfigColor.style.border = 'rgb(140, 0, 255)';
        ColorPlayerConfig1.style.backgroundColor = 'rgb(243, 227 ,255)';
        ColorPlayerConfig2.style.backgroundColor = 'rgb(243, 227 ,255)';
        overlayColorElement.style.backgroundColor = 'white';
        overlayColorElement.style.color = 'black';
    }
    isopen = !isopen
}