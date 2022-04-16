import { server } from "base/config/env";

export async function loadProjects() {
  const res = await fetch(
    `${server}/api/projects`
  );
  const data = await res.json();

  return data;
}
