import React, { useState } from 'react';
import { MapPin, Phone, Mail, Building } from 'lucide-react';

// Saudi Arabia office locations
const officeLocations = [
  {
    id: 1,
    city: "Riyadh",
    position: { x: 50, y: 30 }, // Percentage positions for CSS
    specialties: ["Wood Fabrication", "Luxury Interiors", "Custom Millwork"],
    phone: "+966 11 234 5678",
    email: "riyadh@pca-fabrication.com",
    address: "Industrial District, Riyadh 11461"
  },
  {
    id: 2,
    city: "Jeddah", 
    position: { x: 20, y: 40 },
    specialties: ["Metal Fabrication", "Marine Applications", "Coastal Installations"],
    phone: "+966 12 345 6789",
    email: "jeddah@pca-fabrication.com",
    address: "Al-Baghdadiyah District, Jeddah 21442"
  },
  {
    id: 3,
    city: "Dammam",
    position: { x: 80, y: 25 },
    specialties: ["Oil & Gas Sector", "Industrial Projects", "Large-Scale Fabrication"],
    phone: "+966 13 456 7890",
    email: "dammam@pca-fabrication.com",
    address: "Industrial Zone, Dammam 31441"
  }
];

// Major Saudi cities
const majorCities = [
  { name: "Riyadh", position: { x: 50, y: 30 } },
  { name: "Jeddah", position: { x: 20, y: 40 } },
  { name: "Dammam", position: { x: 80, y: 25 } },
  { name: "Mecca", position: { x: 15, y: 45 } },
  { name: "Medina", position: { x: 25, y: 35 } },
  { name: "Taif", position: { x: 10, y: 40 } },
  { name: "Tabuk", position: { x: 30, y: 15 } },
  { name: "Hail", position: { x: 40, y: 20 } },
  { name: "Al Khobar", position: { x: 85, y: 28 } },
  { name: "Dhahran", position: { x: 82, y: 26 } },
  { name: "Abha", position: { x: 25, y: 55 } },
  { name: "Jazan", position: { x: 30, y: 60 } },
  { name: "Najran", position: { x: 35, y: 58 } },
  { name: "Al Bahah", position: { x: 18, y: 50 } },
  { name: "Sakaka", position: { x: 45, y: 10 } },
  { name: "Arar", position: { x: 55, y: 12 } }
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
      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
      style={{ left: `${office.position.x}%`, top: `${office.position.y}%` }}
      onMouseEnter={() => {
        setHovered(true);
        onHover(office.id);
      }}
      onMouseLeave={() => {
        setHovered(false);
        onHover(null);
      }}
    >
      {/* Main marker */}
      <div className="relative">
        <div className={`w-6 h-6 bg-gradient-to-br from-primary to-blue-600 rounded-full shadow-lg border-2 border-white transform transition-all duration-300 ${
          hovered || isHovered ? 'scale-125 shadow-xl shadow-primary/50' : 'scale-100'
        }`}>
          <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
            <Building className="w-3 h-3 text-primary" />
          </div>
        </div>
        
        {/* Pulse animation */}
        <div className={`absolute inset-0 rounded-full bg-primary/30 animate-ping ${
          hovered || isHovered ? 'opacity-100' : 'opacity-0'
        }`}></div>
      </div>

      {/* City label */}
      <div className={`absolute top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap transition-all duration-300 ${
        hovered || isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}>
        <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1 shadow-lg border border-primary/20">
          <span className="text-sm font-semibold text-primary">{office.city}</span>
        </div>
      </div>

      {/* Office details popup */}
      {(hovered || isHovered) && (
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-xl border border-primary/20 min-w-[280px] max-w-sm">
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

function SaudiArabiaMapSimple() {
  const [hoveredOffice, setHoveredOffice] = useState<number | null>(null);

  return (
    <div className="w-full h-[600px] bg-gradient-to-br from-background via-background/95 to-primary/5 rounded-xl overflow-hidden shadow-2xl border border-primary/20 relative">
      {/* Map Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Saudi Arabia outline (simplified SVG path) */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M 15 45 L 10 50 L 12 60 L 15 65 L 20 70 L 25 75 L 30 80 L 35 85 L 40 88 L 45 90 L 50 92 L 55 90 L 60 88 L 65 85 L 70 80 L 75 75 L 80 70 L 85 65 L 88 60 L 90 55 L 92 50 L 90 45 L 88 40 L 85 35 L 80 30 L 75 25 L 70 20 L 65 15 L 60 12 L 55 10 L 50 8 L 45 10 L 40 12 L 35 15 L 30 20 L 25 25 L 20 30 L 15 35 L 12 40 Z"
            fill="none"
            stroke="#1e40af"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* City dots */}
      {majorCities.map((city, index) => (
        <div
          key={index}
          className="absolute w-2 h-2 bg-slate-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${city.position.x}%`, top: `${city.position.y}%` }}
        />
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
      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-xl border border-primary/20">
        <h3 className="font-semibold text-primary mb-3">Office Locations</h3>
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
      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-xl border border-primary/20">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-primary">💡 Tip:</span> Hover over office markers for details
        </p>
      </div>
    </div>
  );
}

export default SaudiArabiaMapSimple;
