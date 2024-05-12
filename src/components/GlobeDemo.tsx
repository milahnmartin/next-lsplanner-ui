'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
const World = dynamic(() => import('./ui/globe').then((m) => m.World), {
  ssr: false,
})

export function GlobeDemo() {
  const globeConfig = {
    pointSize: 4,
    globeColor: '#000000', // Black color for the globe
    showAtmosphere: false,
    atmosphereColor: '#FFFFFF',
    atmosphereAltitude: 0.1,
    emissive: '#062056',
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: 'rgba(255,255,255,0.7)',
    ambientLight: '#38bdf8',
    directionalLeftLight: '#ffffff',
    directionalTopLight: '#ffffff',
    pointLight: '#ffffff',
    arcTime: new Date().getTime(),
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: -30.5595, lng: 22.9375 }, // Coordinates set to South Africa
    autoRotate: false,
    autoRotateSpeed: 0,
  }

  // Sample arcs connecting provinces in South Africa
  const sampleArcs = [
    {
      order: 1,
      startLat: -33.9249,
      startLng: 18.4241,
      endLat: -26.2041,
      endLng: 28.0473,
      arcAlt: 0.1,
      color: '#FFFFFF', // White color for lines connecting locations
    },
    {
      order: 1,
      startLat: -26.2041,
      startLng: 28.0473,
      endLat: -29.7915,
      endLng: 30.8235,
      arcAlt: 0.2,
      color: '#FFFFFF', // White color for lines connecting locations
    },
    // Add more arcs between provinces in South Africa as needed
  ]

  return (
    <div className="flex items-center justify-center w-[80%] aspect-square">
      <World data={sampleArcs} globeConfig={globeConfig} />
    </div>
  )
}
