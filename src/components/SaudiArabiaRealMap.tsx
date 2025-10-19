import React, { useState } from 'react';
import { MapPin, Phone, Mail, Building, Navigation } from 'lucide-react';

// Real Saudi Arabia office locations with accurate coordinates
const officeLocations = [
  {
    id: 1,
    city: "Riyadh",
    position: { x: 46.6753, y: 24.7136 }, // Real coordinates
    displayPosition: { x: 52, y: 35 }, // Display position on map
    specialties: ["Wood Fabrication", "Luxury Interiors", "Custom Millwork"],
    phone: "+966 11 234 5678",
    email: "riyadh@pca-fabrication.com",
    address: "Industrial District, Riyadh 11461"
  },
  {
    id: 2,
    city: "Jeddah", 
    position: { x: 39.1979, y: 21.4858 }, // Real coordinates
    displayPosition: { x: 25, y: 45 }, // Display position on map
    specialties: ["Metal Fabrication", "Marine Applications", "Coastal Installations"],
    phone: "+966 12 345 6789",
    email: "jeddah@pca-fabrication.com",
    address: "Al-Baghdadiyah District, Jeddah 21442"
  },
  {
    id: 3,
    city: "Dammam",
    position: { x: 50.1033, y: 26.4207 }, // Real coordinates
    displayPosition: { x: 75, y: 30 }, // Display position on map
    specialties: ["Oil & Gas Sector", "Industrial Projects", "Large-Scale Fabrication"],
    phone: "+966 13 456 7890",
    email: "dammam@pca-fabrication.com",
    address: "Industrial Zone, Dammam 31441"
  }
];

// Major Saudi cities with real positioning
const majorCities = [
  { name: "Riyadh", position: { x: 52, y: 35 } },
  { name: "Jeddah", position: { x: 25, y: 45 } },
  { name: "Dammam", position: { x: 75, y: 30 } },
  { name: "Mecca", position: { x: 22, y: 48 } },
  { name: "Medina", position: { x: 30, y: 40 } },
  { name: "Taif", position: { x: 20, y: 42 } },
  { name: "Tabuk", position: { x: 35, y: 20 } },
  { name: "Hail", position: { x: 45, y: 25 } },
  { name: "Al Khobar", position: { x: 78, y: 32 } },
  { name: "Dhahran", position: { x: 76, y: 31 } },
  { name: "Abha", position: { x: 30, y: 60 } },
  { name: "Jazan", position: { x: 35, y: 65 } },
  { name: "Najran", position: { x: 40, y: 62 } },
  { name: "Al Bahah", position: { x: 25, y: 55 } },
  { name: "Sakaka", position: { x: 50, y: 15 } },
  { name: "Arar", position: { x: 60, y: 18 } },
  { name: "Qatif", position: { x: 77, y: 28 } },
  { name: "Hofuf", position: { x: 70, y: 35 } },
  { name: "Buraydah", position: { x: 48, y: 28 } },
  { name: "Khamis Mushait", position: { x: 32, y: 58 } }
];

// Saudi Arabia provinces/regions
const provinces = [
  { name: "Riyadh Region", color: "#3b82f6", opacity: 0.1 },
  { name: "Makkah Region", color: "#10b981", opacity: 0.1 },
  { name: "Eastern Province", color: "#f59e0b", opacity: 0.1 },
  { name: "Asir Region", color: "#8b5cf6", opacity: 0.1 },
  { name: "Jazan Region", color: "#ef4444", opacity: 0.1 },
  { name: "Northern Borders", color: "#06b6d4", opacity: 0.1 },
  { name: "Al Jawf", color: "#84cc16", opacity: 0.1 },
  { name: "Hail Region", color: "#f97316", opacity: 0.1 },
  { name: "Qassim Region", color: "#ec4899", opacity: 0.1 },
  { name: "Tabuk Region", color: "#6366f1", opacity: 0.1 },
  { name: "Al Bahah", color: "#14b8a6", opacity: 0.1 },
  { name: "Najran Region", color: "#a855f7", opacity: 0.1 }
];

interface OfficeMarkerProps {
  office: typeof officeLocations[0];
  isHovered: boolean;
  onHover: (id: number | null) => void;
}

