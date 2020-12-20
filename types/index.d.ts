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
        isPreviousExits: boolean,
        foundersCount: number | null,
        employeesCount: number | null,
        twelveMonthSalaryForecast: number | null,
        twelveMonthHiresForecast: number | null,
        keyPositionsToHire: string
    }
}