import React from 'react'

class Pet extends React.Component {
  handleAdoptPet = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }
  render() {
    
    const { pet } = this.props
    const { name, type, gender, age, weight, isAdopted } = pet

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {name} {gender === 'male' ? '♂' : '♀'}
          </a>
          <div className="meta">
            <span className="date">PET TYPE</span>
          </div>
          <div className="description">
            <p>Age: PET AGE</p>
            <p>Weight: PET WEIGHT</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button">Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
