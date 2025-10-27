'use client'

import { useState } from 'react'
import { Sparkles } from 'lucide-react'

interface MintButtonProps {
  onSuccess: (txHash: string) => void
}

export function MintButton({ onSuccess }: MintButtonProps) {
  const [isMinting, setIsMinting] = useState(false)

  const handleMint = async () => {
    setIsMinting(true)
    
    // Simulate minting transaction
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Mock transaction hash
    const mockTxHash = '0x' + Array.from({ length: 64 }, () => 
      Math.floor(Math.random() * 16).toString(16)
    ).join('')
    
    setIsMinting(false)
    onSuccess(mockTxHash)
  }

  return (
    <button
      onClick={handleMint}
      disabled={isMinting}
      className="w-full py-6 px-8 rounded-lg bg-gradient-to-r from-accent to-success text-white font-bold text-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-success to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Content */}
      <span className="relative flex items-center justify-center gap-3">
        {isMinting ? (
          <>
            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            Minting Token...
          </>
        ) : (
          <>
            <Sparkles className="w-6 h-6" />
            Mint Token (Gasless)
          </>
        )}
      </span>
    </button>
  )
}
