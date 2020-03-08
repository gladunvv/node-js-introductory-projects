const { Router } = require('express');

const router = Router();

router.get('/list', (req, res) => {
    try {
        const list = {
            "list": 'Список задач',
        };
        res.json(list);
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова...' });
  }
});

module.exports = router;