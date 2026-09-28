const placeholderEnv = process.env.NEXT_PUBLIC_SHOW_PLACEHOLDER_CONTENT;

export const SHOW_PLACEHOLDER_CONTENT =
  placeholderEnv === "true" || (placeholderEnv !== "false" && process.env.NODE_ENV !== "production");

export function isPlaceholderValue(value: string): boolean {
  return value === "TODO" || value.startsWith("TODO-") || value.startsWith("TODO(");
}
