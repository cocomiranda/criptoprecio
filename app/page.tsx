import CryptoPrices from "@/components/CryptoPrices"
import ThemeToggle from "@/components/ThemeToggle"
import { fetchCryptoPrices } from "@/lib/api"
import Image from "next/image"

export default async function Home() {
  const initialData = await fetchCryptoPrices()

  return (
    <main className="app">
      <div className="content-wrapper">
        <div className="flex justify-between items-center mb-2 w-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_chico-Ge1WYdLNXO024ENfH5ytVwTJ7RN9iX.png"
            alt="Criptoprecio"
            width={150}
            height={40}
            className="object-contain"
          />
          <ThemeToggle />
        </div>
        <CryptoPrices initialData={initialData} />
      </div>
    </main>
  )
}