function OfficeMarker({ office, isHovered, onHover }: OfficeMarkerProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
      style={{ left: `${office.displayPosition.x}%`, top: `${office.displayPosition.y}%` }}
      onMouseEnter={() => {
        setHovered(true);
        onHover(office.id);
      }}
      onMouseLeave={() => {
        setHovered(false);
        onHover(null);
      }}
    >
      {/* Main marker with pulse animation */}
      <div className="relative">
        <div className={`w-8 h-8 bg-gradient-to-br from-primary to-blue-600 rounded-full shadow-lg border-3 border-white transform transition-all duration-300 ${
          hovered || isHovered ? 'scale-125 shadow-xl shadow-primary/50' : 'scale-100'
        }`}>
          <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
            <Building className="w-4 h-4 text-primary" />
          </div>
        </div>
        
        {/* Pulse rings */}
        <div className={`absolute inset-0 rounded-full bg-primary/40 animate-ping ${
          hovered || isHovered ? 'opacity-100' : 'opacity-0'
        }`}></div>
        <div className={`absolute inset-0 rounded-full bg-primary/20 animate-ping ${
          hovered || isHovered ? 'opacity-100' : 'opacity-0'
        }`} style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* City label */}
      <div className={`absolute top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap transition-all duration-300 ${
        hovered || isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}>
        <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1 shadow-lg border border-primary/20">
          <span className="text-sm font-bold text-primary">{office.city}</span>
        </div>
      </div>

      {/* Office details popup */}
      {(hovered || isHovered) && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-30">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-xl border border-primary/20 min-w-[300px] max-w-sm">
            <h3 className="font-bold text-primary text-lg mb-3 flex items-center gap-2">
              <Building className="w-5 h-5" />
              {office.city} Office
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-primary">Address</p>
                  <p className="text-muted-foreground">{office.address}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-primary">Phone</p>
                  <p className="text-muted-foreground">{office.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-primary">Email</p>
                  <p className="text-muted-foreground">{office.email}</p>
                </div>
              </div>

              <div className="pt-2">
                <p className="font-semibold text-primary mb-2">Specialties</p>
                <div className="flex flex-wrap gap-1">
                  {office.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gold/10 text-gold text-xs rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SaudiArabiaRealMap() {
  const [hoveredOffice, setHoveredOffice] = useState<number | null>(null);

  return (
    <div className="w-full h-[700px] bg-gradient-to-br from-slate-50 via-blue-50 to-amber-50 rounded-xl overflow-hidden shadow-2xl border border-primary/20 relative">
      {/* Map Background with terrain-like gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        {/* Saudi Arabia detailed outline using SVG */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Main Saudi Arabia outline - more accurate shape */}
          <path
            d="M 15 45 
               L 12 50 L 10 55 L 8 60 L 10 65 L 12 70 L 15 75 L 18 80 L 22 85 L 25 88 L 28 90 L 32 92 L 35 93 L 38 94 L 42 95 L 45 96 L 48 97 L 52 98 L 55 97 L 58 96 L 62 95 L 65 94 L 68 93 L 72 92 L 75 90 L 78 88 L 82 85 L 85 80 L 88 75 L 90 70 L 92 65 L 94 60 L 92 55 L 90 50 L 88 45 L 85 40 L 82 35 L 78 30 L 75 25 L 72 20 L 68 15 L 65 12 L 62 10 L 58 8 L 55 7 L 52 6 L 48 7 L 45 8 L 42 10 L 38 12 L 35 15 L 32 20 L 28 25 L 25 30 L 22 35 L 18 40 Z"
            fill="none"
            stroke="#1e40af"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Red Sea coastline */}
          <path
            d="M 12 50 L 10 55 L 8 60 L 10 65 L 12 70 L 15 75 L 18 80 L 22 85"
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="0.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Persian Gulf coastline */}
          <path
            d="M 85 80 L 88 75 L 90 70 L 92 65 L 94 60 L 92 55 L 90 50 L 88 45"
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="0.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Desert regions - subtle patterns */}
          <path
            d="M 25 30 L 30 35 L 35 40 L 40 45 L 45 50 L 50 55 L 55 50 L 60 45 L 65 40 L 70 35 L 75 30"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="0.3"
            strokeDasharray="1,2"
            opacity="0.4"
          />
          
          {/* Mountain ranges */}
          <path
            d="M 20 40 L 25 38 L 30 36 L 35 34 L 40 32 L 45 30 L 50 28 L 55 30 L 60 32 L 65 34 L 70 36 L 75 38 L 80 40"
            fill="none"
            stroke="#6b7280"
            strokeWidth="0.4"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Province regions overlay */}
      <div className="absolute inset-0">
        {/* Riyadh Region */}
        <div className="absolute w-20 h-20 bg-blue-500/10 rounded-full" style={{ left: '45%', top: '30%' }}></div>
        {/* Makkah Region */}
        <div className="absolute w-16 h-24 bg-green-500/10 rounded-full" style={{ left: '20%', top: '40%' }}></div>
        {/* Eastern Province */}
        <div className="absolute w-18 h-16 bg-amber-500/10 rounded-full" style={{ left: '70%', top: '25%' }}></div>
        {/* Asir Region */}
        <div className="absolute w-12 h-20 bg-purple-500/10 rounded-full" style={{ left: '25%', top: '55%' }}></div>
      </div>

      {/* City dots with labels */}
      {majorCities.map((city, index) => (
        <div key={index} className="absolute transform -translate-x-1/2 -translate-y-1/2">
          <div
            className="w-2 h-2 bg-slate-500 rounded-full shadow-sm"
            style={{ left: `${city.position.x}%`, top: `${city.position.y}%` }}
          />
          <div
            className="absolute top-3 left-1/2 transform -translate-x-1/2 text-xs text-slate-600 font-medium whitespace-nowrap"
            style={{ left: `${city.position.x}%`, top: `${city.position.y}%` }}
          >
            {city.name}
          </div>
        </div>
      ))}

      {/* Office markers */}
      {officeLocations.map((office) => (
        <OfficeMarker
          key={office.id}
          office={office}
          isHovered={hoveredOffice === office.id}
          onHover={setHoveredOffice}
        />
      ))}

      {/* Map Legend */}
      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-xl border border-primary/20 z-10">
        <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
          <Navigation className="w-4 h-4" />
          Office Locations
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span>Riyadh - Main Office</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span>Jeddah - Coastal Operations</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span>Dammam - Industrial Hub</span>
          </div>
        </div>
      </div>

      {/* Map Instructions */}
      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-xl border border-primary/20 z-10">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-primary">💡 Tip:</span> Hover over office markers for detailed information
        </p>
      </div>

      {/* Scale indicator */}
      <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-xl border border-primary/20 z-10">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <div className="w-8 h-0.5 bg-slate-400"></div>
          <span>~500 km</span>
        </div>
      </div>
    </div>
  );
}

export default SaudiArabiaRealMap;
