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
            var errorMessageElem = document.getElementById('errorMessage');
            
            if (errorMessageElem) {
                errorMessageElem.textContent = error;
            } else {
                console.error('errorMessage element not found');
            }
            
            // No need to handle scheduling link here
        } else {
            console.log('Geocoded Location:', location);
            var isInPolygon = false;
            var schedulingUrl = '';

            // Check if the location is within each polygon and set the URL accordingly
        if (isPointInPolygon(location, C1_Northfield)) {
    schedulingUrl = "https://sprinkler.as.me/?appointmentType=36809706";
    isInPolygon = true;
} else if (isPointInPolygon(location, C3_CentralDenver)) {
    schedulingUrl = "https://sprinkler.as.me/?appointmentType=36807385";
    isInPolygon = true;
} else if (isPointInPolygon(location, CS1_NorthWest)) {
    schedulingUrl = "https://sprinkler.as.me/?appointmentType=38136540";
    isInPolygon = true;
} else if (isPointInPolygon(location, CS2_SouthWest)) {
    schedulingUrl = "https://sprinkler.as.me/?appointmentType=52547839";
    isInPolygon = true;
} else if (isPointInPolygon(location, CL1_DenverCountryClub)) {
    schedulingUrl = "https://sprinkler.as.me/?appointmentType=36955521";
    isInPolygon = true;
} else if (isPointInPolygon(location, CL2_EastDenver)) {
    schedulingUrl = "https://sprinkler.as.me/?appointmentType=36824968";
    isInPolygon = true;
} else if (isPointInPolygon(location, CL3_SouthDenverWest)) {
    schedulingUrl = "https://sprinkler.as.me/?appointmentType=36807369";
    isInPolygon = true;
} else if (isPointInPolygon(location, CL4_SouthDenverEast)) {
    schedulingUrl = "https://sprinkler.as.me/?appointmentType=67267596";
    isInPolygon = true;
} else if (isPointInPolygon(location, S1_Westminster)) {
    schedulingUrl = "https://sprinkler.as.me/?appointmentType=67266960";
    isInPolygon = true;
} else if (isPointInPolygon(location, S2_WheatridgeEdgewater)) {
    schedulingUrl = "https://sprinkler.as.me/?appointmentType=67267435";
    isInPolygon = true;
} else if (isPointInPolygon(location, S3_Lakewood)) {
    schedulingUrl = "https://sprinkler.as.me/?appointmentType=67267564";
    isInPolygon = true;
} else if (isPointInPolygon(location, L1_WestAurora)) {
    schedulingUrl = "https://sprinkler.as.me/?appointmentType=36955445";
    isInPolygon = true;
} else if (isPointInPolygon(location, L2_NorthAurora)) {
    schedulingUrl = "https://sprinkler.as.me/?appointmentType=67267848";
    isInPolygon = true;
} else if (isPointInPolygon(location, L3_FarEast)) {
    schedulingUrl = "https://sprinkler.as.me/?appointmentType=67269948";
    isInPolygon = true;
} else if (isPointInPolygon(location, L4_CentralAurora)) {
    schedulingUrl = "https://sprinkler.as.me/?appointmentType=67241271";
    isInPolygon = true;
} else if (isPointInPolygon(location, L5_DTC_GreenwoodVillage)) {
    schedulingUrl = "https://sprinkler.as.me/?appointmentType=36955481";
    isInPolygon = true;
} else if (isPointInPolygon(location, L6_SouthAurora_Centennial)) {
    schedulingUrl = "https://sprinkler.as.me/?appointmentType=36955162";
    isInPolygon = true;
} else if (isPointInPolygon(location, L7_SoutheastAurora)) {
    schedulingUrl = "https://sprinkler.as.me/?appointmentType=67267792";
    isInPolygon = true;
}

            if (isInPolygon) {
                window.location.href = schedulingUrl; // Redirect to the scheduling link
            } else {
                alert('Address is either incomplete or out of our service area or please review the syntax of your entry - please ensure there is a comma after the address and enter the city at a minimum');
            }
        }
    });
}

