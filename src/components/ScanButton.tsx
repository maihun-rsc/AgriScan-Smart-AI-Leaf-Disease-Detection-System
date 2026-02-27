import { Camera, Upload, X } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { takePhoto, pickFromGallery, isNativePlatform, dataUrlToFile } from "@/lib/camera";

interface ScanButtonProps {
  onImageCapture: (file: File) => void;
  isScanning?: boolean;
}

export function ScanButton({ onImageCapture, isScanning }: ScanButtonProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const [showOptions, setShowOptions] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageCapture(file);
      setShowOptions(false);
    }
  };

  const handleCameraClick = async () => {
    if (isNativePlatform()) {
      const result = await takePhoto();
      if (result?.dataUrl) {
        const file = dataUrlToFile(result.dataUrl);
        onImageCapture(file);
        setShowOptions(false);
      }
    } else {
      cameraInputRef.current?.click();
    }
  };

  const handleGalleryClick = async () => {
    if (isNativePlatform()) {
      const result = await pickFromGallery();
      if (result?.dataUrl) {
        const file = dataUrlToFile(result.dataUrl);
        onImageCapture(file);
        setShowOptions(false);
      }
    } else {
      fileInputRef.current?.click();
    }
  };

  return (
    <div className="relative">
      {/* Option buttons */}
      <div
        className={cn(
          "absolute bottom-full left-1/2 -translate-x-1/2 mb-4 flex gap-3 transition-all duration-300",
          showOptions ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        <Button
          variant="default"
          size="icon"
          className="h-14 w-14 rounded-full shadow-lg animate-scale-in"
          onClick={handleCameraClick}
        >
          <Camera className="h-6 w-6" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className="h-14 w-14 rounded-full shadow-lg animate-scale-in"
          style={{ animationDelay: "0.1s" }}
          onClick={handleGalleryClick}
        >
          <Upload className="h-6 w-6" />
        </Button>
      </div>

      {/* Main scan button */}
      <Button
        variant="scan"
        className={cn(
          "relative overflow-hidden",
          isScanning && "animate-pulse"
        )}
        onClick={() => setShowOptions(!showOptions)}
      >
        {showOptions ? (
          <X className="h-8 w-8" />
        ) : (
          <div className="flex flex-col items-center">
            <Camera className="h-8 w-8" />
            <span className="text-xs mt-1">Scan</span>
          </div>
        )}
        
        {/* Scanning animation overlay */}
        {isScanning && (
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-foreground/30 to-transparent animate-scan" />
        )}
      </Button>

      {/* Hidden file inputs for web fallback */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}
