function showModal() {

    // Lấy thẻ modal bằng ID
    var modalDiv = document.getElementById('exampleModal');

    // Tạo một đối tượng Modal
    var modal = new bootstrap.Modal(modalDiv, {
        backdrop: true, // Backdrop bị ẩn khi mở modal
        keyboard: true, // Đóng modal khi bấm phím Esc
    });

    // Hiển thị modal
    modal.show();

}