// pages/api/data.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await clientPromise;
    const db = client.db("test");

    // Fetch data from your collection
    const data = await db.collection('post_categories').find({}).toArray();
    
    
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "Unable to connect to database: " + (e as any).message });
  }
}
