const { Router } = require('express');
const Todo = require('../models/Todo');
const router = Router();

router.get('/list', async (req, res) => {
  try {
    const todos = await Todo.find({});
    if (!todos) {
      res.json({ message: 'Записей нет' });
    } else {
      res.json(todos);
    }
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова...' });
  }
});

router.get('/detail/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.json(todo);
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова...' });
  }
});

router.post('/create', async (req, res) => {
  try {
    const { title, body } = req.body;
    const todo = new Todo({
      title,
      body,
    });

    await todo.save();
    res.status(201).json({ todo });
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова...' });
  }
});

module.exports = router;
