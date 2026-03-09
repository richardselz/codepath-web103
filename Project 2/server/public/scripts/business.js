const renderBusiness = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop());

    const response = await fetch('/businesses');
    const data = await response.json();

    const businessContent = document.getElementById('business-content');

    let business = data.find(business => business.id === requestedID);
    if (business) {
        document.getElementById('name').textContent = business.name;
        document.getElementById('type').textContent = 'Type of Business: ' + business.type;
        document.getElementById('profitability').textContent = 'Profitability: ' + business.profitability;
        document.getElementById('location').textContent = 'Locaiton: ' + business.location;
        document.title = `Business - ${business.name}`;
    } else {
        const message = document.createElement('h2');
        message.textContent = 'No Businesses Available 😞';
        businessContent.appendChild(message);
    }
}

renderBusiness();