# Brigaide plugins

[Brigaide](https://brigaide.ai/) gives your team agents with an owner: a Designer, a Code reviewer,
a Marketing lead. They work inside the AI tools you already use and learn from your corrections.

This repository holds the add-ons that put Brigaide inside Claude Code, ChatGPT, Codex and Cursor.

## Brigaide for Claude Code

A bar above the message box shows which agent you're working with and switches to another in one press.

You need a Brigaide account. If you don't have one, [create your Brigaide](https://app.brigaide.ai/signup) first.

**For Claude's chats** (claude.ai, the Claude app, your phone) you don't need this plugin: add Brigaide
from <https://app.brigaide.ai/install/claude>, a few presses on any Claude plan. Do that first.

Then, for the bar in the Claude app's Code tab:

1. Open **Settings**, then **Plugins** (on the web: <https://claude.ai/plugins>).
2. Press **Add**, then **Add marketplace**, then **Add from a repository**. Type
   `brigaide-ai/brigaide-plugins`, choose **Use "brigaide-ai/brigaide-plugins"** and press **Sync**.
3. Press **Brigaide**, then **Add**, then **Continue**.
4. Open the **Code** tab and start a new session. If the bar shows **Connect**, press it.

<details>
<summary>Using Claude Code in a terminal?</summary>

Type these into Claude Code's prompt, one at a time. After the second, choose **Install for you**.

```
/plugin marketplace add brigaide-ai/brigaide-plugins
```

```
/plugin install brigaide@brigaide
```

</details>

Step by step, with pictures: <https://app.brigaide.ai/install/claude>.

## Brigaide for Codex

Every new thread starts as the agent your team set for the folder you're in.

1. Add Brigaide to ChatGPT first: <https://app.brigaide.ai/install/chatgpt>
2. Then add Brigaide for Codex. The same page has a Download button and the four short steps. Nothing
   to run and no settings to edit.

### For a company

On ChatGPT Business, Enterprise or Edu, an admin can add this repository as a plugin source for the
whole workspace. [Tell us](https://app.brigaide.ai/feedback) and we'll set it up with you.

### From a terminal

If you'd rather use Codex's command line:

```bash
codex plugin marketplace add brigaide-ai/brigaide-plugins
```

```bash
codex plugin add brigaide-desktop@brigaide
```

## Brigaide for Cursor

Every new chat in Cursor starts as your agent, with Brigaide's card to switch agents in one press.
Follow <https://app.brigaide.ai/install/cursor>: one **Add to Cursor** button, one sign-in, and one
line so every chat starts as your agent. The plugin in `cursor-plugin/` is for Cursor's Marketplace.

## Help

<https://app.brigaide.ai/help>
