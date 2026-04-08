import { Campaign } from "../models/campaignModel";
import { QuerySnapshot } from "firebase-admin/firestore";
import {
    createDocument,
    getDocuments,
    getDocumentById,
    updateDocument,
    deleteDocument,
    addPlayer
} from "../repositories/firestoreRepository";
import { CampDataNotFoundError, CampNotFoundError } from "../errors/errors";

const COLLECTION: string = "campaigns";

/**
 * Creates a new campaign
 * @param campData - The data for the new campaign
 * @returns The created campaign with the campName as the ID
 */
export const createCamp = async (campData: {
    campName: string,
    email: string
}): Promise<Campaign> => {
        const newCampaign: Campaign = {
            campName: campData.campName,
            notes: "",
            players: [],
            dm: campData.email
        };

    await createDocument<Campaign>(COLLECTION, newCampaign, campData.campName);
    return newCampaign  as Campaign;
};

/**
 * Retrieves all campaigns from the database
 * @returns The campaigns if found
 */
export const getCampaigns = async (): Promise<Campaign[]> => {
    const snapshot: QuerySnapshot = await getDocuments(COLLECTION);
    const campaigns: Campaign[] = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
            campName: data.campName
        } as Campaign;
    });
    return campaigns;
};

/**
 * Retrieves a single campaign by ID from the database
 * @param id - This ID of the campaign to retrieve
 * @returns The campaign if found
 */
export const getCampaignById = async (id: string): Promise<Campaign> => {
    const doc = await getDocumentById(COLLECTION, id);
    if (!doc) {
        throw new CampNotFoundError(`${id} does not exist`);
    };

    const data = doc.data();

    if (!data) {
        throw new CampDataNotFoundError(`Data associated with ${id} not found`);
    };

    const campaign: Campaign = {
        campName: doc.id,
        ...data
    } as Campaign;

    return campaign;
};
/**
 * Updates (replaces) an existing campaign
 * @param id - The ID of the campaign to update
 * @param campaignData - The fields to updates (name and/or description)
 * @returns The updated campaign
 * @throws Error if campaign with given ID is not found or missing data within
 * retrieved campaign
 */
export const updateCampaign = async (
    campName: string,
    playerToAdd: {
        charName: string,
        email: string
    }
): Promise<Campaign> => {
    const campaign: Campaign = await getCampaignById(campName);
    if (!campaign) {
        throw new CampNotFoundError(`Campaign with ID ${campName} not found`);
    };
    await addPlayer(COLLECTION, campName, playerToAdd);

    return structuredClone(campaign);
};
