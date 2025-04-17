
if (!document.getElementById("jobbee_container")) {
    const root = document.createElement("div");
    root.id = "jobbee_container";
    document.body.appendChild(root);

}


window.addEventListener("message", (e) => {
    console.log(e, "START_APPLY");
    if (e.data.type === "START_APPLY") {
        console.log("START_APPLY");
    }

    // Query the DOM for all buttons that contain "Easy Apply"
    const applyButtons = document.getElementById("jobs-apply-button-id");


    if (applyButtons) {
        applyButtons.click();
    }


    console.log(applyButtons, "applyButtons");
});