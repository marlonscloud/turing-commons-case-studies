const { caseStudies } = require('../data')

const getCaseStudies = async (req, res) => {
    try {
        return res.json(caseStudies)
    } catch (error) {
        return res.send(error)
    }
}

const getSingleCaseStudy = async (req, res) => {
    try {
        const caseStudy = caseStudies.filter(x => x.id == req.params.id)
        return res.json(caseStudy)
    } catch (error) {
        return res.send(error)
    }
}

const updateCaseStudy = async (req, res) => {
    return res.send('Update Case Study')
}


const deleteCaseStudy = async (req, res) => {
    return res.send('Delete Case Study')
}

module.exports = {
    getCaseStudies, 
    getSingleCaseStudy,
    updateCaseStudy,
    deleteCaseStudy
}