// pages/api/posts/[slug].ts
import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { slug } = req.query; // Access the slug from the request query

    const client = await clientPromise;
    const db = client.db("test");

    if (!slug || typeof slug !== 'string') {
      res.status(400).json({ error: "Slug is required and must be a string." });
      return;
    }

    // Adjust the query to filter by slug. Assuming 'slug' is a field in your documents.
    const data = await db.collection('posts').aggregate([
      { $match: { slug } }, // Filter documents by slug
      {
        $addFields: {
          featureImageObjectId: { $toObjectId: "$featureImage" }
        }
      },
      {
        $lookup: {
          from: 'post_medias',
          localField: 'featureImageObjectId',
          foreignField: '_id',
          as: 'featureImageDetails'
        }
      },
      {
        $unwind: {
          path: '$featureImageDetails',
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $set: {
          featureImage: '$featureImageDetails'
        }
      },
      {
        $project: {
          featureImageObjectId: 0,
          featureImageDetails: 0
        }
      }
    ]).toArray();

    res.status(200).json(data?.[0]);
  } catch (e) {
    res.status(500).json({ error: "Unable to connect to database: " + e.message });
  }
}
