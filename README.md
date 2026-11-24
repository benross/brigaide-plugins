# Brigaide plugins

[Brigaide](https://brigaide.ai/) gives your team agents with an owner: a Designer, a Code reviewer,
a Marketing lead. They work inside the AI tools you already use and learn from your corrections.

This repository holds the add-ons that put Brigaide inside Claude Code, ChatGPT and Codex.

## Brigaide for Claude Code

A bar above the prompt shows which agent you're talking to and switches to another in one press.

You need a Brigaide account. If you don't have one, [create your Brigaide](https://app.brigaide.ai/signup) first.

In the Claude app on your computer:

1. Open **Settings**, then **Plugins** (on the web: <https://claude.ai/plugins>).
2. Press **Add**, then **Add marketplace**, then **Add from a repository**. Type
   `benross/brigaide-plugins`, choose **Use "benross/brigaide-plugins"** and press **Sync**.
3. Press **Brigaide**, then **Add**.
4. Open the **Code** tab and start a new session. In the Brigaide bar above the message box, press
   **Connect** and sign in.

<details>
<summary>Optional: use Claude Code in a terminal instead</summary>

Type these into Claude Code's prompt, one at a time. After the second, choose **Install for you**.

```
/plugin marketplace add benross/brigaide-plugins
```

```
/plugin install brigaide@brigaide
```

</details>

For Claude on the web or in the desktop app's chats, follow <https://app.brigaide.ai/install/claude>.

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
codex plugin marketplace add benross/brigaide-plugins
```

```bash
codex plugin add brigaide-desktop@brigaide
```

## Help

<https://app.brigaide.ai/help>
