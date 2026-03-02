export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  imageAlt: string;
  readingTime: number;
  keywords: string[];
  metaDescription: string;
}

export const CATEGORIES = [
  'Term Deposits',
  'Interest Rates',
  'Fixed Income',
  'Deposit Protection',
  'Retirement Planning',
  'Banking',
  'Savings',
] as const;

export const CATEGORY_COLORS: Record<string, { bg: string; text: string; hover: string }> = {
  'Term Deposits':      { bg: '#E8F0FE', text: '#1A56DB', hover: '#1A56DB' },
  'Interest Rates':     { bg: '#FCECEA', text: '#C0392B', hover: '#C0392B' },
  'Fixed Income':       { bg: '#E6F5F0', text: '#0F7B5F', hover: '#0F7B5F' },
  'Deposit Protection': { bg: '#FEF3E2', text: '#B45309', hover: '#B45309' },
  'Retirement Planning':{ bg: '#F0EBFE', text: '#6D28D9', hover: '#6D28D9' },
  'Banking':            { bg: '#E8EEF4', text: '#1B2A38', hover: '#1B2A38' },
  'Savings':            { bg: '#E8FBF0', text: '#15803D', hover: '#15803D' },
};

export function getCategoryStyle(category: string) {
  return CATEGORY_COLORS[category] ?? { bg: '#FCECEA', text: '#C0392B', hover: '#C0392B' };
}

