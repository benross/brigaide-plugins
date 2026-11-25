# Brigaide for Claude Code

Brigaide gives you and your organization a set of AI agents (a Marketing lead, a Code reviewer, a
Designer, and any agent you make) that work inside the AI you already use and learn from your
corrections. This plugin brings them into Claude Code: a bar above the prompt shows which agent
you're working with and switches to another in one press.

You need a Brigaide account. Create one at <https://app.brigaide.ai/signup> (free to start, no
card). Step-by-step install, with pictures: <https://app.brigaide.ai/install/claude>.

## What it adds

- **The Brigaide connector** (`.mcp.json`): `https://app.brigaide.ai/mcp`, signed in with your
  Brigaide account. It gives Claude your agents' instructions, lessons and skills, and records a
  lesson when you correct an agent.
- **The bar** (`hooks/register.tsx`): draws the agent you're working with above the prompt, lets you
  switch, star or turn agents off, and adds the chosen agent's instructions to the session.

## What it runs and sends

The bar talks only to Brigaide's own server, `https://app.brigaide.ai`, over your sign-in. The two
exceptions are tools you already use and are named below: Codex (which sends to OpenAI) and a
background Claude Code run (which sends to Anthropic and reads the web).

- **To Brigaide:** which agent you picked and how often you use each one; when one agent asks
  another to weigh in, which agents and the ask's short title (up to 120 characters); the open
  folder's path and git remote addresses, and the `.claude/team.json` in it or a folder above it,
  so the folder opens the right Brigaide; the names and descriptions (not the contents) of the
  folder's skills in `.claude/skills`, and of skills in `~/.claude/skills` only when one of your
  agents names them; lessons you record; and, only when you send feedback from the bar, your note
  with the bar's recent state (paths shown with your home folder as `~`).
- **On your computer**, with short time limits:
  - `git log` and `git config` in the open folder: which files a turn's commit changed (to decide
    whether the Code reviewer should weigh in) and the folder's remote addresses.
  - `find` and `grep` in the two skills folders above, reading each skill's name and description.
  - `sh -c "command -v ..."` to find `codex` and `claude` if they're installed.
  - `codex login status`, when your Brigaide has an agent that runs in ChatGPT, to see whether it
    can answer here. Only when you ask that agent to weigh in, `codex exec`: that agent's
    instructions and the request go to Codex on standard input, with Codex's own permissions in
    the open folder and nothing kept in its history.
  - `claude -p`, only when you've asked Brigaide for a new agent (on the website or from the bar):
    a background Claude Code run in `/tmp` with web search and web fetch only, no other tools, no
    settings and no other servers, which researches the role; the bar sends the draft to Brigaide.
  - `open`, to open a page you pressed in the bar: a Brigaide page, ChatGPT or Gemini for an agent
    that runs there, or Claude's Plugins page to update.
  - `printenv BRIGAIDE_SERVER`, for Brigaide's own developers: if it names one of two developer
    addresses, the bar talks to that test server instead of production.

## Privacy, terms and help

- Privacy policy: <https://app.brigaide.ai/privacy>
- Terms of service: <https://app.brigaide.ai/terms>
- Help: <https://app.brigaide.ai/help>, or write to hello@brigaide.ai

Made by Leela Unlimited Inc. See `LICENSE`.
