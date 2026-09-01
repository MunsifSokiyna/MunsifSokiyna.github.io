/*
  News & Milestones feed.
  To add a new item: copy an object below, edit it, and add it to the TOP of the array
  (newest first). No other file needs to change — the homepage renders this automatically.

  Fields:
    date   - "YYYY-MM" or "YYYY-MM-DD" (used for sorting and display)
    tag    - short category label, e.g. "Position", "Publication", "Award", "Talk", "Grant"
    title  - short headline
    body   - one or two sentences of detail
    link   - optional URL ("" if none) — the title becomes clickable when set
*/
const NEWS = [
  {
    date: "2026-08",
    tag: "Publication",
    title: "Journal article published in the Journal of Strategic Information Systems",
    body: "“Multi-project involvement and volunteer developers’ continued contribution to open-source software projects,” with P. N. Sharma, H. Safadi, E. Karahanna, and J. Hulland.",
    link: "Pending"
  },
  
  {
    date: "2026-08",
    tag: "Position",
    title: "Joined the University of Central Oklahoma",
    body: "Started as Assistant Professor of Information Systems and Operations Management in the Business Analytics, Information Systems and Supply Chain Management (BISC) Department.",
    link: ""
  },
  {
    date: "2026-06",
    tag: "Publication",
    title: "Paper accepted to AMCIS 2026",
    body: "“Threat Multiplier in Open Source Projects: Longitudinal Evidence on Conditional Resilience and Governance Limits” accepted to the Americas Conference on Information Systems.",
    link: "https://aisel.aisnet.org/amcis2026/vcc/vcc/1"
  },
  {
    date: "2026-01",
    tag: "Publication",
    title: "Journal article published in Behavior & Information Technology",
    body: "“Threat appraisal and coping strategies: how users navigate toxicity in online technical communities,” with A. Herfurth and P. N. Sharma.",
    link: "https://doi.org/10.1080/0144929X.2026.2633774"
  },
  {
    date: "2025-08",
    tag: "Publication",
    title: "Paper published at ICIS 2025",
    body: "“When AI writes the code: Trust and community cohesion in OSS development,” presented at the International Conference on Information Systems.",
    link: "https://aisel.aisnet.org/icis2025/gen_ai/gen_ai/5"
  },
  {
    date: "2025-05",
    tag: "Award",
    title: "Outstanding Doctoral Student Teaching Award",
    body: "Received the University of Alabama’s Outstanding Doctoral Student Teaching Award in Management Information Systems.",
    link: ""
  },
  {
    date: "2024-08",
    tag: "Publication",
    title: "Two papers presented at AMCIS 2024",
    body: "“Aggressive, disrespectful, uncivil: An immersive examination of toxic communications…” and “Stack Overflow users’ responses to toxicity: An exploratory study.”",
    link: "https://aisel.aisnet.org/amcis2024/vcc/vcc/9"
  }
];
