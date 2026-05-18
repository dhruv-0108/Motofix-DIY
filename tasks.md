# Motofix DIY — Build Tasks
**Project:** Motofix DIY — Bike Maintenance Platform for Indian Riders  
**Stack:** Next.js 16, Tailwind CSS, TypeScript  
**Phase 1 Brand:** Royal Enfield  
**Goal:** A website where a bike owner selects their exact model and gets everything needed to understand and maintain their vehicle — service intervals, DIY guides, service checklists, and manual-backed specs.

---

## Design Direction
- **Tone:** Raw, confident, mechanical — not glossy or corporate. Built for riders, not marketing.
- **Color Palette:** Deep matte black `#0D0D0D`, Amber/Orange `#F5A623` (accent), Off-white `#F0EDE8` (text), Dark charcoal `#1A1A1A` (cards)
- **Typography:** Bold condensed headings (like a workshop manual). Clean sans-serif body.
- **Feel:** Think a cross between a workshop wall and a well-designed app. Welcoming to new riders. No intimidating jargon on the surface.
- **No stock photo vibes.** Use mechanical illustrations, icons, and real imagery of bikes.

---

## PHASE 1 — Foundation & Homepage

- [ ] Initialize Next.js 16 project with TypeScript and Tailwind CSS
- [ ] Set up folder structure: `/pages`, `/components`, `/data`, `/public/bikes`, `/public/guides`
- [ ] Create global layout component with navbar and footer
- [ ] Build Navbar: Logo (Motofix DIY) + links: Home, My Bike, DIY Guides, Service Checklist, About
- [ ] Make Navbar sticky, mobile-responsive with hamburger menu
- [ ] Build Footer: tagline, nav links, "Built for riders. By a rider." credit line

### Homepage Sections
- [ ] **Hero Section:** Full-width dark background. Headline: "Know Your Bike. Own Your Ride." Subheadline: "Model-specific maintenance guides, service timelines, and DIY instructions — built for Indian riders." CTA button: "Select Your Bike →" (links to bike selector). Background: subtle mechanical texture or silhouette of a Royal Enfield.
- [ ] **Problem Section:** 3-column stat cards. Card 1: "78% of riders don't know their service intervals." Card 2: "84% felt overcharged at a service center." Card 3: "91% find YouTube too scattered to be useful." Dark cards, amber numbers, sharp copy.
- [ ] **How It Works Section:** 3 steps in horizontal layout. Step 1: "Select your bike" — Brand → Model → Year. Step 2: "See your maintenance timeline" — What's due and when. Step 3: "Learn or verify" — DIY guides + service checklist. Use numbered icons with connecting line.
- [ ] **Featured Bikes Section:** Show Royal Enfield model cards (Bullet 350, Classic 350, Meteor 350, Himalayan, Hunter 350, Thunderbird). Each card: bike name, image, "View Guide →" button.
- [ ] **Trust Bar Section:** "Based on research with 32 riders across India. Data-backed. Manual-verified." Simple centered text strip in amber on dark background.
- [ ] **Community CTA Section:** "Ride with knowledge." Paragraph about the mission. CTA: "Explore All Models →"

---

## PHASE 2 — Bike Selector & Model Pages

### Bike Selector
- [ ] Build `/select-bike` page with 3-step selector UI: Step 1 Brand (only Royal Enfield in Phase 1), Step 2 Model (dropdown), Step 3 Year (dropdown)
- [ ] On selection completion, route to `/bikes/[brand]/[model]/[year]`
- [ ] Add selector widget to homepage Hero CTA as well (inline compact version)
- [ ] Store user's selected bike in localStorage so it persists across sessions

### Royal Enfield Model Data (`/data/royal-enfield/`)
- [ ] Create `models.ts` data file listing all Royal Enfield models: Bullet 350, Classic 350, Meteor 350, Himalayan 450, Hunter 350, Thunderbird 350X, Continental GT 650, Interceptor 650, Scram 411, Super Meteor 650
- [ ] For each model, define: model name, years available, engine cc, engine type, fuel type, fuel tank capacity, chain/belt drive, recommended engine oil grade, oil capacity (litres), coolant type (if applicable), tyre sizes front/rear, tyre pressure (city/highway), battery specs

### Model Detail Page (`/bikes/royal-enfield/[model]/[year]`)
- [ ] Build dynamic model page template
- [ ] **Bike Header:** Model name, year, hero image, key specs strip (engine, fuel tank, oil capacity)
- [ ] **Maintenance Timeline Section:** Visual horizontal timeline showing service milestones at 500km (first service), 3000km, 6000km, 10000km, 15000km, 20000km. Each milestone: what gets checked, what gets replaced, estimated time.
- [ ] **Quick Stats Card:** Engine oil grade, oil capacity, tyre pressure (front/rear), chain slack spec, spark plug type — all in a scannable card
- [ ] **DIY Guides for this Model:** Grid of available guides relevant to this model (link to guide pages)
- [ ] **Service Checklist Button:** "Going to the mechanic? Take this list." → links to service checklist page for this model
- [ ] **Manual Reference Note:** "Specs sourced from Royal Enfield official service manual." Small disclaimer at bottom.

