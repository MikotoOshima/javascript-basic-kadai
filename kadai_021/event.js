// head要素を取得し、中身を出力する
console.log(document.head);
// body要素を取得し、中身を出力する
console.log(document.body);
// windowオブジェクトの中身を出力する
console.log(window);
// HTML要素をidで取得し、中身を出力する
console.log(document.getElementById('text'));

const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});


