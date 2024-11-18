import React from 'react'

export const TitleBar = ({title}) => {
  return (
    <section className="bg-white border mb-5 rounded-lg shadow px-4 py-4">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h1>
    </section>
  )
}
