# removeloginitem

Most of the documented ways to do this leverage applescript and "System Events", which trigger TCC prompts to the user.

If you need to remove loginitems programmatically without user interaction, this JXA will do the trick. Run it with osascript or your preferred JXA interpreter.


# References
Base code is derived from Apfell's persist_loginitem_allusers.js. Mythic currently does not have a delete capability for loginitems, so decided to write one. Big thanks to Cody Thomas and all contributing devs for an awesome C2.
https://github.com/MythicAgents/apfell/blob/master/Payload_Type/apfell/apfell/agent_code/persist_loginitem_allusers.js
