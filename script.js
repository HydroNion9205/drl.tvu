document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const menuToggle = document.getElementById("menu-toggle");
    const tableBody = document.getElementById("student-table-body");
    const backToTopBtn = document.getElementById("backToTop");

    menuToggle.addEventListener("click", () => {
        if (window.innerWidth > 768) {
            sidebar.classList.toggle("collapsed");
        } else {
            sidebar.classList.toggle("mobile-active");
        }
    });

    backToTopBtn.addEventListener("click", () => {
        document.querySelector('.content').scrollTo({ top: 0, behavior: 'smooth' });
    });

    function getBadgeClass(rank) {
        switch(rank) {
            case 'Kém': return 'bg-kem';
            case 'Trung bình': return 'bg-trungbinh';
            case 'Khá': return 'bg-kha';
            case 'Tốt': return 'bg-tot';
            case 'Xuất sắc': return 'bg-xuatsac';
            default: return 'bg-trungbinh';
        }
    }

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            let html = '';
            data.forEach(item => {
                html += `
                    <tr>
                        <td>${item.stt}</td>
                        <td>${item.mssv}</td>
                        <td>${item.name}</td>
                        <td>${item.score}</td>
                        <td><span class="badge ${getBadgeClass(item.rank)}">${item.rank}</span></td>
                    </tr>
                `;
            });
            tableBody.innerHTML = html;
        })
        .catch(error => console.error("Lỗi tải dữ liệu JSON:", error));
});