export function isQueryLoading<T>(isLoading: boolean, data: T | undefined): data is undefined {
  return isLoading;
}
