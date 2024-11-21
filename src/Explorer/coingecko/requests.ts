import { CoinGeckoPriceHistoryResponse } from '@/Explorer/coingecko/types';

const COINGECKO_BASE_URL = 'https://api.coingecko.com/api/v3';
const DJTX_COIN_ID = '';

/**
 * Fetches the current DJTX price using Coin Gecko.
 * @remarks
 * You might get rate limited if you use this function frequently.
 *
 * @return
 * Current price of 1 DJTX vs a currency (default USD)
 */
export async function getDjtxPrice(currentCurrency = 'USD'): Promise<number> {
    const res = await fetch(`${COINGECKO_BASE_URL}/simple/price?ids=${DJTX_COIN_ID}&vs_currencies=${currentCurrency}`);
    const data = await res.json();
    return data[DJTX_COIN_ID][currentCurrency.toLowerCase()];
}

/**
 * Gets daily price history using Coin Gecko.
 * @param currency
 */
export async function getDjtxPriceHistory(currency = 'USD') {
    const params = new URLSearchParams({
        vs_currency: currency.toLowerCase(),
        days: 'max',
        interval: 'daily',
    });
    const res = await fetch(`${COINGECKO_BASE_URL}/coins/${DJTX_COIN_ID}/market_chart?${params.toString()}`);
    const data: CoinGeckoPriceHistoryResponse = await res.json();

    return data.prices;
}
