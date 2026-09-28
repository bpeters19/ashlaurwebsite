export type SafetyMetric = {
  label: string;
  value: string;
  note: string;
};

export const safetyMetrics: SafetyMetric[] = [
  {
    label: "EMR",
    value: "TODO",
    note: "TODO(client-content): Add official EMR from latest carrier report.",
  },
  {
    label: "Recordable Incident Rate",
    value: "TODO",
    note: "TODO(client-content): Add current incident rate metric and timeframe.",
  },
  {
    label: "OSHA Training Completion",
    value: "TODO",
    note: "TODO(client-content): Add workforce completion percentage.",
  },
];

export const workWithUsPlaceholders = {
  bondingCapacity: "TODO-BONDING-CAPACITY",
  insuranceLimits: "TODO-INSURANCE-LIMITS",
} as const;
