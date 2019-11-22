export const bandSearch = number => {
  return {
    type: "BAND_SEARCH",
    number
  }
}

export const resetBandForm = () => {
  return {
  type:"RESET_BIRD_FORM"
}
}
