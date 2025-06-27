// 1. ფუნქცია სტრინგის ცარიელობაზე
function isStringEmpty(str) {
    return str === "";
}

// 2. ფუნქცია დოლარის ფასის ლარში გადაყვანაზე
function convertToGEL(priceUSD, rate) {
    return priceUSD * rate;
}

// 3. ფუნქცია ვალუტის კოდიდან ქვეყნის დასახელებაზე
function getCurrencyCountry(currencyCode) {
    if (currencyCode === "USD") {
        return "United States";
    } else if (currencyCode === "EUR") {
        return "European Union";
    } else if (currencyCode === "GEL") {
        return "Georgia";
    } else {
        return "Unknown currency";
    }
}

// 4. ფუნქცია uppercase სტრინგის lowercase-ზე გადაყვანაზე
function convertToLowerCase(upperStr) {
    return upperStr.toLowerCase();
}

// 5. ფუნქცია მასივიდან 100-ზე მეტი რიცხვების ამოღებაზე
function filterNumbersOver100(numbers) {
    return numbers.filter(num => num > 100);
}

// 6. ფუნქცია პროდუქტების მასივიდან ყველაზე იაფის პოვნა
function findCheapestProduct(items) {
    return items.reduce((minItem, currentItem) => {
        return currentItem.price < minItem.price ? currentItem : minItem;
    }, items[0]);
}

// 7. ფუნქცია ობიექტების მასივში id-ით ელემენტის პოვნა
function findById(items, id) {
    return items.find(item => item.id === id);
}


// მონაცემები და ტესტები

const products = [
    { price: 1949, productName: "Samsung" },
    { price: 899, productName: "Xiaomi" },
    { price: 639, productName: "Apple AirPods" }
];

const objArray = [
    { id: "1", name: "Item 1" },
    { id: "2", name: "Item 2" },
    { id: "3", name: "Item 3" }
];

// ტესტები

console.log(isStringEmpty("")); // true
console.log(isStringEmpty("hello")); // false

console.log(convertToGEL(100, 2.8)); // 280

console.log(getCurrencyCountry("USD")); // United States
console.log(getCurrencyCountry("GEL")); // Georgia
console.log(getCurrencyCountry("ABC")); // Unknown currency

console.log(convertToLowerCase("MY NAME IS JANE")); // my name is jane

console.log(filterNumbersOver100([50, 150, 200, 80, 300])); // [150, 200, 300]

console.log(findCheapestProduct(products)); // ყველაზე იაფი პროდუქტი

console.log(findById(objArray, "2")); // { id: "2", name: "Item 2" }
console.log(findById(objArray, "5")); // undefined
