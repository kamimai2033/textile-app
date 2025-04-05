const API_URL = 'https://script.google.com/macros/s/【ここにGASのWebアプリURLを挿入】/exec';

export async function fetchClothingItems() {
  const res = await fetch(API_URL);
  return await res.json();
}

export async function addClothingItem(data) {
  return await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify({ ...data, mode: 'add' }),
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function deleteClothingItems(ids) {
  return await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify({ mode: 'delete', ids }),
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function fetchClothingTypes() {
  const res = await fetch(`${API_URL}?mode=types`);
  return await res.json();
}

export async function addClothingType(newType) {
  return await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify({ mode: 'addType', newType }),
    headers: { 'Content-Type': 'application/json' }
  });
}
