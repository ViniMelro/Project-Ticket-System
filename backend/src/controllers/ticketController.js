const ticketService = require("../services/ticketService");

function listTickets(req, res) {
    const tickets = ticketService.getTickets();

    return res.status(200).json(tickets);
}

function createTicket(req, res) {
    try {
        const {
            customerName,
            channel,
            description
        } = req.body;

        const ticket = ticketService.createTicket(
            customerName,
            channel,
            description
        );

        return res.status(201).json(ticket);

    } catch (error) {
        return res.status(400).json({
            error: error.message
        });
    }
}

function resolveTicket(req, res) {
    try {
        const id = Number(req.params.id);

        const ticket = ticketService.resolveTicket(id);

        return res.status(200).json(ticket);

    } catch (error) {
        return res.status(400).json({
            error: error.message
        });
    }
}

module.exports = {
    listTickets,
    createTicket,
    resolveTicket
};