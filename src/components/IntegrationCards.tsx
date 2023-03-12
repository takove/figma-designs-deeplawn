import React from 'react'

const IntegrationCard = ({ 
    title, 
    description, 
    // onSetup, 
    // isEnabled, 
    disable }) => {
//   const isDisabled = isEnabled && disable
    const isDisabled = disable

  const getBtnProperties = () => {
    // if (isEnabled && !disable) return { buttonText: 'Disable', bgClasses: 'bg-red-500 hover:bg-red-600' }
    if (!disable) return { buttonText: 'Disable', bgClasses: 'bg-red-500 hover:bg-red-600' }
    if (isDisabled) return { buttonText: 'Enabled', bgClasses: 'bg-gray-400' }
    return { buttonText: 'Setup', bgClasses: 'bg-blue-500 hover:bg-blue-600' }
  }

  const { buttonText, bgClasses } = getBtnProperties()

  return (
    <div className='bg-white p-5 shadow-lg rounded-lg border-2 border-gray-200 md:px-8'>
      <div className="flex flex-col justify-center">
        <div className='flex justify-between items-baseline'>
          
          <h3 className='text-gray-900 md:text-2xl font-medium'>{title}</h3>
          <button
              disabled={isDisabled}
            //   onClick={onSetup}
              type="button"
              className={`px-6 md:px-8 py-2 w-28 md:w-36 border border-transparent text-base font-medium rounded shadow-sm text-white ${bgClasses}`}
            >
              {buttonText}
            </button>
        </div>

        
      </div>
      <div className="flex flex-row justify-between mt-2 items-center">
          <div className='flex w-full text-base text-gray-700'>
            <p>{description}</p>
          </div>
          
        </div>
    </div>
  )
}

export default IntegrationCard