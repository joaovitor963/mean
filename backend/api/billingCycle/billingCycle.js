const restful = require('node-restful')
const mongoose = restful.mongoose

//Mapeamento objeto-documento
const creditSchema = new mongoose.Schema({
  name: {type: String, required: true},
  value: {type: Number, min: 0, required: true}
})

const debtSchema = new mongoose.Schema({
  name: {type: String, required: true},
  value: {type: Number, min: 0, required: [true, 'Informe o valor do débito.']},
  status: {type: String, required: false, uppercase: true, enum:['PAGO', 'PENDENTE', 'AGENDADO']}
})

const billingCycleSchema = new mongoose.Schema({
  name: {type: String, required: true},
  month: {type: String, required: true, min: 1, max: 12},
  year: {type: String, required: true, min: 1970, max: 2100},
  credits: [creditSchema],
  debts: [debtSchema]
})

module.exports = restful.model('BillingCycle',billingCycleSchema)
