import { db } from "../src/config/firebaseConfig";
import { 
    getDocuments,
    getDocumentById,
    createDocument,
    updateDocument,
    deleteDocument
} from "../src/api/v1/repositories/firestoreRepository";

jest.mock("../src/config/firebaseConfig");

const mockDoc = {
    id: "mockId",
    exists: true,
    data: () => ({ name: "Test" }),
        set: jest.fn(),
        get: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
};

const mockCollection = {
    doc: jest.fn(() => mockDoc),
    add: jest.fn(async () => mockDoc),
    get: jest.fn(),
};

(db.collection as jest.Mock).mockReturnValue(mockCollection);


describe("Firestore Repository Functions", () => {
    describe("getDocuments", () => {
        it("should get all documents", async () => {
            // Arrange
            const mockResponse = { docs: [] };
            mockCollection.get.mockResolvedValueOnce(mockResponse);

            // Act
            const result = await getDocuments("tests");

            // Assert
            expect(db.collection).toHaveBeenCalledWith("tests");
            expect(result).toBe(mockResponse);
        });
    });

    describe("getDocumentById", () => {
        it("should get a document with matching id", async () => {
            // Arrange & Act
            mockDoc.get.mockResolvedValueOnce(mockDoc);
            const result = await getDocumentById("tests", "mockId");

            // Assert
            expect(mockCollection.doc).toHaveBeenCalledWith("mockId");
            expect(result).toBe(mockDoc);
        });
    });

    describe("createDocument", () => {
        it("should successfully create a document", async () => {
            // Arrange & Act
            mockDoc.set.mockResolvedValueOnce(undefined);
            const id = await createDocument("tests", { name: "Trevor" }, "mockId");

            // Assert
            expect(db.collection).toHaveBeenCalledWith("tests");
            expect(mockCollection.doc).toHaveBeenCalledWith("mockId");
            expect(mockDoc.set).toHaveBeenCalledWith({ name: "Trevor" });
            expect(id).toBe("mockId");
        });
    });

    describe("updateDocument", () => {
        it("should successfully update a document", async () => {
            // Arrange & Act
            mockDoc.update.mockResolvedValueOnce(undefined);
            await updateDocument("tests", "mockId", { class: "barbarian" });

            // Assert
            expect(mockCollection.doc).toHaveBeenCalledWith("mockId");
            expect(mockDoc.update).toHaveBeenCalledWith({ class: "barbarian" }); 
        });
    });

    describe("updateDocument", () => {
        it("should successfully update a document", async () => {
            // Arrange & Act
            mockDoc.delete.mockResolvedValueOnce(undefined);
            await deleteDocument("tests", "mockId");

            // Assert
            expect(mockCollection.doc).toHaveBeenCalledWith("mockId");
            expect(mockDoc.delete).toHaveBeenCalled();
        });
    });
});