export const posts: Post[] = [
  {
    slug: 'term-deposit-rates-2025-compare-40-banks',
    title: 'Australian Term Deposit Rates in 2025: Comparing 40+ Banks',
    excerpt:
      'With 40+ banks offering term deposits in Australia, rates vary widely — some as high as 7.8% P.A. on selected terms. Here\u2019s how to compare and lock in rates using free online tools.',
    date: '2025-02-18',
    category: 'Term Deposits',
    image: '/images/bank-comparison.webp',
    imageAlt:
      'Modern Australian bank branch exterior representing the wide range of banks offering term deposits',
    readingTime: 6,
    keywords: [
      'term deposits',
      '7.8% P.A.',
      '40+ banks',
      'lock in rates',
      'calculator',
      'free tool',
      'bank comparison',
      'interest rates',
    ],
    metaDescription:
      'Compare term deposit rates across 40+ Australian banks in 2025. Learn how to lock in rates as high as 7.8% P.A. using free comparison tools in under 60 seconds.',
  },
  {
    slug: 'australian-families-government-protected-deposits',
    title: 'Why 180,000+ Australian Families Choose Government-Protected Deposits',
    excerpt:
      'An estimated 180,000+ Australian families hold term deposits as a core savings strategy. Here\u2019s why government-protected deposits with guaranteed returns remain so popular.',
    date: '2025-02-14',
    category: 'Deposit Protection',
    image: '/images/apra-regulation.webp',
    imageAlt:
      'Australian government building representing APRA regulation and deposit protection',
    readingTime: 5,
    keywords: [
      '180,000+ Australian families',
      'government protected',
      'guaranteed returns',
      'term deposits',
      '$250K protection',
      'Financial Claims Scheme',
    ],
    metaDescription:
      'Why 180,000+ Australian families trust government-protected term deposits for guaranteed returns. Understand the Financial Claims Scheme and $250K deposit protection.',
  },
  {
    slug: 'how-term-deposits-work',
    title: 'How Term Deposits Work in Australian Banks',
    excerpt:
      'A plain-English guide to term deposit products offered by Australian banks, credit unions, and building societies — covering terms, rates, and what to compare.',
    date: '2025-02-10',
    category: 'Term Deposits',
    image: '/images/rba-building.webp',
    imageAlt:
      'Classical Australian institutional building exterior representing the banking sector',
    readingTime: 6,
    keywords: [
      'term deposits',
      'fixed income',
      'savings rates',
      'bank comparison',
      'interest rates',
    ],
    metaDescription:
      'Learn how term deposits work in Australia — fixed terms, interest payment options, early withdrawal rules, and how to compare products across banks.',
  },
  {
    slug: 'rba-interest-rate-decisions',
    title: 'The Role of the RBA in Interest Rate Decisions',
    excerpt:
      'How the Reserve Bank of Australia sets the cash rate and why its decisions ripple through savings accounts, term deposits, and the broader economy.',
    date: '2025-02-08',
    category: 'Interest Rates',
    image: '/images/rba-cash-rate.webp',
    imageAlt:
      'Reserve Bank of Australia building at dusk representing monetary policy decisions',
    readingTime: 5,
    keywords: [
      'RBA',
      'interest rates',
      'rate cuts',
      'cash rate',
      'savings rates',
    ],
    metaDescription:
      'Understand how the RBA cash rate target influences term deposit pricing, savings rates, and the fixed income landscape in Australia.',
  },
  {
    slug: 'comparing-savings-rates-fixed-income',
    title: 'Comparing Savings Rates and Fixed Income Products',
    excerpt:
      'High-interest savings accounts vs term deposits vs bonds — a general comparison framework for Australian savers looking at fixed income options.',
    date: '2025-01-28',
    category: 'Fixed Income',
    image: '/images/financial-planning.webp',
    imageAlt: 'Calculator and financial documents on a desk representing savings comparison',
    readingTime: 7,
    keywords: [
      'savings rates',
      'fixed income',
      'term deposits',
      'bank comparison',
      'interest rates',
      'bonds',
    ],
    metaDescription:
      'Compare high-interest savings accounts, term deposits, and bonds in Australia. Understand base rates, bonus rates, and what conditions apply.',
  },
  {
    slug: 'government-guarantee-250k-protection',
    title: 'Government Guarantee and the $250,000 Protection Scheme',
    excerpt:
      'What the Financial Claims Scheme means for your deposits, how the $250K cap works per institution, and strategies some savers use to manage coverage.',
    date: '2025-01-20',
    category: 'Deposit Protection',
    image: '/images/deposit-protection.webp',
    imageAlt:
      'Glass dome protecting gold coins representing the government deposit guarantee',
    readingTime: 5,
    keywords: [
      '$250K protection',
      'government guarantee',
      'term deposits',
      'APRA',
      'Financial Claims Scheme',
    ],
    metaDescription:
      'Learn how Australia\'s $250,000 deposit protection scheme works under the Financial Claims Scheme, including per-institution caps and eligibility rules.',
  },
  {
    slug: 'retirement-planning-superannuation',
    title: 'Financial Planning, Retirement, and Superannuation',
    excerpt:
      'General considerations for using term deposits and fixed income within retirement planning — including laddering strategies and superannuation allocations.',
    date: '2025-01-15',
    category: 'Retirement Planning',
    image: '/images/retirement-planning.webp',
    imageAlt:
      'Couple reviewing financial documents and planning for retirement',
    readingTime: 6,
    keywords: [
      'retirement',
      'superannuation',
      'financial planning',
      'term deposits',
      'fixed income',
      'laddering',
    ],
    metaDescription:
      'Explore how term deposits and fixed income fit into retirement planning and superannuation strategies for conservative Australian savers.',
  },
  {
    slug: 'best-bank-comparison-strategies',
    title: 'Best Bank Comparison Strategies for Australian Savers',
    excerpt:
      'A practical framework for comparing term deposit rates, savings accounts, and fees across Australian banks, credit unions, and building societies.',
    date: '2025-01-10',
    category: 'Banking',
    image: '/images/bank-strategy-comparison.webp',
    imageAlt:
      'Person at a desk comparing bank rates on a laptop with a notepad and coffee',
    readingTime: 7,
    keywords: [
      'bank comparison',
      'savings rates',
      'term deposits',
      'interest rates',
      'credit unions',
    ],
    metaDescription:
      'How to compare Australian banks for term deposits and savings accounts — rates, fees, conditions, and what to look for across providers.',
  },
  {
    slug: 'understanding-rate-cuts-impact-on-savings',
    title: 'Understanding Rate Cuts: What They Mean for Your Savings',
    excerpt:
      'When the RBA cuts the cash rate, what actually happens to your term deposits and savings accounts? A guide to the flow-on effects of rate cuts in Australia.',
    date: '2025-01-05',
    category: 'Interest Rates',
    image: '/images/rate-cuts.webp',
    imageAlt:
      'Downward trending interest rate graph on paper with pen and glasses on desk',
    readingTime: 6,
    keywords: [
      'rate cuts',
      'RBA',
      'interest rates',
      'savings rates',
      'term deposits',
      'cash rate',
    ],
    metaDescription:
      'What happens to your savings when the RBA cuts rates? Understand how rate cuts flow through to term deposits, savings accounts, and fixed income returns.',
  },
  {
    slug: 'term-deposit-laddering-guide',
    title: 'Building a Term Deposit Ladder: A Step-by-Step Guide',
    excerpt:
      'How to structure a term deposit ladder to balance rate certainty with regular access to funds — a popular strategy for retirees and conservative savers.',
    date: '2024-12-28',
    category: 'Term Deposits',
    image: '/images/deposit-ladder.webp',
    imageAlt:
      'Wooden blocks arranged in ascending ladder pattern representing term deposit laddering',
    readingTime: 8,
    keywords: [
      'term deposits',
      'laddering',
      'retirement',
      'interest rates',
      'financial planning',
      'savings rates',
    ],
    metaDescription:
      'Step-by-step guide to building a term deposit ladder in Australia. Learn how laddering can help manage interest rate risk and provide regular income.',
  },
  {
    slug: 'high-interest-savings-accounts-guide',
    title: 'High-Interest Savings Accounts: What to Look For in 2025',
    excerpt:
      'Bonus rates, introductory offers, and ongoing rates — how to evaluate high-interest savings accounts and avoid common traps that erode your returns.',
    date: '2024-12-20',
    category: 'Savings',
    image: '/images/savings-accounts.webp',
    imageAlt:
      'Piggy bank with coins on a desk representing savings accounts and growing wealth',
    readingTime: 6,
    keywords: [
      'savings rates',
      'bank comparison',
      'interest rates',
      'high-interest savings',
      'bonus rates',
    ],
    metaDescription:
      'Guide to choosing high-interest savings accounts in Australia. Compare bonus rates, conditions, and how to keep earning the best possible savings rate.',
  },
  {
    slug: 'superannuation-fixed-income-allocation',
    title: 'How Superannuation Funds Invest in Fixed Income',
    excerpt:
      'Understanding how your super fund allocates to bonds, term deposits, and cash — and what that means for your retirement balance in different rate environments.',
    date: '2024-12-15',
    category: 'Retirement Planning',
    image: '/images/super-fixed-income.webp',
    imageAlt:
      'Older couple reviewing superannuation statements at kitchen table with laptop',
    readingTime: 7,
    keywords: [
      'superannuation',
      'fixed income',
      'retirement',
      'bonds',
      'interest rates',
      'term deposits',
    ],
    metaDescription:
      'How Australian super funds invest in fixed income and what it means for your retirement. Understand bond allocations, cash options, and rate sensitivity.',
  },
  {
    slug: 'breaking-term-deposit-early-fees-alternatives',
    title: 'Breaking a Term Deposit Early: Fees, Penalties and Alternatives',
    excerpt:
      'Locked into a term deposit but need your money sooner? Here\'s what early withdrawal actually costs, how banks calculate penalty rates, and smarter alternatives to consider.',
    date: '2024-12-10',
    category: 'Term Deposits',
    image: '/images/early-withdrawal-td.webp',
    imageAlt:
      'Laptop showing term deposit comparison table with calculator and Australian currency on desk',
    readingTime: 6,
    keywords: [
      'term deposits',
      'early withdrawal',
      'penalty rates',
      'break fees',
      'savings',
      'alternatives',
    ],
    metaDescription:
      'What happens when you break a term deposit early in Australia? Understand penalty interest, reduced rates, and alternative strategies to avoid early withdrawal fees.',
  },
  {
    slug: 'short-vs-long-term-deposits-choosing-duration',
    title: 'Short vs Long Term Deposits: Choosing the Right Duration',
    excerpt:
      'Should you lock in for 3 months or 3 years? A practical guide to choosing term deposit duration based on rate outlook, liquidity needs, and your financial goals.',
    date: '2024-12-05',
    category: 'Term Deposits',
    image: '/images/short-vs-long-td.webp',
    imageAlt:
      'Calendar showing maturity dates with coloured sticky notes marking short and long term periods',
    readingTime: 7,
    keywords: [
      'term deposits',
      'short term',
      'long term',
      'duration',
      'maturity',
      'rate outlook',
    ],
    metaDescription:
      'How to choose between short and long term deposits in Australia. Compare flexibility, rates, and strategies for different savings timeframes.',
  },
  {
    slug: 'how-banks-set-term-deposit-rates',
    title: 'How Banks Set Term Deposit Rates: Behind the Scenes',
    excerpt:
      'Ever wondered why different banks offer different rates for the same term? Here\'s how wholesale funding costs, competition, and the RBA cash rate shape what you earn.',
    date: '2024-11-28',
    category: 'Interest Rates',
    image: '/images/banks-set-rates.webp',
    imageAlt:
      'Hand writing interest rate percentages on glass whiteboard with financial charts in background',
    readingTime: 6,
    keywords: [
      'interest rates',
      'bank pricing',
      'wholesale funding',
      'RBA cash rate',
      'term deposits',
      'competition',
    ],
    metaDescription:
      'How Australian banks determine term deposit rates. Understand the role of wholesale funding, RBA policy, competition, and balance sheet management in rate setting.',
  },
  {
    slug: 'fixed-vs-variable-rates-savings-strategy',
    title: 'Fixed vs Variable Rates: Which Suits Your Savings Strategy?',
    excerpt:
      'Locking in a fixed rate gives certainty, but variable rates can rise with the market. Here\'s how to weigh the trade-offs and decide which approach fits your situation.',
    date: '2024-11-20',
    category: 'Interest Rates',
    image: '/images/fixed-vs-variable.webp',
    imageAlt:
      'Split concept image showing a padlock for fixed rates and flowing waves for variable rates',
    readingTime: 5,
    keywords: [
      'fixed rates',
      'variable rates',
      'savings strategy',
      'term deposits',
      'interest rates',
      'rate risk',
    ],
    metaDescription:
      'Fixed vs variable rate savings in Australia — pros, cons, and when each strategy makes sense. Learn how to balance rate certainty with flexibility.',
  },
  {
    slug: 'term-deposits-in-smsf-rules-strategies',
    title: 'Using Term Deposits in Your SMSF: Rules and Strategies',
    excerpt:
      'Self-managed super funds commonly hold term deposits as a defensive allocation. Here\'s what trustees need to know about compliance, sole-purpose rules, and maximising returns.',
    date: '2024-11-15',
    category: 'Retirement Planning',
    image: '/images/smsf-term-deposits.webp',
    imageAlt:
      'Retired couple meeting with financial advisor at kitchen table reviewing retirement documents',
    readingTime: 7,
    keywords: [
      'SMSF',
      'term deposits',
      'retirement',
      'superannuation',
      'self-managed super',
      'compliance',
    ],
    metaDescription:
      'Guide to holding term deposits in a self-managed super fund. Understand SMSF compliance rules, sole-purpose test, and strategies for defensive retirement allocations.',
  },
  {
    slug: 'retirement-income-streams-term-deposits-vs-annuities',
    title: 'Income Streams in Retirement: Term Deposits vs Annuities',
    excerpt:
      'Comparing term deposits and annuities as retirement income sources — including liquidity, guaranteed returns, tax treatment, and how each fits into a drawdown strategy.',
    date: '2024-11-10',
    category: 'Retirement Planning',
    image: '/images/retirement-income-streams.webp',
    imageAlt:
      'Stacked coins growing in height with a small tree on top representing income growth',
    readingTime: 6,
    keywords: [
      'retirement income',
      'annuities',
      'term deposits',
      'drawdown strategy',
      'guaranteed returns',
      'retirement planning',
    ],
    metaDescription:
      'Term deposits vs annuities for retirement income in Australia. Compare liquidity, returns, tax treatment, and suitability for different retirement strategies.',
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit = 3): Post[] {
  const current = getPostBySlug(currentSlug);
  if (!current) return posts.slice(0, limit);

  return posts
    .filter((p) => p.slug !== currentSlug)
    .sort((a, b) => {
      const aMatch = a.category === current.category ? 1 : 0;
      const bMatch = b.category === current.category ? 1 : 0;
      return bMatch - aMatch;
    })
    .slice(0, limit);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}

export function getPostsByCategory(category: string, exclude?: string[]): Post[] {
  return posts.filter(
    (p) => p.category === category && !(exclude ?? []).includes(p.slug),
  );
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
