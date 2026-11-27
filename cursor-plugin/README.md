# Brigaide for Cursor

[Brigaide](https://brigaide.ai/) gives your organization AI agents with real jobs: a Designer, a Code
reviewer, a Copywriter, a Product manager. Each one follows the instructions and lessons your
organization gave it. This plugin brings them into Cursor.

Every new chat starts as your agent. In a folder linked to one of your Brigaides, that's the
Brigaide's agent. Anywhere else, it's the agent you chose for new chats.

Brigaide's card in the chat shows who you're talking to. Use its menu to switch agents, or pick
**No agent** to turn them off. You can also just ask: "Work as my Copywriter".

Correct an agent once and it keeps the lesson. It applies in Cursor and in every other AI you use
with Brigaide (Claude, ChatGPT, Gemini).

## Install

1. In Cursor, press **Customize**, then **Add**, then **From Marketplace**, and install **Brigaide**.
2. Press **Sign In** next to Brigaide under MCPs. In the browser, sign in to Brigaide or create a
   free account, then press **Connect**.
3. Press **New Chat** and say hi.

Step by step, with pictures: <https://app.brigaide.ai/install/cursor>.

## What's inside

- `mcp.json`: Brigaide's connector, `https://app.brigaide.ai/mcp` (sign-in with OAuth; nothing to
  configure).
- `rules/brigaide.mdc`: loads your agent at the start of each chat (Cursor applies it to every
  chat). An agent's instructions stay on Brigaide and reach only the model working as it.

Start free at [app.brigaide.ai](https://app.brigaide.ai/signup). Help: <https://app.brigaide.ai/help>.
Privacy: <https://app.brigaide.ai/privacy>. Terms: <https://app.brigaide.ai/terms>.
