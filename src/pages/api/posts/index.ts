// pages/api/data.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../lib/mongodb';

export async function getPostApi() {
    const client = await clientPromise;
    const db = client.db("test");

    // Fetch data from your collection
    const data = await db.collection('posts').aggregate([
      {
        $addFields: {
          // Convert the 'featureImage' string to an ObjectId
          featureImageObjectId: { $toObjectId: "$featureImage" }
        }
      },
      {
        $lookup: {
          from: 'post_medias', // Ensure this matches your collection name
          localField: 'featureImageObjectId', // Use the converted ObjectId for the lookup
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
          // Replace 'featureImage' with the detailed object
          featureImage: '$featureImageDetails'
        }
      },
      {
        $project: {
          featureImageObjectId: 0, // Remove the temporary field
          featureImageDetails: 0 // Optionally remove this if you don't want the array
        }
      }
    ]).toArray();
    return data;
}