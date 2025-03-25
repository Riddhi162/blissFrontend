import React from 'react'

const Events = () => {
  return (
    <section className="py-20 bg-[#a4b5ba]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-START mb-16">
          <h2 className="text-5xl md:text-4xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Join us at our upcoming events and workshops
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <div className="text-sm text-blue-600 mb-2">March 15, 2024</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Event Title {item}
                </h3>
                <p className="text-gray-600 mb-4">
                  Brief description of the event goes here...
                </p>
                <button className="text-blue-600 font-medium hover:text-blue-700">
                  Register Now →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events 