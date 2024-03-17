// pages/api/posts/[slug].ts
import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../lib/mongodb';


export async function getPostBySlugApi(slug: String) {

  const client = await clientPromise;
  const db = client.db("test");

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
  return data?.[0];
}