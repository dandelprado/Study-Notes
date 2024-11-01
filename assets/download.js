document.addEventListener('DOMContentLoaded', function() {
    const { jsPDF } = window.jspdf;
    document.getElementById('downloadPDF').addEventListener('click', function () {
        const doc = new jsPDF();
        const content = document.body.textContent || document.body.innerText;
        doc.text(content, 10, 10);
        doc.save('page.pdf');
    });
});
