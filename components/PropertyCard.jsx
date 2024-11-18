import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const PropertyCard = ({room}) => {
  return (
    <div
        className="bg-white border shadow rounded-lg p-2 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center"
      >
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <Image
            src={`/images/rooms/${room.image}`}
            alt="Grand Conference Hall"
            width={400}
            height={500}
            className="w-full sm:w-32 sm:h-32 mb-3 sm:mb-0 object-cover rounded-md"
          />
          <div className="space-y-1">
            <h4 className="text-lg font-semibold">{room.name}</h4>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-800"> Address:</span> 555
              {room.address}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-800"> Availability:</span>
              9 AM - 5 PM
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-800"> Price:</span>
              ${room.price_per_hour}/min investment
            </p>
          </div>
        </div>
        <div
          className="flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-2 mt-2 sm:mt-0"
        >

          <Link
            href={`/rooms/${room.$id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-blue-700"
            >View Property
          </Link>
        </div>
    </div>
  )
}
