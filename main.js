document.addEventListener('DOMContentLoaded', function () {
    const totalPages = 4;
    let currentPage = 0;
    const showPage = (n) => {
        for (let i = 0; i < totalPages; i++) {
            document.getElementById('page-' + i).classList.remove('active');
            document.querySelector('.sidebar-page[data-page="' + i + '"]').classList.remove('active');
        }
        document.getElementById('page-' + n).classList.add('active');
        document.querySelector('.sidebar-page[data-page="' + n + '"]').classList.add('active');
        document.getElementById('pageIndicator').textContent = `Page ${n+1} of ${totalPages}`;
    };
    document.querySelectorAll('.sidebar-page').forEach(function(indicator) {
        indicator.addEventListener('click', function() {
            const page = parseInt(this.getAttribute('data-page'));
            currentPage = page;
            showPage(currentPage);
            // On mobile, close sidebar after selection
            if (window.innerWidth <= 700) {
                document.getElementById('sidebar').classList.add('closed');
            }
        });
    });
    showPage(currentPage);

    // Sidebar toggle
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('closed');
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth > 700) return;
        if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
            sidebar.classList.add('closed');
        }
    });
});
