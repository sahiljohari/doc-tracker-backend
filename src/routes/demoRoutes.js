import {
  addNewDocument,
  getDocuments,
  getDocumentsbyId,
  updateDocument,
  deleteDocument
} from "../controllers/demoController";

const routes = app => {
  app
    .route("/document")
    // Get all the records
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getDocuments)

    // Save a new record
    .post(addNewDocument);

  app
    .route("/document/:docId")
    // Get a single document record by its ID
    .get(getDocumentsbyId)

    // Put request to update a specific document record
    .put(updateDocument)
    // Delete request to delete a specific document record
    .delete(deleteDocument);
};

export default routes;
