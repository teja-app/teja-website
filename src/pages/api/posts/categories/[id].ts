import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../../lib/mongodb';
import { ObjectId } from 'mongodb'; // Import ObjectId

export async function getPostCategoryByIdApi(id: string) {
  const client = await clientPromise;
  const db = client.db("test");

  // Fetch data from your collection
  // Convert 'id' from String to ObjectId for the query
  const data = await db.collection('post_categories').findOne({
    _id: new ObjectId(id)
  });

  return data;
}
