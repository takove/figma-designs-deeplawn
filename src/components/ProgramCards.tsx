import React from "react"

const people = [
    {
        name: 'Leslie Alexander',
        email: 'Many.alexander@example.com',
        role: 'Co-Founder / CEO',
        image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Many Alexander',
        email: 'Many.alexander@example.com',
        role: 'Co-Founder / CEO',
        image:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Many Alexander',
        email: 'Many.alexander@example.com',
        role: 'Co-Founder / CEO',
        image:
          '../image.jpeg',
    },
    {
        name: 'Many Alexander',
        email: 'Many.alexander@example.com',
        role: 'Co-Founder / CEO',
        image:
          '../image.jpeg',
    },
    {
        name: 'Many Alexander',
        email: 'Many.alexander@example.com',
        role: 'Co-Founder / CEO',
        image:
          '../image.jpeg',
    },
    // More people...
]
  
export default function ProgramCards() {
    return (
      <div className="grid grid-cols-3 py-4 gap-4 md:grid-cols-3">
        {people.map((person) => (
          <div
            key={person.email}
            className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2 hover:border-gray-400"
          >
            <div className="flex-shrink-0">
              <img className="h-20 w-20 rounded-lg" src={person.image} alt="" />
            </div>
            <div className="flex justify-center">
                <div>
                    <div className="mb-4">
                    <input
                        className="mt-[0.3rem] mr-2 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-[rgba(0,0,0,0.25)] outline-none before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-white after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault01" />
                    </div>
                </div>
            </div>
            <div className="min-w-0 flex-1">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900">{person.name}</p>
                <p className="truncate text-sm text-gray-500">{person.role}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    )
}
  