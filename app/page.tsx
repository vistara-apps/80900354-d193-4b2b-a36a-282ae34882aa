'use client'

import { useEffect, useState } from 'react'
import { ConnectWallet } from '@/components/ConnectWallet'
import { EligibilityCard } from '@/components/EligibilityCard'
import { MintButton } from '@/components/MintButton'
import { UserIdentity } from '@/components/UserIdentity'
import { TransactionStatus } from '@/components/TransactionStatus'
import { Star, Sparkles, Shield } from 'lucide-react'

interface UserEligibility {
  eligible: boolean
  reasons?: string[]
  followerCount?: number
  castCount?: number
  reputationScore?: number
}

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [eligibility, setEligibility] = useState<UserEligibility | null>(null)
  const [isChecking, setIsChecking] = useState(false)
  const [txHash, setTxHash] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const checkEligibility = async () => {
    setIsChecking(true)
    // Simulate API call to x402 agent backend
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Mock eligibility response
    setEligibility({
      eligible: true,
      followerCount: 250,
      castCount: 45,
      reputationScore: 85,
    })
    setIsChecking(false)
  }

  const handleMintSuccess = (hash: string) => {
    setTxHash(hash)
  }

  if (!mounted) {
    return null
  }

  return (
    <main className="min-h-screen bg-bg">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-accent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-success rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Header */}
        <header className="relative z-10 px-4 py-6 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-fg">x402 Agent Mint</h1>
            </div>
            <ConnectWallet />
          </div>
        </header>

        {/* Main Content */}
        <div className="relative z-10 px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Hero Text */}
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-accent/20 mb-6">
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-sm text-fg/80">AI-Powered Social Gating</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold text-fg mb-4">
                agent can use{' '}
                <span className="text-success">x402</span>
              </h2>
              <p className="text-xl text-fg/70 mb-2">to mint tokens.</p>
              
              <div className="flex items-center justify-center gap-2 mt-6">
                <Star className="w-6 h-6 text-success fill-success" />
                <span className="text-fg/60">Gasless • Social • Permissioned</span>
              </div>
            </div>

            {/* User Identity */}
            <div className="mb-8">
              <UserIdentity />
            </div>

            {/* Eligibility Check */}
            {!eligibility && (
              <div className="mb-8 animate-fade-in">
                <button
                  onClick={checkEligibility}
                  disabled={isChecking}
                  className="w-full py-4 px-6 rounded-lg bg-accent text-white font-semibold hover:bg-accent/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                  style={{ boxShadow: 'var(--shadow-button)' }}
                >
                  {isChecking ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Checking Eligibility...
                    </span>
                  ) : (
                    'Check Eligibility'
                  )}
                </button>
              </div>
            )}

            {/* Eligibility Card */}
            {eligibility && (
              <div className="mb-8 animate-fade-in">
                <EligibilityCard eligibility={eligibility} />
              </div>
            )}

            {/* Mint Button */}
            {eligibility?.eligible && !txHash && (
              <div className="mb-8 animate-fade-in">
                <MintButton onSuccess={handleMintSuccess} />
              </div>
            )}

            {/* Transaction Status */}
            {txHash && (
              <div className="animate-fade-in">
                <TransactionStatus txHash={txHash} />
              </div>
            )}

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <FeatureCard
                icon={<Shield className="w-6 h-6" />}
                title="Social Gating"
                description="Mint based on Farcaster reputation and engagement"
              />
              <FeatureCard
                icon={<Sparkles className="w-6 h-6" />}
                title="AI Agent"
                description="x402 agent validates eligibility in real-time"
              />
              <FeatureCard
                icon={<Star className="w-6 h-6" />}
                title="Gasless Minting"
                description="No gas fees required for eligible users"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-lg bg-surface border border-accent/10 hover:border-accent/30 transition-all duration-200">
      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 text-accent">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-fg mb-2">{title}</h3>
      <p className="text-sm text-fg/60">{description}</p>
    </div>
  )
}
