function getCoordinates(address, callback) {
    const apiKey = 'AIzaSyAVGo30Lp8CbkvGMSfDafAnlpvMpyBj4Lc'; // Replace w your actual API Key
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
        .catch(error => callback(null, error));
}

function isPointInPolygon(point, polygon) {
    var x = point.lat, y = point.lng;
    var inside = false;

    for (var i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        var xi = polygon[i].lat, yi = polygon[i].lng;
        var xj = polygon[j].lat, yj = polygon[j].lng;

        var intersect = ((yi > y) != (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }

    console.log("Point Inside Polygon:", inside); // Debugging log
    return inside;
}


        var polyCentral = [
            { lat: 39.779704, lng: -104.9414571 }, // CENTRAL Denver change lon to lng
            { lat: 39.7791763, lng: -104.9735578 },
            { lat: 39.7410395, lng: -105.01098 },
            { lat: 39.7257261, lng: -105.00995 },
            { lat: 39.7108054, lng: -104.9972471 },
            { lat: 39.7112016, lng: -104.9412855 },
            { lat: 39.779704, lng: -104.9414571 } // Closing the polygon
        ];

        var polyEast = [
            { lat: 39.7113336, lng: -104.8650678 }, //East Denver coords
            { lat: 39.7401155, lng: -104.8659261 },
            { lat: 39.7473091, lng: -104.8470434 },
            { lat: 39.7544361, lng: -104.8472144 },
            { lat: 39.7563827, lng: -104.8501758 },
            { lat: 39.7578012, lng: -104.8563989 },
            { lat: 39.7577352, lng: -104.8611193 },
            { lat: 39.7603084, lng: -104.8654107 },
            { lat: 39.7682257, lng: -104.8659261 },
            { lat: 39.8130725, lng: -104.8662694 },
            { lat: 39.8128088, lng: -104.8851522 },
            { lat: 39.7775932, lng: -104.9043783 },
            { lat: 39.7775932, lng: -104.9218877 },
            { lat: 39.7794401, lng: -104.9308141 },
            { lat: 39.779704, lng: -104.9400838 },
            { lat: 39.7115978, lng: -104.9397405 },
            { lat: 39.7112016, lng: -104.8927053 },
            { lat: 39.7068444, lng: -104.8849805 },
            { lat: 39.7113336, lng: -104.8650678 } // Closing the polygon
        ];
        
        var polySouth = [
            { lat: 39.7108054, lng: -104.9972471 }, //South Region
            { lat: 39.6986553, lng: -104.9910673 },
            { lat: 39.6833324, lng: -104.9914106 },
            { lat: 39.6537339, lng: -105.0010236 },
            { lat: 39.653073, lng: -104.9414571 },
            { lat: 39.6452748, lng: -104.9416288 },
            { lat: 39.645407, lng: -104.912618 },
            { lat: 39.6493723, lng: -104.9157079 },
            { lat: 39.6495045, lng: -104.8765691 },
            { lat: 39.653866, lng: -104.8674711 },
            { lat: 39.7101452, lng: -104.8657544 },
            { lat: 39.7060516, lng: -104.8848934 },
            { lat: 39.7102772, lng: -104.8935636 },
            { lat: 39.7108054, lng: -104.9402555 },
            { lat: 39.7108054, lng: -104.9972471 } // Closing the new polygon
        ];
        var polyWest = [
            { lat: 39.791708, lng: -105.053037 }, // West polygon coords
            { lat: 39.7847169, lng: -105.0693448 },
            { lat: 39.6682705, lng: -105.0705465 },
            { lat: 39.668799, lng: -104.999307 },
            { lat: 39.696674, lng: -104.9941572 },
            { lat: 39.7109375, lng: -105.0006803 },
            { lat: 39.7249339, lng: -105.0147565 },
            { lat: 39.7403795, lng: -105.0168165 },
            { lat: 39.7449993, lng: -105.0192197 },
            { lat: 39.7523904, lng: -105.0171598 },
            { lat: 39.767434, lng: -104.998277 },
            { lat: 39.7815509, lng: -104.9981054 },
            { lat: 39.7824743, lng: -105.0060018 },
            { lat: 39.8027867, lng: -105.0068601 },
            { lat: 39.791708, lng: -105.053037 } // Closing the polygon
        ];
        var polyZone1 = [
            { lat: 39.653989, lng: -104.831388 }, //polyZone1 South Aurora and Centennial
            { lat: 39.639448, lng: -104.831387 },
            { lat: 39.625964, lng: -104.832075 },
            { lat: 39.618626, lng: -104.823578 },
            { lat: 39.61089, lng: -104.812505 },
            { lat: 39.6097, lng: -104.818773 },
            { lat: 39.606031, lng: -104.817701 },
            { lat: 39.606526, lng: -104.847484 },
            { lat: 39.595283, lng: -104.847181 },
            { lat: 39.594746, lng: -104.801849 },
            { lat: 39.551353, lng: -104.774396 },
            { lat: 39.553206, lng: -104.775426 },
            { lat: 39.566875, lng: -104.76702 },
            { lat: 39.576836, lng: -104.743503 },
            { lat: 39.576276, lng: -104.733544 },
            { lat: 39.574392, lng: -104.725475 },
            { lat: 39.574585, lng: -104.721096 },
            { lat: 39.568955, lng: -104.706762 },
            { lat: 39.564855, lng: -104.691913 },
            { lat: 39.565911, lng: -104.660285 },
            { lat: 39.602218, lng: -104.660926 },
            { lat: 39.597581, lng: -104.674185 },
            { lat: 39.604782, lng: -104.671824 },
            { lat: 39.605429, lng: -104.680236 },
            { lat: 39.62451, lng: -104.693372 },
            { lat: 39.638078, lng: -104.696955 },
            { lat: 39.638392, lng: -104.715688 },
            { lat: 39.652931, lng: -104.716032 },
            { lat: 39.653989, lng: -104.831388 } // Closing the polygon
        ];

        var polyZone2 = [
            { lat: 39.739978, lng: -104.663611 }, //Central Aurora and East Aurora
            { lat: 39.740374, lng: -104.808493 },
            { lat: 39.669057, lng: -104.80815 },
            { lat: 39.657032, lng: -104.834586 },
            { lat: 39.654121, lng: -104.830358 },
            { lat: 39.653063, lng: -104.715002 },
            { lat: 39.638524, lng: -104.714658 },
            { lat: 39.638527, lng: -104.662924 },
            { lat: 39.739978, lng: -104.663611 } // Closing the polygon
        ];
        var Zone3DenverEastOverlap = [
            { lat: 39.741562, lng: -104.737414 }, // 
            { lat: 39.752385, lng: -104.753893 },
            { lat: 39.769804, lng: -104.802302 },
            { lat: 39.772707, lng: -104.830111 },
            { lat: 39.77772, lng: -104.895342 },
            { lat: 39.779831, lng: -104.939974 },
            { lat: 39.713691, lng: -104.94042 },
            { lat: 39.708904, lng: -104.931836 },
            { lat: 39.706494, lng: -104.921537 },
            { lat: 39.702268, lng: -104.912525 },
            { lat: 39.695994, lng: -104.897632 },
            { lat: 39.67347, lng: -104.869695 },
            { lat: 39.670563, lng: -104.865661 },
            { lat: 39.663097, lng: -104.858366 },
            { lat: 39.659463, lng: -104.853902 },
            { lat: 39.658142, lng: -104.844289 },
            { lat: 39.6569, lng: -104.835959 },
            { lat: 39.668925, lng: -104.809523 },
            { lat: 39.740242, lng: -104.809866 },
            { lat: 39.741562, lng: -104.737414 } // Closing the polygon
        ];
        var Zone4DenverSouthOverlap = [
            { lat: 39.595069, lng: -104.885081 }, //South Denver to DTC
            { lat: 39.595283, lng: -104.847524 },
            { lat: 39.624378, lng: -104.847524 },
            { lat: 39.633967, lng: -104.879304 },
            { lat: 39.64129, lng: -104.878793 },
            { lat: 39.658142, lng: -104.844289 },
            { lat: 39.659463, lng: -104.853902 },
            { lat: 39.663097, lng: -104.858366 },
            { lat: 39.670563, lng: -104.865661 },
            { lat: 39.673008, lng: -104.869266 },
            { lat: 39.679085, lng: -104.876819 },
            { lat: 39.685889, lng: -104.885316 },
            { lat: 39.695994, lng: -104.897632 },
            { lat: 39.702268, lng: -104.912525 },
            { lat: 39.706494, lng: -104.921537 },
            { lat: 39.708904, lng: -104.931836 },
            { lat: 39.713691, lng: -104.94042 },
            { lat: 39.705828, lng: -104.959925 },
            { lat: 39.685009, lng: -104.960183 },
            { lat: 39.684376, lng: -104.946407 },
            { lat: 39.682872, lng: -104.940894 },
            { lat: 39.665781, lng: -104.940673 },
            { lat: 39.653248, lng: -104.940455 },
            { lat: 39.653356, lng: -104.960097 },
            { lat: 39.580649, lng: -104.960268 },
            { lat: 39.580061, lng: -104.923098 },
            { lat: 39.579856, lng: -104.877356 },
            { lat: 39.595069, lng: -104.885081 } // Closing the polygon
        ];





function onAddressSubmit() {
    var address = document.getElementById('address-input').value;
    console.log("Submitted Address:", address); // Debugging log

    getCoordinates(address, (location, error) => {
        if (error || !location) {
            console.error("Geocoding Error or No Location:", error);
            alert('Error fetching location or location not found');
            return;
        }

        // Check if the location is within each polygon and redirect accordingly BLOWOUT LINKS
        if (isPointInPolygon(location, polyCentral)) {
            window.location.href = "https://sprinkler.as.me/?appointmentType=36807385";
        } else if (isPointInPolygon(location, polyEast)) {
            window.location.href = "https://sprinkler.as.me/?appointmentType=36807369";
        } else if (isPointInPolygon(location, polyWest)) {
            window.location.href = "https://sprinkler.as.me/?appointmentType=36824968";
        } else if (isPointInPolygon(location, polySouth)) {
            window.location.href = "https://sprinkler.as.me/?appointmentType=36809706";
        } else if (isPointInPolygon(location, polyZone1)) {
            window.location.href = "https://sprinkler.as.me/?appointmentType=36955521";
        } else if (isPointInPolygon(location, polyZone2)) {
            window.location.href = "https://sprinkler.as.me/?appointmentType=36955481";
        } else if (isPointInPolygon(location, Zone3DenverEastOverlap)) {
            window.location.href = "https://sprinkler.as.me/?appointmentType=36955445";
        } else if (isPointInPolygon(location, Zone4DenverSouthOverlap)) {
            window.location.href = "https://sprinkler.as.me/?appointmentType=36955162";
        } else {
            alert('Address not found in the specified region');
        }
    });
}
