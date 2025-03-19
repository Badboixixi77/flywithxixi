import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Private Air
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/fleet" className="text-gray-600 hover:text-gray-900">
              Fleet
            </Link>
            <Link href="/charter" className="text-gray-600 hover:text-gray-900">
              Charter
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 