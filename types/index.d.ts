declare module App {
    interface SubmissionDetails{
        companyName: string,
        email: string,
        foundedDate: Date | null,
        officePostCode: string,
        businessType: string,
        website: string,
        sector: string,
        stage: string,
        preMoneyValuation: number | null,
        taxBenefits: string,
        amountRaising: number | null,
        currentCommitments: number | null,
        marketSize: string,
        previousRoundRaise: number | null,
        previousValuation: number | null,
        foundersAverageSalary: number | null,
        teamExperience: string,
        isPreviousExits: boolean | null,
        foundersCount: number | null,
        employeesCount: number | null,
        twelveMonthSalaryForecast: number | null,
        twelveMonthHiresForecast: number | null,
        keyPositionsToHire: string,
        cashRemaining: number | null,
        monthsOfCashLeft: number | null,
        monthlyBurnRate: number | null,
        companyDebt: number | null,
        cashRequiredToFinish: number | null,
        monthsUntilRevenue: number | null,
        startOfFinancialYear: Date | null,
        monthlyRevenue: number | null,
        twelveMonthProjectedRevenue: number | null,
        isMovingOffice: boolean | null,
        isLawerInPlace: boolean | null,
        isLookingForChairman: boolean | null,
        extraHelp: string,
        isMissionDriven: boolean | null
    }

    interface ValidationObject {
        name: string,
        isValid: boolean,
        helperText: string
    }
}