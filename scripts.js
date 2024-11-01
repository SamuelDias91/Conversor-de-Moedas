const convertButton = document.querySelector(".convert-button")
const currencySelectToConvert = document.querySelector(".currency-select-to-convert")
const currencySelectConverted = document.querySelector(".currency-select-converted")


function switchValues() {
    const select1 = document.getElementById("select1");
    const select2 = document.getElementById("select2");

    const tempValue = select1.value;

    select1.value = select2.value;
    select2.value = tempValue;

    changeCurrency()

}

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value-converted")


    const real = {
        realToReal: 1,
        realToDolar: 0.17,
        realToEuro: 0.16,
        realToLibra: 0.13,
        realToIene: 26.4971,
        realToFrancoSuico: 0.14,
        realToAustraliano: 0.2642,
        realToCanadense: 0.2413,
    }

    const dolar = {
        dolarToDolar: 1,
        dolarToReal: 5.71,
        dolarToEuro: 0.92,
        dolarToLibra: 0.76,
        dolarToIene: 153.14,
        dolarToFrancoSuico: 0.86,
        dolarToAustraliano: 1.5267,
        dolarToCanadense: 1.394,
    }

    const euro = {
        euroToEuro: 1,
        euroToReal: 6.16,
        euroToDolar: 1.07,
        euroToLibra: 0.83,
        euroToIene: 166.356,
        euroToFrancoSuico: 0.9412,
        euroToAustraliano: 1.6573,
        euroToCanadense: 1.5132,
    }

    const libra = {
        libraToLibra: 1,
        libraToReal: 7.42,
        libraToDolar: 1.30,
        libraToEuro: 1.20,
        libraToIene: 199.2198,
        libraToFrancoSuico: 1.1271,
        libraToAustraliano: 1.9626,
        libraToCanadense: 1.792,
    }

    const iene = {
        ieneToIene: 1,
        ieneToReal: 0.0377,
        ieneToDolar: 0.0065,
        ieneToEuro: 0.006,
        ieneToLibra: 0.005,
        ieneToFrancoSuico: 0.0057,
        ieneToAustraliano: 0.01,
        ieneToCanadense: 0.0092,
    }

    const franco = {
        francoSuicoToFrancoSuico: 1,
        francoSuicoToReal: 6.6699,
        francoSuicoToDolar: 1.1541,
        francoSuicoToEuro: 1.0625,
        francoSuicoToLibra: 0.8872,
        francoSuicoToIene: 176.7659,
        francoSuicoToAustraliano: 1.7657,
        francoSuicoToCanadense: 1.612,
    }

    const australiano = {
        australianoToAustraliano: 1,
        australianoToReal: 3.7845,
        australianoToDolar: 0.6549,
        australianoToEuro: 0.6033,
        australianoToLibra: 0.5094,
        australianoToIene: 99.7806,
        australianoToFrancoSuico: 0.5664,
        australianoToCanadense: 0.9129,
    }

    const canadense = {
        canadenseToCanadense: 1,
        canadenseToReal: 4.1441,
        canadenseToDolar: 0.7173,
        canadenseToEuro: 0.6609,
        canadenseToLibra: 0.558,
        canadenseToIene: 109.3042,
        canadenseToFrancoSuico: 0.6204,
        canadenseToAustraliano: 1.0954,
    }



    if (currencySelectConverted.value == "dolar") if (currencySelectToConvert.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * real.realToDolar)
    }

    if (currencySelectConverted.value == "real") if (currencySelectToConvert.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * real.realToReal)
    }

    if (currencySelectConverted.value == "euro") if (currencySelectToConvert.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * real.realToEuro)
    }

    if (currencySelectConverted.value == "libra") if (currencySelectToConvert.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * real.realToLibra)
    }

    if (currencySelectConverted.value == "iene") if (currencySelectToConvert.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue * real.realToIene)
    }

    if (currencySelectConverted.value == "franco") if (currencySelectToConvert.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("fr-CH", {
            style: "currency",
            currency: "CHF"
        }).format(inputCurrencyValue * real.realToFrancoSuico)
    }

    if (currencySelectConverted.value == "australiano") if (currencySelectToConvert.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD"
        }).format(inputCurrencyValue * real.realToAustraliano)
    }

    if (currencySelectConverted.value == "canadense") if (currencySelectToConvert.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(inputCurrencyValue * real.realToCanadense)
    }



    if (currencySelectConverted.value == "real") if (currencySelectToConvert.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * dolar.dolarToReal)
    }

    if (currencySelectConverted.value == "dolar") if (currencySelectToConvert.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * dolar.dolarToDolar)
    }

    if (currencySelectConverted.value == "euro") if (currencySelectToConvert.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * dolar.dolarToEuro)
    }

    if (currencySelectConverted.value == "libra") if (currencySelectToConvert.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * dolar.dolarToLibra)
    }

    if (currencySelectConverted.value == "iene") if (currencySelectToConvert.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue * dolar.dolarToIene)
    }

    if (currencySelectConverted.value == "franco") if (currencySelectToConvert.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("fr-CH", {
            style: "currency",
            currency: "CHF"
        }).format(inputCurrencyValue * dolar.dolarToFrancoSuico)
    }

    if (currencySelectConverted.value == "australiano") if (currencySelectToConvert.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD"
        }).format(inputCurrencyValue * dolar.dolarToAustraliano)
    }

    if (currencySelectConverted.value == "canadense") if (currencySelectToConvert.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(inputCurrencyValue * dolar.dolarToCanadense)
    }



    if (currencySelectConverted.value == "euro") if (currencySelectToConvert.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * euro.euroToEuro)
    }

    if (currencySelectConverted.value == "real") if (currencySelectToConvert.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * euro.euroToReal)
    }

    if (currencySelectConverted.value == "dolar") if (currencySelectToConvert.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * euro.euroToDolar)
    }

    if (currencySelectConverted.value == "libra") if (currencySelectToConvert.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * euro.euroToLibra)
    }

    if (currencySelectConverted.value == "iene") if (currencySelectToConvert.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue * euro.euroToIene)
    }

    if (currencySelectConverted.value == "franco") if (currencySelectToConvert.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("fr-CH", {
            style: "currency",
            currency: "CFH"
        }).format(inputCurrencyValue * euro.euroToFrancoSuico)
    }

    if (currencySelectConverted.value == "australiano") if (currencySelectToConvert.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD"
        }).format(inputCurrencyValue * euro.euroToAustraliano)
    }

    if (currencySelectConverted.value == "canadense") if (currencySelectToConvert.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(inputCurrencyValue * euro.euroToCanadense)
    }



    if (currencySelectConverted.value == "libra") if (currencySelectToConvert.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * libra.libraToLibra)
    }

    if (currencySelectConverted.value == "real") if (currencySelectToConvert.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * libra.libraToReal)
    }

    if (currencySelectConverted.value == "dolar") if (currencySelectToConvert.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * libra.libraToDolar)
    }

    if (currencySelectConverted.value == "euro") if (currencySelectToConvert.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * libra.libraToEuro)
    }

    if (currencySelectConverted.value == "iene") if (currencySelectToConvert.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue * libra.libraToIene)
    }

    if (currencySelectConverted.value == "franco") if (currencySelectToConvert.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("fr-CH", {
            style: "currency",
            currency: "CFH"
        }).format(inputCurrencyValue * libra.libraToFrancoSuico)
    }

    if (currencySelectConverted.value == "australiano") if (currencySelectToConvert.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD"
        }).format(inputCurrencyValue * libra.libraToAustraliano)
    }

    if (currencySelectConverted.value == "canadense") if (currencySelectToConvert.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(inputCurrencyValue * libra.libraToCanadense)
    }



    if (currencySelectConverted.value == "iene") if (currencySelectToConvert.value == "iene") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue * iene.ieneToIene)
    }

    if (currencySelectConverted.value == "real") if (currencySelectToConvert.value == "iene") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * iene.ieneToReal)
    }

    if (currencySelectConverted.value == "dolar") if (currencySelectToConvert.value == "iene") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * iene.ieneToDolar)
    }

    if (currencySelectConverted.value == "euro") if (currencySelectToConvert.value == "iene") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * iene.ieneToEuro)
    }

    if (currencySelectConverted.value == "libra") if (currencySelectToConvert.value == "iene") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * iene.ieneToLibra)
    }

    if (currencySelectConverted.value == "franco") if (currencySelectToConvert.value == "iene") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("fr-CH", {
            style: "currency",
            currency: "CFH"
        }).format(inputCurrencyValue * iene.ieneToFrancoSuico)
    }

    if (currencySelectConverted.value == "australiano") if (currencySelectToConvert.value == "iene") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD"
        }).format(inputCurrencyValue * iene.ieneToAustraliano)
    }

    if (currencySelectConverted.value == "canadense") if (currencySelectToConvert.value == "iene") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(inputCurrencyValue * iene.ieneToCanadense)
    }



    if (currencySelectConverted.value == "franco") if (currencySelectToConvert.value == "franco") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("fr-CH", {
            style: "currency",
            currency: "CHF"
        }).format(inputCurrencyValue * franco.francoSuicoToFrancoSuico)
    }

    if (currencySelectConverted.value == "real") if (currencySelectToConvert.value == "franco") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * franco.francoSuicoToReal)
    }

    if (currencySelectConverted.value == "dolar") if (currencySelectToConvert.value == "franco") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * franco.francoSuicoToDolar)
    }

    if (currencySelectConverted.value == "euro") if (currencySelectToConvert.value == "franco") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * franco.francoSuicoToEuro)
    }

    if (currencySelectConverted.value == "libra") if (currencySelectToConvert.value == "franco") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * franco.francoSuicoToLibra)
    }

    if (currencySelectConverted.value == "iene") if (currencySelectToConvert.value == "franco") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue * franco.francoSuicoToIene)
    }

    if (currencySelectConverted.value == "australiano") if (currencySelectToConvert.value == "franco") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD"
        }).format(inputCurrencyValue * franco.francoSuicoToAustraliano)
    }

    if (currencySelectConverted.value == "canadense") if (currencySelectToConvert.value == "franco") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(inputCurrencyValue * franco.francoSuicoToCanadense)
    }



    if (currencySelectConverted.value == "australiano") if (currencySelectToConvert.value == "australiano") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD"
        }).format(inputCurrencyValue * australiano.australianoToAustraliano)
    }

    if (currencySelectConverted.value == "real") if (currencySelectToConvert.value == "australiano") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * australiano.australianoToReal)
    }

    if (currencySelectConverted.value == "dolar") if (currencySelectToConvert.value == "australiano") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * australiano.australianoToDolar)
    }

    if (currencySelectConverted.value == "euro") if (currencySelectToConvert.value == "australiano") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * australiano.australianoToEuro)
    }

    if (currencySelectConverted.value == "libra") if (currencySelectToConvert.value == "australiano") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * australiano.australianoToLibra)
    }

    if (currencySelectConverted.value == "iene") if (currencySelectToConvert.value == "australiano") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "jpy"
        }).format(inputCurrencyValue * australiano.australianoToIene)
    }

    if (currencySelectConverted.value == "franco") if (currencySelectToConvert.value == "australiano") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("fr-CH", {
            style: "currency",
            currency: "CFH"
        }).format(inputCurrencyValue * australiano.australianoToFrancoSuico)
    }

    if (currencySelectConverted.value == "canadense") if (currencySelectToConvert.value == "australiano") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(inputCurrencyValue * australiano.australianoToCanadense)
    }



    if (currencySelectConverted.value == "canadense") if (currencySelectToConvert.value == "canadense") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(inputCurrencyValue * canadense.canadenseToCanadense)
    }

    if (currencySelectConverted.value == "real") if (currencySelectToConvert.value == "canadense") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * canadense.canadenseToReal)
    }

    if (currencySelectConverted.value == "dolar") if (currencySelectToConvert.value == "canadense") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * canadense.canadenseToDolar)
    }

    if (currencySelectConverted.value == "euro") if (currencySelectToConvert.value == "canadense") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * canadense.canadenseToEuro)
    }

    if (currencySelectConverted.value == "libra") if (currencySelectToConvert.value == "canadense") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * canadense.canadenseToLibra)
    }

    if (currencySelectConverted.value == "iene") if (currencySelectToConvert.value == "canadense") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue * canadense.canadenseToIene)
    }

    if (currencySelectConverted.value == "franco") if (currencySelectToConvert.value == "canadense") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("fr-CH", {
            style: "currency",
            currency: "FCH"
        }).format(inputCurrencyValue * canadense.canadenseToFrancoSuico)
    }

    if (currencySelectConverted.value == "australiano") if (currencySelectToConvert.value == "canadense") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD"
        }).format(inputCurrencyValue * canadense.canadenseToAustraliano)
    }



    if (currencySelectToConvert.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    if (currencySelectToConvert.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    if (currencySelectToConvert.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if (currencySelectToConvert.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

    if (currencySelectToConvert.value == "iene") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue)
    }

    if (currencySelectToConvert.value == "franco") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("fr-CH", {
            style: "currency",
            currency: "CHF"
        }).format(inputCurrencyValue)
    }

    if (currencySelectToConvert.value == "australiano") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD"
        }).format(inputCurrencyValue)
    }

    if (currencySelectToConvert.value == "canadense") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(inputCurrencyValue)
    }
}


