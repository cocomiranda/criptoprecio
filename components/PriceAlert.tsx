"use client"

import { AlertCircle } from "lucide-react"

interface PriceAlertProps {
  coin: {
    name: string
    symbol: string
    price_change_percentage_24h_in_currency: number
  }
  onClose: () => void
}

export function PriceAlert({ coin, onClose }: PriceAlertProps) {
  const isPositive = coin.price_change_percentage_24h_in_currency > 0
  const changeValue = Math.abs(coin.price_change_percentage_24h_in_currency).toFixed(2)

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 max-w-[300px] w-full">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            <AlertCircle className={`h-5 w-5 ${isPositive ? "text-green-500" : "text-red-500"}`} />
            <h3 className="text-sm font-bold">Price Alert</h3>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>
        <p className="text-xs mb-2">
          <span className="font-bold">{coin.symbol.toUpperCase()}</span> has {isPositive ? "increased" : "decreased"} by
          <span className={`font-bold ${isPositive ? "text-green-500" : "text-red-500"} ml-1`}>{changeValue}%</span> in
          the last 24 hours!
        </p>
        <div className="text-[8pt] text-gray-500">Significant price changes may represent trading opportunities.</div>
      </div>
    </div>
  )
}
