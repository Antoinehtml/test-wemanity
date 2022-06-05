/* eslint-disable import/no-anonymous-default-export */
import dbConnect from "../../../../utils/dbConnect";
import Contact from "../../../../models/Contact";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const pageNumber = parseInt(req.query.pageNumber) || 0;
        const limit = parseInt(req.query.limit) || 12;

        const contacts = {};

        const totalPosts = await Contact.countDocuments().exec();

        let startIndex = pageNumber * limit;
        const endIndex = (pageNumber + 1) * limit;
        contacts.totalPosts = totalPosts;

        if (startIndex > 0) {
          contacts.previous = {
            pageNumber: pageNumber - 1,
            limit: limit,
          };
        }
        if (endIndex < (await Contact.countDocuments().exec())) {
          contacts.next = {
            pageNumber: pageNumber + 1,
            limit: limit,
          };
        }

        contacts.data = await Contact.find()
          .sort("-_id")
          .skip(startIndex)
          .limit(limit)
          .exec();
        contacts.rowsPerPage = limit;

        return res.json({ msg: "Posts Fetched successfully", data: contacts });
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
