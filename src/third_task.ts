type FIXME = Record<any, any>;

export const omit = <T extends Record<any, any>, K extends keyof T>(
  obj: T,
  keyToOmit: K
): FIXME => {
  const { [keyToOmit]: _, ...withoutKey } = obj;
  return withoutKey;
};