const refs = {
    input: document.querySelector("#validation-input"),
    // value: Number(refs.input.getAttribute("data-length")),
};

const value = Number(refs.input.getAttribute("data-length"))

refs.input.addEventListener("blur", (event) => {
    if (event.target.value.length === value) {
        refs.input.classList.add("valid");
        refs.input.classList.remove("invalid");
    } else {
        refs.input.classList.add("invalid");
        refs.input.classList.remove("valid");
    }
});

