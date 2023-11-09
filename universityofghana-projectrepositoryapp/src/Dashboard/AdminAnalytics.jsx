import React from 'react'
import CardTwo from '../Components/CardTwo'
import CardThree from '../Components/CardThree'
import CardFour from '../Components/CardFour'
import CardFive from '../Components/CardFive'
import DefaultLayout from '../Layout/DefaultLayout'

function AdminAnalytics() {
  return (
    <DefaultLayout>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5'>
          <CardTwo />
          <CardThree/>
          <CardFour />
          <CardFive />
        </div>
    </DefaultLayout>
  )
}

export default AdminAnalytics
