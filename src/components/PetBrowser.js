import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  const pets = this.props.pets.map((pet, index) => {
    return <Pet pet={pet} key={index} onAdoptPet={this.props.onAdoptPet} />

  render() {
    return (
       <div className="ui cards">
        {pets}
      </div>
    }

export default PetBrowser
