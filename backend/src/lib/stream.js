import { StreamChat } from 'stream-chat';
import 'dotenv/config';

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
    console.error('STREAM_API_KEY and STREAM_API_SECRET must be set');
}

const serverClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreanUser = async (userData) => {
    try {
        const userId = userData.id;
      await serverClient.upsertUsers([userData]);
        console.log(`✅ Stream user upserted successfully: ${userId}`);
        return userData;
    } catch (error) {
        console.error('❌ Error upserting Stream user:', error);
        throw error;
    }
};

export const getStreamToken = (userId) => {
    try {
        return serverClient.createToken(userId);
    } catch (error) {
        console.error('❌ Error creating Stream token:', error);
    }
};
