## `ConsoleCommand`

### Arguments (in table)
- `command` (string): the text that was typed in the server console

### Description
Called when a string of text is typed in the server console and then enter is pressed. Return false to cancel default behavior, such as `reload` reloading the scripts. Returning false will cause `reload` to do nothing, so you can create custom behavior.