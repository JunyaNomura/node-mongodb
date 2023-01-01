const Task = require('../models/Task');

const getAllTasks = (req, res) => {
  res.send('タスクをすべて取得しました');
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

const getSingleTask = (req, res) => {
  res.send('ある特定のタスクを取得しました');
};

const updateTask = (req, res) => {
  res.send('ある特定のタスクを更新しました');
};

const deleteTask = (req, res) => {
  res.send('ある特定のタスクを削除しました');
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
