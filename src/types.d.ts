declare global {
  interface DateFormatOptions {
    month: "short";
    day: "numeric";
    hour: "numeric";
    minute: "numeric";
  }

  type Currency = [string, number];
}

export {};
