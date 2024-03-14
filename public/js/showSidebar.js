//Khi click chuột vào nút togggle thì ẩn/hiện sidebar
document.getElementById("sidebarCollapse").addEventListener('click', (e) => {
    document.getElementById("sidebar").classList.toggle("active");
});