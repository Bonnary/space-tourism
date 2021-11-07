import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'

export default function Home() {
    return (
      <div>
        <Header home={true}/>
        <Hero />
      </div>
    );
}
