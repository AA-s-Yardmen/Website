const companyInfo = {
    name: "AA's Yardmen Ltd",
    companyNumber: "SC755769",
    establishedDate: "January 2023",
    address: "272 Bath Street, Glasgow, Scotland, G2 4JR",
    phone: "07516 487733",
    email: "support@aayardmen.co.uk",
    servicesOffered: [
        {
            name: "Garden Maintenance",
            price: { small: 25, medium: 40, large: 60 },
            includes: ["Lawn Mowing", "Weed Control", "Green Waste Removal"]
        },
        {
            name: "Pressure Washing",
            price: { small: 30, medium: 50, large: 75 },
            includes: ["Driveways", "Patios", "Decking"]
        },
        {
            name: "Commercial Services",
            price: "Contact for Quote",
            includes: ["Office Cleaning", "Retail Spaces", "Regular Contracts"]
        }
    ],
    serviceArea: {
        center: [55.86739054658849, -4.122231786419321],
        radius: 2000, // meters
        areas: ["Easterhouse", "Baillieston", "Shettleston", "Parkhead"]
    }
};

export default companyInfo;
