export async function loadProjects() {
  const res = await fetch(
    `${process.env.BASE_URL}/api/projects`
  );
  const data = await res.json();

  return data;
}
