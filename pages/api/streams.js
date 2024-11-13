// /pages/api/streams.js

import db from "../../server/lib/db";
import Stream from "../../server/models/Stream";

export default async function handler(req, res) {
  // Connect to the database
  await db.connect();

  if (req.method === "POST") {
    // Save stream data (e.g., start a new stream)
    const { title, user, timestamp, shareLink } = req.body;

    try {
      const newStream = new Stream({ title, user, timestamp, shareLink });
      await newStream.save();
      res.status(201).json(newStream); // Respond with the saved stream data
    } catch (error) {
      res.status(500).json({ message: "Error saving stream data" });
    }
  } else if (req.method === "GET") {
    // Fetch stream history
    try {
      const streams = await Stream.find();
      res.status(200).json(streams); // Respond with the stream history
    } catch (error) {
      res.status(500).json({ message: "Error fetching stream history" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }

  await db.disconnect();
}