function changeCurrency() {
    const currencyNameToConvert = document.getElementById("currency-name-to-convert")
    const currencyImageToConvert = document.querySelector(".currency-img-to-convert")
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")


    if (currencySelectToConvert.value == "real") {
        currencyNameToConvert.innerHTML = "Real Brasileiro"
        currencyImageToConvert.src = "./assets/brazil-coin.png"
    }

    if (currencySelectToConvert.value == "dolar") {
        currencyNameToConvert.innerHTML = "Dólar Americano"
        currencyImageToConvert.src = "./assets/us-coin.png"
    }

    if (currencySelectToConvert.value == "euro") {
        currencyNameToConvert.innerHTML = "Euro"
        currencyImageToConvert.src = "./assets/euro-coin.png"
    }

    if (currencySelectToConvert.value == "libra") {
        currencyNameToConvert.innerHTML = "Libra Esterlina"
        currencyImageToConvert.src = "./assets/libra-coin.png"
    }

    if (currencySelectToConvert.value == "iene") {
        currencyNameToConvert.innerHTML = "Iene Japônes"
        currencyImageToConvert.src = "./assets/japan-coin.png"
    }

    if (currencySelectToConvert.value == "franco") {
        currencyNameToConvert.innerHTML = "Franco Suíço"
        currencyImageToConvert.src = "./assets/swiss-coin.png"
    }

    if (currencySelectToConvert.value == "australiano") {
        currencyNameToConvert.innerHTML = "Dólar Australiano"
        currencyImageToConvert.src = "./assets/australia-coin.png"
    }

    if (currencySelectToConvert.value == "canadense") {
        currencyNameToConvert.innerHTML = "Dólar Canadense"
        currencyImageToConvert.src = "./assets/canada-coin.png"
    }



    if (currencySelectConverted.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/us-coin.png"
    }

    if (currencySelectConverted.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro-coin.png"
    }

    if (currencySelectConverted.value == "real") {
        currencyName.innerHTML = "Real Brasileiro"
        currencyImage.src = "./assets/brazil-coin.png"
    }

    if (currencySelectConverted.value == "libra") {
        currencyName.innerHTML = "Libra Esterlina"
        currencyImage.src = "./assets/libra-coin.png"
    }

    if (currencySelectConverted.value == "iene") {
        currencyName.innerHTML = "Iene Japonês"
        currencyImage.src = "./assets/japan-coin.png"
    }

    if (currencySelectConverted.value == "franco") {
        currencyName.innerHTML = "Franco Suíço"
        currencyImage.src = "./assets/swiss-coin.png"
    }

    if (currencySelectConverted.value == "australiano") {
        currencyName.innerHTML = "Dólar Australiano"
        currencyImage.src = "./assets/australia-coin.png"
    }

    if (currencySelectConverted.value == "canadense") {
        currencyName.innerHTML = "Dólar Canadense"
        currencyImage.src = "./assets/canada-coin.png"
    }

    convertValues()
}




currencySelectToConvert.addEventListener("change", changeCurrency)
currencySelectConverted.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)