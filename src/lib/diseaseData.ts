import type { DiseaseInfo } from "@/components/DiseaseInfoCard";
import type { DiseaseResult } from "@/components/DiseaseCard";

// Disease database based on the ML model classes
export const diseaseDatabase: DiseaseInfo[] = [
  {
    id: "bacterial_spot",
    name: "Bacterial Spot",
    scientificName: "Xanthomonas campestris",
    description: "A bacterial disease causing dark, water-soaked spots on leaves that eventually turn brown and necrotic.",
    symptoms: [
      "Small, dark, water-soaked lesions on leaves",
      "Spots with yellow halos",
      "Leaves may become distorted or drop",
      "Fruit may show raised, scab-like spots"
    ],
    causes: [
      "Warm, wet conditions favor spread",
      "Contaminated seeds or transplants",
      "Splashing water spreads bacteria"
    ],
    treatment: [
      "Remove and destroy infected plant parts",
      "Apply copper-based bactericides",
      "Improve air circulation around plants",
      "Avoid overhead irrigation"
    ],
    prevention: [
      "Use disease-free seeds and transplants",
      "Rotate crops every 2-3 years",
      "Avoid working with wet plants"
    ]
  },
  {
    id: "early_blight",
    name: "Early Blight",
    scientificName: "Alternaria solani",
    description: "A common fungal disease characterized by dark, concentric ring patterns on lower leaves.",
    symptoms: [
      "Dark brown spots with concentric rings (target pattern)",
      "Yellow halos around spots",
      "Lower leaves affected first",
      "Stem lesions possible"
    ],
    causes: [
      "Warm, humid conditions",
      "Fungal spores in soil debris",
      "Stress from poor nutrition"
    ],
    treatment: [
      "Apply fungicides containing chlorothalonil or copper",
      "Remove infected leaves immediately",
      "Mulch to prevent soil splash",
      "Ensure proper plant nutrition"
    ],
    prevention: [
      "Use resistant varieties",
      "Practice crop rotation",
      "Stake plants for better air flow",
      "Water at base of plants"
    ]
  },
  {
    id: "late_blight",
    name: "Late Blight",
    scientificName: "Phytophthora infestans",
    description: "A devastating fungal disease that can destroy entire crops rapidly under cool, wet conditions.",
    symptoms: [
      "Water-soaked, pale green lesions",
      "White fuzzy growth on leaf undersides",
      "Brown, dry, papery leaf tissue",
      "Stem and fruit infections"
    ],
    causes: [
      "Cool, wet weather (60-70°F)",
      "High humidity",
      "Infected seed potatoes or plants"
    ],
    treatment: [
      "Apply fungicides immediately upon detection",
      "Remove and destroy all infected plants",
      "Do not compost infected material",
      "Use protectant fungicides preventively"
    ],
    prevention: [
      "Plant resistant varieties",
      "Ensure good drainage",
      "Space plants adequately",
      "Monitor weather forecasts"
    ]
  },
  {
    id: "leaf_mold",
    name: "Leaf Mold",
    scientificName: "Passalora fulva",
    description: "A fungal disease primarily affecting greenhouse tomatoes, causing olive-green to brown patches.",
    symptoms: [
      "Pale green or yellow spots on upper leaf surface",
      "Olive-green to brown velvety coating underneath",
      "Leaves curl and wither",
      "Reduced fruit production"
    ],
    causes: [
      "High humidity (above 85%)",
      "Poor ventilation",
      "Temperatures 71-75°F optimal for fungus"
    ],
    treatment: [
      "Improve greenhouse ventilation",
      "Reduce humidity below 85%",
      "Apply approved fungicides",
      "Remove severely infected leaves"
    ],
    prevention: [
      "Use resistant varieties",
      "Maintain proper spacing",
      "Ensure good air circulation",
      "Avoid wetting foliage"
    ]
  },
  {
    id: "septoria_leaf_spot",
    name: "Septoria Leaf Spot",
    scientificName: "Septoria lycopersici",
    description: "A common fungal disease causing numerous small spots with dark borders and tan centers.",
    symptoms: [
      "Small circular spots (1/8 inch)",
      "Dark brown borders with gray centers",
      "Black dots (pycnidia) visible in centers",
      "Lower leaves affected first"
    ],
    causes: [
      "Warm, wet conditions",
      "Splashing rain or irrigation",
      "Fungal spores overwinter in debris"
    ],
    treatment: [
      "Apply fungicides at first sign",
      "Remove infected lower leaves",
      "Mulch to prevent splash",
      "Stake plants for airflow"
    ],
    prevention: [
      "Rotate crops 3-4 years",
      "Use clean, disease-free transplants",
      "Avoid overhead watering",
      "Clean up plant debris"
    ]
  },
  {
    id: "spider_mites",
    name: "Spider Mites",
    scientificName: "Tetranychus urticae",
    description: "Tiny arachnids that feed on plant cells, causing stippling and webbing on leaves.",
    symptoms: [
      "Yellow or bronze stippling on leaves",
      "Fine webbing on leaf undersides",
      "Leaves become dry and brittle",
      "Plant vigor declines"
    ],
    causes: [
      "Hot, dry conditions",
      "Dusty environments",
      "Overuse of broad-spectrum insecticides"
    ],
    treatment: [
      "Spray with strong water jet",
      "Apply miticides or insecticidal soap",
      "Release predatory mites",
      "Increase humidity around plants"
    ],
    prevention: [
      "Monitor plants regularly",
      "Maintain adequate humidity",
      "Avoid drought stress",
      "Preserve beneficial insects"
    ]
  },
  {
    id: "target_spot",
    name: "Target Spot",
    scientificName: "Corynespora cassiicola",
    description: "A fungal disease causing brown lesions with concentric rings, resembling a target.",
    symptoms: [
      "Brown, target-like lesions on leaves",
      "Spots may have yellow halos",
      "Lesions on stems and fruit",
      "Leaf drop in severe cases"
    ],
    causes: [
      "Warm, humid conditions",
      "Dense plant canopy",
      "Fungal spores in crop residue"
    ],
    treatment: [
      "Apply appropriate fungicides",
      "Improve air circulation",
      "Remove infected plant parts",
      "Adjust irrigation timing"
    ],
    prevention: [
      "Use resistant varieties if available",
      "Practice crop rotation",
      "Prune for better airflow",
      "Avoid excessive nitrogen"
    ]
  },
  {
    id: "yellow_leaf_curl_virus",
    name: "Yellow Leaf Curl Virus",
    scientificName: "TYLCV",
    description: "A viral disease transmitted by whiteflies, causing severe leaf curling and yellowing.",
    symptoms: [
      "Upward curling of leaf margins",
      "Yellow leaf edges",
      "Stunted plant growth",
      "Reduced or no fruit set"
    ],
    causes: [
      "Whitefly vectors (Bemisia tabaci)",
      "Infected transplants",
      "Nearby infected plants"
    ],
    treatment: [
      "Remove and destroy infected plants",
      "Control whitefly populations",
      "Use reflective mulches",
      "No cure once infected"
    ],
    prevention: [
      "Use resistant varieties",
      "Screen transplant production",
      "Control whiteflies proactively",
      "Remove alternate host plants"
    ]
  },
  {
    id: "mosaic_virus",
    name: "Tomato Mosaic Virus",
    scientificName: "ToMV",
    description: "A highly contagious viral disease causing mottled light and dark green patterns on leaves.",
    symptoms: [
      "Light and dark green mosaic pattern",
      "Leaf distortion and curling",
      "Reduced fruit quality",
      "Stunted plant growth"
    ],
    causes: [
      "Contact with infected plants",
      "Contaminated tools and hands",
      "Infected seeds"
    ],
    treatment: [
      "No cure available",
      "Remove and destroy infected plants",
      "Disinfect all tools with 10% bleach",
      "Wash hands thoroughly"
    ],
    prevention: [
      "Use virus-free certified seed",
      "Disinfect tools regularly",
      "Wash hands before handling plants",
      "Control aphid vectors"
    ]
  },
  {
    id: "powdery_mildew",
    name: "Powdery Mildew",
    scientificName: "Oidium neolycopersici",
    description: "A fungal disease creating white, powdery coating on leaf surfaces.",
    symptoms: [
      "White powdery spots on leaves",
      "Leaves turn yellow then brown",
      "Reduced photosynthesis",
      "Leaf drop in severe cases"
    ],
    causes: [
      "Moderate temperatures (60-80°F)",
      "High humidity but dry leaves",
      "Poor air circulation"
    ],
    treatment: [
      "Apply sulfur-based fungicides",
      "Use neem oil or potassium bicarbonate",
      "Remove severely affected leaves",
      "Improve air circulation"
    ],
    prevention: [
      "Choose resistant varieties",
      "Space plants properly",
      "Avoid excessive nitrogen",
      "Morning watering preferred"
    ]
  },
  {
    id: "healthy",
    name: "Healthy Plant",
    description: "Your plant appears healthy with no signs of disease or pest damage.",
    symptoms: [
      "Vibrant green color",
      "No spots or lesions",
      "Normal leaf shape and size",
      "Good overall vigor"
    ],
    causes: [],
    treatment: [
      "Continue current care routine",
      "Monitor regularly for early signs of issues"
    ],
    prevention: [
      "Maintain proper watering schedule",
      "Ensure adequate nutrition",
      "Provide good air circulation",
      "Regular plant inspections"
    ]
  }
];

