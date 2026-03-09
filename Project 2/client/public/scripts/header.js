const header = document.querySelector('header');
const headerContainer = document.createElement('div');
headerContainer.className = 'header-container';

const headerLeft = document.createElement('div');
headerLeft.className = 'header-left';

const headerLogo = document.createElement('img');
headerLogo.src = '../logo.jpg';
headerLogo.width = 120;

const headerText = document.createElement('h1');
headerText.textContent = 'Businesses';

headerLeft.appendChild(headerLogo);
headerLeft.appendChild(headerText);

const headerRight = document.createElement('div');
headerRight.className = 'header-right';


const headerButton = document.createElement('Home');
headerButton.textContent = 'Home';
    
headerButton.addEventListener('click', function handleClick(event) {
  window.location = '/'
});

headerRight.appendChild(headerButton);

headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);

header.appendChild(headerContainer);