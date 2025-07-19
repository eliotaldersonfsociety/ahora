import imageCompression from 'browser-image-compression';

// Función para comprimir una imagen
export interface CompressImageOptions {
    maxSizeMB: number;
    maxWidthOrHeight: number;
    useWebWorker: boolean;
    fileType: string;
}

export const compressImage = async (imageFile: File): Promise<File> => {
    const options: CompressImageOptions = {
        maxSizeMB: 1, // Tamaño máximo del archivo en MB
        maxWidthOrHeight: 800, // Ancho o alto máximo de la imagen
        useWebWorker: true, // Usar web worker para la compresión
        fileType: 'image/webp', // Tipo de archivo de salida
    };

    try {
        // Comprimir la imagen
        const compressedFile: File = await imageCompression(imageFile, options);
        return compressedFile;
    } catch (error) {
        console.error('Error al comprimir la imagen:', error);
        throw error; // Re-lanzar el error para manejarlo en el componente
    }
};
