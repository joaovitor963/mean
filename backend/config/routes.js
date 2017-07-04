const express = require('express')

module.exports = function (server) {
  // API routes
  const router = express.Router()

  server.use('/api', router)

  // rotas da api
  const billingCycleService = require('../api/billingCycle/billingCycleService')

  billingCycleService.register(router, '/billingCycles')

  const billingCycleSummaryService = require('../api/billingSummary/billingSummaryService')

  router.route('/billingSummary').get(billingCycleSummaryService.getSummary)
}
