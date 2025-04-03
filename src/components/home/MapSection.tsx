'use client';

import { useMemo } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';
import { DATACENTER_LOCATIONS, usePing } from '@/hooks/use-ping';

export function MapSection() {
  const pings = usePing();
  
  const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

  const markers = useMemo(() => 
    Object.entries(DATACENTER_LOCATIONS).map(([key, location]) => ({
      ...location,
      id: key,
      ping: pings[key] ?? -1,
    }))
  , [pings]);

  return (
    <section className="relative py-16 depth-effect">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-gradient-primary">Global</span>{' '}
          <span className="text-gradient-secondary">Infrastructure</span>
        </h2>
        
        <div className="max-w-3xl mx-auto aspect-[2/1] glass-effect rounded-lg border-border-strong">
          <ComposableMap
            projectionConfig={{
              scale: 240,
              center: [20, 0]
            }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="rgba(255, 255, 255, 0.1)"
                    stroke="rgba(255, 255, 255, 0.3)"
                    strokeWidth={0.5}
                  />
                ))
              }
            </Geographies>

            {markers.map(({ name, coordinates, ping }) => (
              <Marker key={name} coordinates={coordinates as [number, number]}>
                <g>
                  <circle
                    r="8"
                    fill="none"
                    stroke={ping === -1 ? "rgb(255, 59, 48)" : "#007AFF"} // Use destructive color for error, primary for normal
                    strokeWidth="2"
                    className="animate-ping opacity-30"
                  />
                  <circle
                    r="4"
                    fill={ping === -1 ? "rgb(255, 59, 48)" : "#5856D6"} // Use destructive color for error, secondary for normal
                  />
                </g>
                <text
                  textAnchor="middle"
                  y={-15}
                  className="fill-current sm:text-sm text-lg font-bold"
                  style={{ fill: 'white' }}
                >
                  {name}
                </text>
                <text
                  textAnchor="middle"
                  y={20}
                  style={{ fill: 'rgba(255, 255, 255, 0.7)' }}
                  className="sm:text-sm text-base"
                >
                  {ping === -1 ? "Offline" : `${ping}ms`}
                </text>
              </Marker>
            ))}
          </ComposableMap>
        </div>
      </div>
    </section>
  );
}