const express = require('express')
const router = express.Router()

const { getCaseStudies, getSingleCaseStudy, updateCaseStudy, deleteCaseStudy, createCase } = require('../controllers/caseController')

router.route('/').get(getCaseStudies).post(createCase)
router.route('/:id').get(getSingleCaseStudy).put(updateCaseStudy).delete(deleteCaseStudy)

module.exports = {
    routes: router
}