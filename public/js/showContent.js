document.addEventListener('DOMContentLoaded', function() {
    // Get all menu items
    var menuItems = document.querySelectorAll('#sidebar ul li');

    // Attach click event listeners to menu items dynamically
    menuItems.forEach(function(menuItem) {
        menuItem.addEventListener('click', function(e) {
            e.preventDefault();
            // Remove 'active' class from all menu items
            menuItems.forEach(function(item) {
                item.classList.remove('active');
            });
            // Add 'active' class to the clicked menu item
            this.classList.add('active');
            // Get the target content ID from the clicked menu item
            var targetContentId = this.querySelector('a').getAttribute('href');
            // Call the showContent function with the target content ID
            showContent(targetContentId);
        });
    });

    // Function to show/hide content based on target content ID
    function showContent(targetContentId) {
        // Hide all content sections
        document.querySelectorAll('#content .content-section').forEach(function(contentSection) {
            contentSection.style.display = 'none';
        });

        // Show the selected content section
        document.querySelector(targetContentId).style.display = 'block';
    }

    // Khi tải trang thì ưu tiên show trang chủ
    showContent('#functions');
});