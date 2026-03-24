const Test = require('../models/test.model');

const createTest = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      return res.status(400).json({ message: 'Please provide name and description' });
    }

    const test = await Test.create({
      name,
      description,
    });

    res.status(201).json({
      message: 'Test created successfully',
      data: test,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTests = async (req, res) => {
  try {
    const tests = await Test.find({});
    res.status(200).json(tests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTest,
  getTests,
};
