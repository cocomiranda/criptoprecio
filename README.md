# @ValorCriptoBot

- [Acerca de](#acerca-de)
- [API](#api)
- [Fuentes](#fuentes)

## Acerca de
Bot que actualiza en tiempo real el precio distintas criptomonedas en USD.

Actualmente tiene BTC, ETH, BNB, ADA, DOT, XRP y LTC.

El proyecto está realizado en Python.




![Ejemplo de twit](ejemplo.png)



## API

### Symbol price ticker
```
GET /api/v3/ticker/price
```
Latest price for a symbol or symbols.


**Parameters:**

Name | Type | Mandatory | Description
------------ | ------------ | ------------ | ------------
symbol | STRING | NO |

* If the symbol is not sent, prices for all symbols will be returned in an array.

**Response:**
```javascript
{
  "symbol": "LTCBTC",
  "price": "4.00000200"
}
```

### 24hr ticker price change statistics
```
GET /api/v3/ticker/24hr
```
24 hour rolling window price change statistics. 

**Parameters:**

Name | Type | Mandatory | Description
------------ | ------------ | ------------ | ------------
symbol | STRING | NO |

* If the symbol is not sent, tickers for all symbols will be returned in an array.

**Response:**
```javascript
{
  "symbol": "BNBBTC",
  "priceChange": "-94.99999800",
  "priceChangePercent": "-95.960",
  "weightedAvgPrice": "0.29628482",
  "prevClosePrice": "0.10002000",
  "lastPrice": "4.00000200",
  "lastQty": "200.00000000",
  "bidPrice": "4.00000000",
  "askPrice": "4.00000200",
  "openPrice": "99.00000000",
  "highPrice": "100.00000000",
  "lowPrice": "0.10000000",
  "volume": "8913.30000000",
  "quoteVolume": "15.30000000",
  "openTime": 1499783499040,
  "closeTime": 1499869899040,
  "firstId": 28385,   // First tradeId
  "lastId": 28460,    // Last tradeId
  "count": 76         // Trade count
}
```



## Fuentes
- Cotización de las distintas criptomonedas: [Binance][binance]


[binance]: https://www.binance.com/es-LA

