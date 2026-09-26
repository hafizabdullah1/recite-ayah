// Best-effort protection per server process. Use a shared store or host-level
// rate limiting for protection across serverless instances and restarts.
export function createLeadRateLimiter(limit = 3, windowMs = 15 * 60 * 1000) {
  const attempts = new Map<string, { count: number; expires: number }>();
  return (key: string, now = Date.now()) => {
    for (const [entry, value] of attempts) {
      if (value.expires <= now) attempts.delete(entry);
    }
    const current = attempts.get(key);
    if (current && current.count >= limit) return false;
    // Bound memory without evicting active limits.
    if (!current && attempts.size >= 5000) return false;
    attempts.set(key, { count: (current?.count ?? 0) + 1, expires: current?.expires ?? now + windowMs });
    return true;
  };
}
