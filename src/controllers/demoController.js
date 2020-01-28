import mongoose from "mongoose";
import { DocSchema } from "../models/demoModel";

// create the schema instance
const Document = mongoose.model("Document", DocSchema);

// this is used in POST request
export const addNewDocument = (req, res) => {
  let newDoc = new Document(req.body);

  newDoc.save((err, doc) => {
    if (err) {
      res.send(err);
    }
    res.json(doc);
  });
};

// this is used in GET request
export const getDocuments = (req, res) => {
  Document.find({}, (err, doc) => {
    if (err) {
      res.send({ error: err });
    }
    res.send({ data: doc });
  }).sort({ status: 1 });
};

// this is used in GET request for a specific record
export const getDocumentsbyId = (req, res) => {
  Document.findById(req.params.docId, (err, doc) => {
    if (err) {
      res.send(err);
    }
    res.json(doc);
  });
};

// this is used in PUT request for a specific record
export const updateDocument = (req, res) => {
  Document.findOneAndUpdate(
    { _id: req.params.docId },
    req.body,
    { new: true },
    (err, doc) => {
      if (err) {
        res.send(err);
      }
      res.json(doc);
    }
  );
};

// this is used in DELETE request for a specific record
export const deleteDocument = (req, res) => {
  Document.remove({ _id: req.params.docId }, (err, doc) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Document deleted successfully.." });
  });
};
