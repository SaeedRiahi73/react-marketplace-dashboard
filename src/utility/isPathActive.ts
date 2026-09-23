export const isPathActive = (
  pathname: string,
  keywords: readonly string[],
  includeRoot = false,
): boolean => {
  const normalizedPath = pathname.toLowerCase();

  return (
    (includeRoot && normalizedPath === "/") ||
    keywords.some((keyword) => normalizedPath.includes(keyword.toLowerCase()))
  );
};