// Simulated disease detection - In production, this would call your ML model API
export async function detectDisease(imageFile: File): Promise<DiseaseResult> {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Randomly select a disease for demo purposes
  // In production, this would be replaced with actual ML model inference
  const diseases: Array<{ name: string; severity: DiseaseResult["severity"] }> = [
    { name: "Healthy Plant", severity: "healthy" },
    { name: "Bacterial Spot", severity: "moderate" },
    { name: "Early Blight", severity: "mild" },
    { name: "Late Blight", severity: "severe" },
    { name: "Leaf Mold", severity: "mild" },
    { name: "Septoria Leaf Spot", severity: "moderate" },
    { name: "Spider Mites", severity: "mild" },
    { name: "Target Spot", severity: "moderate" },
    { name: "Yellow Leaf Curl Virus", severity: "severe" },
    { name: "Tomato Mosaic Virus", severity: "moderate" },
    { name: "Powdery Mildew", severity: "mild" },
  ];
  
  const selected = diseases[Math.floor(Math.random() * diseases.length)];
  const diseaseInfo = diseaseDatabase.find(d => d.name === selected.name);
  
  return {
    name: selected.name,
    confidence: 75 + Math.random() * 20, // 75-95%
    severity: selected.severity,
    description: diseaseInfo?.description || "Analysis complete.",
    treatment: diseaseInfo?.treatment || [],
  };
}

export function getDiseaseById(id: string): DiseaseInfo | undefined {
  return diseaseDatabase.find(d => d.id === id);
}
