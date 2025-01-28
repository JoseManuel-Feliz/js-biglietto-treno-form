console.log('JS OK');

// TODO SET CLASS NONE AND DISPLAY BLOCK TO TICKET RESULT WHEN THE FORM IS EMPTY AND THEN FILLED IN

// |GOT INTERESTED DOCUMENT ELEMENTS
const form = document.getElementById('train-form');

// | FORM INPUT ELEMENTS
const fullNameField = document.getElementById('fullName');
const travelDistanceField = document.getElementById('travel-distance');
const passengerAgeField = document.getElementById('passenger-age');

// | ELEMENTS TO SHOW RESULTS
const passengerFullName = document.getElementById('passenger-name');
const typeOffer = document.getElementById('offer-type');
const numbCarrige = document.getElementById('train-carrige');
const passengerCode = document.getElementById('passenger-code');
const ticketPrice = document.getElementById('ticket-price');

// | FORM EVENTLISTERNER
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const travelRate = 0.21;
    let discount;

    // | GET INPUT VALUES 
    const travelDistanceValue = parseFloat(travelDistanceField.value);
    const passengerAgeValue = passengerAgeField.value;
    const fullNameValue = (fullNameField.value).trim();

    console.log(travelDistanceValue, passengerAgeValue, fullNameValue);

    // |CONDITION TO SET DISCOUNT VALUE
    switch (passengerAgeValue) {
        case 'senior':
            discount = 0.4
            break;
        case 'young':
            discount = 0.2;
            break;
        default:
            discount = 0
    }

    console.log(discount)
    // |CALC. TO GET TRAVEL PRICE WITHOUT DISCOUNT AMOUNT
    const travelPrice = parseFloat((travelDistanceValue * travelRate).toPrecision(4));

    console.log(travelPrice);

    // |CALC. TO GET DISCOUNT AMOUNT
    const discountAmount = parseFloat((travelPrice * discount).toPrecision(4));

    console.log(discountAmount);

    // | CONDITION TO CALC. TOTAL PRICE AMOUNT AND SET THE OFFER TYPE

    let totalPrice;
    let offer;

    if (discount) {
        totalPrice = parseFloat((travelPrice - discountAmount).toPrecision(4));
        offer = 'Reduced Offer';

        console.log('discount is set')

    } else {

        totalPrice = travelPrice;
        offer = 'Standard Offer';

    }
    console.log(totalPrice);

    // | GENERATE A RANDOM NUMBER FOR PASSENGER CODE

    const min = 90000;
    let max = 99999;
    const generetedRandomCode = Math.floor(Math.random() * (max + 1 - min)) + min;

    console.log(generetedRandomCode);

    // | GENERATE A RANDOM NUMBER FOR CARRIEGE NUMBER

    max = 12;
    const generetedRandomCarriege = Math.floor(Math.random() * max) + 1;

    console.log(generetedRandomCarriege)

    // | SET MAX VARIABLE TO EMPTY
    max = '';

    // | INSERTED RESULTS INTO DOM ELEMENTS 

    passengerFullName.innerText = fullNameValue;
    typeOffer.innerText = offer;
    numbCarrige.innerText = generetedRandomCarriege;
    passengerCode.innerText = generetedRandomCode;
    ticketPrice.innerText = `${totalPrice} €`;

});
