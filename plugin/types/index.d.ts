/** One agent the person can talk to here, as the connector's team_list returns it, in their order. */
export type TeamAgent = {
  /** Instance id: "marketing" (Everywhere) or "acme.marketing" (a project's copy). */
  id: string
  agent: string
  title: string
  summary: string
  scope: 'everywhere' | 'project'
  project: string | null
  starred: boolean
  uses: number
  can_edit: boolean
  /** The one AI app it works in ("claude" or "chatgpt"); left out when it runs in any (docs/runs-in.md). */
  runs_in?: 'claude' | 'chatgpt'
  /** Reads the work for itself when asked to weigh in (a code review); the others are handed a packet. Older servers leave it out. */
  full?: boolean
}

/** When to bring an agent in, for this team. */
export type Handoff = {
  id: string
  /** The agent brought in (instance id). */
  to: string
  to_title: string
  when: string
  stage: string
  ask: string
  /** Files (globs, relative to the folder) or a command (a regular expression) that make the rule apply. */
  watch: { paths: string[]; command?: string; words?: string[] } | null
  /** This teammate reads the work for itself (a code review); the others are handed a packet. Older servers leave it out. */
  full?: boolean
  /** Requests that should bring this teammate in, and ones that shouldn't (judged by meaning, not words). */
  examples?: string[]
  not_for?: string[]
  /** Whether the band asks for it when the rule applied and nobody brought the agent in. */
  remind: boolean
}

export type Team = {
  organization: string
  org_slug: string
  you: string
  /** The project this folder is linked to, if any. */
  project: { slug: string; name: string; default_agent: string | null; shows_everywhere: boolean; linked_by: string } | null
  /** This person's own choice of who new conversations here start with (null: the project's default). Older servers leave it out. */
  my_default?: string | null
  /** Every Brigaide (projects): for the bar always (to link a folder, or use another in one chat); for others only when the folder isn’t linked. */
  projects: { slug: string; name: string }[]
  agents: TeamAgent[]
  handoffs?: Handoff[]
  /** This person chose lighter hand-offs: a faster model for most teammates, and small changes checked without starting one. Off unless they turned it on. */
  lighter?: boolean
  /** Catalog roles this team doesn't have, and where an admin adds them. */
  missing?: { agent: string; title: string }[]
  dashboard_url?: string
  add_url?: string
  /** Where to create a new Brigaide; only for people who may. */
  create_url?: string
  /** Agents this person asked for on the website, waiting to be built in Claude. */
  agent_requests?: { id: string; title: string; project: string | null; scope: 'team' | 'personal'; /** waiting: build it now; building: a bar is on it; failed: wait for a person. */ build?: 'waiting' | 'building' | 'failed' }[]
  manage_url: string
}

/** An agent's merged skill, as agent_get (format json) returns it. */
export type Skill = { id: string; title: string; summary: string; rev: number; etag: string; markdown: string }

/** A teammate this conversation heard from: brought in as a sub-agent and answered. */
export type Heard = { id: string; title: string; times: number; at: number }

/** The last lesson learned in this conversation, shown in the band with Undo for a couple of turns. */
/** `learnedFor` is who it's for, in the server's words ("every agent at Acme"); a lesson for every agent has `narrow` ("Just the Designer") and stays until answered. */
export type Learned = { id: number; agentTitle: string; rule: string; outcome: 'rule' | 'personal'; turns: number; learnedFor?: string; narrow?: string; stays?: boolean; note?: string }

/** A teammate a rule called for last turn who wasn't brought in; the band offers to bring them in. */
export type Missed = { id: string; to: string; title: string; why: string }

/** An agent the person picked that works in another app: the band says where, with a button that opens it there. */
export type Elsewhere = { id: string; title: string; app: string; url: string; /** Asked by name, it answers here (through Codex). */ answers?: boolean }

/** Who the person chose in this conversation; null id means "no agent". */
/** pinned: not a pick the person made, but the agent the chat began with, kept so a changed default never moves it. */
export type Choice = { id: string | null; pinned?: boolean }

/** connecting: the connector isn't up yet (normal for the first seconds of a session). */
/** needs-connect: Claude Code's permission check refused the band's calls, and the band hasn't signed in on its own yet (Connect). */
export type Status = 'connecting' | 'not-connected' | 'connected' | 'error' | 'needs-connect'

/** The feedback field in the band, while it's open: what kind, and whether it's sending. */
export type FeedbackDraft = { kind: 'bug' | 'idea'; sending: boolean }

declare module 'claude-code' {
  interface PluginState {
    'brigaide': {
      /** The folder the session is in now. The app's new conversations start elsewhere and move in. */
      root: string | null
      /** The team for that folder: from this machine's cache at once, then fresh from the connector. */
      team: Team | null
      /** The person's choice in this conversation; null until they choose (the project's default applies). */
      choice: Choice | null
      skill: Skill | null
      status: Status
      /** Teammates last turn's rules called for who weren't brought in. */
      missed: Missed[]
      /** Folders where the person asked not to be offered linking. */
      unlinkedHidden: string[]
      /** The last lesson learned here, while the band still shows it. */
      learned: Learned | null
      /** Teammates this conversation heard from, in the order they first answered. */
      heard: Heard[]
      /** The person's own default agent per place ("org/project", or "org:folder" when unlinked); "" means no agent. */
      defaults: Record<string, string>
      /** Whether the band shows them (the person's choice, kept across conversations). */
      showHeard: boolean
      /** The feedback field, while the person has it open. */
      feedback: FeedbackDraft | null
      /** Whether the person's Claude Code theme is dark (null: unknown, as with "auto"); picks the brand colors' shade. */
      dark: boolean | null
      /** Whether a turn is running on the main loop: the band's mark becomes a dot moving down. */
      working: boolean
      /** Which of the moving dot's three frames is showing. */
      frame: number
      /** While waiting for the person to finish Connect in the browser: the code the page shows too. */
      connecting: string | null
      /** The agent just picked that works in another app, until dismissed, another pick, or the next turn. */
      elsewhere: Elsewhere | null
      /** The Brigaide this chat uses instead of the folder's (a slug, or "everywhere"); null: the folder's. */
      place: string | null
      /** The folder's own Brigaide, for "Back to …" while the chat uses another. */
      home: { slug: string; name: string | null } | null
      /** The agent menu is listing Brigaides to pick from (after "Use another Brigaide…"). */
      picking: boolean
    }
  }
}
