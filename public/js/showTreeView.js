document.addEventListener("DOMContentLoaded", () => {
    // Set all is_folder items to be initially collapsed
    jsonData.filter(item => item.is_folder).forEach(item => item.collapsed = true);

    const treeView = document.getElementById("treeView");
    const informations = document.getElementById("description");

    function renderTree(data, parentId = null) {
        const ul = document.createElement("ul");

        data
            .filter(item => item.parent_id === parentId)
            .forEach(item => {
                const li = document.createElement("li");
                li.setAttribute("id", item.id);
                li.classList.add("class", "fs-6");

                const icon = document.createElement("i");
                icon.classList.add("text-warning");
                const span = document.createElement("span");

                if (item.is_folder) {
                    icon.classList.add("mr-3");
                    icon.classList.add("fa-regular", item.collapsed ? "fa-folder" : "fa-folder-open", "folder");
                    span.innerText = item.id;
                } else {
                    icon.classList.add("mr-3");
                    icon.classList.add("text-warning");
                    icon.classList.add("fa-regular", "fa-file");
                    li.classList.add("clickable-row");
                    span.innerText = item.t_code + ' - ' + item.id;
                }

                li.appendChild(icon);
                li.appendChild(span);

                if (item.is_folder && !item.collapsed) {
                    const childrenUl = renderTree(data, item.id);
                    if (childrenUl.children.length > 0) {
                        li.appendChild(childrenUl);
                    }
                }

                ul.appendChild(li);

                li.addEventListener("click", (e) => {
                    e.stopPropagation(); // Stop the event from propagating to the parent li
                    if (item.is_folder) {
                        item.collapsed = !item.collapsed;
                        icon.className = "fa-regular " + (item.collapsed ? "fa-folder" : "fa-folder-open") + " folder";
                        icon.classList.add("mr-3");
                        icon.classList.add("text-warning");

                        // Clear existing children before rendering new ones
                        const childUl = li.querySelector("ul");
                        if (childUl) {
                            li.removeChild(childUl);
                        }

                        if (!item.collapsed) {
                            const childrenUl = renderTree(data, item.id);
                            if (childrenUl.children.length > 0) {
                                li.appendChild(childrenUl);
                            }
                        }
                    } else {
                        // Process as before for leaf nodes
                        while (informations.firstChild) {
                            informations.innerHTML = "";
                        }

                        // Hiển thị danh sách phiên bản
                        if (item.upgradings && item.upgradings.length > 0) {
                            const tableDiv = document.createElement("div");
                            tableDiv.classList.add("table-responsive");
                            const table = document.createElement("table");
                            table.classList.add("table", "table-bordered", "table-hover");

                            const thead = document.createElement("thead");
                            thead.classList.add("thead-primary");
                            const trHeader = document.createElement("tr");
                            trHeader.classList.add("text-center", "align-middle", "table-info");
                            const thVersion = document.createElement("th");
                            const thLink = document.createElement("th");

                            thVersion.classList.add("text-body-secondary");
                            thLink.classList.add("text-body-secondary");

                            thVersion.textContent = "TMS";
                            thLink.textContent = "Link tài liệu";
                            trHeader.appendChild(thVersion);
                            trHeader.appendChild(thLink);
                            thead.appendChild(trHeader);
                            table.appendChild(thead);

                            const tbody = document.createElement("tbody");
                            item.upgradings.forEach(upgrading => {
                                const trVersion = document.createElement("tr");
                                trVersion.classList.add("align-middle");
                                const tdVersion = document.createElement("td");
                                tdVersion.classList.add("text-center");
                                const tdLink = document.createElement("td");

                                tdVersion.textContent = upgrading.version;

                                const linkElement = document.createElement("a");
                                linkElement.classList.add("link");
                                linkElement.href = upgrading.link;
                                linkElement.textContent = upgrading.link;

                                // Đặt target thành "_blank" để mở trong tab mới
                                linkElement.target = "_blank";
                                tdLink.appendChild(linkElement);
                                trVersion.appendChild(tdVersion);
                                trVersion.appendChild(tdLink);
                                tbody.appendChild(trVersion);
                            });
                            table.appendChild(tbody);
                            tableDiv.appendChild(table);

                            informations.appendChild(tableDiv);

                            // Hiển thị modal sau khi cập nhật nội dung
                            showModal();
                        }
                    }
                });
            });

        return ul;
    }

    treeView.appendChild(renderTree(jsonData, null));
});