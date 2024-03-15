import React from 'react'

const Header2 = () => {
  const List=[
    {
      name:"Banglore",
    },
    {
      name:"calcutta",
    },
    {
      name:"Delhi",
    },
    {
      name:"Mumbai",
    },
    {
      name:"Hydrabad",
    }
  ];
  return (
    <div>
      <div className='flex py-5 px-10 bg-gray-100 gap-10 justify-between'>
        {
          List.map((e)=>{
            return (
            <span key={e.name}>{e.name}</span>
          )})
        }      </div>
    </div>
  )
}

export default Header2
