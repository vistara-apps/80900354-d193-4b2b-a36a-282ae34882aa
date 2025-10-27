'use client'

import { User, Users, MessageSquare, Award } from 'lucide-react'

export function UserIdentity() {
  // Mock user data - in production, this would come from useMiniKit
  const user = {
    displayName: 'Agent User',
    username: '@agentuser',
    pfpUrl: null,
    followerCount: 250,
    castCount: 45,
    reputationScore: 85,
  }

  return (
    <div className="p-6 rounded-lg bg-surface border border-accent/10">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
          <User className="w-8 h-8 text-accent" />
        </div>

        {/* User Info */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-fg mb-1">{user.displayName}</h3>
          <p className="text-sm text-fg/60 mb-4">{user.username}</p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <StatItem icon={<Users className="w-4 h-4" />} label="Followers" value={user.followerCount} />
            <StatItem icon={<MessageSquare className="w-4 h-4" />} label="Casts" value={user.castCount} />
            <StatItem icon={<Award className="w-4 h-4" />} label="Reputation" value={user.reputationScore} />
          </div>
        </div>
      </div>
    </div>
  )
}

function StatItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: number }) {
  return (
    <div className="flex flex-col items-center p-3 rounded-lg bg-bg/50">
      <div className="text-accent mb-1">{icon}</div>
      <div className="text-lg font-bold text-fg">{value}</div>
      <div className="text-xs text-fg/60">{label}</div>
    </div>
  )
}
