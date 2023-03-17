const store={
    mango:2,
    banana:6,
    apple:4,
    graps:10,
    watermanel:1.6
};

const exchangeValue=80;

const convertedPrice=Object.fromEntries(Object.entries(store).map(([key,value])=>[key,value*exchangeValue]));



console.log(convertedPrice);