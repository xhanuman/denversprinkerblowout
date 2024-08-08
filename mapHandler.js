document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('addressForm');
    if (form) {
        form.addEventListener('submit', onAddressSubmit);
    } else {
        console.error('addressForm element not found');
    }
});

function onAddressSubmit(event) {
    if (event) {
        event.preventDefault(); // Prevent the default form submission
    } else {
        console.error('event object is undefined');
    }

    var addressInput = document.getElementById('addressInput');
    if (!addressInput) {
        console.error('addressInput element not found');
        return;
    }

    var address = addressInput.value;
    getCoordinates(address, function(location, error) {
        if (error) {
            console.error(error);
            document.getElementById('errorMessage').textContent = error;
            document.getElementById('schedulingLink').href = '';
            document.getElementById('schedulingLink').style.display = 'none';
        } else {
            var isInPolygon = false;
            // Check if the location is within each polygon and redirect accordingly
            if (isPointInPolygon(location, polyCentral)) {
                document.getElementById('schedulingLink').href = "https://sprinkler.as.me/?appointmentType=36807385";
                isInPolygon = true;
            } else if (isPointInPolygon(location, polyEast)) {
                document.getElementById('schedulingLink').href = "https://sprinkler.as.me/?appointmentType=36807369";
                isInPolygon = true;
            } else if (isPointInPolygon(location, polyWest)) {
                document.getElementById('schedulingLink').href = "https://sprinkler.as.me/?appointmentType=36824968";
                isInPolygon = true;
            } else if (isPointInPolygon(location, polySouth)) {
                document.getElementById('schedulingLink').href = "https://sprinkler.as.me/?appointmentType=36809706";
                isInPolygon = true;
            } else if (isPointInPolygon(location, polyZone1)) {
                document.getElementById('schedulingLink').href = "https://sprinkler.as.me/?appointmentType=36955521";
                isInPolygon = true;
            } else if (isPointInPolygon(location, polyZone2)) {
                document.getElementById('schedulingLink').href = "https://sprinkler.as.me/?appointmentType=36955481";
                isInPolygon = true;
            } else if (isPointInPolygon(location, Zone3DenverEastOverlap)) {
                document.getElementById('schedulingLink').href = "https://sprinkler.as.me/?appointmentType=36955445";
                isInPolygon = true;
            } else if (isPointInPolygon(location, Zone4DenverSouthOverlap)) {
                document.getElementById('schedulingLink').href = "https://sprinkler.as.me/?appointmentType=36955162";
                isInPolygon = true;
            }
            if (isInPolygon) {
                document.getElementById('schedulingLink').style.display = 'inline';
            } else {
                alert('Address is out of our service area or please review the syntax of your entry - please ensure there is a comma after the address and enter the city at a minimum');
                document.getElementById('schedulingLink').href = '';
                document.getElementById('schedulingLink').style.display = 'none';
            }
        }
    });
}

// Define the polygons for each region
var polyCentral = [ /* coordinates */ ];
var polyEast = [ /* coordinates */ ];
var polySouth = [ /* coordinates */ ];
var polyWest = [ /* coordinates */ ];
var polyZone1 = [ /* coordinates */ ];
var polyZone2 = [ /* coordinates */ ];
var Zone3DenverEastOverlap = [ /* coordinates */ ];
var Zone4DenverSouthOverlap = [ /* coordinates */ ];

// Function to check if a point is inside a polygon
function isPointInPolygon(point, polygon) {
    // Implementation of point-in-polygon algorithm
}

// Function to get coordinates from the address
function getCoordinates(address, callback) {
    // Implementation to convert address to coordinates and call the callback
}
