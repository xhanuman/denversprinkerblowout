document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('addressForm');
    if (form) {
        form.addEventListener('submit', onAddressSubmit);
    } else {
        console.error('addressForm element not found');
    }
});

function onAddressSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    var addressInput = document.getElementById('addressInput');
    if (!addressInput) {
        console.error('addressInput element not found');
        return;
    }

    var address = addressInput.value;
    if (!address) {
        alert('Please enter an address.');
        return;
    }

    getCoordinates(address, function(location, error) {
        if (error) {
            console.error(error);
            displayError('Unable to find the address. Please try again.');
            return;
        }

        var isInPolygon = false;
        var linkElement = document.getElementById('schedulingLink');
        if (!linkElement) {
            console.error('schedulingLink element not found');
            return;
        }

        // Check which polygon the location falls into
        if (isPointInPolygon(location, polyCentral)) {
            setLink(linkElement, "https://sprinkler.as.me/?appointmentType=36807385");
            isInPolygon = true;
        } else if (isPointInPolygon(location, polyEast)) {
            setLink(linkElement, "https://sprinkler.as.me/?appointmentType=36807369");
            isInPolygon = true;
        } else if (isPointInPolygon(location, polyWestSouth) || isPointInPolygon(location, polyWestNorth)) {
            setLink(linkElement, "https://sprinkler.as.me/?appointmentType=36824968");
            isInPolygon = true;
        } else if (isPointInPolygon(location, polySouth)) {
            setLink(linkElement, "https://sprinkler.as.me/?appointmentType=36809706");
            isInPolygon = true;
        } else if (isPointInPolygon(location, polyZone1)) {
            setLink(linkElement, "https://sprinkler.as.me/?appointmentType=36955521");
            isInPolygon = true;
        } else if (isPointInPolygon(location, polyZone2)) {
            setLink(linkElement, "https://sprinkler.as.me/?appointmentType=36955481");
            isInPolygon = true;
        } else if (isPointInPolygon(location, Zone3DenverEastOverlap)) {
            setLink(linkElement, "https://sprinkler.as.me/?appointmentType=36955445");
            isInPolygon = true;
        } else if (isPointInPolygon(location, Zone4DenverSouthOverlap)) {
            setLink(linkElement, "https://sprinkler.as.me/?appointmentType=36955162");
            isInPolygon = true;
        }

        if (isInPolygon) {
            linkElement.style.display = 'inline';
        } else {
            displayError('Address is out of our service area or please review the syntax of your entry.');
        }
    });
}

function setLink(element, url) {
    element.href = url;
    element.style.display = 'inline';
}

function displayError(message) {
    document.getElementById('errorMessage').textContent = message;
    var linkElement = document.getElementById('schedulingLink');
    if (linkElement) {
        linkElement.href = '';
        linkElement.style.display = 'none';
    }
}

