"use client"

import { AlertTriangle } from "lucide-react"

interface PriceAlertBannerProps {
  alerts: Array<{
    symbol: string
    priceChange: number
  }>
}

export function PriceAlertBanner({ alerts }: PriceAlertBannerProps) {
  if (alerts.length === 0) return null

  return (
    <div className="bg-yellow-100 p-2 rounded mb-2 flex items-center text-xs text-black">
      <AlertTriangle className="h-4 w-4 text-yellow-800 mr-1" />
      <span className="font-medium">Price Alerts (1d):</span>
      <div className="ml-1 flex flex-wrap gap-1">
        {alerts.map((alert, index) => {
          const isPositive = alert.priceChange > 0
          const formattedChange = `${isPositive ? "+" : ""}${alert.priceChange.toFixed(2)}%`

          return (
            <span key={index}>
              {index > 0 && ", "}
              <span className="font-bold">{alert.symbol}:</span>{" "}
              <span className={isPositive ? "text-green-800" : "text-red-800"}>{formattedChange}</span>
            </span>
          )
        })}
      </div>
    </div>
  )
}
