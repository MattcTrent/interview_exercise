# Part 3: Allow Tags to be Added/Updated to Messages, Search on messages by tag

## How you would go about implementing the solution

- add "Tags" to messages
- Set Tags when messages are created
- update Tags when a message is updated
- add function to search messages by the new tag field

## What problems you might encounter

- Performance on find messages?
- scope creep:
  - Do we search by one Tag/Id and return all?
  - Do we search for an array of Tags/Id and return all
    - if we use an array of Tags, do we return all that match atleast one tag or all that match all tags

## How you would go about testing

- unit test on create call
  - successful create message with Tags
  - successfully create message without Tags
- unit test on the update call
  - Update a message with no tags to have tags
  - update a message with Tags to have no tags
- unit test on search call
  - search for 1 message with a single tag successfull
  - search for multiple messages with a single tag successfull
  - search with a single tag retunring no messages
  - search with multiple tags to return any messages that match

## What you might do differently

- Since Tag is now used in conversations and messages would be better moved somewhere generic/shared

# Part 4: UI

## How you would go about implementing the solution

Solution structure:

api/
frontend/

User npm workspaces to have monorepo, with singular package json allowing to run commands from base

UI:
Conversations screen:

- A List of each conversation, displaying the Product name and last Messaged
- Button to be able to open conversation

Opened Conversation Screen:

- A conversation showing last 25 messages
- Show more at the top to allow user to scroll further back
- chatbox prompt at the bottom to allow user to type
- Send button alongside chatbox

## What problems you might encounter

Trying to load too many message at once could make it slow, this can be limited by loading a smaller set of data and allowing the user to request more

## How you would go about testing

- Component testing can be used to check state changes on specific components

  - If Chatbox and send button were one component, test that when you click send the message it sent and the box is cleared ready for next message

- e2e testing can be used to
  - create an e2e test having it start on the home (conversations) screen, open a conversation, send a message, then close out of the conversation to go back to the conversations screen
    - at each step checking the user can see what is expected, ie after sending, the message should appear within the Chat section

## What you might do differently, with the UI or the API.

Seperate different "screens in to their own components
use routing to allow pathign between the different "screens"
breakdown whats used into reusable components ie MessageComponent for the each message "bubble", Chat box and button into a single component

use axios to make a call to get conversations?
use a websocket library to make requests while in message view: such as socket.io
