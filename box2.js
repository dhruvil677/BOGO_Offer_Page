document.addEventListener("DOMContentLoaded", function () {
    const options = document.querySelectorAll(".option");
    const totalPrice = document.getElementById("total-price");

    options.forEach(option => {
        option.addEventListener("click", function () {
            options.forEach(opt => opt.classList.remove("selected"));
            this.classList.add("selected");

            const expandable = this.querySelector(".expandable");
            document.querySelectorAll(".expandable").forEach(exp => exp.style.display = "none");
            if (expandable) expandable.style.display = "block";

            const price = this.querySelector(".price").textContent;
            totalPrice.textContent = price;
        });
    });
});
