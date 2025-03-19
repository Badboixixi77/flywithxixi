'use client'
import { motion } from 'framer-motion'

interface Aircraft {
  id: number;
  name: string;
  description: string;
  capacity: string;
  range: string;
  imageUrl: string;
}

const aircraft: Aircraft[] = [
  {
    id: 1,
    name: "Gulfstream G650",
    description: "Ultra-long-range business jet with exceptional comfort",
    capacity: "Up to 19 passengers",
    range: "7,000 nautical miles",
    imageUrl: "/images/g650.jpg"
  },
  {
    id: 2,
    name: "Bombardier Global 7500",
    description: "The largest and longest-range business jet",
    capacity: "Up to 19 passengers",
    range: "7,700 nautical miles",
    imageUrl: "/images/global7500.jpg"
  },
  // Add more aircraft here
];

export default function Fleet() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold text-gray-900 mb-12 text-center">Our Fleet</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {aircraft.map((plane, index) => (
          <motion.div
            key={plane.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
          >
            <div className="h-48 bg-gray-200">
              {/* Add actual images later */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500">Aircraft Image</span>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">{plane.name}</h2>
              <p className="text-gray-600 mb-4">{plane.description}</p>
              <div className="space-y-2 text-sm text-gray-500">
                <p>✈️ Capacity: {plane.capacity}</p>
                <p>🌎 Range: {plane.range}</p>
              </div>
              <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 