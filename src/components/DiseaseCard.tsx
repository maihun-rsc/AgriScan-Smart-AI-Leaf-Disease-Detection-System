import { cn } from "@/lib/utils";
import { AlertTriangle, CheckCircle, XCircle, Leaf } from "lucide-react";

export interface DiseaseResult {
  name: string;
  confidence: number;
  severity: "healthy" | "mild" | "moderate" | "severe";
  description: string;
  treatment: string[];
}

interface DiseaseCardProps {
  result: DiseaseResult;
  className?: string;
}

const severityConfig = {
  healthy: {
    icon: CheckCircle,
    color: "text-healthy",
    bg: "bg-healthy/10",
    border: "border-healthy/30",
    label: "Healthy",
  },
  mild: {
    icon: AlertTriangle,
    color: "text-warning",
    bg: "bg-warning/10",
    border: "border-warning/30",
    label: "Mild",
  },
  moderate: {
    icon: AlertTriangle,
    color: "text-warning",
    bg: "bg-warning/10",
    border: "border-warning/30",
    label: "Moderate",
  },
  severe: {
    icon: XCircle,
    color: "text-danger",
    bg: "bg-danger/10",
    border: "border-danger/30",
    label: "Severe",
  },
};

export function DiseaseCard({ result, className }: DiseaseCardProps) {
  const config = severityConfig[result.severity];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-5 border animate-slide-up",
        config.border,
        className
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={cn("p-2.5 rounded-xl", config.bg)}>
            {result.severity === "healthy" ? (
              <Leaf className={cn("h-6 w-6", config.color)} />
            ) : (
              <Icon className={cn("h-6 w-6", config.color)} />
            )}
          </div>
          <div>
            <h3 className="font-bold text-lg text-foreground">{result.name}</h3>
            <span className={cn("text-sm font-medium", config.color)}>
              {config.label}
            </span>
          </div>
        </div>
        
        {/* Confidence badge */}
        <div className="flex flex-col items-end">
          <span className="text-2xl font-bold text-foreground">
            {Math.round(result.confidence)}%
          </span>
          <span className="text-xs text-muted-foreground">confidence</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {result.description}
      </p>

      {/* Treatment section */}
      {result.severity !== "healthy" && result.treatment.length > 0 && (
        <div className="mt-4 pt-4 border-t border-border">
          <h4 className="text-sm font-semibold text-foreground mb-2">
            Recommended Treatment
          </h4>
          <ul className="space-y-1.5">
            {result.treatment.map((step, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-5 h-5 rounded-full bg-accent/20 text-accent text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
