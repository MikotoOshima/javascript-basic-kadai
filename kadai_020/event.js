// head要素を取得し、中身を出力する
console.log(document.head);
// body要素を取得し、中身を出力する
console.log(document.body);
// windowオブジェクトの中身を出力する
console.log(window);
// HTML要素をidで取得し、中身を出力する
console.log(document.getElementById('text'));

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    text.textContent = 'ボタンをクリックしました';
  });
