'use client'

import { Wallet } from 'lucide-react'

export function ConnectWallet() {
  return (
    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white font-medium hover:bg-accent/90 transition-all duration-200 shadow-md hover:shadow-lg">
      <Wallet className="w-4 h-4" />
      <span>Connect Wallet</span>
    </button>
  )
}
