const express = require("express");

const ticketController = require("../controllers/ticketController");

const router = express.Router();

router.get(
    "/",
    ticketController.listTickets
);

router.post(
    "/",
    ticketController.createTicket
);

router.patch(
    "/:id/resolve",
    ticketController.resolveTicket
);

module.exports = router;