import { useState } from "react";

const useCloudinaryUpload = () => {
    const [uploading, setUploading] = useState(false);

    const uploadImage = async (imageFile) => {
        if (!imageFile) {
            return null;
        }
        setUploading(true);
        try {
            const formData = new FormData();
            formData.append("file", imageFile);
            formData.append(
                "upload_preset",
                import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
            );
            const response = await fetch(
                `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
                {
                    method: "POST",
                    body: formData,
                }
            );
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error?.message || "Image upload failed");
            }
            return data.secure_url;
        } catch (error) {
            console.error("Cloudinary Error:", error);
            throw error;
        } finally {
            setUploading(false);
        }
    };

    return {
        uploadImage,
        uploading,
    };
};

export default useCloudinaryUpload;