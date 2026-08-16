import { nanoid } from "@reduxjs/toolkit";
import noPhoto from "@/assets/image/noPhoto.jpg";

export function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        const imageId = nanoid();
        const newFile = new File([file], imageId, { type: file.type });
        reader.onload = () => {
            const base64String = reader.result as string;
            resolve(base64String);
        };

        reader.onerror = (error) => {
            reject(error);
        };

        reader.readAsDataURL(newFile);
    });
}

export const customFormatMoney = (amount: number): string => {
    const parts = amount.toFixed(2).split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `${parts.join('.')}`;
};

export const handleImageError = (
  e: React.SyntheticEvent<HTMLImageElement>
) => {
  e.currentTarget.onerror = null;
  e.currentTarget.src = noPhoto;
};
