import { loadData, deleteSelectedItems } from './tableRenderer.js';
import { submitForm } from './formHandler.js';
import { loadTypes, submitNewType } from './typeManager.js';

document.addEventListener('DOMContentLoaded', () => {
  // 初期データ読み込み
  loadTypes();
  loadData();

  // 登録フォーム
  const addForm = document.getElementById('addForm');
  addForm.addEventListener('submit', submitForm);

  // 削除ボタン
  const deleteBtn = document.getElementById('deleteSelected');
  deleteBtn.addEventListener('click', deleteSelectedItems);

  // 種類追加フォーム
  const typeForm = document.getElementById('typeForm');
  typeForm.addEventListener('submit', submitNewType);
});
