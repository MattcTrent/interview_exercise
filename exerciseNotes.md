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
