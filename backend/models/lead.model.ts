import * as mongoose from 'mongoose'
import { Schema, Document } from 'mongoose';

export interface ILead extends Document {
    type: String,
    name: String,
    companyName: String,
    phone: String,
    email: String,
    clientLocationList: String[],
    isDontMind: Boolean,
    specificLocationDetails: String,
    aum: String,
    clients: String,
    advisers: String,
    timescale: String,
    dateSubmitted: Date
}

const LeadSchema: Schema = new Schema({
    type: { type: String },
    name: { type: String },
    companyName: { type: String },
    phone: { type: String },
    email: { type: String },
    clientLocationList: [{ type: String }],
    isDontMind: { type: Boolean},
    specificLocationDetails: { type: String },
    aum: { type: String },
    clients: { type: String },
    advisers: { type: String },
    timescale: { type: String },
    dateSubmitted: { type: Date }
});

export default mongoose.model<ILead>('Lead', LeadSchema);