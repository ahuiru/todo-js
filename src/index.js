// import "styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // liタグの生成
  const li = document.createElement("li");

  // div生成
  const div = document.createElement("div");
  div.className = "list-low";

  // pタグの生成
  const p = document.createElement("p");
  p.innerText = inputText;


  // 完了ボタン
  const completeButton = document.createElement("button")
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  // 削除ボタン
  const deleteButton = document.createElement("button")
  deleteButton.innerText = "削除"
  deleteButton.addEventListener("click", () => {
    
  });

  // divタグの子要素
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // liタグの子要素に各要素を設定
  li.appendChild(div);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li)
}

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
