import { PropertyProps } from "@/interfaces/index";
import ReviewSection from "./ReviewSection";

export default function PropertyDetail({ property }: { property: PropertyProps }) {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Property Header */}
      <h1 className="text-3xl font-bold text-gray-900">{property.name}</h1>
      <div className="flex items-center space-x-2 mt-2 text-gray-600">
        <span className="flex items-center">
          <svg className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="ml-1 font-semibold">{property.rating}</span>
        </span>
        <span>•</span>
        <span>{property.address.city}, {property.address.state}, {property.address.country}</span>
      </div>

      {/* Image Gallery (Simple for now) */}
      <div className="mt-6 rounded-xl overflow-hidden shadow-lg h-[400px]">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Property Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold border-b pb-4">Details</h2>
          <div className="flex space-x-6 mt-6 overflow-x-auto pb-4">
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg min-w-[100px]">
              <span className="text-xl font-bold">{property.offers.bed}</span>
              <span className="text-gray-500 text-sm">Beds</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg min-w-[100px]">
              <span className="text-xl font-bold">{property.offers.shower}</span>
              <span className="text-gray-500 text-sm">Showers</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg min-w-[100px]">
              <span className="text-xl font-bold">{property.offers.occupants}</span>
              <span className="text-gray-500 text-sm">Occupants</span>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold">Description</h3>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Experience luxury and comfort in this stunning {property.name}, located in the heart of {property.address.city}. 
              This {property.category.join(", ")} offers everything you need for a perfect stay.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold">Amenities</h3>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {property.category.map((cat, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-700">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{cat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing/Booking Sidebar (Simplified placeholder for now) */}
        <div className="bg-white border rounded-xl shadow-xl p-6 h-fit sticky top-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <span className="text-2xl font-bold">₦{property.price.toLocaleString()}</span>
              <span className="text-gray-500"> / night</span>
            </div>
            {property.discount && (
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-bold">-{property.discount}%</span>
            )}
          </div>
          
          <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded-lg transition duration-200 shadow-md">
            Reserve Now
          </button>
          
          <p className="text-center text-gray-500 text-sm mt-4">You won&apos;t be charged yet</p>
        </div>
      </div>
      {/* Reviews Section */}
      <ReviewSection propertyId={property.id?.toString()} />
    </div>
  );
}
