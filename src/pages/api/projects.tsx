import { connectToDatabase } from 'lib/utils/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  let { db } = await connectToDatabase();

  const projects = await db
    .collection('projects')
    .find()
    .toArray();

  const project = await db
    .collection('projects')
    .findOne({}, { sort: { $natural: -1 } });
    
  res.status(200).json({ projects, project });
}
