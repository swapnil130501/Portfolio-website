export function generateSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")     // Remove special characters
    .replace(/\s+/g, "-")             // Replace spaces with hyphens
    .replace(/-+/g, "-");             // Collapse multiple hyphens
}
