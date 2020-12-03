import Lead, { ILead } from '../models/lead.model';

var mongoose = require('mongoose');

export namespace LeadController {
    export async function CreateLead(lead: ILead): Promise<ILead> {
        return new Promise((resolve: (result) => void, reject: (error: Error) => void) => {
            Lead.create({
                type: lead.type,
                name: lead.name,
                companyName: lead.companyName,
                phone: lead.phone,
                email: lead.email,
                clientLocationList: lead.clientLocationList,
                isDontMind: lead.isDontMind,
                specificLocationDetails: lead.specificLocationDetails,
                aum: lead.aum,
                clients: lead.clients,
                advisers: lead.advisers,
                timescale: lead.timescale,
                dateSubmitted: new Date()
            }, function (err, result) {      
                if (err) {
                    console.error("Error: " + err);
                }
                resolve(result);
            })
        });
    }
}