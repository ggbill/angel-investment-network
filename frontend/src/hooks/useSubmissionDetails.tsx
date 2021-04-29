import React, { useState } from 'react'
import useFetch from './useFetch'

const useSubmissionDetails = () => {

    const [submissionDetails, setSubmissionDetails] = useState<App.SubmissionDetails>({
        companyName: "",
        email: "",
        foundedDate: null,
        officePostCode: "",
        businessType: "",
        website: "",
        sector: "",
        stage: "",
        preMoneyValuation: null,
        taxBenefits: "",
        amountRaising: null,
        currentCommitments: null,
        marketSize: "",
        previousRoundRaise: null,
        previousValuation: null,
        foundersAverageSalary: null,
        teamExperience: "",
        isPreviousExits: null,
        foundersCount: null,
        employeesCount: null,
        twelveMonthSalaryForecast: null,
        twelveMonthHiresForecast: null,
        keyPositionsToHire: "",
        cashRemaining: null,
        monthsOfCashLeft: null,
        monthlyBurnRate: null,
        companyDebt: null,
        cashRequiredToFinish: null,
        monthsUntilRevenue: null,
        startOfFinancialYear: null,
        monthlyRevenue: null,
        twelveMonthProjectedRevenue: null,
        isMovingOffice: null,
        isLawyerInPlace: null,
        isLookingForChairman: null,
        extraHelp: "",
        isMissionDriven: null,
        logoFile: {} as File,
        pitchDeckFile: {} as File,
        financialsFile: {} as File
    })

    const airtableApi = useFetch("submissions")

    const prepopulateValues = () => {
        setSubmissionDetails({
            companyName: "Test Company",
            email: "test@123.com",
            foundedDate: new Date(),
            officePostCode: "abc123",
            businessType: "B2B",
            website: "www.test.com",
            sector: "Agriculture",
            stage: "Breaking Even",
            preMoneyValuation: 100,
            taxBenefits: "EIS",
            amountRaising: 100,
            currentCommitments: 100,
            marketSize: "£1 - £10m",
            previousRoundRaise: 100,
            previousValuation: 100,
            foundersAverageSalary: 100,
            teamExperience: "1-5 years",
            isPreviousExits: true,
            foundersCount: 5,
            employeesCount: 5,
            twelveMonthSalaryForecast: 5,
            twelveMonthHiresForecast: 5,
            keyPositionsToHire: "Loads",
            cashRemaining: 5,
            monthsOfCashLeft: 5,
            monthlyBurnRate: 5,
            companyDebt: 5,
            cashRequiredToFinish: 5,
            monthsUntilRevenue: 5,
            startOfFinancialYear: new Date(),
            monthlyRevenue: 5,
            twelveMonthProjectedRevenue: 5,
            isMovingOffice: true,
            isLawyerInPlace: false,
            isLookingForChairman: true,
            extraHelp: "Yes please",
            isMissionDriven: false,
            logoFile: null,
            pitchDeckFile: null,
            financialsFile: null,
        })
    }
    const clearValues = () => {
        setSubmissionDetails({
            companyName: "",
            email: "",
            foundedDate: null,
            officePostCode: "",
            businessType: "",
            website: "",
            sector: "",
            stage: "",
            preMoneyValuation: null,
            taxBenefits: "",
            amountRaising: null,
            currentCommitments: null,
            marketSize: "",
            previousRoundRaise: null,
            previousValuation: null,
            foundersAverageSalary: null,
            teamExperience: "",
            isPreviousExits: null,
            foundersCount: null,
            employeesCount: null,
            twelveMonthSalaryForecast: null,
            twelveMonthHiresForecast: null,
            keyPositionsToHire: "",
            cashRemaining: null,
            monthsOfCashLeft: null,
            monthlyBurnRate: null,
            companyDebt: null,
            cashRequiredToFinish: null,
            monthsUntilRevenue: null,
            startOfFinancialYear: null,
            monthlyRevenue: null,
            twelveMonthProjectedRevenue: null,
            isMovingOffice: null,
            isLawyerInPlace: null,
            isLookingForChairman: null,
            extraHelp: "",
            isMissionDriven: null,
            logoFile: {} as File,
            pitchDeckFile: {} as File,
            financialsFile: {} as File
        })
    }

    const submitData = () => {

        return cloudinaryUpload(submissionDetails.logoFile, "", "").then(logoResult => {
            return cloudinaryUpload(submissionDetails.pitchDeckFile, "", "").then(pitchResult => {
                return cloudinaryUpload(submissionDetails.financialsFile, "", "").then(financialsResult => {
                    return airtableApi.post(``, {
                        ...submissionDetails,
                        logoFile: [{ "url": logoResult.secure_url }],
                        pitchDeckFile: [{ "url": pitchResult.secure_url }],
                        financialsFile: [{ "url": financialsResult.secure_url }]
                    }).then((result) => {
                        return { isSuccess: true }
                    }).catch((err: Error) => {
                        console.log(err)
                        return { isSuccess: false, error: err }
                    })
                })
            })
        }).catch((err: Error) => {
            console.log(err)
            return { isSuccess: false, error: err }
        })
    }


    const cloudinaryUpload = (file: any, companyName, email) => {

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "wb88wjmq");
        formData.append("folder", "AIN Brokerage Form");
        formData.append("tags", `${companyName}, ${email}`);

        return fetch("https://api.cloudinary.com/v1_1/venture-assembly/raw/upload", {
            method: "POST",
            body: formData
        })
            .then(response => {
                return response.json()
            })
            .then(json => {
                return json
            })
            .catch(err => {
                throw new Error(err);
            });

    }

    return {
        submissionDetails,
        setSubmissionDetails,
        prepopulateValues,
        clearValues,
        submitData
    }
}

export default useSubmissionDetails
