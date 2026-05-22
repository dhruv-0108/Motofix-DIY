import { Part } from "./types";

export const parts: Part[] = [
  // ================= ENGINE =================
  {
    id: "engine-oil-cap",
    name: "Engine Oil Filler Cap",
    category: "engine",
    description: "Threaded cap on the clutch/crankcase cover used to seal the engine oil filling port. Keeps dirt and water out of the lubrication system.",
    toolsRequired: ["Clean rag", "Pliers (optional, if tight)"],
    torqueSpec: "Hand tight (approx. 3-5 Nm)",
    removalSteps: [
      "Ensure the motorcycle is parked on center stand and the engine is cool.",
      "Clean the area around the filler cap with a clean rag to prevent debris falling in.",
      "Turn the cap counter-clockwise to unscrew and remove it.",
      "Inspect the rubber O-ring seal on the cap for cracks or compression set. Replace if damaged."
    ],
    sparePartOptions: [
      { name: "RE OEM Oil Filler Cap", partNumber: "RAM00122/A", type: "OEM", notes: "Comes with pre-installed rubber O-ring seal." },
      { name: "Tec Bike Parts CNC Cap", type: "aftermarket", notes: "Stylish anodized aluminum upgrade with hex head key." }
    ],
    hotspot: { x: 46.7, y: 64.3 }
  },
  {
    id: "engine-oil-drain-bolt",
    name: "Engine Oil Drain Bolt",
    category: "engine",
    description: "Located at the bottom of the engine sump. Must be removed during oil changes to completely drain dirty engine oil.",
    toolsRequired: ["17mm Socket Spanner", "Torque wrench", "Drain pan", "Clean rag"],
    torqueSpec: "24 Nm",
    removalSteps: [
      "Warm up the engine for 5 minutes, then switch it off.",
      "Place a drain pan directly under the engine crankcase.",
      "Locate the 17mm drain bolt on the bottom of the engine casing.",
      "Loosen and remove the bolt counter-clockwise. Use caution as hot oil will drain immediately.",
      "Remove the old copper crush washer. Clean the magnetic tip of the bolt of any metallic particles.",
      "Install a new copper crush washer, thread the bolt back by hand, and torque to 24 Nm."
    ],
    sparePartOptions: [
      { name: "RE OEM Drain Bolt & Washer Kit", partNumber: "888402", type: "OEM", notes: "Includes magnetic bolt and fresh copper washer." },
      { name: "Gold Plugs Magnetic Drain Bolt", type: "aftermarket", notes: "High strength magnet to catch micro-shavings." }
    ],
    hotspot: { x: 47.5, y: 78.6 }
  },
  {
    id: "air-filter-housing",
    name: "Air Filter Housing",
    category: "engine",
    description: "Protective plastic enclosure housing the air filter element, located behind the right-side utility box. Feeds clean air to the engine's throttle body.",
    toolsRequired: ["4mm Allen key", "Phillips head screwdriver", "Clean dry cloth"],
    torqueSpec: "3 Nm",
    removalSteps: [
      "Use the ignition key to unlock and open the right-side utility panel.",
      "Locate and unscrew the three retaining screws on the air filter cover using a 4mm Allen key.",
      "Pull the cover outwards to expose the air filter cartridge.",
      "Pull the cartridge out of the housing housing. Clean the inner housing with a dry cloth.",
      "Insert the new filter cartridge, ensuring the rubber seal is seated correctly.",
      "Reinstall the housing cover and secure the screws evenly."
    ],
    sparePartOptions: [
      { name: "RE OEM Air Filter Element", partNumber: "RAM00089/A", type: "OEM", notes: "Paper element. Replace every 10,000 km." },
      { name: "DNA High Performance Air Filter", type: "aftermarket", notes: "Washable multi-use cotton gauze filter, improves airflow." }
    ],
    hotspot: { x: 56.7, y: 60.0 }
  },
  {
    id: "spark-plug",
    name: "Spark Plug",
    category: "engine",
    description: "Provides the electric spark required to ignite the fuel-air mixture in the cylinder. Essential for smooth combustion and starting.",
    toolsRequired: ["16mm Spark plug socket", "Extension bar", "Spark plug gap gauge", "Rag"],
    torqueSpec: "15 Nm",
    removalSteps: [
      "Turn off the ignition and let the engine cool completely.",
      "Gently pull off the spark plug cap/suppressor cap from the plug tip.",
      "Clean any dirt around the plug base with compressed air or a brush.",
      "Insert the 16mm spark plug socket and turn counter-clockwise to unscrew the plug.",
      "Check the plug electrode color (light tan is optimal; black or oily indicates issues).",
      "Verify plug gap (0.7 - 0.8 mm). Thread new plug by hand, then tighten with socket to 15 Nm."
    ],
    sparePartOptions: [
      { name: "BOSCH YR7DC+ Spark Plug", partNumber: "RAM00056/B", type: "OEM", notes: "Standard replacement gap pre-set." },
      { name: "NGK CPR8EAIX-9 Iridium IX", type: "OEM-equivalent", notes: "Upgraded spark efficiency, smoother throttle, longer life." }
    ],
    hotspot: { x: 45.0, y: 60.0 }
  },
  {
    id: "valve-cover",
    name: "Valve Cover / Tappet Cover",
    category: "engine",
    description: "The metal cover sealing the top of the cylinder head. Houses the camshaft, rocker arms, and provides access for tappet clearance adjustments.",
    toolsRequired: ["5mm Allen key", "New rubber gasket (recommended)", "Clean cloth"],
    torqueSpec: "10 Nm",
    removalSteps: [
      "Remove the seat and fuel tank to gain clear access to the cylinder head.",
      "Clean any dirt around the valve cover joints.",
      "Unbolt the four Allen head bolts securing the valve cover in a criss-cross pattern.",
      "Carefully tap the cover with a rubber mallet to break the seal, and lift it off.",
      "Clean the old gasket mating surfaces. Place a new rubber gasket in the cover groove.",
      "Refit the cover, start bolts by hand, and torque to 10 Nm in a diagonal pattern."
    ],
    sparePartOptions: [
      { name: "RE OEM Valve Cover Gasket", partNumber: "RAM00004/A", type: "OEM", notes: "High temp molded silicone rubber gasket." }
    ],
    hotspot: { x: 46.7, y: 55.7 }
  },
  {
    id: "clutch-cover",
    name: "Clutch Cover",
    category: "engine",
    description: "Large metal casing on the right side of the engine that encloses and protects the wet clutch basket and primary drive gear assembly.",
    toolsRequired: ["8mm T-spanner", "Rubber mallet", "Gasket scraper", "Oil drain pan"],
    torqueSpec: "12 Nm",
    removalSteps: [
      "Drain the engine oil completely by removing the sump drain bolt.",
      "Disconnect the clutch cable from the clutch release lever on top of the cover.",
      "Remove the rider right footrest assembly and rear brake lever pivot if blocking.",
      "Unbolt the clutch cover bolts in a cross pattern using an 8mm T-spanner.",
      "Gently tap the cover sides with a rubber mallet and pull it straight off. Do not pry with metal screwdrivers.",
      "Scrape off old gasket residue, clean the surface, place a new paper gasket, and reassemble."
    ],
    sparePartOptions: [
      { name: "RE OEM Clutch Cover Gasket", partNumber: "RAM00072/C", type: "OEM", notes: "Replace gasket every time the cover is opened." }
    ],
    hotspot: { x: 48.3, y: 68.6 }
  },

  // ================= FUEL SYSTEM =================
  {
    id: "fuel-tank-cap",
    name: "Fuel Tank Cap",
    category: "fuel",
    description: "Key-lockable chrome cap protecting the fuel tank opening. Features a one-way breather valve to prevent vacuum locking.",
    toolsRequired: ["Ignition key", "Lube spray (for locks)"],
    torqueSpec: "N/A",
    removalSteps: [
      "Insert the ignition key into the fuel cap lock cylinder.",
      "Turn the key clockwise and flip open the cap assembly.",
      "Inspect the rubber seal underneath the cap for dryness, cracking, or deterioration.",
      "Ensure the small water drain hole near the filler neck is clear of dirt."
    ],
    sparePartOptions: [
      { name: "RE OEM Chrome Fuel Cap Assembly", partNumber: "RAM00160/B", type: "OEM", notes: "Chrome finish, lock barrel included." }
    ],
    hotspot: { x: 50.0, y: 37.1 }
  },
  {
    id: "fuel-tank",
    name: "Fuel Tank",
    category: "fuel",
    description: "13-litre tear-drop steel tank containing the petrol fuel supply. Incorporates the fuel pump assembly inside its bottom cavity.",
    toolsRequired: ["12mm Socket Spanner", "Pliers", "Soft blanket to lay tank on"],
    torqueSpec: "20 Nm",
    removalSteps: [
      "Remove the rider and pillion seats.",
      "Disconnect the battery negative terminal to prevent electrical sparks.",
      "Remove the single 12mm bolt at the rear base of the fuel tank.",
      "Lift the rear of the tank slightly and carefully unplug the electrical coupler to the fuel pump.",
      "Disconnect the high-pressure fuel line quick connector (squeeze green tabs and pull).",
      "Slide the tank backwards out of its front rubber mounting dampers and lift off."
    ],
    sparePartOptions: [
      { name: "RE OEM Fuel Tank - Halcyon Black", partNumber: "RAM00302/A", type: "OEM", notes: "Pre-painted with original badges and decals." }
    ],
    hotspot: { x: 50.0, y: 42.9 }
  },
  {
    id: "fuel-pump",
    name: "Fuel Pump",
    category: "fuel",
    description: "Submerged high-pressure electric pump inside the fuel tank. Delivers pressurized fuel to the Electronic Fuel Injection (EFI) system.",
    toolsRequired: ["10mm Socket Spanner", "Screwdriver", "Torque wrench"],
    torqueSpec: "9 Nm",
    removalSteps: [
      "Remove the fuel tank from the motorcycle and flip it upside down onto a soft surface.",
      "Locate the fuel pump circular flange assembly on the bottom of the tank.",
      "Remove the five 10mm bolts securing the fuel pump bracket flange.",
      "Carefully pull the fuel pump assembly out, being careful not to damage the plastic float arm.",
      "Clean or replace the fuel pump mesh filter. Replace the sealing O-ring before reinstalling.",
      "Tighten mounting bolts in a star pattern to 9 Nm."
    ],
    sparePartOptions: [
      { name: "RE OEM Fuel Pump Assembly", partNumber: "RAM00114/E", type: "OEM", notes: "Complete assembly with float and pre-filter." },
      { name: "Bosch Fuel Pump Filter Kit", type: "aftermarket", notes: "Replacement mesh filter cartridge only." }
    ],
    hotspot: { x: 54.2, y: 48.6 }
  },

  // ================= DRIVETRAIN =================
  {
    id: "chain-adjuster",
    name: "Chain Adjuster (Both Sides)",
    category: "drivetrain",
    description: "Bolted slide mechanism at the rear axle slots. Used to move the rear wheel back or forward to set proper drive chain tension.",
    toolsRequired: ["24mm ring spanner", "19mm ring spanner", "12mm open spanner", "Steel ruler"],
    torqueSpec: "85 Nm (Axle Nut)",
    removalSteps: [
      "Place the bike on its center stand on level ground.",
      "Loosen the main rear axle nut (24mm) and the axle head (19mm) by 2-3 turns.",
      "Back off the locknuts on the 12mm adjuster bolts on both sides of the swingarm.",
      "Turn the adjuster bolts clockwise in small equal increments (1/4 turn) to tighten chain.",
      "Verify alignment marks on the swingarm are identical on both left and right sides.",
      "Measure chain play at center (25-30 mm). Torque axle nut to 85 Nm and tighten locknuts."
    ],
    sparePartOptions: [
      { name: "RE OEM Chain Adjuster Assembly", partNumber: "RAM00045/A", type: "OEM", notes: "Standard replacement steel plates and bolts." }
    ],
    hotspot: { x: 80.8, y: 74.3 }
  },
  {
    id: "sprocket-cover",
    name: "Sprocket Cover",
    category: "drivetrain",
    description: "Metal casing on the left side of the engine covering the engine output shaft and drive sprocket. Protects the rider's feet from the spinning chain.",
    toolsRequired: ["8mm T-spanner", "Clean rag", "Degreaser"],
    torqueSpec: "10 Nm",
    removalSteps: [
      "Locate the sprocket cover on the left lower side of the engine.",
      "Remove the three 8mm hex bolts holding the cover in place.",
      "Pull the cover outward, carefully disengaging any hose clips or wires.",
      "Clean out accumulated chain lube and road grime from inside the cover.",
      "Reinstall the cover and torque bolts to 10 Nm."
    ],
    sparePartOptions: [
      { name: "RE OEM Front Sprocket Cover", partNumber: "RAM00081/A", type: "OEM", notes: "Cast alloy protective shell." }
    ],
    hotspot: { x: 60.0, y: 71.4 }
  },
  {
    id: "rear-sprocket",
    name: "Rear Sprocket",
    category: "drivetrain",
    description: "Toothed steel gear wheel bolted to the rear wheel hub that drives the wheel via the chain. Part of the final drive reduction ratio.",
    toolsRequired: ["14mm socket spanner", "Torque wrench", "Axle tools"],
    torqueSpec: "38 Nm",
    removalSteps: [
      "Remove the rear wheel from the motorcycle.",
      "Pull off the rear sprocket drum carrier from the wheel hub.",
      "Hold the carrier in a soft-jaw vice or on a wooden block.",
      "Flatten the metal locking tabs on the sprocket mounting nuts.",
      "Remove the six 14mm nuts and pull the sprocket off the carrier.",
      "Place new sprocket, torque nuts to 38 Nm in a star pattern, and bend locking tabs up."
    ],
    sparePartOptions: [
      { name: "RE OEM Sprocket & Chain Kit", partNumber: "RAM00234/A", type: "OEM", notes: "Includes front sprocket (15T), rear sprocket (42T), and O-ring chain." },
      { name: "Rolon Brass Chain & Sprocket Kit", type: "aftermarket", notes: "Heavy-duty brass plated sprockets for longer life." }
    ],
    hotspot: { x: 75.0, y: 74.3 }
  },

  // ================= BRAKES =================
  {
    id: "front-brake-caliper",
    name: "Front Brake Caliper",
    category: "brakes",
    description: "Hydraulic assembly mounted on the left front fork leg. Squeezes the brake pads against the brake disc to slow down the front wheel.",
    toolsRequired: ["12mm Socket", "Brake cleaner", "Torque wrench"],
    torqueSpec: "28 Nm (Mounting bolts)",
    removalSteps: [
      "Support front wheel off the ground.",
      "Remove the two 12mm caliper mounting bolts from the fork leg.",
      "Slide the caliper assembly off the brake disc. Do NOT let it hang by the rubber hose.",
      "Clean brake dust from pistons and sliders using specialized brake cleaner spray.",
      "Inspect pistons for fluid leaks or corrosion. Push pistons back if fitting new pads.",
      "Refit caliper over disc, insert mounting bolts, and torque to 28 Nm."
    ],
    sparePartOptions: [
      { name: "Bybre Front Caliper Assembly", partNumber: "RAM00067/B", type: "OEM", notes: "OEM Bybre twin-piston floating caliper." }
    ],
    hotspot: { x: 15.0, y: 82.9 }
  },
  {
    id: "rear-brake-caliper",
    name: "Rear Brake Caliper",
    category: "brakes",
    description: "Hydraulic assembly mounted on the rear swingarm bracket. Squeezes rear brake pads against the disc, integrated with dual-channel ABS.",
    toolsRequired: ["12mm Socket", "Flathead screwdriver", "Brake cleaner"],
    torqueSpec: "25 Nm",
    removalSteps: [
      "Remove the caliper pin cover cap with a flathead screwdriver.",
      "Loosen the caliper slide bolts using a socket spanner.",
      "Remove the main caliper bracket bolts and slide the caliper off the rear disc.",
      "Clean piston seals with brake cleaner. Do not pump brake lever while caliper is off.",
      "Inspect caliper slide pins for grease; relube with high-temp silicone grease.",
      "Refit caliper over disc and torque mounting bolts to 25 Nm."
    ],
    sparePartOptions: [
      { name: "Bybre Rear Caliper Assembly", partNumber: "RAM00092/A", type: "OEM", notes: "Single-piston floating caliper by Brembo Bybre." }
    ],
    hotspot: { x: 75.0, y: 82.9 }
  },
  {
    id: "front-brake-fluid-reservoir",
    name: "Front Brake Fluid Reservoir",
    category: "brakes",
    description: "Metal reservoir container mounted on the right handlebar. Stores and feeds brake fluid into the front master cylinder.",
    toolsRequired: ["Phillips screwdriver", "Clean lint-free cloth", "DOT 4 brake fluid"],
    torqueSpec: "1.5 Nm (Cap screws)",
    removalSteps: [
      "Turn the handlebars until the reservoir top cover is completely level.",
      "Place a cloth around the handlebar to protect paint from corrosive brake fluid.",
      "Remove the two Phillips screws holding the top cover.",
      "Lift off the cover, plastic plate, and rubber diaphragm bellows.",
      "Top up with fresh, clean DOT 4 brake fluid up to the MAX line (do not overfill).",
      "Reinstall the rubber diaphragm, plate, cover, and tighten screws gently."
    ],
    sparePartOptions: [
      { name: "RE OEM DOT 4 Brake Fluid (250ml)", partNumber: "888321", type: "OEM", notes: "Recommended fluid. Do not mix DOT 4 with DOT 5." }
    ],
    hotspot: { x: 32.5, y: 30.0 }
  },
  {
    id: "front-brake-pads",
    name: "Front Brake Pads",
    category: "brakes",
    description: "Friction material pads fitted inside the front caliper. They wear down over time and must be replaced when thickness is below 1mm.",
    toolsRequired: ["5mm Allen key", "Flathead screwdriver", "Piston reset tool"],
    torqueSpec: "17 Nm (Pad retaining pin)",
    removalSteps: [
      "Remove the caliper assembly from the front fork leg.",
      "Remove the safety clip and unscrew the pad retaining pin using a 5mm Allen key.",
      "Pull the worn brake pads out from the bottom of the caliper.",
      "Clean pad carrier spring and slide plates with a wire brush.",
      "Push caliper pistons fully back into housing using a piston spreader or wood block.",
      "Insert new pads, insert pad pin, torque to 17 Nm, refit safety clip, and pump lever to restore pressure."
    ],
    sparePartOptions: [
      { name: "RE OEM Front Organic Pads", partNumber: "RAM00034/A", type: "OEM", notes: "Excellent initial bite, low noise." },
      { name: "EBC Sintered Brake Pads (Double-H)", type: "aftermarket", notes: "Sintered copper alloy. Outstanding wet/dry stopping power and longer life." }
    ],
    hotspot: { x: 15.0, y: 85.0 }
  },
  {
    id: "rear-brake-pads",
    name: "Rear Brake Pads",
    category: "brakes",
    description: "Friction material pads inside the rear caliper. Responsible for secondary braking and stabilizer control.",
    toolsRequired: ["5mm Allen key", "Small needle nose pliers", "C-clamp"],
    torqueSpec: "15 Nm",
    removalSteps: [
      "Support the bike and locate the rear caliper slider assembly.",
      "Remove the R-clip safety pin from the rear pad retaining pin.",
      "Unscrew the pad pin, and slide the two brake pads out of the carrier slot.",
      "Clean out all dust and road dirt using caliper spray.",
      "Push back the single piston carefully using a clamp.",
      "Slide in new pads, grease and insert retaining pin, tighten, and secure safety clip."
    ],
    sparePartOptions: [
      { name: "RE OEM Rear Brake Pads", partNumber: "RAM00088/B", type: "OEM", notes: "Standard organic compound." },
      { name: "Brembo Carbon Ceramic Pads", type: "aftermarket", notes: "High fade resistance, friendly to brake discs." }
    ],
    hotspot: { x: 75.0, y: 85.0 }
  },

  // ================= SUSPENSION =================
  {
    id: "front-fork-legs",
    name: "Front Fork Legs (Left & Right)",
    category: "suspension",
    description: "41mm telescopic front forks that absorb road shocks. House the coil springs and hydraulic damping oil.",
    toolsRequired: ["27mm spanner", "12mm socket", "Fork oil level gauge", "Jack"],
    torqueSpec: "22 Nm (Pinch bolts)",
    removalSteps: [
      "Place bike on center stand and jack up under the engine to raise front wheel.",
      "Remove the front wheel, mudguard, and front brake caliper.",
      "Loosen the top fork cap bolts (27mm) slightly while still held in triple clamps.",
      "Loosen the upper and lower triple clamp pinch bolts (12mm).",
      "Slide the fork legs downwards out of the triple clamps.",
      "To service oil: Unscrew top cap, remove spring, pump out old oil, refill with 450ml of 2.5W or 5W fork oil per leg."
    ],
    sparePartOptions: [
      { name: "RE OEM Fork Oil (1 Litre)", partNumber: "888204", type: "OEM", notes: "Grade 2.5W or 5W fluid for optimal damping." },
      { name: "Motul Fork Oil Expert Medium 10W", type: "aftermarket", notes: "Slightly stiffer damping for reduced front-end dive." }
    ],
    hotspot: { x: 26.7, y: 54.3 }
  },
  {
    id: "rear-shock-absorbers",
    name: "Rear Shock Absorbers",
    category: "suspension",
    description: "Twin gas-charged shock absorbers with 6-step adjustable preload. Dampens rear wheel vertical motion.",
    toolsRequired: ["17mm Socket Spanner", "14mm spanner", "Preload adjuster C-spanner"],
    torqueSpec: "35 Nm",
    removalSteps: [
      "Ensure bike is stable on its center stand.",
      "Loosen the top mounting nut (17mm) and the bottom mounting bolt (14mm).",
      "Support the rear swingarm slightly to relieve tension on the mounting bolt.",
      "Pull off the shock absorber assembly from the mounting studs.",
      "Inspect the rubber bushings in the shock eyes for wear or tearing.",
      "Refit new shocks, torque fasteners to 35 Nm, and adjust preload to desired rider weight."
    ],
    sparePartOptions: [
      { name: "RE OEM Rear Shock (Single)", partNumber: "RAM00140/A", type: "OEM", notes: "Gas-charged damper with black spring." },
      { name: "YSS RG Series Twin Shocks", type: "aftermarket", notes: "High performance piggyback reservoir dampers with rebound adjustment." }
    ],
    hotspot: { x: 68.3, y: 60.0 }
  },

  // ================= ELECTRICAL =================
  {
    id: "battery",
    name: "Battery (Access Point)",
    category: "electrical",
    description: "12V, 8Ah maintenance-free VRLA battery. Power source for the starter motor, EFI, ECU, and instrument cluster.",
    toolsRequired: ["Ignition key", "Phillips head screwdriver", "10mm socket"],
    torqueSpec: "5 Nm (Terminal bolts)",
    removalSteps: [
      "Open and remove the left-side utility box cover with the ignition key.",
      "Remove the single hex bolt holding the metal battery retaining strap.",
      "Slide the battery slightly outward to access terminal cables.",
      "ALWAYS disconnect the Negative (-) black terminal first to avoid short circuits.",
      "Disconnect the Positive (+) red terminal and lift the battery completely out.",
      "Clean terminal oxidation with wire brush, apply petroleum jelly, and reinstall positive first."
    ],
    sparePartOptions: [
      { name: "Exide Xplore 12V 8Ah VRLA", partNumber: "RAM00210/A", type: "OEM", notes: "Factory-fitted model, comes with 24-month warranty." },
      { name: "Amaron Rider Pro ETX9", type: "OEM-equivalent", notes: "Maintenance-free calcium-alloy battery with high cranking amps." }
    ],
    hotspot: { x: 60.8, y: 58.6 }
  },
  {
    id: "fuse-box",
    name: "Fuse Box",
    category: "electrical",
    description: "Plastic module containing miniature blade fuses. Protects individual electrical circuits (EFI, Lights, ABS, Ignition) from power surges.",
    toolsRequired: ["Fuse puller tool (inside box cap)", "Ignition key"],
    torqueSpec: "N/A",
    removalSteps: [
      "Open the left-side utility box cover using the ignition key.",
      "Locate the small rectangular black plastic box labeled 'FUSES'.",
      "Squeeze the plastic locking tabs on the sides and lift the cover off.",
      "Read the fuse diagram printed on the inside of the cover cap.",
      "Use the plastic fuse puller to extract suspect fuses. Look for a broken metal bridge inside.",
      "Replace with a fuse of EXACTLY the same Amp rating (e.g. 10A, 15A, 25A)."
    ],
    sparePartOptions: [
      { name: "RE OEM Blade Fuse Assortment", partNumber: "RAM00099/A", type: "OEM", notes: "Pack of 5 fuses containing 10A, 15A, and 25A ratings." }
    ],
    hotspot: { x: 62.5, y: 61.4 }
  },
  {
    id: "headlight-unit",
    name: "Headlight Unit",
    category: "electrical",
    description: "Retro round headlight assembly housing the main high/low beam bulb and small pilot lights inside the signature tiger eyes casings.",
    toolsRequired: ["Phillips screwdriver", "H4 replacement bulb (if replacing bulb)"],
    torqueSpec: "4 Nm",
    removalSteps: [
      "Locate the two Phillips screws at the bottom sides of the chrome headlight rim.",
      "Unscrew them and pull the bottom of the chrome rim outwards, then lift upwards.",
      "Disconnect the main 3-pin H4 wiring socket from the back of the bulb.",
      "Pull off the rubber dust sealing boot.",
      "Unclip the wire wire spring retainer and slide the H4 bulb out. Do NOT touch bulb glass with bare fingers.",
      "Insert new bulb, clip wire, fit boot, plug wiring socket, and secure rim."
    ],
    sparePartOptions: [
      { name: "RE OEM Halogen H4 12V 60/55W", partNumber: "RAM00007/A", type: "OEM", notes: "Original warm-yellow light bulb." },
      { name: "Philips LED Ultinon Essential H4", type: "aftermarket", notes: "6000K bright white LED upgrade, plug-and-play, low power consumption." }
    ],
    hotspot: { x: 22.5, y: 34.3 }
  },

  // ================= BODY & PANELS =================
  {
    id: "side-panels",
    name: "Side Panels (Left & Right)",
    category: "body",
    description: "Painted metal utility covers. Left side houses the battery and fuse box, right side houses the air filter and tool kit.",
    toolsRequired: ["Ignition key"],
    torqueSpec: "N/A",
    removalSteps: [
      "Insert the ignition key into the keyhole on the side cover.",
      "Turn key clockwise to unlock.",
      "Gently pull the bottom corners of the panel outward to release them from rubber grommets.",
      "Lift the panel upward off the top frame locating hooks.",
      "When reinstalling, apply a drop of silicone grease or soap to the rubber grommets to make them slide on smoothly."
    ],
    sparePartOptions: [
      { name: "RE OEM Left Side Panel (Gloss Black)", partNumber: "RAM00401/B", type: "OEM", notes: "Matches original factory color codes." }
    ],
    hotspot: { x: 63.3, y: 62.9 }
  },
  {
    id: "seat",
    name: "Seat (Split Rider & Pillion)",
    category: "body",
    description: "Classic split saddle design. Pillion seat must be removed to access rider seat mounting bolts and structural frame.",
    toolsRequired: ["10mm spanner", "12mm socket spanner"],
    torqueSpec: "15 Nm",
    removalSteps: [
      "Locate the two 10mm bolts under the rear edge of the pillion seat.",
      "Remove both bolts and lift the pillion seat off.",
      "This exposes the two 12mm hex bolts securing the rear of the rider seat.",
      "Unscrew the 12mm bolts, pull the rider seat backwards, and lift it off.",
      "Inspect the seat underside rubber bumpers. Replace if missing to avoid tank paint scratches."
    ],
    sparePartOptions: [
      { name: "RE OEM Touring Dual Seat", partNumber: "1990480", type: "OEM", notes: "Molded 3D mesh seat for superior long-ride comfort." },
      { name: "Sahara Seats Diamond Cut Saddle", type: "aftermarket", notes: "Premium ribbed design with memory foam padding." }
    ],
    hotspot: { x: 65.0, y: 48.6 }
  },
  {
    id: "mudguard-front",
    name: "Front Mudguard",
    category: "body",
    description: "Valanced deep-drawn front steel fender. Protects the engine block and rider from mud and road water splashes.",
    toolsRequired: ["10mm socket spanner", "10mm ring spanner", "Clean rag"],
    torqueSpec: "12 Nm",
    removalSteps: [
      "Place bike on center stand.",
      "Unbolt the four 10mm mounting bolts securing the fender bracket to the front fork slider legs (two on each side).",
      "Slide the mudguard carefully out from between the fork legs to avoid scratching the paint.",
      "Ensure rubber washers are present between the fork and mudguard brackets when reinstalling."
    ],
    sparePartOptions: [
      { name: "RE OEM Front Mudguard (Halcyon Black)", partNumber: "RAM00511/C", type: "OEM", notes: "Factory painted with double gold hand-painted pin-striping." }
    ],
    hotspot: { x: 19.2, y: 60.0 }
  },
  {
    id: "mudguard-rear",
    name: "Rear Mudguard",
    category: "body",
    description: "Sweeping rear metal mudguard that supports the tail lamp, turn indicators, and license plate assembly.",
    toolsRequired: ["10mm socket", "12mm socket", "Wire snippers (for zip ties)"],
    torqueSpec: "18 Nm",
    removalSteps: [
      "Remove rider and pillion seats, and disconnect tail light wiring connector under the seat.",
      "Unscrew the two 12mm bolts holding the mudguard side stays to the shock mounts.",
      "Unscrew the three 10mm bolts underneath the rear fender arch.",
      "Slowly pull the rear mudguard assembly backwards and out of the frame.",
      "Ensure wiring harness is tucked securely along the internal guide channel when refitting."
    ],
    sparePartOptions: [
      { name: "RE OEM Rear Mudguard (Halcyon Black)", partNumber: "RAM00512/D", type: "OEM", notes: "Includes wiring loom routing bracket." }
    ],
    hotspot: { x: 81.7, y: 61.4 }
  }
];
