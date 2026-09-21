const ticketService = require("../src/services/ticketService");
const tickets = require("../src/data/tickets");

beforeEach(() => {
    tickets.length = 0;
});

test("ticket criado deve começar com status aberto", () => {
    const ticket = ticketService.createTicket(
        "Vini",
        "email",
        "Problema no login"
    );

    expect(ticket.status).toBe("aberto");
});

test("ticket resolvido não pode ser resolvido novamente", () => {
    const ticket = ticketService.createTicket(
        "Carol",
        "chat",
        "Problema no atendimento"
    );

    ticketService.resolveTicket(ticket.id);

    expect(() => {
        ticketService.resolveTicket(ticket.id);
    }).toThrow("Ticket já está resolvido");
});