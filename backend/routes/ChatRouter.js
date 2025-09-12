import { chatbot } from "../controllers/Chatbot.js";


import express from "express";
const ChatRouter = express.Router();

ChatRouter.post('/chat', chatbot);

export default ChatRouter;
