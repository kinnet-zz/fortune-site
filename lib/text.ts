/** Remove a leading emoji/symbol (and its trailing space) from a localized label. */
export function stripLeadingEmoji(value: string): string {
  return value.replace(/^[^A-Za-z0-9가-힣\u3040-\u30FF\u4E00-\u9FFF]+/, '').trim();
}
