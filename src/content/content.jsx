import React, { useEffect } from "react";

function ContentPage() {



  useEffect(() => {
    console.log("Content Page");
    // window.addEventListener("message", (e) => {
    //   console.log(e, "START_APPLY");
    //   if (e.data.type === "START_APPLY") {
    //     console.log("START_APPLY");
    //   }

    //   // Query the DOM for all buttons that contain "Easy Apply"
    //   const applyButtons = document.getElementById("jobs-apply-button-id");


    //   if (applyButtons) {
    //     applyButtons.click();
    //   }


    //   console.log(applyButtons, "applyButtons");
    // });
  }, []);



  return (
    <div>
      <h1>Content Page</h1>
    </div>
  );
}

export default ContentPage;
