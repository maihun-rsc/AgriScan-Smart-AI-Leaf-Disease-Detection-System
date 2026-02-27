import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';

export interface CapturedImage {
  dataUrl: string;
  file?: File;
}

export async function takePhoto(): Promise<CapturedImage | null> {
  try {
    if (Capacitor.isNativePlatform()) {
      // Native camera
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
      });
      
      if (image.dataUrl) {
        return { dataUrl: image.dataUrl };
      }
    } else {
      // Web fallback - return null to use file input
      return null;
    }
  } catch (error) {
    console.error('Camera error:', error);
    return null;
  }
  return null;
}

export async function pickFromGallery(): Promise<CapturedImage | null> {
  try {
    if (Capacitor.isNativePlatform()) {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Photos,
      });
      
      if (image.dataUrl) {
        return { dataUrl: image.dataUrl };
      }
    } else {
      // Web fallback - return null to use file input
      return null;
    }
  } catch (error) {
    console.error('Gallery error:', error);
    return null;
  }
  return null;
}

export function isNativePlatform(): boolean {
  return Capacitor.isNativePlatform();
}

// Convert data URL to File object
export function dataUrlToFile(dataUrl: string, filename: string = 'photo.jpg'): File {
  const arr = dataUrl.split(',');
  const mime = arr[0].match(/:(.*?);/)?.[1] || 'image/jpeg';
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}
