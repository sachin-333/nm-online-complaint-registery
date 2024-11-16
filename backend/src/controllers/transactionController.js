const Transaction = require('../models/Transaction');

exports.createTransaction = async (req, res) => {
    try {
        const { sender, receiver, amount } = req.body;
        const transaction = new Transaction({ sender, receiver, amount });
        await transaction.save();
        res.status(201).json(transaction);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find().populate('sender receiver');
        res.status(200).json(transactions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
