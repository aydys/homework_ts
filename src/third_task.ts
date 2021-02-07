export const omit = <T extends Record<any, any>, K extends keyof T>(
  obj: T,
  keyToOmit: K
): Pick<T, Exclude<keyof T, K>> => {
  const { [keyToOmit]: _, ...withoutKey } = obj;
  return withoutKey;
};