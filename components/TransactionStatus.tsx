'use client'

import { CheckCircle2, ExternalLink, Share2 } from 'lucide-react'

interface TransactionStatusProps {
  txHash: string
}

export function TransactionStatus({ txHash }: TransactionStatusProps) {
  const explorerUrl = `https://basescan.org/tx/${txHash}`

  const handleShare = () => {
    // In production, this would use composeCast from MiniKit
    alert('Share functionality would use composeCast from MiniKit')
  }

  return (
    <div className="p-6 rounded-lg bg-success/5 border-2 border-success/30">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
          <CheckCircle2 className="w-6 h-6 text-success" />
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-bold text-success mb-2">
            Token Minted Successfully!
          </h3>
          
          <p className="text-fg/80 mb-4">
            Your token has been minted and is now in your wallet.
          </p>

          <div className="p-4 rounded-lg bg-surface/50 mb-4">
            <div className="text-xs text-fg/60 mb-1">Transaction Hash</div>
            <div className="text-sm text-fg font-mono break-all">{txHash}</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={explorerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-accent text-white font-medium hover:bg-accent/90 transition-all duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              View on BaseScan
            </a>
            
            <button
              onClick={handleShare}
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-surface text-fg font-medium hover:bg-surface/80 transition-all duration-200 border border-accent/20"
            >
              <Share2 className="w-4 h-4" />
              Share on Farcaster
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
