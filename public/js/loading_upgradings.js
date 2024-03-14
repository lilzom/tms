function createUpgradingTable() {
    const table = document.createElement('table');
    table.classList.add('table', 'table-bordered', 'table-hover');
    table.setAttribute('id', 'upgradingTable'); // Add an ID for DataTables

    // Create table header
    const thead = document.createElement('thead');
    thead.classList.add('thead-light');
    const headerRow = document.createElement('tr');
    const headerColumns = ['TMS', 'Phân hệ', 'Nội dung', 'Tài liệu'];

    headerColumns.forEach(column => {
        const th = document.createElement('th');
        th.textContent = column;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table body
    const tbody = document.createElement('tbody');

    upgrading_details.forEach(upgrading => {
        const row = document.createElement('tr');

        const versionCell = document.createElement('td');
        versionCell.textContent = upgrading.version;
        row.appendChild(versionCell);

        const subsystemCell = document.createElement('td');
		const subsystemCallSpan = document.createElement('span');
		subsystemCallSpan.classList.add("badge", "badge-primary");
        subsystemCallSpan.textContent = upgrading.subsystems;
		subsystemCell.appendChild(subsystemCallSpan);
        row.appendChild(subsystemCell);

        const contentCell = document.createElement('td');
        contentCell.innerHTML = upgrading.content.map(content => `${content.descriptions}`).join('<br>');
        row.appendChild(contentCell);

        const documentLink = document.createElement('td');
        const documentLinkDetail = document.createElement('a');
        documentLinkDetail.classList.add('btn', 'btn-sm', 'btn-warning');
        documentLinkDetail.setAttribute('target', '_blank');

        const documentLinkDetailiCon = document.createElement('i');
        documentLinkDetailiCon.classList.add('fa-regular', 'fa-file-word');
        documentLinkDetail.appendChild(documentLinkDetailiCon);

        const documentLinkDetailSpan = document.createElement('span');
        documentLinkDetailSpan.textContent = " Tài liệu";
        documentLinkDetail.appendChild(documentLinkDetailSpan);

        documentLinkDetail.href = upgrading.link;
        documentLink.appendChild(documentLinkDetail);
        row.appendChild(documentLink);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);

    return table;
}

function displayUpgradingDetails() {
    // Lấy thẻ div với id là upgrading_content
    const upgradingContentDiv = document.getElementById('upgrading_content');

    // Kiểm tra nếu thẻ div tồn tại
    if (upgradingContentDiv) {
        // Thêm bảng vào thẻ div
        upgradingContentDiv.appendChild(createUpgradingTable());

        
    } else {
        console.error("Không tìm thấy thẻ div với id 'upgrading_content'.");
    }
}

// Gọi hàm để hiển thị thông tin nâng cấp
displayUpgradingDetails();