function updateSchedulingLink(href) {
    // No longer needed, as we are using window.location.href directly
}

// Define the polygons for each region

var C1_Northfield = [
    [-104.885152, 39.812809],
    [-104.904378, 39.777593],
    [-104.865629, 39.774621],
    [-104.866269, 39.813072],
    [-104.885152, 39.812809]
];

var C3_CentralDenver = [
    [-104.940084, 39.779704],
    [-104.973558, 39.779176],
    [-105.01098, 39.74104],
    [-105.00995, 39.725726],
    [-104.997247, 39.7111186],
    [-104.982759, 39.710842],
    [-104.98233, 39.740045],
    [-104.939854, 39.740135],
    [-104.940084, 39.779704]
];

var L1_WestAurora = [
    [-104.865926, 39.740116],
    [-104.865968, 39.714884],
    [-104.866354, 39.691567],
    [-104.8659155, 39.684431],
    [-104.865903, 39.6734842],
    [-104.8665699, 39.6552508],
    [-104.867471, 39.653866],
    [-104.8746, 39.650041],
    [-104.874126, 39.644829],
    [-104.867816, 39.64649],
    [-104.860002, 39.65087],
    [-104.852881, 39.655009],
    [-104.842498, 39.659015],
    [-104.834258, 39.663112],
    [-104.83091, 39.666217],
    [-104.828679, 39.671238],
    [-104.829017, 39.703703],
    [-104.8267, 39.710057],
    [-104.82421, 39.725491],
    [-104.825498, 39.740424],
    [-104.827693, 39.771749]
];

var L2_NorthAurora = [
    [-104.827693, 39.771749],
    [-104.825498, 39.740424],
    [-104.82421, 39.725491],
    [-104.754687, 39.725095],
    [-104.738403, 39.713772],
    [-104.725554, 39.700861],
    [-104.718642, 39.739927],
    [-104.733279, 39.74034],
    [-104.753363, 39.752747],
    [-104.80263, 39.76977],
    [-104.827693, 39.771749]
];

var L3_FarEast = [
    [-104.718642, 39.739927],
    [-104.725776, 39.682754],
    [-104.716592, 39.638418],
    [-104.641576, 39.638286],
    [-104.642079, 39.681931],
    [-104.64225, 39.738319],
    [-104.66079, 39.740497],
    [-104.718642, 39.739927]
];

var L4_CentralAurora = [
    [-104.724132, 39.698156],
    [-104.738403, 39.713772],
    [-104.754687, 39.725095],
    [-104.82421, 39.725491],
    [-104.825584, 39.717305],
    [-104.826614, 39.70925],
    [-104.829017, 39.703703],
    [-104.828765, 39.685606],
    [-104.828679, 39.671238],
    [-104.83091, 39.666217],
    [-104.834258, 39.663112],
    [-104.842498, 39.659015],
    [-104.841382, 39.65809],
    [-104.83546, 39.656438],
    [-104.830653, 39.651812],
    [-104.8296, 39.650198],
    [-104.828699, 39.646563],
    [-104.829067, 39.638694],
    [-104.716432, 39.637872],
    [-104.725776, 39.682754],
    [-104.724132, 39.698156]
];

var L5_DTCGreenwoodVillage = [
    [-104.969443, 39.653152],
    [-104.969341, 39.595092],
    [-104.813314, 39.595239],
    [-104.820231, 39.607389],
    [-104.845775, 39.607966],
    [-104.846843, 39.625879],
    [-104.87211, 39.628631],
    [-104.874004, 39.64344],
    [-104.8746, 39.650041],
    [-104.876569, 39.649504],
    [-104.915708, 39.649372],
    [-104.912618, 39.645407],
    [-104.941629, 39.645275],
    [-104.941457, 39.653073],
    [-104.969443, 39.653152]
];

