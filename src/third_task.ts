export const omit = <T extends Record<any, any>, K extends keyof T>(
  obj: T,
  keyToOmit: K
): Omit<T, K> => {
  const { [keyToOmit]: _, ...withoutKey } = obj;
  return withoutKey;
};