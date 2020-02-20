const express = require('express');
const router = express.Router();

const Member = require('../../models/TeamMember');

router.get('', (req, res) => {
    Member.find()
    .then(members => res.json(members))
    .catch(err => res.status(404).json({nomembersfound: 'No members found'}));
});

router.get('/:id', (req, res) => {
    Member.findById(req.params.id)
    .then(member => res.json(member))
    .catch(err => res.status(404).json({nomemberfound: 'Member not found'}))
});

router.post ('/', (req, res) => {
    Member.create(req.body)
    .then(member => res.json({ msg: 'Member added successfully'}))
    .catch(err => res.status(400).json({ error: 'Unable to add member'}))
});

router.put('/:id', (req, res) => {
    Member.findByIdAndUpdate(req.params.id, req.body)
    .then(member => res.json({ msg: 'Updated successfully'}))
    .catch(err => {
        res.status(400).json({ error: 'Unable to update the database'})
    });
});

router.delete('/:id', (req, res) => {
    Member.deleteOne({_id: req.params.id})
    .then(member => res.json({ msg: 'Member deleted successfully'}))
    .catch(err => res.status(400).json({ error: 'No team member' }))
});


module.exports = router;