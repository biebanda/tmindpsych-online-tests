'use server';
import mongoose from 'mongoose';

export async function connectToDB() {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log('Already connected to MongoDB');
      return;
    }
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to MongoDB...');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    throw error;
  }
}
