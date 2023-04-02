import { v2 as cloudinary } from "cloudinary";
import { promises as fs } from "fs";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadToCloudinary = async (file, folderName) => {
  const { path: imagePath } = file;

  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
    folder: `social/${folderName}`,
  };

  try {
    const result = await cloudinary.uploader.upload(imagePath, options);

    fs.unlink(imagePath);
    return result.secure_url;
  } catch (error) {
    fs.unlink(imagePath);
    return { message: "Fail" };
  }
};
