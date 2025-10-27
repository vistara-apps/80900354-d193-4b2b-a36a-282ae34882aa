# x402 Agent Mint - Base Mini App

A production-ready Base Mini App for socially-gated token minting powered by x402 AI agents.

## Features

- 🎯 **Social Gating**: Mint based on Farcaster reputation and engagement
- 🤖 **AI Agent**: x402 agent validates eligibility in real-time
- ⛽ **Gasless Minting**: No gas fees for eligible users
- 🎨 **Coinbase Theme**: Dark navy design with blue accents
- 📱 **Mobile-First**: Optimized for Base App experience
- 🔗 **OnchainKit Integration**: Wallet, identity, and transaction components

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **React**: React 19
- **Blockchain**: Base (L2 on Ethereum)
- **Wallet**: OnchainKit + Coinbase Wallet
- **Social**: Farcaster Frame SDK
- **Styling**: Tailwind CSS with Coinbase theme
- **TypeScript**: Full type safety

## Getting Started

1. **Install dependencies**:
```bash
npm install
```

2. **Set up environment variables**:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your API keys:
- Get OnchainKit API key from https://portal.cdp.coinbase.com
- Update `NEXT_PUBLIC_APP_URL` with your deployment URL

3. **Run development server**:
```bash
npm run dev
```

4. **Open in browser**:
Navigate to http://localhost:3000

## Project Structure

```
x402-agent-mint/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Main page component
│   ├── providers.tsx       # OnchainKit + React Query providers
│   └── globals.css         # Global styles with Coinbase theme
├── components/
│   ├── ConnectWallet.tsx   # Wallet connection button
│   ├── UserIdentity.tsx    # User profile display
│   ├── EligibilityCard.tsx # Eligibility status card
│   ├── MintButton.tsx      # Token minting button
│   └── TransactionStatus.tsx # Transaction confirmation
├── public/
│   └── .well-known/
│       └── farcaster.json  # Farcaster manifest
└── package.json
```

## Key Components

### OnchainKit Integration
- `OnchainKitProvider` wraps the app for Base chain support
- Configured for Base mainnet (chain ID: 8453)
- Supports gasless transactions via Paymaster

### Farcaster Integration
- Manifest at `/.well-known/farcaster.json`
- Frame metadata for social sharing
- User context from MiniKit (FID, username, pfp)

### x402 Agent Backend
The app expects a custom backend API with these endpoints:
- `GET /user-eligibility?fid={fid}` - Check user eligibility
- `POST /mint-request` - Authorize minting
- `POST /reputation-grant` - Trigger micro-grants
- `GET /agent-parameters` - Get voting parameters

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Environment Variables for Production
```
NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_production_key
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
NEXT_PUBLIC_PAYMASTER_URL=https://api.developer.coinbase.com/rpc/v1/base/paymaster
```

## Customization

### Theme
The app uses the Coinbase theme with CSS variables in `app/globals.css`:
- `--color-bg`: Dark navy background (#0a1929)
- `--color-accent`: Coinbase blue (#0052ff)
- `--color-success`: Green (#00d395)

### Eligibility Criteria
Update the mock eligibility logic in `app/page.tsx` to connect to your x402 agent backend.

### Token Contract
Add your token contract address and ABI to integrate real minting functionality.

## Resources

- [Base Documentation](https://docs.base.org)
- [OnchainKit Docs](https://onchainkit.xyz)
- [Farcaster Frame SDK](https://miniapps.farcaster.xyz)
- [Base Mini Apps Guide](https://docs.base.org/mini-apps)

## License

MIT
