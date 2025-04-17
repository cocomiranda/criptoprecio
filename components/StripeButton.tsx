"use client"

import { useEffect, useRef } from "react"

export function StripeButton() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check if the script is already loaded
    if (!document.querySelector('script[src="https://js.stripe.com/v3/buy-button.js"]')) {
      const script = document.createElement("script")
      script.src = "https://js.stripe.com/v3/buy-button.js"
      script.async = true
      script.id = "stripe-buy-button-script"
      document.head.appendChild(script)
    }

    // Create the button after the script has loaded
    const createButton = () => {
      if (containerRef.current) {
        // Clear previous content
        containerRef.current.innerHTML = ""

        // Create the button element
        const button = document.createElement("stripe-buy-button")
        button.setAttribute("buy-button-id", "buy_btn_1RDkvrISFq750nL2KAV4iU12")
        button.setAttribute(
          "publishable-key",
          "pk_live_51QzbJXISFq750nL2MAZXOUBmmMGM4fRkcDZh8bKOb3vEhIr8GHqIAPGW0iWPwRqSdoPP2XZETrDbXSHHSjSPI1q100mchLEWOK",
        )

        // Append to container
        containerRef.current.appendChild(button)
      }
    }

    // Check if script is already loaded
    if (window.StripeButtonElement) {
      createButton()
    } else {
      // Wait for script to load
      const handleScriptLoad = () => {
        createButton()
      }

      document.getElementById("stripe-buy-button-script")?.addEventListener("load", handleScriptLoad)

      return () => {
        document.getElementById("stripe-buy-button-script")?.removeEventListener("load", handleScriptLoad)
      }
    }
  }, [])

  return <div ref={containerRef} className="w-[25%] mt-4"></div>
}
