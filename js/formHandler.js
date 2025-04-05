import { addClothingItem } from './api.js';
import { loadData } from './tableRenderer.js';

export async function submitForm(e) {
  e.preventDefault();

  const type = document.getElementById('type').value;
  const buyDate = document.getElementById('buyDate').value;
  const price = parseInt(document.getElementById('price').value);

  const res = await addClothingItem({ type, buyDate, price });
  if (res.ok) {
    alert("登録しました！");
    loadData();
    e.target.reset();
  } else {
    alert("登録に失敗しました。");
  }
}
