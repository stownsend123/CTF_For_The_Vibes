// Mock data matching the dashboard design
export const dashboardData = {
  fiscalYear: "FY 2X",
  required: "$XXXX",
  authorized: "$YYYY",
  
  submittedPlans: [
    {
      id: "1",
      name: "2025 Execution Plan",
      type: "execution" as const,
      year: 2025,
      status: "submitted" as const,
      amount: 30524893.89,
      createdAt: new Date(),
      updatedAt: new Date(),
      fiscalYear: "FY25"
    },
    {
      id: "2", 
      name: "2025 Spend Plan",
      type: "spend" as const,
      year: 2025,
      status: "submitted" as const,
      amount: 25000000,
      createdAt: new Date(),
      updatedAt: new Date(),
      fiscalYear: "FY25"
    },
    {
      id: "3",
      name: "2025 UFR",
      type: "ufr" as const,
      year: 2025,
      status: "submitted" as const,
      amount: 15000000,
      createdAt: new Date(),
      updatedAt: new Date(),
      fiscalYear: "FY25"
    }
  ],

  draftSubmissions: [
    {
      id: "4",
      name: "2026 Execution Plan",
      type: "execution" as const,
      year: 2026,
      status: "draft" as const,
      amount: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
      fiscalYear: "FY26"
    },
    {
      id: "5",
      name: "2026 Spend Plan", 
      type: "spend" as const,
      year: 2026,
      status: "draft" as const,
      amount: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
      fiscalYear: "FY26"
    },
    {
      id: "6",
      name: "2026 UFR",
      type: "ufr" as const,
      year: 2026,
      status: "draft" as const,
      amount: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
      fiscalYear: "FY26"
    },
    {
      id: "7",
      name: "2027 Execution Plan",
      type: "execution" as const,
      year: 2027,
      status: "draft" as const,
      amount: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
      fiscalYear: "FY27"
    },
    {
      id: "8",
      name: "2027 Spend Plan",
      type: "spend" as const,
      year: 2027,
      status: "draft" as const,
      amount: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
      fiscalYear: "FY27"
    }
  ],

  currentBreakdown: {
    totalAuthorized: 30524893.89,
    totalObligated: 23577222.88,
    totalExpended: 14024441.81,
    remainingObligated: 5374603.62,
    executionRate: 77.2,
    burnRate: 58.9,
    fundsBreakdown: [
      { name: 'X', value: 25, color: '#8b5cf6' },
      { name: 'Y', value: 30, color: '#10b981' },
      { name: 'Z', value: 20, color: '#ef4444' },
      { name: 'I', value: 25, color: '#f59e0b' }
    ]
  }
};