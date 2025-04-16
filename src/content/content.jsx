import React, { useEffect } from "react";

const ContentPage = () => {
  useEffect(() => {
    console.log("ContentPage component is mounted and running!");
  }, []);

  return (
    <div
      style={{ padding: "20px", backgroundColor: "#f0f0f0", margin: "10px" }}
    >
      <h1>Content Page</h1>
      <p>
        If you can see this message, the content.js file is running
        successfully!
      </p>
    </div>
  );
};

export default ContentPage;
