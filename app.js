var boxgift = document.querySelector('.box-gift')
var Close = document.querySelector('.fa-xmark')
var boxContent = document.querySelector('.box-content')
var content =document.querySelector('.content')

boxgift.onclick = function(){
    boxgift.classList.toggle('active')
    // boxContent.classList.add('active')
}
content.onclick = function(){
    boxContent.classList.add('active')
}
Close.onclick = function(){
    boxContent.classList.remove('active')
}

// Sử dụng sự kiện onselectstart để ngăn chặn việc chọn văn bản
document.addEventListener('selectstart', function (e) {
    e.preventDefault();
});
// Sử dụng sự kiện contextmenu để ngăn chặn hiển thị menu ngữ cảnh khi chuột phải
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});