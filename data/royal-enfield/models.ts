export interface BikeModel {
  id: string;
  name: string;
  brand: string;
  years: number[];
  specs: {
    engineCc: string;
    engineType: string;
    fuelType: string;
    fuelTankCapacity: string;
    drive: string;
    engineOilGrade: string;
    oilCapacity: string;
    coolantType?: string;
    tyres: {
      front: string;
      rear: string;
    };
    tyrePressure: {
      city: { front: string; rear: string };
      highway: { front: string; rear: string };
    };
    battery: string;
  };
}

export const royalEnfieldModels: BikeModel[] = [
  {
    id: "classic-350",
    name: "Classic 350",
    brand: "Royal Enfield",
    years: [2021, 2022, 2023, 2024],
    specs: {
      engineCc: "349cc",
      engineType: "Single cylinder, 4 stroke, Air-Oil cooled",
      fuelType: "Petrol",
      fuelTankCapacity: "13 Litres",
      drive: "Chain Drive",
      engineOilGrade: "15W50 API SN, JASO MA2 Semi Synthetic",
      oilCapacity: "1.7 Litres (dry) / 1.4 Litres (refill)",
      tyres: { front: "100/90 - 19", rear: "120/80 - 18" },
      tyrePressure: {
        city: { front: "32 psi", rear: "32 psi (solo) / 36 psi (pillion)" },
        highway: { front: "32 psi", rear: "36 psi" }
      },
      battery: "12V, 8 Ah, VRLA"
    }
  },
  {
    id: "meteor-350",
    name: "Meteor 350",
    brand: "Royal Enfield",
    years: [2020, 2021, 2022, 2023, 2024],
    specs: {
      engineCc: "349cc",
      engineType: "Single cylinder, 4 stroke, Air-Oil cooled",
      fuelType: "Petrol",
      fuelTankCapacity: "15 Litres",
      drive: "Chain Drive",
      engineOilGrade: "15W50 API SN, JASO MA2 Semi Synthetic",
      oilCapacity: "1.7 Litres",
      tyres: { front: "100/90 - 19", rear: "140/70 - 17" },
      tyrePressure: {
        city: { front: "32 psi", rear: "36 psi" },
        highway: { front: "32 psi", rear: "36 psi" }
      },
      battery: "12V, 8 Ah, VRLA"
    }
  },
  {
    id: "bullet-350",
    name: "Bullet 350",
    brand: "Royal Enfield",
    years: [2023, 2024],
    specs: {
      engineCc: "349cc",
      engineType: "Single cylinder, 4 stroke, Air-Oil cooled",
      fuelType: "Petrol",
      fuelTankCapacity: "13 Litres",
      drive: "Chain Drive",
      engineOilGrade: "15W50 API SN, JASO MA2 Semi Synthetic",
      oilCapacity: "1.7 Litres",
      tyres: { front: "100/90 - 19", rear: "120/80 - 18" },
      tyrePressure: {
        city: { front: "32 psi", rear: "32 psi (solo) / 36 psi (pillion)" },
        highway: { front: "32 psi", rear: "36 psi" }
      },
      battery: "12V, 8 Ah, VRLA"
    }
  },
  {
    id: "himalayan-450",
    name: "Himalayan 450",
    brand: "Royal Enfield",
    years: [2023, 2024],
    specs: {
      engineCc: "452cc",
      engineType: "Liquid Cooled, Single Cylinder, DOHC, 4 Valves",
      fuelType: "Petrol",
      fuelTankCapacity: "17 Litres",
      drive: "Chain Drive",
      engineOilGrade: "10W40 API SN, JASO MA2 Fully Synthetic",
      oilCapacity: "2.1 Litres",
      coolantType: "Ethylene Glycol 50:50",
      tyres: { front: "90/90 - 21", rear: "140/80 R17" },
      tyrePressure: {
        city: { front: "32 psi", rear: "32 psi (solo) / 36 psi (pillion)" },
        highway: { front: "32 psi", rear: "36 psi" }
      },
      battery: "12V, 8 Ah, VRLA"
    }
  },
  {
    id: "hunter-350",
    name: "Hunter 350",
    brand: "Royal Enfield",
    years: [2022, 2023, 2024],
    specs: {
      engineCc: "349cc",
      engineType: "Single cylinder, 4 stroke, Air-Oil cooled",
      fuelType: "Petrol",
      fuelTankCapacity: "13 Litres",
      drive: "Chain Drive",
      engineOilGrade: "15W50 API SN, JASO MA2 Semi Synthetic",
      oilCapacity: "1.7 Litres",
      tyres: { front: "110/70 - 17", rear: "140/70 - 17" },
      tyrePressure: {
        city: { front: "29 psi", rear: "32 psi" },
        highway: { front: "29 psi", rear: "32 psi" }
      },
      battery: "12V, 8 Ah, VRLA"
    }
  }
];
