const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.find({});
    res.status(200).json(allTasks);
    console.log('success')
  } catch (err) {
    console.log('error')
    res.status(500).json(err);
  };
};

const createTask = async (req, res) => {
  try {
    const createTask = await Task.create(req.body);
    res.status(200).json(createTask);
    console.log('success')
  } catch (err) {
    console.log('error')
    res.status(500).json(err);
  };
};

const getSingleTask = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id });
    if (!task) {
      return res.status(404).json(`_id${req.params.id}は存在しません`);
    }

    res.status(200).json(task);

    console.log('success')
  } catch (err) {
    console.log('error')
    res.status(500).json(err);
  };
};

const updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id }, 
      req.body,
      //options: if true return the modified document rather than the original
      {
        new: true
      }
    );
    if (!task) {
      return res.status(404).json(`_id${req.params.id}は存在しません`);
    }

    res.status(200).json(task);

    console.log('success')
  } catch (err) {
    console.log('error')
    res.status(500).json(err);
  }; 
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.deleteOne({ _id: req.params.id });
    if (!task) {
      return res.status(404).json(`_id${req.params.id}は存在しません`);
    }

    res.status(200).json(task);

    console.log('success')
  } catch (err) {
    console.log('error')
    res.status(500).json(err);
  }; 
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
