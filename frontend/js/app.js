const ticketForm = document.querySelector("#ticket-form");
const customerNameInput = document.querySelector("#customerName");
const channelInput = document.querySelector("#channel");
const descriptionInput = document.querySelector("#description");
const messageElement = document.querySelector("#message");
const ticketList = document.querySelector("#ticket-list");

async function loadTickets() {
    try {
        const tickets = await getTickets();

        renderTickets(tickets);

    } catch (error) {
        showMessage(error.message, true);
    }
}

function renderTickets(tickets) {
    ticketList.innerHTML = "";

    if (tickets.length === 0) {
        ticketList.innerHTML = "<p>Nenhum ticket cadastrado.</p>";
        return;
    }

    tickets.forEach((ticket) => {
        const ticketElement = document.createElement("div");

        ticketElement.classList.add("ticket");

        ticketElement.innerHTML = `
            <p>
                <strong>Cliente:</strong>
                ${ticket.customerName}
            </p>

            <p>
                <strong>Canal:</strong>
                ${ticket.channel}
            </p>

            <p>
                <strong>Descrição:</strong>
                ${ticket.description}
            </p>

            <p class="ticket-status">
                <strong>Status:</strong>
                ${ticket.status}
            </p>
        `;

        if (ticket.status === "aberto") {
            const resolveButton = document.createElement("button");

            resolveButton.textContent = "Resolver";

            resolveButton.classList.add("resolve-button");

            resolveButton.addEventListener("click", () => {
                handleResolveTicket(ticket.id);
            });

            ticketElement.appendChild(resolveButton);
        }

        ticketList.appendChild(ticketElement);
    });
}

async function handleFormSubmit(event) {
    event.preventDefault();

    const ticketData = {
        customerName: customerNameInput.value,
        channel: channelInput.value,
        description: descriptionInput.value
    };

    try {
        await createTicket(ticketData);

        showMessage("Ticket criado com sucesso.");

        ticketForm.reset();

        await loadTickets();

    } catch (error) {
        showMessage(error.message, true);
    }
}

async function handleResolveTicket(id) {
    try {
        await resolveTicket(id);

        showMessage("Ticket resolvido com sucesso.");

        await loadTickets();

    } catch (error) {
        showMessage(error.message, true);
    }
}

function showMessage(message, isError = false) {
    messageElement.textContent = message;

    if (isError) {
        messageElement.style.color = "red";
    } else {
        messageElement.style.color = "green";
    }
}

ticketForm.addEventListener(
    "submit",
    handleFormSubmit
);

loadTickets();