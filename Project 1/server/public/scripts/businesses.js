const renderBusinesses = async () => {
    const response = await fetch('/businesses');
    const data = await response.json();

    const mainContent = document.getElementById('main-content');
    
    if (data) {
        data.map(business => {
            const businessWrapper = document.createElement('div');
            businessWrapper.className = 'card';

            mainContent.appendChild(businessWrapper);

            const topContainer = document.createElement('div');
            topContainer.classList.add('top-container');

            const bottomContainer = document.createElement('div');
            bottomContainer.classList.add('bottom-container');

            const name = document.createElement('h3');
            name.textContent = business.name;
            bottomContainer.appendChild(name);

            const pricePoint = document.createElement('p');
            pricePoint.textContent = 'Type: ' + business.type;
            bottomContainer.appendChild(pricePoint);

            const audience = document.createElement('p');
            audience.textContent = 'Profitability: ' + business.profitability;
            bottomContainer.appendChild(audience);

            const readMore = document.createElement('a');
            readMore.textContent = 'Read More >';
            readMore.href = `/businesses/${business.id}`;
            readMore.role = 'button';
            bottomContainer.appendChild(readMore);

            businessWrapper.appendChild(topContainer);
            businessWrapper.appendChild(bottomContainer);
            
            mainContent.appendChild(businessWrapper);
        });
    } else {
        const message = document.createElement('h2');
        message.textContent = 'No Businesses Available :(';

        mainContent.appendChild(message);
    }
}

const requestURL = window.location.href.split('/').pop();
if (requestURL) {
    window.location.href = '../404.html';
} else {
    renderBusinesses();
}