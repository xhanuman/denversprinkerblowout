document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('addressForm');
    if (form) {
        form.addEventListener('submit', onAddressSubmit);
        console.log('Form event listener added.');
    } else {
        console.error('addressForm element not found');
    }
});

function onAddressSubmit(event) {
    if (event) {
        event.preventDefault(); // Prevent the default form submission
        console.log('Form submitted.');
    } else {
        console.error('event object is undefined');
    }

    var addressInput = document.getElementById('addressInput');
    if (!addressInput) {
        console.error('addressInput element not found');
        return;
    }

    var address = addressInput.value;
    console.log('Address:', address);

    getCoordinates(address, function(location, error) {
        if (error) {
            console.error('Geocoding error:', error);
            document.getElementById('errorMessage').textContent = error;
            document.getElementById('schedulingLink').href = '';
            document.getElementById('schedulingLink').style.display = 'none';
        } else {
            console.log('Geocoded Location:', location);
            var isInPolygon = false;
            // Check if the location is within each polygon and redirect accordingly
            if (isPointInPolygon(location, polyWest)) {
                document.getElementById('schedulingLink').href = "https://sprinkler.as.me/?appointmentType=36807385";
                isInPolygon = true;
            } else if (isPointInPolygon(location, polyS1)) {
                document.getElementById('schedulingLink').href = "https://sprinkler.as.me/?appointmentType=36807369";
                isInPolygon = true;
            } else if (isPointInPolygon(location, polyS3)) {
                document.getElementById('schedulingLink').href = "https://sprinkler.as.me/?appointmentType=36824968";
                isInPolygon = true;
            }
            // Add additional polygons if needed

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
// var polyCentral = [ /* coordinates */ ];
// var polyEast = [ /* coordinates */ ];
// var polySouth = [ /* coordinates */ ];
// var polyZone1 = [ /* coordinates */ ];
// var polyZone2 = [ /* coordinates */ ];
// var Zone3DenverEastOverlap = [ /* coordinates */ ];
// var Zone4DenverSouthOverlap = [ /* coordinates */ ];

// Define the polygons for each region
// was polyS2 temp change to polyWest
var polyWest = [
    [-105.0812268, 39.7790868], [-105.0813048, 39.725692], [-105.0129917, 39.72557],
    [-105.0145367, 39.729069], [-105.0154807, 39.731907], [-105.0152227, 39.733821],
    [-105.0136787, 39.736726], [-105.0132487, 39.739432], [-105.0146227, 39.742402],
    [-105.0174547, 39.74458], [-105.0180557, 39.747483], [-105.0169397, 39.750585],
    [-105.0153947, 39.753092], [-105.0111037, 39.756128], [-105.0026917, 39.76266],
    [-104.9968557, 39.768202], [-104.9976277, 39.784561], [-105.0002027, 39.800982],
    [-105.0058677, 39.803224], [-105.0178837, 39.803422], [-105.0203727, 39.802038],
    [-105.0299007, 39.799598], [-105.0402857, 39.799334], [-105.0444917, 39.797817],
    [-105.0497267, 39.796762], [-105.056486, 39.7946355], [-105.0639754, 39.7897881],
    [-105.068138, 39.7876278], [-105.0804975, 39.784363], [-105.081227, 39.7840993],
    [-105.0812268, 39.7790868]
];

var polyS1 = [
    [-105.0347068, 39.8387764], [-105.0389536, 39.8415756], [-105.0483734, 39.8508168],
    [-105.0527418, 39.855898], [-105.0566434, 39.8635114], [-105.081661, 39.8636123],
    [-105.0818111, 39.8452783], [-105.0815107, 39.8272197], [-105.0814965, 39.8148232],
    [-105.0766829, 39.8036145], [-105.0764222, 39.7987358], [-105.0786092, 39.7947798],
    [-105.0811616, 39.7921424], [-105.0813107, 39.7864712], [-105.072792, 39.7880376],
    [-105.0686936, 39.7882354], [-105.0648098, 39.7897194], [-105.0604538, 39.7926377],
    [-105.0549321, 39.7963642], [-105.0475077, 39.7974853], [-105.0419717, 39.7992658],
    [-105.0345044, 39.7994966], [-105.0299007, 39.799598], [-105.0198703, 39.8026947],
    [-105.0093989, 39.8083653], [-104.9962668, 39.8111345], [-104.9874187, 39.8147739],
    [-104.9874187, 39.8273485], [-104.9947572, 39.8276287], [-105.0066662, 39.8307761],
    [-105.0241757, 39.8358018], [-105.0347068, 39.8387764]
];

var polyS3 = [
    [-105.0813396, 39.6526563], [-105.038124, 39.654572], [-105.03336, 39.653119],
    [-105.031558, 39.652623], [-105.02894, 39.652524], [-105.024434, 39.652226],
    [-105.018469, 39.652623], [-105.015336, 39.652887], [-105.011345, 39.653779],
    [-105.009156, 39.653779], [-105.001946, 39.653251], [-104.997869, 39.662403],
    [-104.993505, 39.676716], [-104.992132, 39.682232], [-104.992268, 39.689723],
    [-104.994457, 39.692497], [-104.992611, 39.697879], [-104.992869, 39.699233],
    [-104.994886, 39.701808], [-104.997547, 39.704978], [-105.002739, 39.71579],
    [-105.0107, 39.722021], [-105.013162, 39.722596], [-105.015281, 39.723832],
    [-105.015829, 39.725379], [-105.053324, 39.725692], [-105.0813048, 39.725692],
    [-105.0815368, 39.6895375], [-105.0813396, 39.6526563]
];


// Function to check if a point is inside a polygon
function isPointInPolygon(point, polygon) {
    console.log('Checking if point is in polygon:', point, polygon);
    // Add your point-in-polygon algorithm here
}

// Function to get coordinates from the address
function getCoordinates(address, callback) {
    const apiKey = 'AIzaSyAVGo30Lp8CbkvGMSfDafAnlpvMpyBj4Lc'; // Replace with your actual API Key
    var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.results.length > 0) {
                var location = data.results[0].geometry.location;
                console.log("Geocoded Location:", location); // Debugging log
                callback(location, null);
            } else {
                callback(null, 'No results found');
            }
        })
        .catch(error => callback(null, error.message));
}