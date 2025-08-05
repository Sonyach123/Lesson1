let houseAddress = {
    country: "Ukraine",
    city: "Kiev",
    street:"Khreshchatyk",
    getFullAddress: function() {
   console.log("My address is country:", 
    houseAddress.country,
    ", city:",
    houseAddress.city,
    ", street:",
    houseAddress.street
);
}
    }

    houseAddress.getFullAddress();