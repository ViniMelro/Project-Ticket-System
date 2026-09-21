const API_URL = "http://localhost:3000/tickets";

async function getTickets() {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Erro ao buscar tickets");
    }

    const tickets = await response.json();

    return tickets;
}

async function createTicket(ticketData) {
    const response = await fetch(API_URL, {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(ticketData)
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || "Erro ao criar ticket");
    }

    return data;
}

async function resolveTicket(id) {
    const response = await fetch(
        `${API_URL}/${id}/resolve`,
        {
            method: "PATCH"
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || "Erro ao resolver ticket");
    }

    return data;
}