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
        financialsFile: {} as File,
        owner: ""
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
            isLawyerInPlace: true,
            isLookingForChairman: true,
            extraHelp: "Yes please",
            isMissionDriven: true,
            logoFile: null,
            pitchDeckFile: null,
            financialsFile: null,
            owner: ""
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
            financialsFile: {} as File,
            owner: ""
        })
    }

    const submitData = () => {
        // console.log(submissionDetails)
        return cloudinaryUpload(submissionDetails.logoFile, "", "").then(logoResult => {
            // console.log(`logoResult: ${logoResult}`)
            return cloudinaryUpload(submissionDetails.pitchDeckFile, "", "").then(pitchResult => {
                return cloudinaryUpload(submissionDetails.financialsFile, "", "").then(financialsResult => {
                    return airtableApi.post(``, {
                        ...submissionDetails,
                        preMoneyValuation: Number(submissionDetails.preMoneyValuation),
                        amountRaising: Number(submissionDetails.amountRaising),
                        currentCommitments: Number(submissionDetails.currentCommitments),
                        previousRoundRaise: Number(submissionDetails.previousRoundRaise),
                        previousValuation: Number(submissionDetails.previousValuation),
                        foundersAverageSalary: Number(submissionDetails.foundersAverageSalary),
                        foundersCount: Number(submissionDetails.foundersCount),
                        employeesCount: Number(submissionDetails.employeesCount),
                        twelveMonthSalaryForecast: Number(submissionDetails.twelveMonthSalaryForecast),
                        twelveMonthHiresForecast: Number(submissionDetails.twelveMonthHiresForecast),
                        cashRemaining: Number(submissionDetails.cashRemaining),
                        monthsOfCashLeft: Number(submissionDetails.monthsOfCashLeft),
                        monthlyBurnRate: Number(submissionDetails.monthlyBurnRate),
                        companyDebt: Number(submissionDetails.companyDebt),
                        cashRequiredToFinish: Number(submissionDetails.cashRequiredToFinish),
                        monthsUntilRevenue: Number(submissionDetails.monthsUntilRevenue),
                        monthlyRevenue: Number(submissionDetails.monthlyRevenue),
                        twelveMonthProjectedRevenue: Number(submissionDetails.twelveMonthProjectedRevenue),
                        logoFile: logoResult ? [{ "url": logoResult.secure_url }] : null,
                        pitchDeckFile: pitchResult ? [{ "url": pitchResult.secure_url }] : null,
                        financialsFile: financialsResult ? [{ "url": financialsResult.secure_url }] : null
                    }).then((result) => {
                        if (result.error) {
                            console.log(result.error)
                            return { isSuccess: false, error: result.message }
                        } else {
                            // console.log(result)
                            submitDataToAinApi()
                            return { isSuccess: true }
                        }
                    }).catch((err: Error) => {
                        return { isSuccess: false, error: err }
                    })
                }).catch((err: Error) => {
                    return { isSuccess: false, error: err }
                })
            }).catch((err: Error) => {
                return { isSuccess: false, error: err }
            })
        }).catch((err: Error) => {
            return { isSuccess: false, error: err }
        })
    }

    let unixFoundedDate = submissionDetails.foundedDate ? Math.round(new Date(submissionDetails.foundedDate!).getTime() / 1000) : null
    let unixStartOfFinancialYear = submissionDetails.startOfFinancialYear ? Math.round(new Date(submissionDetails.startOfFinancialYear!).getTime() / 1000) : null

    let stage = 0
    let industry = 0
    let addressableMarketSize = 0
    let teamExperience = 0

    if (submissionDetails.stage === "Pre-Startup/MVP") {
        stage = 0
    } else if (submissionDetails.stage === "Finished Product") {
        stage = 1
    } else if (submissionDetails.stage === "Achieving Sales") {
        stage = 2
    } else if (submissionDetails.stage === "Breaking Even") {
        stage = 3
    } else if (submissionDetails.stage === "Profitable") {
        stage = 4
    } else if (submissionDetails.stage === "Other") {
        stage = 5
    }

    if (submissionDetails.teamExperience === "1-5 years") {
        teamExperience = 1
    } else if (submissionDetails.teamExperience === "5-10 years") {
        teamExperience = 2
    } else if (submissionDetails.teamExperience === "10-15 years") {
        teamExperience = 3
    } else if (submissionDetails.teamExperience === "15+ years") {
        teamExperience = 4
    } 

    if (submissionDetails.marketSize === "£1 - £10m") {
        addressableMarketSize = 1
    } else if (submissionDetails.marketSize === "£10 - £25m") {
        addressableMarketSize = 2
    } else if (submissionDetails.marketSize === "£25 - £50m") {
        addressableMarketSize = 3
    } else if (submissionDetails.marketSize === "£50m - £100m") {
        addressableMarketSize = 4
    } else if (submissionDetails.marketSize === "£100m - £250m") {
        addressableMarketSize = 5
    } else if (submissionDetails.marketSize === "£250m - £500m") {
        addressableMarketSize = 6
    } else if (submissionDetails.marketSize === "£500m - £1bn") {
        addressableMarketSize = 7
    } else if (submissionDetails.marketSize === "£1bn - £5bn") {
        addressableMarketSize = 8
    } else if (submissionDetails.marketSize === "£5bn+") {
        addressableMarketSize = 9
    }

    if (submissionDetails.sector === "Agriculture") {
        industry = 5
    } else if (submissionDetails.sector === "Business Services") {
        industry = 12
    } else if (submissionDetails.sector === "Education & Training") {
        industry = 1
    } else if (submissionDetails.sector === "Energy & Natural Resources") {
        industry = 15
    } else if (submissionDetails.sector === "Entertainment & Leisure") {
        industry = 28
    } else if (submissionDetails.sector === "Fashion & Beauty") {
        industry = 21
    } else if (submissionDetails.sector === "Finance") {
        industry = 13
    } else if (submissionDetails.sector === "Food & Beverage") {
        industry = 23
    } else if (submissionDetails.sector === "Hospitality, Restaurants & Bars") {
        industry = 17
    } else if (submissionDetails.sector === "Manufacturing & Engineering") {
        industry = 14
    } else if (submissionDetails.sector === "Media") {
        industry = 11
    } else if (submissionDetails.sector === "Medical & Sciences") {
        industry = 2
    } else if (submissionDetails.sector === "Personal Services") {
        industry = 29
    } else if (submissionDetails.sector === "Products & Inventions") {
        industry = 18
    } else if (submissionDetails.sector === "Property") {
        industry = 16
    } else if (submissionDetails.sector === "Retail") {
        industry = 19
    } else if (submissionDetails.sector === "Sales & Marketing") {
        industry = 20
    } else if (submissionDetails.sector === "Software") {
        industry = 8
    } else if (submissionDetails.sector === "Technology") {
        industry = 22
    } else if (submissionDetails.sector === "Transportation") {
        industry = 4
    }

    
    const submitDataToAinApi = () => {
        const formData = new FormData();
        formData.append("user_id", '406773');
        formData.append("project_name", String(submissionDetails.companyName));
        formData.append("valuation", String(submissionDetails.preMoneyValuation));
        formData.append("tax_relief", String(submissionDetails.taxBenefits));
        formData.append("raising", String(submissionDetails.amountRaising));
        formData.append("email", String(submissionDetails.email));
        formData.append("cash_currently_have_left", String(submissionDetails.cashRemaining));
        formData.append("cash_reserves_month_left", String(submissionDetails.monthsOfCashLeft));
        formData.append("burn_rate_monthly", String(submissionDetails.monthlyBurnRate));
        formData.append("web_address", String(submissionDetails.website));
        formData.append("stage_id", String(stage));
        formData.append("industry_1_id", String(industry));
        formData.append("company_setup_date", String(unixFoundedDate));
        formData.append("office_postcode", String(submissionDetails.officePostCode));
        formData.append("business_type", String(submissionDetails.businessType));
        formData.append("addressable_market_size", String(addressableMarketSize));
        formData.append("raised_previous_round", String(submissionDetails.previousRoundRaise));
        formData.append("previous_valuation", String(submissionDetails.previousValuation));
        formData.append("company_debt", String(submissionDetails.companyDebt));
        formData.append("team_experience", String(teamExperience));
        formData.append("previous_exit", String(submissionDetails.isPreviousExits));
        formData.append("no_of_founder", String(submissionDetails.foundersCount));
        formData.append("no_of_employee", String(submissionDetails.employeesCount));
        formData.append("salary_forecast", String(submissionDetails.twelveMonthSalaryForecast));
        formData.append("increase_in_headcount", String(submissionDetails.twelveMonthHiresForecast));
        formData.append("financial_year_start", String(unixStartOfFinancialYear));
        formData.append("current_monthly_revenue", String(submissionDetails.monthlyRevenue));
        formData.append("revenue_month_12", String(submissionDetails.twelveMonthProjectedRevenue));
        formData.append("moving_office_next_12_months", String(submissionDetails.isMovingOffice));
        formData.append("lawyer_or_termsheet_in_place", String(submissionDetails.isLawyerInPlace));
        formData.append("looking_for_chairman", String(submissionDetails.isLookingForChairman));
        formData.append("additional_info", String(submissionDetails.extraHelp));
        formData.append("mission_driven_comp", String(submissionDetails.isMissionDriven));
        formData.append("top_three_salaries", String(submissionDetails.foundersAverageSalary));
        formData.append("anticipated_rounds", String(submissionDetails.currentCommitments));
        formData.append("planned_hires", String(submissionDetails.keyPositionsToHire));

        return fetch("https://www.angelinvestmentnetwork.co.uk/rest/mobile/api/brokingsubmission/broking_step_submission", {
            method: "POST",
            body: formData
        })
            .then(response => {
                return response.json()
            })
            .then(mainJSON => {
                // console.log(mainJSON)
                ainFileUpload(submissionDetails.logoFile, mainJSON.data.id, "logo")
                    .then(json => {
                        // console.log(json)
                        ainFileUpload(submissionDetails.pitchDeckFile, mainJSON.data.id, "pitchDeck")
                            .then(json => {
                                // console.log(json)
                                ainFileUpload(submissionDetails.financialsFile, mainJSON.data.id, "financials")
                                    .then(json => {
                                        // return json
                                        const formData = new FormData();
                                        formData.append("project_id", mainJSON.data.id);

                                        return fetch("https://www.angelinvestmentnetwork.co.uk/rest/mobile/api/brokingsubmission/thank_you", {
                                            method: "POST",
                                            body: formData
                                        })
                                            .then(response => {
                                                return response.json()
                                            })
                                            .then(json => {
                                                // console.log(json)
                                                return json
                                            })
                                            .catch(err => {
                                                throw new Error(err);
                                            });
                                    })
                                    .catch(err => {
                                        console.log(err)
                                        throw new Error(err);
                                    });
                            })
                            .catch(err => {
                                console.log(err)
                                throw new Error(err);
                            });
                    })
                    .catch(err => {
                        console.log(err)
                        throw new Error(err);
                    });
            })
            .catch(err => {
                console.log(err)
                throw new Error(err);
            });
    }


    const ainFileUpload = (file: any, project_id: string, fileType: string) => {

        // console.log(file)

        let endpoint = ""

        if (file && file.name) {
            const formData = new FormData();
            formData.append("project_id", project_id);

            if (fileType === "logo") {
                formData.append("logo", file);
                endpoint = "https://www.angelinvestmentnetwork.co.uk/rest/mobile/api/brokingsubmissionupload/upload_logo"
            } else if (fileType === "pitchDeck") {
                formData.append("pitch_deck", file);
                endpoint = "https://www.angelinvestmentnetwork.co.uk/rest/mobile/api/brokingsubmissionupload/upload_pitch_deck"
            } else if (fileType === "financials") {
                formData.append("financial_upload", file);
                endpoint = "https://www.angelinvestmentnetwork.co.uk/rest/mobile/api/brokingsubmissionupload/upload_financial"
            }

            return fetch(endpoint, {
                method: "POST",
                body: formData
            })
                .then(response => {
                    // console.log("then")
                    // console.log(response)
                    return response
                })
                .catch(err => {
                    console.log("err")
                    console.log(err)
                    // throw new Error(err);
                });
        } else {
            return new Promise((resolve: (result) => void, reject: (error: Error) => void) => {
                resolve(null)
            });
        }
    }
    const cloudinaryUpload = (file: any, companyName, email) => {

        // console.log(file)

        if (file && file.name) {
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
        } else {
            return new Promise((resolve: (result) => void, reject: (error: Error) => void) => {
                resolve(null)
            });
        }
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
