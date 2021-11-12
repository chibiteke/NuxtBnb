// ------------------------------------------------------------
// ペースト操作が行われると実行されるイベント
// ------------------------------------------------------------
window.addEventListener('paste', function (e) {
  // ------------------------------------------------------------
  // デフォルトのペースト処理をキャンセル
  // ------------------------------------------------------------
  e.preventDefault()

  // ------------------------------------------------------------
  // DataTransfer オブジェクトを取得する
  // ------------------------------------------------------------
  var data_transfer = e.clipboardData || window.clipboardData

  // ------------------------------------------------------------
  // テキストデータを取得する
  // ------------------------------------------------------------
  var text = data_transfer.getData('text')

  // 挿入する新しいノードを作成する
  var newNode = document.createElement('div')
  var elem = document.getElementById('vimeo-player-1')
  var parent = elem.parentNode
  var lastelem = parent.lastElementChild
  parent.insertBefore(newNode, lastelem)
  newNode.style.whiteSpace = 'pre'
  newNode.style.height = '200px'
  newNode.style.overflow = 'scroll'
  newNode.style.width = '100%'
  newNode.style.background = '#fff'
  newNode.style.color = '#000'
  newNode.style.fontSize = '14px'
  newNode.style.padding = '0 14px'
  newNode.innerHTML = text

  var timerId = setInterval(function () {
    newNode.scrollTop = newNode.scrollTop + 21
  }, 1000)
})
