import { Leaf, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DiseaseInfo {
  id: string;
  name: string;
  scientificName?: string;
  description: string;
  symptoms: string[];
  causes: string[];
  treatment: string[];
  prevention: string[];
  imageUrl?: string;
}

interface DiseaseInfoCardProps {
  disease: DiseaseInfo;
  onClick?: () => void;
  compact?: boolean;
}

export function DiseaseInfoCard({ disease, onClick, compact = false }: DiseaseInfoCardProps) {
  if (compact) {
    return (
      <div
        className="glass-card rounded-2xl p-4 flex items-center gap-4 cursor-pointer hover:shadow-lg transition-all animate-fade-in"
        onClick={onClick}
      >
        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 overflow-hidden">
          {disease.imageUrl ? (
            <img src={disease.imageUrl} alt={disease.name} className="w-full h-full object-cover" />
          ) : (
            <Leaf className="h-8 w-8 text-primary" />
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-foreground line-clamp-1">{disease.name}</h4>
          {disease.scientificName && (
            <p className="text-xs text-muted-foreground italic">{disease.scientificName}</p>
          )}
          <p className="text-sm text-muted-foreground line-clamp-1 mt-1">{disease.description}</p>
        </div>
        
        <ChevronRight className="h-5 w-5 text-muted-foreground flex-shrink-0" />
      </div>
    );
  }

  return (
    <div className="glass-card rounded-2xl overflow-hidden animate-slide-up">
      {disease.imageUrl && (
        <div className="h-48 w-full">
          <img src={disease.imageUrl} alt={disease.name} className="w-full h-full object-cover" />
        </div>
      )}
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-foreground">{disease.name}</h3>
        {disease.scientificName && (
          <p className="text-sm text-muted-foreground italic mb-3">{disease.scientificName}</p>
        )}
        
        <p className="text-muted-foreground mb-4">{disease.description}</p>
        
        {/* Symptoms */}
        <div className="mb-4">
          <h4 className="font-semibold text-foreground mb-2">Symptoms</h4>
          <ul className="space-y-1">
            {disease.symptoms.map((symptom, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                {symptom}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Treatment */}
        <div>
          <h4 className="font-semibold text-foreground mb-2">Treatment</h4>
          <ul className="space-y-1">
            {disease.treatment.map((step, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-5 h-5 rounded-full bg-accent/20 text-accent text-xs flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
