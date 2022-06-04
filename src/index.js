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
    // 押された完了ボタンの親タグ(div)を未完了リストから完了リストへ移動（未完了リストから削除し、完了リストへ違う形で移動）
    deleteFromIncompleteList(completeButton.closest("li"));

    // 完了リストに追加する要素
    const addTarget = completeButton.closest("li")

    // TODO内容テキストを取得
    const text = addTarget.querySelector("p").innerText

    // divを初期化
    addTarget.textContent = null;

    // divタグの生成
    const div = document.createElement("div")
    div.className = "list-low"

    // pタグの生成
    const p = document.createElement("p")
    p.innerText = text;

    // buttonタグの生成
    const backButton = document.createElement("button")
    backButton.innerText = "戻す"

    // divタグの子要素に要素を設定
    div.appendChild(p)
    div.appendChild(backButton)

    // liタグの子要素に設定
    addTarget.appendChild(div)

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget)
  });





  // 削除ボタン
  const deleteButton = document.createElement("button")
  deleteButton.innerText = "削除"
  deleteButton.addEventListener("click", () => {

    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.closest("li"));
  });

  // divタグの子要素
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // liタグの子要素に各要素を設定
  li.appendChild(div);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
}

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
}

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
