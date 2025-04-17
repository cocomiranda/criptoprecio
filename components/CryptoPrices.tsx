"use client"

import { useState, useEffect } from "react"
import { formatNumber } from "@/lib/utils"
import React from "react"
import { ArrowUp, ArrowDown, Star } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PriceAlertBanner } from "./PriceAlertBanner"

interface Crypto {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
  market_cap: number
  total_volume: number
  price_change_percentage_1h_in_currency: number
  price_change_percentage_24h_in_currency: number
  price_change_percentage_7d_in_currency: number
}

type SortColumn = "number" | "1h" | "1d" | "1w"
type SortOrder = "asc" | "desc"

export default function CryptoPrices({ initialData }: { initialData: Crypto[] }) {
  const [selectedCoin, setSelectedCoin] = useState<string | null>(null)
  const [sortColumn, setSortColumn] = useState<SortColumn | null>(null)
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc")
  const [data, setData] = useState<Crypto[]>(initialData)
  const [favorites, setFavorites] = useState<Crypto[]>([])
  const [activeTab, setActiveTab] = useState("all")
  const [priceAlerts, setPriceAlerts] = useState<Array<{ symbol: string; priceChange: number }>>([])

  useEffect(() => {
    const savedFavorites = localStorage.getItem("cryptoFavorites")
    if (savedFavorites) {
      const parsedFavorites = JSON.parse(savedFavorites)
      const validFavorites = parsedFavorites.filter((favId: string) =>
        initialData.some((crypto) => crypto.id === favId),
      )
      const favoritesData = initialData.filter((crypto) => validFavorites.includes(crypto.id))
      setFavorites(favoritesData)

      // Check for significant price changes in favorites
      const significantChanges = favoritesData
        .filter((crypto) => Math.abs(crypto.price_change_percentage_24h_in_currency) > 10)
        .map((crypto) => ({
          symbol: crypto.symbol.toUpperCase(),
          priceChange: crypto.price_change_percentage_24h_in_currency,
        }))

      setPriceAlerts(significantChanges)
    }
  }, [initialData])

  const handleSort = (column: SortColumn) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortOrder("desc")
    }

    const sortedData = [...data].sort((a, b) => {
      let aValue, bValue
      switch (column) {
        case "number":
          aValue = initialData.indexOf(a)
          bValue = initialData.indexOf(b)
          break
        case "1h":
          aValue = a.price_change_percentage_1h_in_currency
          bValue = b.price_change_percentage_1h_in_currency
          break
        case "1d":
          aValue = a.price_change_percentage_24h_in_currency
          bValue = b.price_change_percentage_24h_in_currency
          break
        case "1w":
          aValue = a.price_change_percentage_7d_in_currency
          bValue = b.price_change_percentage_7d_in_currency
          break
        default:
          return 0
      }
      if (sortOrder === "asc") {
        return aValue - bValue
      } else {
        return bValue - aValue
      }
    })

    setData(sortedData)
  }

  const SortIcon = ({ column }: { column: SortColumn }) => {
    if (sortColumn !== column) {
      return null
    }
    return sortOrder === "asc" ? (
      <ArrowUp className="inline h-3 w-3 ml-1" />
    ) : (
      <ArrowDown className="inline h-3 w-3 ml-1" />
    )
  }

  const toggleFavorite = (crypto: Crypto) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((fav) => fav.id === crypto.id)
      let newFavorites
      if (isFavorite) {
        newFavorites = prevFavorites.filter((fav) => fav.id !== crypto.id)
      } else {
        newFavorites = [...prevFavorites, crypto]
      }
      localStorage.setItem("cryptoFavorites", JSON.stringify(newFavorites.map((fav) => fav.id)))
      return newFavorites
    })
  }

  const renderCoinRow = (crypto: Crypto, index: number) => (
    <React.Fragment key={crypto.id}>
      <tr
        className={`${
          index % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800"
        } hover:bg-[#e5e7eb] dark:hover:bg-gray-700`}
        onClick={() => setSelectedCoin(selectedCoin === crypto.id ? null : crypto.id)}
      >
        <td className="p-1 text-center align-middle">
          <button
            onClick={(e) => {
              e.stopPropagation()
              toggleFavorite(crypto)
            }}
          >
            <Star className={`h-3 w-3 ${favorites.some((fav) => fav.id === crypto.id) ? "fill-yellow-400" : ""}`} />
          </button>
        </td>
        <td className="p-1 font-mono text-black dark:text-gray-100 text-center align-middle">
          {String(initialData.indexOf(crypto) + 1).padStart(3, "0")}
        </td>
        <td className="p-1 text-center align-middle">
          <div className="flex items-center justify-center gap-1">
            <img src={crypto.image || "/placeholder.svg"} alt={crypto.name} className="w-3 h-3" />
            <span className="font-['Arial'] text-black dark:text-gray-100">{crypto.symbol.toUpperCase()}</span>
          </div>
        </td>
        <td className="p-1 font-['Arial'] text-black dark:text-gray-100 text-center align-middle">
          <span className="text-gray-500 mr-1">$</span>
          {crypto.current_price < 0.01
            ? crypto.current_price.toFixed(20).match(/^-?0\.?0*[1-9][0-9]?/)?.[0] || crypto.current_price.toFixed(2)
            : crypto.current_price.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
        </td>
        <PercentageCell value={crypto.price_change_percentage_1h_in_currency} />
        <PercentageCell value={crypto.price_change_percentage_24h_in_currency} />
        <PercentageCell value={crypto.price_change_percentage_7d_in_currency} />
      </tr>
      {selectedCoin === crypto.id && (
        <tr className={`${index % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800"} text-[8pt]`}>
          <td colSpan={7} className="p-1 text-gray-600 dark:text-gray-400">
            <div className="flex justify-between">
              <span>Mkt Cap: ${formatNumber(crypto.market_cap)}</span>
              <span>24h Vol: ${formatNumber(crypto.total_volume)}</span>
            </div>
          </td>
        </tr>
      )}
    </React.Fragment>
  )

  return (
    <div className="w-full overflow-x-hidden mb-[30px]">
      {priceAlerts.length > 0 && <PriceAlertBanner alerts={priceAlerts} />}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="all">All Coins</TabsTrigger>
          <TabsTrigger value="favorites">Favorites</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <table className="w-full border-collapse text-[8pt] font-['Arial']">
            <thead className="bg-gray-200 dark:bg-[#e5e7eb] text-gray-700 dark:text-gray-800 font-bold text-[9pt]">
              <tr className="h-7">
                <th className="p-1 text-center font-bold">Fav</th>
                <th className="p-1 text-center font-bold cursor-pointer" onClick={() => handleSort("number")}>
                  # <SortIcon column="number" />
                </th>
                <th className="p-1 text-center font-bold">COIN</th>
                <th className="p-1 text-center font-bold">PRICE</th>
                <th className="p-1 text-center font-bold cursor-pointer" onClick={() => handleSort("1h")}>
                  1h <SortIcon column="1h" />
                </th>
                <th className="p-1 text-center font-bold cursor-pointer" onClick={() => handleSort("1d")}>
                  1d <SortIcon column="1d" />
                </th>
                <th className="p-1 text-center font-bold cursor-pointer" onClick={() => handleSort("1w")}>
                  1w <SortIcon column="1w" />
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900">
              {data.map((crypto, index) => renderCoinRow(crypto, index))}
            </tbody>
          </table>
          <div className="mt-4">
            <div
              className="w-[25%] stripe-button-container"
              style={{ transform: "scale(0.5)", transformOrigin: "left top" }}
              dangerouslySetInnerHTML={{
                __html: `
                  <stripe-buy-button
                    buy-button-id="buy_btn_1RDkvrISFq750nL2KAV4iU12"
                    publishable-key="pk_live_51QzbJXISFq750nL2MAZXOUBmmMGM4fRkcDZh8bKOb3vEhIr8GHqIAPGW0iWPwRqSdoPP2XZETrDbXSHHSjSPI1q100mchLEWOK"
                  >
                  </stripe-buy-button>
                `,
              }}
            />
          </div>
        </TabsContent>
        <TabsContent value="favorites">
          <table className="w-full border-collapse text-[8pt] font-['Arial']">
            <thead className="bg-gray-200 dark:bg-[#e5e7eb] text-gray-700 dark:text-gray-800 font-bold text-[9pt]">
              <tr className="h-7">
                <th className="p-1 text-center font-bold">Fav</th>
                <th className="p-1 text-center font-bold">#</th>
                <th className="p-1 text-center font-bold">COIN</th>
                <th className="p-1 text-center font-bold">PRICE</th>
                <th className="p-1 text-center font-bold">1h</th>
                <th className="p-1 text-center font-bold">1d</th>
                <th className="p-1 text-center font-bold">1w</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900">
              {favorites.map((crypto, index) => renderCoinRow(crypto, index))}
            </tbody>
          </table>
          <div className="mt-4">
            <div
              className="w-[25%] stripe-button-container"
              style={{ transform: "scale(0.5)", transformOrigin: "left top" }}
              dangerouslySetInnerHTML={{
                __html: `
                  <stripe-buy-button
                    buy-button-id="buy_btn_1RDkvrISFq750nL2KAV4iU12"
                    publishable-key="pk_live_51QzbJXISFq750nL2MAZXOUBmmMGM4fRkcDZh8bKOb3vEhIr8GHqIAPGW0iWPwRqSdoPP2XZETrDbXSHHSjSPI1q100mchLEWOK"
                  >
                  </stripe-buy-button>
                `,
              }}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function PercentageCell({ value }: { value: number }) {
  const formattedValue = value?.toFixed(2) ?? "0.00"
  const isPositive = value > 0
  const isZero = value === 0
  const textColor = isZero
    ? "text-gray-600 dark:text-gray-400"
    : isPositive
      ? "text-green-600 dark:text-green-400"
      : "text-red-600 dark:text-red-400"

  return (
    <td className={`p-1 text-center align-middle font-['Arial'] text-[7pt] ${textColor}`}>
      {isZero ? "0" : Math.abs(value).toFixed(2)}
    </td>
  )
}
