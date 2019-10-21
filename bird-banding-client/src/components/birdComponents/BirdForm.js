import React from "react"
import { connect } from "react-redux"
import { updateBirdForm, createBird } from '../../actions/birdActions.js'


const BirdForm = ({birdFormData, updateBirdForm, createBird}) => {

  const handleOnChange = event => {
    const {name, value} = event.target
      const updatedForm = {
        ...birdFormData, [name] :value
      }
    updateBirdForm(updatedForm)
  }

  const handleSubmit = event => {
    event.preventDefault()
    createBird(birdFormData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={birdFormData.band_number} name="band_number" onChange={handleOnChange} placeholder="Band Number"/>
      <input type="text" value={birdFormData.species} name="species" onChange={handleOnChange} placeholder="Species"/>
      <input type="text" value={birdFormData.sex} name="sex" onChange={handleOnChange} placeholder="Sex"/>
      <input type="text" value={birdFormData.year} name="year" onChange={handleOnChange} placeholder="Year"/>
      <input type="text" value={birdFormData.fat} name="fat" onChange={handleOnChange} placeholder="Fat"/>
      <input type="text" value={birdFormData.wingspan} name="wingspan" onChange={handleOnChange} placeholder="Wingspan"/>
      <input type="text" value={birdFormData.weight} name="weight" onChange={handleOnChange} placeholder="Weight"/>
      <input type="submit" value="Add Bird"/>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    birdFormData: state.birdFormReducer
  }
}

export default connect(mapStateToProps, {updateBirdForm, createBird})(BirdForm)
