const input_currency = document.querySelector('#input_currency');
const output_currency = document.querySelector('#output_currency');
const input_amount = document.querySelector('#input_amount');
const output_amount = document.querySelector('#output_amount');
const exchange = document.querySelector('#exchange');
const rate = document.querySelector('#rate');

input_currency.addEventListener('change', compute);
output_currency.addEventListener('change', compute);
input_amount.addEventListener('input', compute);
output_amount.addEventListener('input', compute);

exchange.addEventListener('click', () => {
    const temp = input_currency.value;
    input_currency.value = output_currency.value;
    output_currency.value = temp;
    compute();
});

function compute() {
    const input_currency1 = input_currency.value;
    const output_currency1 = output_currency.value;

    fetch(`https://min-api.cryptocompare.com/data/price?fsym=${input_currency1}&tsyms=USD`)
        .then(res => res.json())
        .then(res => {
            // const new_rate = res.rates[output_currency1];
            rate.innerText = `1 ${input_currency1} = ${res.USD} USD`
            console.log(res.USD)

            const pricePerBitcoinInINR = res.USD;
            if (pricePerBitcoinInINR) {
                const amountInINR = input_amount.value;
                const numberOfBitcoins = amountInINR / pricePerBitcoinInINR;
                console.log(`You can get approximately ${numberOfBitcoins.toFixed(10)} ${input_currency1} for ${amountInINR} USD.`);
            } else {
                console.log('Unable to fetch Bitcoin price. Please try again later.');
            }


        })


}


compute();