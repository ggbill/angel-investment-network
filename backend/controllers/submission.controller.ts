import Submission, { ISubmission } from '../models/submission.model';

var mongoose = require('mongoose');

export namespace SubmissionController {
    export async function CreateLead(lead: ISubmission): Promise<ISubmission> {
        return new Promise((resolve: (result) => void, reject: (error: Error) => void) => {
            Submission.create({
                // type: lead.type,
                // name: lead.name,
                // companyName: lead.companyName,
                // phone: lead.phone,
                // email: lead.email,
                // clientLocationList: lead.clientLocationList,
                // isDontMind: lead.isDontMind,
                // specificLocationDetails: lead.specificLocationDetails,
                // aum: lead.aum,
                // clients: lead.clients,
                // advisers: lead.advisers,
                // timescale: lead.timescale,
                // dateSubmitted: new Date()
            }, function (err, result) {      
                if (err) {
                    console.error("Error: " + err);
                }
                resolve(result);
            })
        });
    }
}