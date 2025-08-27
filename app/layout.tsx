import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Smart Contract Auditor AI',
  description: '[
  {
    "title": "Gamified Smart Contract Testing AI",
    "one_liner": "Transform smart contract audits into an engaging game that teaches users while analyzing contracts.",
    "why_now": "Growing interest in decentralized finance (DeFi) makes smart contract education urgent.",
    "novel_mechanism": "AI-generated analytics transformed into game challenges for enhanced understanding.",
    "ai_stack": [
      "GPT",
      "Agents"
    ],
    "edge_use_cases": [
      "Educate junior developers in smart contract security",
      "Provide live feedback through interactive challenges"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Develop game mechanics",
        "Integrate AI for real-time analysis",
        "Create a user-friendly interface"
      ],
      "tools": [
        "Unity",
        "Firebase",
        "OpenAI API"
      ],
      "data_bootstrap": [
        "create synthetic smart contracts for testing",
        "tap into existing smart contract repositories"
      ],
      "risk": [
        "Market resistance to gamification in serious topics",
        "Content quality not meeting expert standards"
      ],
      "mitigation": [
        "Engage experts for initial content validation",
        "Gather user feedback in beta testing phase"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Show before/after audit results",
        "Competitive analysis with traditional methods"
      ],
      "channels": [
        "Discord",
        "Reddit",
        "Developer forums"
      ],
      "pricing": {
        "free": "Basic features",
        "pro": "$10/month for advanced challenges",
        "business": "$100/month for team access"
      }
    },
    "moat": [
      "Community engagement through gamification",
      "Continuous updates based on user-generated content",
      "Learning pathways with AI feedback"
    ],
    "scores": {
      "novelty": 9,
      "72h_feasibility": 8,
      "revenue_potential": 7,
      "defensibility": 8
    },
    "total_score": 32,
    "reasoning": "By combining gamification with educational elements in a high-demand field, this product stands out from conventional audit tools."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}