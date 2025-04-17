export async function fetchCryptoPrices() {
  try {
    // CoinGecko free API has limitations, so we'll make multiple requests to get 500 coins
    const page1Response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h,24h,7d",
      {
        next: { revalidate: 60 },
        headers: {
          Accept: "application/json",
        },
      },
    )

    const page2Response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=2&sparkline=false&price_change_percentage=1h,24h,7d",
      {
        next: { revalidate: 60 },
        headers: {
          Accept: "application/json",
        },
      },
    )

    if (!page1Response.ok || !page2Response.ok) {
      throw new Error("Failed to fetch crypto prices")
    }

    const page1Data = await page1Response.json()
    const page2Data = await page2Response.json()

    // Combine the results from both pages
    return [...page1Data, ...page2Data]
  } catch (error) {
    console.error("Error fetching crypto prices:", error)
    throw error
  }
}
