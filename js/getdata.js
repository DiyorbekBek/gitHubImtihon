export async function getData(api) {
  const req = await fetch(api);
  const data = await req.json();
  return data;
}
