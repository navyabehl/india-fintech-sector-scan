/* ── India Fintech Sector Scan — Data Module ──
   All figures sourced from public disclosures:
   KPMG India Fintech Report 2025, Inc42 H1 2025, Tracxn Geo Annual 2025,
   RBI Annual Report FY25, PwC India Payments Handbook 2025-30,
   Mordor Intelligence, Statista
*/

const DATA = {

  /* ── Market size trajectory ── */
  marketSize: {
    labels: ['2021','2022','2023','2024','2025','2026','2027','2028','2029','2030','2032'],
    actual:    [31,   50,   70,  111,  156,  null, null, null, null, null,  null],
    projected: [null, null, null, null, 156,  200,  260,  380,  540,  590,   990]
  },

  /* ── Segments: share, CAGR, color ──
     Sources: Mordor Intelligence 2025, Inc42 H1 2025 Fintech Report
  */
  segments: [
    { name: 'Digital payments', share: 42.87, cagr: '14%', color: '#185FA5' },
    { name: 'Digital lending',  share: 28.00, cagr: '22%', color: '#1D9E75' },
    { name: 'WealthTech',       share: 10.00, cagr: '19%', color: '#BA7517' },
    { name: 'InsurTech',        share:  8.50, cagr: '17%', color: '#533AB7' },
    { name: 'Neobanking',       share:  6.50, cagr: '19.64%', color: '#D85A30' },
    { name: 'RegTech / Other',  share:  4.13, cagr: '24%', color: '#888780' }
  ],

  /* ── Segment revenue 2025 vs 2030 ($B) ──
     Sources: Inc42, BCG/EY projections cited in state of fintech 2025
  */
  segmentRevenue: {
    labels: ['Digital lending', 'Payments', 'WealthTech', 'InsurTech', 'Neobanking'],
    rev2025: [63, 67, 8, 10, 8],
    rev2030: [133, 50, 28, 20, 19]
  },

  /* ── Deal share shift (%) ──
     Sources: Inc42, Tracxn
  */
  dealShare: {
    labels: ['Lending', 'Payments', 'WealthTech', 'Neobanking', 'InsurTech', 'RegTech'],
    period1: [24, 32, 10, 8, 12, 14],  // 2015–2020
    period2: [36, 20, 18, 12, 6, 8]    // 2021–H1 2025
  },

  /* ── Annual funding ($B) ──
     Sources: Tracxn Geo Annual India Fintech 2025, KPMG
  */
  funding: {
    labels: ['2019','2020','2021','2022','2023','2024','2025'],
    total:       [1.4,  2.0,  7.8,  5.6,  2.0,  2.3,  2.4],
    earlyStage:  [0.4,  0.6,  2.1,  1.4,  0.5,  0.67, 1.2]
  },

  /* ── Key players ──
     Sources: company public filings, Tracxn, knowstartup.com, analyticsinsight.net
  */
  players: [
    {
      name: 'PhonePe',
      category: 'Payments',
      valuation: '$14–15B',
      founded: 2015,
      facts: [
        { label: 'UPI market share', value: '47–48%' },
        { label: 'Registered users',  value: '500M+' },
        { label: 'Monthly txn value', value: '₹9L Cr' }
      ],
      insight: 'India\'s only fintech decacorn. Expanding from payments into a full-stack super-app (insurance, mutual funds, stockbroking). >60% users from Tier 2/3 cities — India\'s financial inclusion infrastructure play.'
    },
    {
      name: 'Razorpay',
      category: 'Payments / Neobanking',
      valuation: '$7.5B',
      founded: 2014,
      facts: [
        { label: 'Businesses served', value: '10M+' },
        { label: 'Annual disbursements', value: '₹50,000Cr' },
        { label: 'Key investors', value: 'Sequoia, Tiger Global' }
      ],
      insight: 'Leading B2B fintech infra. Achieved operational profitability FY24. Expanded to Malaysia & Singapore 2025. Strategic M&A (Opfin, Thirdwatch) to build full-stack business banking.'
    },
    {
      name: 'Groww',
      category: 'WealthTech',
      valuation: '$7B',
      founded: 2016,
      facts: [
        { label: 'Active investors', value: '12M+' },
        { label: 'FY25 profit',       value: '₹1,800Cr' },
        { label: '2025 IPO',          value: 'Listed' }
      ],
      insight: 'India\'s largest retail investment platform. IPO FY25, acquired Fisdom ($150M) for wealth advisory. Dominant among Gen Z and millennial first-time investors.'
    },
    {
      name: 'DMI Finance',
      category: 'Digital Lending',
      valuation: '$3B',
      founded: 2008,
      facts: [
        { label: 'MUFG investment', value: '$338.5M' },
        { label: 'Loan portfolio',  value: '₹8,000Cr+' },
        { label: 'Cities served',   value: '250+' }
      ],
      insight: 'Japan\'s MUFG backing validates India lending as a global thesis. Offers personal loans, BNPL, embedded credit. Aggressive Tier 2/3 expansion via digital channels.'
    },
    {
      name: 'PolicyBazaar',
      category: 'InsurTech',
      valuation: '$3.5B+',
      founded: 2008,
      facts: [
        { label: 'Market position', value: '#1 insuretech' },
        { label: 'Listed',         value: 'NSE/BSE' },
        { label: 'Key tech',       value: 'ML + API aggregation' }
      ],
      insight: 'Dominant insurance marketplace. Personalised policy comparison using ML and insurer APIs. Expanding into health and life insurance with AI-driven underwriting.'
    },
    {
      name: 'Slice',
      category: 'Neobanking / Lending',
      valuation: '$1.8B',
      founded: 2016,
      facts: [
        { label: 'Users',              value: '8M+' },
        { label: 'First-time credit',  value: '70% of users' },
        { label: '2024 development',   value: 'Merged with NESFB' }
      ],
      insight: 'Pioneered fintech-bank merger: merged with North East Small Finance Bank (2024), converting from NBFC to licensed bank. Enables cheaper deposit funding for credit card and BNPL products.'
    },
    {
      name: 'Zolve',
      category: 'Cross-border / NRI',
      valuation: 'Soonicorn',
      founded: 2021,
      facts: [
        { label: 'H1 2025 raise',   value: '$251M' },
        { label: 'Focus',           value: 'NRI financial services' },
        { label: 'Round',           value: 'Series B' }
      ],
      insight: 'Largest H1 2025 fintech round signals emerging NRI / cross-border thesis. Provides global credit access and banking for Indians abroad — a structurally large, underserved TAM.'
    },
    {
      name: 'Paytm',
      category: 'Super-app',
      valuation: '~$3B (listed)',
      founded: 2010,
      facts: [
        { label: 'MAU',            value: '300M+' },
        { label: 'Listed',        value: 'NSE/BSE' },
        { label: '2024 pivot',    value: 'UPI + AI focus' }
      ],
      insight: 'Post-RBI action, pivoted from wallet to UPI-first + merchant lending. Partnership with Perplexity AI for conversational financial guidance. Monetisation focus: merchant ecosystem + credit distribution.'
    }
  ],

  /* ── Disruption themes ── */
  themes: [
    {
      title: 'AI-driven credit underwriting',
      body: 'LLM-based and ML-driven underwriting models using Account Aggregator data, GST filings, and UPI transaction history are replacing bureau-only models. Enables first-time credit for 190M+ thin-file borrowers. Digital lending projected to reach $133B revenue by 2030, capturing 53% of total fintech revenue.',
      signals: ['Account Aggregator scale-up', 'RBI Unified Lending Interface (ULI)', 'Alternative credit scoring mandates'],
      horizon: '2025–27',
      conviction: 'high'
    },
    {
      title: 'Embedded finance & API banking',
      body: 'Non-financial platforms (e-commerce, agritech, logistics, gig economy) are embedding credit, insurance, and payments directly into their workflows via BaaS APIs. Razorpay, Perfios, and Setu are enabling this layer. B2B embedded finance projected at 17.5% CAGR through 2031.',
      signals: ['RBI BaaS guidelines (2024)', 'Co-lending mandates', 'Merchant payment data as underwriting input'],
      horizon: '2025–28',
      conviction: 'high'
    },
    {
      title: 'Fintech-bank convergence',
      body: 'Neobanks and NBFCs are seeking or acquiring banking licences to access cheaper deposit funding. Slice–NESFB merger is the template. SFB licences becoming the preferred M&A target for mature fintechs. Creates risk of regulatory complexity but unlocks structurally lower cost of capital.',
      signals: ['RBI SFB licence framework', 'Slice–NESFB precedent', 'Groww / PhonePe SFB aspirations'],
      horizon: '2025–27',
      conviction: 'high'
    },
    {
      title: 'Cross-border & NRI fintech',
      body: 'India joined BIS Project Nexus (2024) — UPI interoperability with SEA real-time payment systems by 2025–26. Zolve\'s $251M raise demonstrates investor conviction in NRI financial services. UPI QR already active in Singapore, UAE, France, Sri Lanka. Remittance flows of $125B/year represent a multi-billion fee opportunity.',
      signals: ['Project Nexus (BIS)', 'UPI international rollout', 'Zolve funding signal'],
      horizon: '2025–30',
      conviction: 'medium'
    },
    {
      title: 'WealthTech democratisation',
      body: 'Fractional ownership models, SIP nudging, and AI-powered robo-advisory are pulling Tier 2/3 retail investors into equity and debt markets. Groww: 12M+ active investors; Zerodha: ~7M. WealthTech projected at 19% CAGR 2026–31. Key risk: equity market sentiment cycles impact AUM and MAU.',
      signals: ['SEBI ASBA reform', 'Direct mutual fund adoption', 'Zerodha / Groww profitability'],
      horizon: '2025–30',
      conviction: 'medium'
    },
    {
      title: 'RegTech & fraud detection',
      body: 'UPI fraud cases hit 632,000 in H1 FY25 (₹4,850M value), driving RBI to mandate stronger fraud detection infrastructure. RegTech streamlining KYC/AML workflows is emerging as a high-margin B2B niche. Expected to grow at 24%+ CAGR driven by RBI, SEBI, and IRDAI compliance automation mandates.',
      signals: ['RBI digital fraud reporting mandates', 'AML/KYC automation spend', 'DPDP Act compliance needs'],
      horizon: '2026–30',
      conviction: 'medium'
    }
  ],

  /* ── Strategic implications ── */
  stratQuestions: [
    {
      q: 'Build, buy, or partner for AI underwriting?',
      body: 'Incumbents (PSBs, NBFCs) face a critical build-vs-partner decision on AI credit models. Fintech players have 3–5 year head-starts on alternative data pipelines. Co-lending frameworks make "partner" the most capital-efficient near-term path, but create dependency risk on fintech rails long-term.'
    },
    {
      q: 'How do payments players monetise at scale?',
      body: 'UPI\'s zero-MDR model caps payments revenue. PhonePe, Paytm, and Google Pay are all pivoting toward financial services cross-sell (credit, insurance, wealth) layered on a payments base. The 30% UPI market-share cap (deferred by RBI) creates a structural concentration risk for dominant players.'
    },
    {
      q: 'Which segments warrant M&A vs organic growth?',
      body: 'WealthTech and RegTech are fragmented and acquisition-ready. Lending tech has consolidated — new entrants need differentiated data moats. InsurTech is structurally complex (IRDAI licensing) — M&A is faster than organic. Neobanking: regulatory path (SFB licence) is the real barrier, not product.'
    },
    {
      q: 'What is the right Tier 2/3 market strategy?',
      body: 'India\'s next 200M fintech users are in Tier 2/3 cities and semi-urban areas. Playbook differs significantly: vernacular UX, lower ticket sizes, MSME-oriented products, agent-assisted onboarding. PhonePe\'s 11 regional languages and Groww\'s simplified onboarding are early benchmarks.'
    },
    {
      q: 'How should incumbents respond to the fintech–bank convergence?',
      body: 'As fintechs acquire SFB licences, traditional banks face competition not just on products but on cost structures. Fintechs with banking licences access CASA deposits at lower cost, improving NIM. Incumbents\' response options: accelerate DPI integration, establish co-lending at scale, or acquire neobanks outright.'
    }
  ],

  /* ── Risk landscape ── */
  risks: [
    { title: 'RBI regulatory action', body: 'Paytm Payments Bank precedent shows RBI willingness to take decisive action. Digital lending norms, UPI market cap, and data localisation rules are live variables.', level: 'high' },
    { title: 'AI model bias & credit risk', body: 'Alternative data-driven underwriting at scale risks embedded bias in credit decisions. RBI has flagged model governance gaps in NBFC underwriting.', level: 'high' },
    { title: 'UPI fraud escalation', body: '632,000 fraud cases in H1 FY25 (₹4,850M). Exponential UPI adoption amplifies fraud surface area. AML/KYC failures could trigger systemic regulatory tightening.', level: 'high' },
    { title: 'Funding cycle volatility', body: 'India fintech funding down from $7.8B (2021) to $2.4B (2025). Growth-stage capital remained constrained. Macro headwinds could further tighten Series B/C availability.', level: 'medium' },
    { title: 'Cybersecurity & data privacy', body: 'DPDP Act (2023) compliance requirements create operational costs. Financial data breaches carry reputational and regulatory consequences for platforms at scale.', level: 'medium' },
    { title: 'Market concentration risk', body: 'PhonePe (~48% UPI share) and Zerodha/Groww duopoly in retail brokerage create systemic concentration. Regulatory caps could force structural redistribution.', level: 'low' }
  ]

};
