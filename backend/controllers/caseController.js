const { caseStudies } = require('../data');
const Case = require('../models/caseStudies');

const getCaseStudies = async (req, res) => {
    try {
        // return res.json(caseStudies)
        const cases = await Case.find({});
        return res.json(cases);
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

const createCase = async (req, res) => {
    const { heading, subheading, overview, keyConsiderations, prompts, people, datasheet, featuredImage } = req.body;

    const newcase = await Case.create({
        heading,
        subheading,
        overview,
        keyConsiderations,
        prompts,
        people,
        datasheet,
        featuredImage
    });

    console.log(newcase)

    // if (newcase) {
    //     res.status(201).json(newcase);
    // } 
    // else 
    // {
    //     res.status(400);
    //     throw new Error("Invalid case data");
    // }
}

module.exports = {
    getCaseStudies, 
    getSingleCaseStudy,
    updateCaseStudy,
    deleteCaseStudy,
    createCase
}