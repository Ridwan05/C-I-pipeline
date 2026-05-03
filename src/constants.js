export const STAGES_META = [
  { label: "Preliminary Assessment", color: "#3a9e5f", bullets: ["Site Identification & Selection", "Execution of Exclusivity Agreement"] },
  { label: "Project Preparation", color: "#3b6cb7", bullets: ["Detailed Site Assessment", "Demand Modelling & System Sizing"] },
  { label: "Project Development", color: "#e07b39", bullets: ["Preparation of O & M Plan", "Obtain All Regulatory Permits/Approvals"] },
  { label: "Project Finance", color: "#1a2a4a", bullets: ["Submission of Project Finance Documents", "Guarantee Request Letter Signed"] },
];

export const STAGES_LIST = [
  "Preliminary Assessment",
  "Project Preparation",
  "Project Development",
  "Project Finance",
  "Financial Close",
];

export const ISSUE_CATS = ["Commercial", "Financial Model", "Technical", "Legal", "Deployment", "Governance", "Other"];
export const ISSUE_STATUSES = ["Open", "In Progress", "Escalated", "Resolved"];
export const ROLES = ["Cluster Lead", "Technical Analyst", "Commercial Analyst", "Finance Analyst", "Programme Manager"];

export const RAG_C = { Green: "#3a9e5f", Amber: "#d97706", Red: "#dc2626" };
export const RAG_LIGHT = { Green: "#d4edda", Amber: "#fef3cd", Red: "#f8d7da" };

export const TABS = [
  { id: "pipeline", label: "Pipeline Manager" },
  { id: "kpi", label: "KPI Dashboard" },
  { id: "deployment", label: "Deployment Tracker" },
  { id: "team", label: "Team Performance" },
  { id: "issues", label: "Management Support" },
];

export const INPUT = { padding: "7px 10px", borderRadius: 6, border: "1.5px solid #dde", fontSize: 13, fontFamily: "inherit", width: "100%", boxSizing: "border-box", background: "#f7f8fa" };
export const LBL = { fontSize: 11, color: "#888", fontWeight: 700, display: "block", marginBottom: 3 };
export const EDIT_BTN = { background: "#f0f4ff", border: "none", borderRadius: 6, padding: "4px 8px", cursor: "pointer", fontSize: 12, marginRight: 4 };
export const DEL_BTN = { background: "#fff0f0", border: "none", borderRadius: 6, padding: "4px 8px", cursor: "pointer", fontSize: 12 };
