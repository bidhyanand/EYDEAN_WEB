import React from 'react'
import Data from  '../../data/tabData.json'

const TabContent = () => {
  return (
    <div className='flex flex-col gap-96 w-full lg:w-4/5 2xl:w-3/5'>
        {Data.tabData.map((data, index) => {
            return (
                <div key={index} className="text-lg  lg:text-xl font-medium">
                    <p>{data.content}</p>
                </div>
            )
        })}
    </div>
  )
}

export default TabContent