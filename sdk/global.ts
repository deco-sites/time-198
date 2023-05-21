import { signal } from "@preact/signals";

export function createAppState() {
  const displayLoginForm = signal(false);

  return { displayLoginForm };
}
