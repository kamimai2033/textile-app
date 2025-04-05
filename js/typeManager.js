import { fetchClothingTypes, addClothingType } from './api.js';

export async function loadTypes() {
  const types = await fetchClothingTypes();
  const select = document.getElementById('type');
  select.innerHTML = '';
  types.forEach(type => {
    const option = document.createElement('option');
    option.value = type;
    option.textContent = type;
    select.appendChild(option);
  });
}

export async function submitNewType(e) {
  e.preventDefault();
  const newType = document.getElementById('newType').value.trim();
  if (!newType) return alert("種類を入力してください。");

  const res = await addClothingType(newType);
  if (res.ok) {
    alert("種類を追加しました！");
    document.getElementById('newType').value = '';
    loadTypes();
  } else {
    alert("種類の追加に失敗しました。");
  }
}
