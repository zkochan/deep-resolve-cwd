export = deepResolveCwd;

declare function deepResolveCwd (moduleIds: string[]): string;

declare namespace deepResolveCwd {
  export function silent (moduleIds: string[]): string;
}
