import { Clock, Leaf, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { DiseaseResult } from "./DiseaseCard";

export interface ScanHistoryItem {
  id: string;
  imageUrl: string;
  result: DiseaseResult;
  date: Date;
}

interface HistoryCardProps {
  item: ScanHistoryItem;
  onDelete?: (id: string) => void;
  onClick?: () => void;
}

const severityColors = {
  healthy: "bg-healthy",
  mild: "bg-warning",
  moderate: "bg-warning",
  severe: "bg-danger",
};

export function HistoryCard({ item, onDelete, onClick }: HistoryCardProps) {
  return (
    <div
      className="glass-card rounded-2xl overflow-hidden flex animate-fade-in cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      {/* Image */}
      <div className="w-24 h-24 flex-shrink-0 relative">
        <img
          src={item.imageUrl}
          alt="Scanned leaf"
          className="w-full h-full object-cover"
        />
        <div
          className={cn(
            "absolute top-2 left-2 w-3 h-3 rounded-full",
            severityColors[item.result.severity]
          )}
        />
      </div>

      {/* Content */}
      <div className="flex-1 p-3 flex flex-col justify-between">
        <div>
          <h4 className="font-semibold text-foreground text-sm line-clamp-1">
            {item.result.name}
          </h4>
          <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            {item.date.toLocaleDateString()}
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1 text-xs">
            <Leaf className="h-3 w-3 text-accent" />
            <span className="text-muted-foreground">
              {Math.round(item.result.confidence)}% confident
            </span>
          </div>
          
          {onDelete && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(item.id);
              }}
              className="p-1.5 rounded-lg hover:bg-danger/10 text-muted-foreground hover:text-danger transition-colors"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
