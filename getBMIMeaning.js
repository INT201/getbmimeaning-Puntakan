const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  let bmi = weight/(Math.pow(height, 2))
  return(bmi)
}
function getBMIMeaning(weight, height) {
  let bmi = calculateBMI(weight, height)
  if(bmi < 18.5){
    return("Underweight")
  }  
  else if (18.5 < bmi && bmi < 25.0){
    return ("Normal weight")
  }
  else if (bmi > 25.0){
    return("Overweight")
  }
  
}
module.exports = getBMIMeaning
