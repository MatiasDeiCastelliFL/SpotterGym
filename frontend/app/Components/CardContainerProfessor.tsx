"use client"
import React from 'react'
import CardProfessor from './CardProfessor'

function CardContainerProfessor({data}:{data:any}) {
  
    return (
      
      <div className='w-[100%] grid grid-cols-12 mt-[24px]'>
        
          {data.data.map((profesor: any, key: React.Key | null | undefined)=>{
            //console.log(profesor)
            const {firstName,lastName,  active, rating, image, id} =  profesor;
            return(
              <div  key={key} className='col-span-6 flex justify-center items-center mt-[0.8rem]'>
                <CardProfessor id={id}  rate={rating} image={image} lastName={lastName} firstName={firstName} available={active}/>
              </div>
            )
          })}
      </div>
    )
}

export default CardContainerProfessor;