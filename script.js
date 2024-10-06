$(document).ready(function () {
  let currentIndex = 0; // 現在の画像のインデックスを追跡
  const images = $('#slideshow img'); // すべての画像を選択
  const totalImages = images.length; // 画像の総数を取得

  // 現在のインデックスに基づいて画像を表示する関数
  function showImage(index) {
	images.removeClass('active-slide').addClass('inactive-slide'); // すべての画像を非表示にする
	images.eq(index).addClass('active-slide').removeClass('inactive-slide'); // 現在の画像を表示
  }

  // 初期画像を表示する
  showImage(currentIndex);

  // "Next" ボタンのクリックイベントリスナー
  $('#next-btn').on('click', function () {
	currentIndex = (currentIndex + 1) % totalImages; // 最後の画像の次は最初の画像にループする
	showImage(currentIndex);
  });

  // "Previous" ボタンのクリックイベントリスナー
  $('#prev-btn').on('click', function () {
	currentIndex = (currentIndex - 1 + totalImages) % totalImages; // 最初の画像の前は最後の画像にループする
	showImage(currentIndex);
  });

  // ページロード後にヘッダーが必ず表示されるようにする
  $('.header-content').show(); // 初期表示でヘッダーを確実に表示
});