var L6_SouthAuroraCentennial = [
    [-104.829067, 39.638694],
    [-104.828819, 39.635398],
    [-104.828971, 39.625782],
    [-104.826893, 39.619074],
    [-104.82315, 39.614266],
    [-104.81855, 39.60992],
    [-104.814874, 39.60207],
    [-104.806134, 39.60209],
    [-104.777912, 39.554039],
    [-104.767782, 39.564248],
    [-104.763399, 39.567761],
    [-104.75331, 39.569516],
    [-104.744489, 39.576742],
    [-104.724283, 39.576913],
    [-104.718517, 39.582622],
    [-104.717573, 39.595019],
    [-104.712466, 39.605318],
    [-104.719032, 39.617204],
    [-104.71886, 39.637769],
    [-104.829067, 39.638694]
];

var L7_SoutheastAurora = [
    [-104.71669, 39.637673],
    [-104.719118, 39.63757],
    [-104.719289, 39.617005],
    [-104.712723, 39.605119],
    [-104.71783, 39.59482],
    [-104.718774, 39.582423],
    [-104.724541, 39.576714],
    [-104.744746, 39.576544],
    [-104.753567, 39.569318],
    [-104.763656, 39.567562],
    [-104.778169, 39.55384],
    [-104.772317, 39.543788],
    [-104.756137, 39.543836],
    [-104.756116, 39.551203],
    [-104.709239, 39.551511],
    [-104.701938, 39.550929],
    [-104.679834, 39.550637],
    [-104.679277, 39.565693],
    [-104.660656, 39.565923],
    [-104.659793, 39.594403],
    [-104.673991, 39.607583],
    [-104.693332, 39.611445],
    [-104.693117, 39.624824],
    [-104.69376, 39.626831],
    [-104.694188, 39.638252],
    [-104.71685, 39.638219],
    [-104.71669, 39.637673]
];

var S1_Westminster = [
    [-105.0347068, 39.8387764],
    [-105.0389536, 39.8415756],
    [-105.0483734, 39.8508168],
    [-105.0527418, 39.855898],
    [-105.0566434, 39.8635114],
    [-105.081661, 39.8636123],
    [-105.0818111, 39.8452783],
    [-105.0815107, 39.8272197],
    [-105.0814965, 39.8148232],
    [-105.0766829, 39.8036145],
    [-105.0764222, 39.7987358],
    [-105.0786092, 39.7947798],
    [-105.0811616, 39.7921424],
    [-105.0813107, 39.7864712],
    [-105.072792, 39.7880376],
    [-105.0686936, 39.7882354],
    [-105.0648098, 39.7897194],
    [-105.0604538, 39.7926377],
    [-105.0549321, 39.7963642],
    [-105.0475077, 39.7974853],
    [-105.0419717, 39.7992658],
    [-105.0345044, 39.7994966],
    [-105.0299007, 39.799598],
    [-105.0198703, 39.8026947],
    [-105.0093989, 39.8083653],
    [-104.9962668, 39.8111345],
    [-104.9874187, 39.8147739],
    [-104.9874187, 39.8273485],
    [-104.9947572, 39.8276287],
    [-105.0066662, 39.8307761],
    [-105.0241757, 39.8358018],
    [-105.0347068, 39.8387764]
];

var S2_WheatridgeEdgewater = [
    [-105.0813523, 39.784966],
    [-105.0813491, 39.7256253],
    [-105.0533683, 39.7256253],
    [-105.0532598, 39.7966932],
    [-105.0549321, 39.7963642],
    [-105.0648541, 39.7896527],
    [-105.0687379, 39.7881687],
    [-105.0813523, 39.784966]
];

var S3_Lakewood = [
    [-105.0813491, 39.7256253],
    [-105.0814098, 39.653164],
    [-105.0532144, 39.6532962],
    [-105.0532401, 39.6540698],
    [-105.0534289, 39.696864],
    [-105.053324, 39.725692],
    [-105.0813491, 39.7256253]
];

