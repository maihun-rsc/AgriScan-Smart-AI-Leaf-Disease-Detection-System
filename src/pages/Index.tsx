import { useState, useCallback } from "react";
import { ScanButton } from "@/components/ScanButton";
import { DiseaseCard, type DiseaseResult } from "@/components/DiseaseCard";
import { BottomNav } from "@/components/BottomNav";
import { HistoryCard, type ScanHistoryItem } from "@/components/HistoryCard";
import { DiseaseInfoCard } from "@/components/DiseaseInfoCard";
import { detectDisease, diseaseDatabase } from "@/lib/diseaseData";
import { Leaf, X, ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroLeaf from "@/assets/hero-leaf.jpg";

export default function Index() {
  const [activeTab, setActiveTab] = useState("home");
  const [isScanning, setIsScanning] = useState(false);
  const [currentResult, setCurrentResult] = useState<DiseaseResult | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [history, setHistory] = useState<ScanHistoryItem[]>([]);
  const [selectedDisease, setSelectedDisease] = useState<string | null>(null);

  const handleImageCapture = useCallback(async (file: File) => {
    const imageUrl = URL.createObjectURL(file);
    setPreviewImage(imageUrl);
    setIsScanning(true);
    setCurrentResult(null);

    try {
      const result = await detectDisease(file);
      setCurrentResult(result);
      
      // Add to history
      const historyItem: ScanHistoryItem = {
        id: Date.now().toString(),
        imageUrl,
        result,
        date: new Date(),
      };
      setHistory(prev => [historyItem, ...prev]);
    } catch (error) {
      console.error("Detection failed:", error);
    } finally {
      setIsScanning(false);
    }
  }, []);

  const clearResult = () => {
    setCurrentResult(null);
    setPreviewImage(null);
  };

  const deleteHistoryItem = (id: string) => {
    setHistory(prev => prev.filter(item => item.id !== id));
  };

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <div className="flex flex-col min-h-screen pb-24">
            {/* Hero Section */}
            <div className="relative h-64 gradient-hero rounded-b-3xl overflow-hidden">
              <img
                src={heroLeaf}
                alt="Plant background"
                className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/80" />
              
              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-2">
                  <Leaf className="h-6 w-6 text-accent" />
                  <span className="text-primary-foreground/80 font-medium">PlantGuard AI</span>
                </div>
                <h1 className="text-3xl font-bold text-primary-foreground mb-2">
                  Detect Plant Diseases
                </h1>
                <p className="text-primary-foreground/70 text-sm">
                  Snap a photo of your plant's leaves and get instant AI-powered diagnosis
                </p>
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1 px-5 py-6">
              {currentResult ? (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-foreground">Scan Result</h2>
                    <Button variant="ghost" size="sm" onClick={clearResult}>
                      <X className="h-4 w-4 mr-1" />
                      Clear
                    </Button>
                  </div>
                  
                  {previewImage && (
                    <div className="rounded-2xl overflow-hidden h-48 shadow-lg">
                      <img
                        src={previewImage}
                        alt="Scanned leaf"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  <DiseaseCard result={currentResult} />
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Quick stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass-card rounded-2xl p-4 text-center">
                      <div className="text-3xl font-bold text-accent">{history.length}</div>
                      <div className="text-sm text-muted-foreground">Total Scans</div>
                    </div>
                    <div className="glass-card rounded-2xl p-4 text-center">
                      <div className="text-3xl font-bold text-healthy">
                        {history.filter(h => h.result.severity === "healthy").length}
                      </div>
                      <div className="text-sm text-muted-foreground">Healthy Plants</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="glass-card rounded-2xl p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-xl bg-accent/10">
                        <Sparkles className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="font-semibold text-foreground">AI-Powered Detection</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Our advanced machine learning model can identify 11 different plant diseases 
                      including bacterial spot, blight, leaf mold, and more with high accuracy.
                    </p>
                  </div>

                  {/* Recent scans */}
                  {history.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Recent Scans</h3>
                      <div className="space-y-3">
                        {history.slice(0, 2).map(item => (
                          <HistoryCard
                            key={item.id}
                            item={item}
                            onDelete={deleteHistoryItem}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Floating scan button */}
            <div className="fixed bottom-28 left-1/2 -translate-x-1/2 z-40">
              <ScanButton onImageCapture={handleImageCapture} isScanning={isScanning} />
            </div>
          </div>
        );

      case "history":
        return (
          <div className="min-h-screen pb-24 px-5 pt-6">
            <h1 className="text-2xl font-bold text-foreground mb-6">Scan History</h1>
            
            {history.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                  <Leaf className="h-8 w-8 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground">No scans yet</p>
                <p className="text-sm text-muted-foreground">Start by scanning a plant leaf</p>
              </div>
            ) : (
              <div className="space-y-3">
                {history.map(item => (
                  <HistoryCard
                    key={item.id}
                    item={item}
                    onDelete={deleteHistoryItem}
                  />
                ))}
              </div>
            )}
          </div>
        );

      case "diseases":
        if (selectedDisease) {
          const disease = diseaseDatabase.find(d => d.id === selectedDisease);
          if (!disease) return null;
          
          return (
            <div className="min-h-screen pb-24 pt-6">
              <div className="px-5 mb-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedDisease(null)}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Library
                </Button>
              </div>
              <div className="px-5">
                <DiseaseInfoCard disease={disease} />
              </div>
            </div>
          );
        }

        return (
          <div className="min-h-screen pb-24 px-5 pt-6">
            <h1 className="text-2xl font-bold text-foreground mb-2">Disease Library</h1>
            <p className="text-muted-foreground text-sm mb-6">
              Learn about common plant diseases and how to treat them
            </p>
            
            <div className="space-y-3">
              {diseaseDatabase.map(disease => (
                <DiseaseInfoCard
                  key={disease.id}
                  disease={disease}
                  compact
                  onClick={() => setSelectedDisease(disease.id)}
                />
              ))}
            </div>
          </div>
        );

      case "profile":
        return (
          <div className="min-h-screen pb-24 px-5 pt-6">
            <h1 className="text-2xl font-bold text-foreground mb-6">Profile</h1>
            
            <div className="glass-card rounded-2xl p-6 text-center mb-6">
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-10 w-10 text-accent" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Plant Lover</h2>
              <p className="text-muted-foreground text-sm">Keeping plants healthy since 2024</p>
            </div>

            <div className="space-y-4">
              <div className="glass-card rounded-2xl p-4">
                <h3 className="font-semibold text-foreground mb-3">Statistics</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-accent">{history.length}</div>
                    <div className="text-xs text-muted-foreground">Scans</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-healthy">
                      {history.filter(h => h.result.severity === "healthy").length}
                    </div>
                    <div className="text-xs text-muted-foreground">Healthy</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-warning">
                      {history.filter(h => h.result.severity !== "healthy").length}
                    </div>
                    <div className="text-xs text-muted-foreground">Issues</div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-4">
                <h3 className="font-semibold text-foreground mb-2">About PlantGuard AI</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  PlantGuard AI uses advanced machine learning to detect plant diseases from photos. 
                  Our model is trained on thousands of images to identify 11 common plant diseases 
                  with high accuracy.
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderContent()}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
