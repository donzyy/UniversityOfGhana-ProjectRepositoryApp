import React from 'react'
import DefaultLayout from '../Layout/DefaultLayout'
/* import CardOne from '../Components/CardOne' */
import CardTwo from '../Components/CardTwo'
import CardThree from '../Components/CardThree'
import CardFour from '../Components/CardFour'
import CardFive from '../Components/CardFive'
import SupervisorLayout from '../Layout/SupervisorLayout'


function Analytics() {
  return (
    <SupervisorLayout>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5'>
          {/* <CardOne /> */}
          <CardTwo />
          <CardThree/>
          <CardFour />
          <CardFive />
        </div>
    </SupervisorLayout>
  )
}

export default Analytics
