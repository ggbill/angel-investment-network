import { Request, Response } from 'express';
const moment = require('moment')

const router = require('express').Router();
var Airtable = require('airtable');
require('dotenv').config()
var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base('appn4fdNE3iwcMp1k');

router.post('/', async (request: Request, response: Response) => {

    // console.log(request.body.logoFile)

    base('Submission Data').create([
        {
          "fields": {
              "companyName": request.body.companyName,
              "email": request.body.email,
              "foundedDate": moment(request.body.foundedDate).format("yyyy-MM-DD"),
              "officePostCode": request.body.officePostCode,
              "businessType": request.body.businessType,
              "website": request.body.website,
              "sector": request.body.sector,
              "stage": request.body.stage,
              "preMoneyValuation": request.body.preMoneyValuation,
              "taxBenefits": request.body.taxBenefits,
              "amountRaising": request.body.amountRaising,
              "currentCommitments": request.body.currentCommitments,
              "marketSize": request.body.marketSize,
              "previousRoundRaise": request.body.previousRoundRaise,
              "previousValuation": request.body.previousValuation,
              "foundersAverageSalary": request.body.foundersAverageSalary,
              "employeeCount": request.body.employeesCount,
              "founderCount": request.body.foundersCount,
              "twelveMonthSalaryForecast": request.body.twelveMonthSalaryForecast,
              "twelveMonthHiresForecast": request.body.twelveMonthHiresForecast,
              "keyPositionsToHire": request.body.keyPositionsToHire,
              "cashRemaining": request.body.cashRemaining,
              "monthsUntilRevenue": request.body.monthsUntilRevenue,
              "startOfFinancialYear": moment(request.body.startOfFinancialYear).format("yyyy-MM-DD"),
              "monthlyRevenue": request.body.monthlyRevenue,
              "twelveMonthProjectedRevenue": request.body.twelveMonthProjectedRevenue,
              "isMovingOffice": request.body.isMovingOffice === "true" ? true : false,
              "isLawyerInPlace": request.body.isLawyerInPlace === "true" ? true : false,
              "isLookingForChairman": request.body.isLookingForChairman === "true" ? true : false,
              "extraHelp": request.body.extraHelp,
              "isMissionDriven": request.body.isMissionDriven === "true" ? true : false,
              "logo": request.body.logoFile,
              "pitchDeck": request.body.pitchDeckFile,
              "financials": request.body.financialsFile

          }
        }
      ], function(err, records) {
        if (err) {
            response.status(404).send(err);
        }
        // records.forEach(function (record) {
        //   console.log(record.getId());
        // });
        response.json(records);
      });
});

router.get('/test', async (request: Request, response: Response) => {
  response.json({result: "it worked"});
})

export default router;