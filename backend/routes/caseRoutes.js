const express = require('express')
const router = express.Router()

const { getCaseStudies, getSingleCaseStudy, updateCaseStudy, deleteCaseStudy } = require('../controllers/caseController')

router.route('/').get(getCaseStudies)
router.route('/:id').get(getSingleCaseStudy).put(updateCaseStudy).delete(deleteCaseStudy)

module.exports = {
    routes: router
}