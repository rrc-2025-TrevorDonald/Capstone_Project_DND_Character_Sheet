import { Campaign } from "../models/campaignModel";
import { QuerySnapshot } from "firebase-admin/firestore";
import {
    createDocument,
    getDocuments,
    getDocumentById,
    updateDocument,
    deleteDocument,
    addPlayer,
    removePlayer
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
 * Retrieves a single campaign by campName from the database
 * @param campName - This name of the campaign to retrieve
 * @returns The campaign if found
 */
export const getCampaignById = async (campName: string): Promise<Campaign> => {
    const doc = await getDocumentById(COLLECTION, campName);
    if (!doc) {
        throw new CampNotFoundError(`${campName} does not exist`);
    };

    const data = doc.data();

    if (!data) {
        throw new CampDataNotFoundError(`Data associated with ${campName} not found`);
    };

    const campaign: Campaign = {
        campName: doc.id,
        ...data
    } as Campaign;

    return campaign;
};

/**
 * Updates existing campaign players
 * @param campName - The name of the campaign to update
 * @param playerToAdd - the player being added to the campaign
 * @returns The updated campaign
 * @throws Error if campaign with given name is not found or missing data within
 * retrieved campaign
 */
export const addPlayerToCampaign = async (
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

/**
 * Updates (replaces) an existing camp
 * @param campName - The name of the campaign to update
 * @param campData - The fields to updates (name and/or description)
 * @returns The updated camp
 * @throws Error if camp with given ID is not found
 */
export const updateCampaign = async (
    campName: string,
    campData: Pick<Campaign, "notes">
): Promise<Campaign> => {
    const camp: Campaign = await getCampaignById(campName);
    if (!camp) {
        throw new Error(`Campaign with ID ${campName} not found`);
    }

    const updateCampaign: Campaign = {
        ...camp,
        notes: campData.notes,
    };

    await updateDocument<Campaign>(COLLECTION, campName, updateCampaign);

    return structuredClone(updateCampaign);
};

/**
 * Deletes an campaign from storage
 * @param campName - The name of the campaign to delete
 * @throws Error if campaign with given name is not found
 */
export const deleteCampaign = async (campName: string): Promise<void> => {
    const camp: Campaign = await getCampaignById(campName);
    if (!camp) {
        throw new Error(`Campaign with ID ${campName} not found`);
    }

    await deleteDocument(COLLECTION, campName);
};

/**
 * Updates existing campaign players
 * @param campName - The name of the campaign to update
 * @param playerToRemove - the player being removed from the campaign
 * @returns The updated campaign
 * @throws Error if campaign with given name is not found or missing data within
 * retrieved campaign
 */
export const removePlayerFromCampaign = async (
    campName: string,
    playerToRemove: {
        charName: string,
        email: string
    }
): Promise<Campaign> => {
    const campaign: Campaign = await getCampaignById(campName);
    if (!campaign) {
        throw new CampNotFoundError(`Campaign with ID ${campName} not found`);
    };
    await removePlayer(COLLECTION, campName, playerToRemove);

    return structuredClone(campaign);
};