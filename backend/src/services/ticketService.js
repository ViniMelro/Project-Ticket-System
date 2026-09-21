const tickets = require("../data/tickets");

const validChannels = [
    "email",
    "chat",
    "telefone"
];

function getTickets() {
    return tickets;
}

function createTicket(customerName, channel, description) {

    if (!customerName || !customerName.trim()) {
        throw new Error("Nome do cliente é obrigatório");
    }

    if (!description || !description.trim()) {
        throw new Error("Descrição é obrigatória");
    }

    if (!validChannels.includes(channel)) {
        throw new Error("Canal inválido");
    }

    const ticket = {
        id: tickets.length + 1,
        customerName: customerName.trim(),
        channel,
        description: description.trim(),
        status: "aberto"
    };

    tickets.push(ticket);

    return ticket;
}

function resolveTicket(id) {

    const ticket = tickets.find(
        ticket => ticket.id === id
    );

    if (!ticket) {
        throw new Error("Ticket não encontrado");
    }

    if (ticket.status === "resolvido") {
        throw new Error("Ticket já está resolvido");
    }

    ticket.status = "resolvido";

    return ticket;
}

module.exports = {
    getTickets,
    createTicket,
    resolveTicket
};