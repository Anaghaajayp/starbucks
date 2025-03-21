function askLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                alert("Your location:\nLatitude: " + position.coords.latitude + "\nLongitude: " + position.coords.longitude);
            },
            () => {
                alert("Location access denied or unavailable.");
            }
        );
    } else {
        alert("Geolocation is not supported by your browser.");
     }
        }

function askLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                alert("Your location:\nLatitude: " + position.coords.latitude + "\nLongitude: " + position.coords.longitude);
            },
            () => {
                alert("Location access denied or unavailable.");
            }
        );
    } else {
        alert("Geolocation is not supported by your browser.");
     }
        }