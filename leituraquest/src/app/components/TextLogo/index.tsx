"use client"

import React from 'react'

interface TextInputProps {
  title: string;
  subTittle: string;
}

const index = ({ title, subTittle }: TextInputProps) => {
  return (
    <div>
        <img src="/images/logoLeituraQuest.svg" alt="logoImage" />
        <div className="text-center mt-6">
          <div>
            <h2 className="font-bold text-xl">{title}</h2>
          </div>

          <div> 
            <h2 className="font-bold text-xl">{subTittle}</h2>
          </div>
        </div>
    </div>
  )
}

export default index