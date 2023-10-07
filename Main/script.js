var addresses = [
    { postNumber: '6960', roadName: 'Sønder klitvej', addressNumber: '62' },
    { postNumber: '6950', roadName: 'Badevej', addressNumber: '1' },
    // Add more address objects here...
];

// Sort addresses
addresses.sort(function (a, b) {
    if (a.postNumber !== b.postNumber) {
        return a.postNumber.localeCompare(b.postNumber);
    } else if (a.roadName !== b.roadName) {
        return a.roadName.localeCompare(b.roadName);
    } else {
        return a.addressNumber - b.addressNumber;
    }
});

// Function to create address links
function createAddressLink(address) {
    var link = document.createElement("a");
    link.href = "address_" + address.postNumber + ".html"; // Replace with your page naming convention
    link.textContent = address.postNumber + ", " + address.roadName + " " + address.addressNumber;
    return link;
}

// Populate the address list
var addressList = document.getElementById("address-list");

addresses.forEach(function (address) {
    var listItem = document.createElement("li");
    listItem.appendChild(createAddressLink(address));
    addressList.appendChild(listItem);
});
