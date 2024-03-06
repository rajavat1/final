const input_currency = document.querySelector('#input_currency');
const output_currency = document.querySelector('#output_currency');
const input_amount = document.querySelector('#input_amount');
const output_amount = document.querySelector('#output_amount');
const exchange = document.querySelector('#exchange');
//** */
input_currency.addEventListener('change', compute);
output_currency.addEventListener('change', compute);
input_amount.addEventListener('input', compute);
//** */
const inputprice = document.getElementById("inputprice");
const outputprice = document.getElementById("outputprice");
//** */
exchange.addEventListener('click', () => {
    const temp = input_currency.value;
    input_currency.value = output_currency.value;
    output_currency.value = temp;
    compute();
});
//** */
function compute() {
    if (input_currency.value === output_currency.value) {
        alert("Funny Part 😁!! Both Currencies are same")
        output_currency.value = "";
    } else {
        const input_currency1 = input_currency.value;
        var output_currency1 = output_currency.value;

        fetch(`https://min-api.cryptocompare.com/data/price?fsym=${input_currency1}&tsyms=USD`)
            .then(res => res.json())
            .then(res => {
                inputprice.innerText = `1 ${input_currency1} = ${res.USD} USD`

            })
        fetch(`https://min-api.cryptocompare.com/data/price?fsym=${output_currency1}&tsyms=USD`)
            .then(res => res.json())
            .then(res => {
                outputprice.innerText = `1 ${output_currency1} = ${res.USD} USD`

            })
        fetch(`https://min-api.cryptocompare.com/data/price?fsym=${input_currency1}&tsyms=${output_currency1}`)
            .then(res => res.json())
            .then(res => {
                const pricePercoin = res.output_currency1;
                if (pricePercoin) {
                    const amount = input_amount.value;
                    const numberOfcoins = amount / pricePercoin;
                    output_amount.innerHTML = `You can get ${numberOfcoins.toFixed(10)} ${output_currency1} for ${amount} USD.`
                } else {
                    console.log('Unable to fetch Bitcoin price. Please try again later.');
                }


            })


    }
}

compute();