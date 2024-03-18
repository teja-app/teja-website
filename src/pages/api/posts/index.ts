import clientPromise from '../../../lib/mongodb';

export async function getPostApi({categoryId }:{categoryId?: string}) {
    const client = await clientPromise;
    const db = client.db("test");

    // Initialize the aggregation pipeline
    const pipeline = [];

    // If a categoryId is provided, add a $match stage to filter by categories
    if (categoryId) {
        pipeline.push({
            $match: {
                categories: { $in: [categoryId] } // Ensure categoryId is converted to ObjectId
            }
        });
    }
    pipeline.push({ $sort: { createdAt: -1 } });

    // Continue with the rest of the pipeline stages
    pipeline.push(
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
    );

    // Fetch data from your collection
    const data = await db.collection('posts').aggregate(pipeline).toArray();
    return data;
}
