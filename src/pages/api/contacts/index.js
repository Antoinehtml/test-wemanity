/* eslint-disable import/no-anonymous-default-export */
import dbConnect from "../../../../utils/dbConnect";
import Contact from "../../../../models/Contact";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const contacts = await Contact.find({});

        res.status(200).json({ success: true, contacts });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;

    case "POST":
      try {
        const contact = await Contact.create(req.body);

        res.status(201).json({ success: true, data: contact });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
    default:
      res.status(400).json({ success: false, error });
      break;
  }
};
