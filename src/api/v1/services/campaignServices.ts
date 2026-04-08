import { Campaign } from "../models/campaignModel";
import { QuerySnapshot } from "firebase-admin/firestore";
import {
    createDocument,
    getDocuments,
    getDocumentById,
    updateDocument,
    deleteDocument
} from "../repositories/firestoreRepository";

const COLLECTION: string = "campaigns";

/**
 * Creates a new char
 * @param campData - The data for the new campaign
 * @returns The created char with the campName as the ID
 */
export const createCamp = async (campData: {
    campName: string,
    email: string
}): Promise<Campaign> => {
        const newCampaign: Campaign = {
            id: campData.campName,
            notes: "",
            players: {},
            dm: campData.email
        };

    await createDocument<Campaign>(COLLECTION, newCampaign, campData.campName);
    return newCampaign  as Campaign;
};
