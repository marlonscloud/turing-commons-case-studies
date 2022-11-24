const express = require('express')
const router = express.Router()

const { getCaseStudies, getSingleCaseStudy } = require('../controllers/caseController')

router.route('/').get(getCaseStudies)
router.route('/:id').get(getSingleCaseStudy)

module.exports = {
    routes: router
}