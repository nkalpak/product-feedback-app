function getArrayQueryParam(value: (string | number)[]): string {
  return value.join(',');
}

export { getArrayQueryParam };
