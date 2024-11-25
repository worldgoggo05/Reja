// Form submission handling
function itemTemplate(item) {
    return  `<li class="list-group-item">
                <span class="item-text">${item.reja}</span>
                <div class="button-group">
                    <button data-id="${item._id}" class="btn btn-sm btn-edit">Ozgartirish</button>
                    <button data-id="${item._id}" class="btn btn-sm btn-delete">Ochirish</button>
                </div>
            </li>`
}
let createField = document.getElementById("create-field");
document.getElementById("create-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    if (createField.value.trim() === "") return;  // Prevent empty submissions
    
    axios
        .post("/create-item", { reja: createField.value })
        .then((response) => {
            // Only add to the list if we get valid data back
            if (response.data._id) {
                document.getElementById("item-list").insertAdjacentHTML(
                    "beforeend", 
                    itemTemplate(response.data)
                );
                createField.value = "";  // Clear the input field
                createField.focus();     // Return focus to input
            }
        })
        .catch((err) => {
            console.log("Xatolik yuz berdi:", err);
        });
});

// Delete all items functionality
document.querySelector(".delete-all").addEventListener("click", function() {
    if(confirm("Hamma rejalarni o'chirishni xohlaysizmi?")) {
        axios.post("/delete-all")
            .then((response) => {
                if(response.data.success) {
                    location.reload();
                }
            })
            .catch((err) => {
                console.log("Xatolik yuz berdi");
            });
    }
});