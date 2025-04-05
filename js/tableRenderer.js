import { fetchClothingItems, deleteClothingItems } from './api.js';

export async function loadData() {
  const items = await fetchClothingItems();
  const tbody = document.querySelector("#clothTable tbody");
  tbody.innerHTML = '';

  const today = new Date();

  items.forEach(item => {
    const expiryDate = new Date(item.expiry);
    const diffDays = Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24));
    let className = '';
    if (diffDays < 0) className = 'expired';
    else if (diffDays <= 7) className = 'week';
    else if (diffDays <= 14) className = 'halfmonth';
    else if (diffDays <= 30) className = 'month';

    const tr = document.createElement('tr');
    tr.className = className;
    tr.innerHTML = `
      <td><input type="checkbox" value="${item.id}"></td>
      <td>${item.type}</td>
      <td>${new Date(item.buyDate).toLocaleDateString()}</td>
      <td>${expiryDate.toLocaleDateString()}</td>
      <td>${item.price}</td>
    `;
    tbody.appendChild(tr);
  });
}

export async function deleteSelectedItems() {
  const checked = Array.from(document.querySelectorAll('tbody input[type="checkbox"]:checked'))
                       .map(input => input.value);
  if (checked.length === 0) {
    alert("削除対象を選択してください。");
    return;
  }
  if (!confirm(`本当に${checked.length}件を削除しますか？`)) return;

  const res = await deleteClothingItems(checked);
  if (res.ok) {
    alert("削除しました！");
    loadData();
  } else {
    alert("削除に失敗しました。");
  }
}
