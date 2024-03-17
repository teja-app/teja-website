// pages/api/data.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../lib/mongodb';

export async function getPostCategryApi() {
  const client = await clientPromise;
  const db = client.db("test");

  // Fetch data from your collection
  const data = await db.collection('post_categories').find({}).toArray();
  return data;
}
