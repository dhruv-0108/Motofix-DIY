export type Part = {
  id: string;                   // e.g. "engine-oil-cap"
  name: string;                 // e.g. "Engine Oil Filler Cap"
  category: "engine" | "brakes" | "suspension" | "electrical" | "body" | "drivetrain" | "fuel" | "exhaust";
  description: string;          // What this part is and what it does (2-3 sentences max)
  removalSteps: string[];       // Ordered steps to remove this part
  toolsRequired: string[];      // e.g. ["17mm spanner", "flathead screwdriver"]
  torqueSpec?: string;          // e.g. "25 Nm" — only if applicable
  sparePartOptions: {
    name: string;
    partNumber?: string;        // OEM part number if known
    type: "OEM" | "OEM-equivalent" | "aftermarket";
    notes?: string;
  }[];
  hotspot: {
    x: number;                  // percentage from left of illustration container (0-100)
    y: number;                  // percentage from top of illustration container (0-100)
  };
};
