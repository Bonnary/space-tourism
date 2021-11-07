import React from 'react'
import DesHero from '../Components/DesHero';
import Header from '../Components/Header';
export default function Destination() {
    return (
      <div>
        <Header destination={true}/>
        <DesHero />
      </div>
    );
}
