/* eslint-disable import/no-anonymous-default-export */
import dbConnect from "../../../../utils/dbConnect";
import Contact from "../../../../models/Contact";

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const contact = await Contact.findById(id);

        if (!contact) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: contact });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;

    case "PUT":
      try {
        const contact = await Contact.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!contact) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: contact });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;

    case "DELETE":
      try {
        const deletedContact = await Contact.deleteOne({ _id: id });

        if (!deletedContact) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;

    default:
      return res.status(400).json({ success: false });
      break;
  }
};