---

## PHASE 3 — DIY Guides

### Guide List Page (`/guides`)
- [ ] Build `/guides` page with filter by: All, Engine, Chain & Sprockets, Tyres, Brakes, Electricals, Pre-Ride Checks
- [ ] Each guide card: title, difficulty tag (Easy / Moderate / Advanced), time estimate, tools needed count, thumbnail icon

### Individual Guide Pages (`/guides/[slug]`)
- [ ] Build guide page template with: Title, Difficulty badge, Time required, Tools needed list, Safety warning (if applicable)
- [ ] Step-by-step section: each step has a number, instruction text, and image placeholder
- [ ] "Which bikes does this apply to?" — list of compatible models
- [ ] "Done? Mark as complete" — simple local state checkbox

### Phase 1 Guides to Build (10 guides)
- [ ] Guide 1: How to check and top up engine oil (Royal Enfield)
- [ ] Guide 2: How to clean and lubricate your chain
- [ ] Guide 3: How to check tyre pressure correctly
- [ ] Guide 4: How to check brake pad wear
- [ ] Guide 5: How to check and clean the air filter
- [ ] Guide 6: Pre-ride safety check (5-minute routine)
- [ ] Guide 7: How to check battery terminals and electrolyte level
- [ ] Guide 8: How to adjust clutch cable free play
- [ ] Guide 9: How to check spoke tension (for wire-wheel models)
- [ ] Guide 10: Monsoon prep checklist for your bike

---

## PHASE 4 — Service Preparedness Checklist

- [ ] Build `/checklist/[model]` page
- [ ] Page intro: "Before you go to the mechanic, know what to ask and what to verify."
- [ ] Section 1 — "What should be done at this service?" (based on current km, user inputs odometer reading)
- [ ] Section 2 — "What to ask your mechanic" — list of questions riders should ask
- [ ] Section 3 — "What parts should be replaced vs just inspected" — clear table
- [ ] Section 4 — "Typical cost ranges" — honest ballpark figures for common jobs (chain replacement, oil change, brake pads, etc.)
- [ ] Print / Save as PDF button
- [ ] Note at bottom: "Prices are indicative based on India market averages. Always get an itemized bill."

---

## PHASE 5 — About & Mission Page

- [ ] Build `/about` page
- [ ] Opening statement: "Motofix DIY was built because 84% of riders in a survey of 32 bikers felt overcharged at a service center — and most didn't know enough to push back."
- [ ] Research stats section: surface the 4 key findings from the original research
- [ ] Mission statement: "Every rider deserves to understand their machine. Not to become a mechanic — but to never be taken for a ride."
- [ ] "What we are NOT" section: not a mechanic booking platform, not affiliated with any brand, not a parts store (Phase 1)
- [ ] Contact/feedback form (simple — name, email, bike model, message)

---

## PHASE 6 — SEO & Performance

- [ ] Add Next.js `<Head>` metadata to every page: title, description, og:image
- [ ] Create dynamic meta titles for model pages: "Royal Enfield Classic 350 Maintenance Guide | Motofix DIY"
- [ ] Create `/sitemap.xml` and `/robots.txt`
- [ ] Add structured data (JSON-LD) for guide pages
- [ ] Compress all images, use Next.js `<Image>` component throughout
- [ ] Test Lighthouse score — target 90+ on Performance, Accessibility, SEO
- [ ] Ensure full mobile responsiveness on all pages

---

## PHASE 7 — Deployment

- [ ] Set up Vercel deployment from GitHub repo
- [ ] Configure custom domain (if available)
- [ ] Test all routes in production
- [ ] Verify localStorage bike selector works in deployed build
- [ ] Submit sitemap to Google Search Console

---

## Content Notes for Manual Integration
When the Royal Enfield service manuals are provided as PDFs:
- Extract service intervals per model (km-based and time-based)
- Extract recommended fluids: engine oil grade, capacity, coolant specs
- Extract tyre specs: size, recommended pressure
- Extract torque specs for critical bolts (cylinder head, wheel axle, etc.)
- Extract spark plug specs and gap
- All extracted data goes into `/data/royal-enfield/[model-slug].ts` as typed constants
- Every spec on the site must be traceable to a manual source

---

## Phase 1 Success Criteria
- [ ] Homepage live and mobile-responsive
- [ ] At least 5 Royal Enfield models fully populated with specs
- [ ] 10 DIY guides published
- [ ] Service checklist functional for Classic 350 and Bullet 350
- [ ] Bike selector working end-to-end
- [ ] Deployed on Vercel
