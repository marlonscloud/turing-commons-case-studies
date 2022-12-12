const express = require('express')
const router = express.Router()

const { getCaseStudies, getSingleCaseStudy, updateCaseStudy, deleteCaseStudy, createCase } = require('../controllers/caseController')
const { protect, admin } = require('../middleware/authMiddleware')

router.route('/').get(getCaseStudies).post(protect, createCase)
router.route('/:id').get(getSingleCaseStudy).put(protect, updateCaseStudy).delete(protect, deleteCaseStudy)

module.exports = {
    routes: router
}