var CS1_NorthWest = [
    [-105.0533751, 39.7881554],
    [-105.0532717, 39.7835159],
    [-105.0532717, 39.7422138],
    [-105.053324, 39.725692],
    [-105.0129917, 39.72557],
    [-105.0154807, 39.731907],
    [-105.0152227, 39.733821],
    [-105.0136787, 39.736726],
    [-105.0132487, 39.739432],
    [-105.0140471, 39.7410918],
    [-105.0146227, 39.742402],
    [-105.0174547, 39.74458],
    [-105.0180557, 39.747483],
    [-105.0153947, 39.753092],
    [-104.9968557, 39.768202],
    [-104.9976277, 39.784561],
    [-105.0002027, 39.800982],
    [-105.0058677, 39.803224],
    [-105.0178837, 39.803422],
    [-105.0198703, 39.8026947],
    [-105.0299007, 39.799598],
    [-105.0419717, 39.7992658],
    [-105.0475077, 39.7974853],
    [-105.0532155, 39.7967599],
    [-105.0532958, 39.7923919],
    [-105.0533751, 39.7881554]
];

var CS2_SouthWest = [
    [-105.053324, 39.725692],
    [-105.0532401, 39.6540698],
    [-105.038124, 39.654572],
    [-105.031558, 39.652623],
    [-105.0250877, 39.6522855],
    [-105.015336, 39.652887],
    [-105.011345, 39.653779],
    [-105.001946, 39.653251],
    [-104.995578, 39.666687],
    [-104.992132, 39.682232],
    [-104.992268, 39.689723],
    [-104.994457, 39.692497],
    [-104.992869, 39.699233],
    [-104.997547, 39.704978],
    [-105.002739, 39.71579],
    [-105.0107, 39.722021],
    [-105.013162, 39.722596],
    [-105.015281, 39.723832],
    [-105.015829, 39.725379],
    [-105.053324, 39.725692]
];

var CL3_SouthDenverWest = [
    [-105.001024, 39.653734],
    [-104.941457, 39.653073],
    [-104.941629, 39.645275],
    [-104.9132188, 39.6456714],
    [-104.9131331, 39.6477198],
    [-104.9130608, 39.6497648],
    [-104.9127175, 39.69667],
    [-104.9032761, 39.6965379],
    [-104.9031044, 39.7113296],
    [-104.93974, 39.711598],
    [-104.9979336, 39.7112012],
    [-104.991067, 39.698655],
    [-104.991411, 39.683332],
    [-105.001024, 39.653734]
];

var CL4_SouthDenverEast = [
    [-104.9031044, 39.7113296],
    [-104.9032761, 39.6965379],
    [-104.9127175, 39.69667],
    [-104.9130935, 39.6492725],
    [-104.876569, 39.649504],
    [-104.867471, 39.653866],
    [-104.8665699, 39.6552508],
    [-104.865903, 39.6734842],
    [-104.8665732, 39.6906964],
    [-104.866012, 39.71107],
    [-104.88498, 39.706844],
    [-104.892705, 39.711202],
    [-104.9031044, 39.7113296]
];

var CL1_DenverCountryClub = [
    [-104.9828448, 39.7115023],
    [-104.93974, 39.711598],
    [-104.939854, 39.740135],
    [-104.98233, 39.740045],
    [-104.9828448, 39.7115023]
];

var CL2_EastDenver = [
    [-104.940084, 39.779704],
    [-104.93974, 39.711598],
    [-104.892705, 39.711202],
    [-104.88498, 39.706844],
    [-104.866012, 39.71107],
    [-104.865926, 39.740116],
    [-104.847043, 39.7401154],
    [-104.847043, 39.747309],
    [-104.8469136, 39.7546505],
    [-104.8507719, 39.756323],
    [-104.856399, 39.757801],
    [-104.861119, 39.757735],
    [-104.865411, 39.760308],
    [-104.865629, 39.774621],
    [-104.904378, 39.777593],
    [-104.921888, 39.777593],
    [-104.930814, 39.77944],
    [-104.940084, 39.779704]
];

// Function to check if a point is inside a polygon
function isPointInPolygon(point, polygon) {
    console.log('Checking if point is in polygon:', point, polygon);

    var x = point.lng;
    var y = point.lat;
    var inside = false;
    for (var i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        var xi = polygon[i][0], yi = polygon[i][1];
        var xj = polygon[j][0], yj = polygon[j][1];
        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    console.log('Is point in polygon:', inside);
    return inside;
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
