'use client'

import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react'

interface EligibilityCardProps {
  eligibility: {
    eligible: boolean
    reasons?: string[]
    followerCount?: number
    castCount?: number
    reputationScore?: number
  }
}

export function EligibilityCard({ eligibility }: EligibilityCardProps) {
  const { eligible, reasons, followerCount, castCount, reputationScore } = eligibility

  return (
    <div className={`p-6 rounded-lg border-2 ${
      eligible 
        ? 'bg-success/5 border-success/30' 
        : 'bg-error/5 border-error/30'
    }`}>
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
          eligible ? 'bg-success/20' : 'bg-error/20'
        }`}>
          {eligible ? (
            <CheckCircle2 className="w-6 h-6 text-success" />
          ) : (
            <XCircle className="w-6 h-6 text-error" />
          )}
        </div>

        <div className="flex-1">
          <h3 className={`text-xl font-bold mb-2 ${
            eligible ? 'text-success' : 'text-error'
          }`}>
            {eligible ? 'You are eligible to mint!' : 'Not eligible yet'}
          </h3>

          {eligible ? (
            <div>
              <p className="text-fg/80 mb-4">
                Congratulations! You meet all the requirements to mint tokens.
              </p>
              
              <div className="grid grid-cols-3 gap-3">
                <RequirementMet label="Followers" value={followerCount} requirement="100+" />
                <RequirementMet label="Casts" value={castCount} requirement="10+" />
                <RequirementMet label="Reputation" value={reputationScore} requirement="50+" />
              </div>
            </div>
          ) : (
            <div>
              <p className="text-fg/80 mb-4">
                Complete the following requirements to become eligible:
              </p>
              
              {reasons && reasons.length > 0 && (
                <ul className="space-y-2">
                  {reasons.map((reason, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-fg/70">
                      <AlertCircle className="w-4 h-4 text-warning flex-shrink-0 mt-0.5" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function RequirementMet({ label, value, requirement }: { label: string; value?: number; requirement: string }) {
  return (
    <div className="p-3 rounded-lg bg-success/10 border border-success/20">
      <div className="text-xs text-fg/60 mb-1">{label}</div>
      <div className="text-lg font-bold text-success">{value}</div>
      <div className="text-xs text-fg/50">{requirement}</div>
    </div>
  )
}
