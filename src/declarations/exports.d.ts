declare module "react" {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface CSSProperties {
    [varName: `--${string}`]: number | string | undefined;
  }
}

export {};
