'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface BookingForm {
  departure: string
  destination: string
  date: string
  returnDate: string
  passengers: number
  aircraft: string
}

export default function Booking() {
  const [formData, setFormData] = useState<BookingForm>({
    departure: '',
    destination: '',
    date: '',
    returnDate: '',
    passengers: 1,
    aircraft: ''
  })

  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Here you would handle the booking submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    // Navigate to confirmation or next step
  }

  const aircraftOptions = [
    { id: 'g650', name: 'Gulfstream G650', capacity: 19 },
    { id: 'global7500', name: 'Bombardier Global 7500', capacity: 19 },
    { id: 'phenom300', name: 'Embraer Phenom 300', capacity: 9 }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4"
      >
        <h1 className="text-4xl font-bold text-center mb-8">Book Your Private Flight</h1>
        
        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex justify-between items-center">
            {['Flight Details', 'Aircraft Selection', 'Confirmation'].map((label, index) => (
              <div key={label} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step > index + 1 ? 'bg-green-500' :
                  step === index + 1 ? 'bg-blue-600' : 'bg-gray-300'
                } text-white`}>
                  {step > index + 1 ? '✓' : index + 1}
                </div>
                <span className="ml-2 text-sm hidden md:block">{label}</span>
                {index < 2 && <div className="h-1 w-16 md:w-32 mx-4 bg-gray-300" />}
              </div>
            ))}
          </div>
        </div>

        {/* Booking Form */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor="departure">
                        Departure *
                      </label>
                      <input
                        id="departure"
                        name="departure"
                        type="text"
                        required
                        value={formData.departure}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="City or Airport"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor="destination">
                        Destination *
                      </label>
                      <input
                        id="destination"
                        name="destination"
                        type="text"
                        required
                        value={formData.destination}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="City or Airport"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor="date">
                        Departure Date *
                      </label>
                      <input
                        id="date"
                        name="date"
                        type="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor="returnDate">
                        Return Date
                      </label>
                      <input
                        id="returnDate"
                        name="returnDate"
                        type="date"
                        value={formData.returnDate}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="passengers">
                      Number of Passengers *
                    </label>
                    <input
                      id="passengers"
                      name="passengers"
                      type="number"
                      required
                      min="1"
                      max="19"
                      value={formData.passengers}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold mb-4">Select Your Aircraft</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {aircraftOptions.map(aircraft => (
                      <div
                        key={aircraft.id}
                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                          formData.aircraft === aircraft.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'hover:border-gray-400'
                        }`}
                        onClick={() => setFormData(prev => ({ ...prev, aircraft: aircraft.id }))}
                      >
                        <h4 className="font-semibold">{aircraft.name}</h4>
                        <p className="text-sm text-gray-600">Capacity: {aircraft.capacity} passengers</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold mb-4">Confirm Your Booking</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <dl className="space-y-4">
                      <div className="flex justify-between">
                        <dt className="font-medium">Departure:</dt>
                        <dd>{formData.departure}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="font-medium">Destination:</dt>
                        <dd>{formData.destination}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="font-medium">Date:</dt>
                        <dd>{formData.date}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="font-medium">Passengers:</dt>
                        <dd>{formData.passengers}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="font-medium">Aircraft:</dt>
                        <dd>{aircraftOptions.find(a => a.id === formData.aircraft)?.name}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              )}

              <div className="flex justify-between pt-6">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Back
                  </button>
                )}
                <button
                  type={step === 3 ? 'submit' : 'button'}
                  onClick={() => step < 3 && setStep(step + 1)}
                  disabled={isSubmitting}
                  className={`px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 ml-auto ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {step === 3 ? (isSubmitting ? 'Processing...' : 'Confirm Booking') : 'Next'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
} 