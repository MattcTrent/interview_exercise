import { useState } from "react";
import "./App.css";
import { Box, Button, TextField, Typography } from "@mui/material";

interface Conversation {
  product: string;
  lastMessaged: Date;
  messages: string[];
}

function App() {
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      product: "Kettle",
      lastMessaged: new Date(),
      messages: ["Hey can i have a refund on my kettle", "yes ofcourse"],
    },
    {
      product: "Teapot",
      lastMessaged: new Date(),
      messages: [
        "Hey, this teapot is great, do you have more in other colours",
        "ofcourse, heres a link www.teapot.com",
      ],
    },
    {
      product: "Cup",
      lastMessaged: new Date(),
      messages: [
        "Hey, when is this item being delivered",
        "the estimated delivery is July 5th",
      ],
    },
  ]);

  const [conversation, setConversation] = useState<Conversation>();
  const [message, setMessage] = useState<string>();
  return (
    <>
      {!conversation &&
        conversations.map((conversation) => (
          <Box
            sx={{
              background: "white",
              color: "black",
              margin: 2,
              padding: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography>{conversation.product}</Typography>
            <Typography>{conversation.lastMessaged.toUTCString()}</Typography>
            <Button
              variant="outlined"
              onClick={() => setConversation(conversation)}
            >
              Open Conversation
            </Button>
          </Box>
        ))}
      {conversation && (
        <Box
          sx={{
            background: "white",
            color: "black",
            margin: 2,
            padding: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            minWidth: "50%",
            minHeight: "50%",
          }}
        >
          <Button variant="outlined" onClick={() => setConversation(undefined)}>
            Back
          </Button>
          <Typography>Product: {conversation.product}</Typography>
          <Box
            sx={{
              color: "white",
              margin: 1,
              padding: 0.5,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              border: "1px solid black",
              borderRadius: "0.75rem",
              width: "fit-content",
            }}
          >
            {conversation.messages.map((message) => (
              <Typography
                sx={{
                  background: "blue",
                  color: "white",
                  margin: 1,
                  padding: 0.5,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  borderRadius: "0.75rem",
                  width: "fit-content",
                }}
              >
                {message}
              </Typography>
            ))}
            <Box>
              <TextField
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></TextField>
              <Button
                variant="outlined"
                onClick={() => {
                  if (message) {
                    conversation.messages = [...conversation.messages, message];
                    setMessage("");
                  }
                }}
              >
                Send
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

export default App;
