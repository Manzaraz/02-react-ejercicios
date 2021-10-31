import React from "react";

const Message = ({ msg, bgColor }) => {
  let styles = {
    padding: "1rem",
    marginBottom: "1rem",
    textAlign: "Center",
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: bgColor,
  };
  return (
    <div style={styles}>
      {/* <p>{msg}</p> */}
      <p dangerouslySetInnerHTML={{ __html: msg }} />
    </div>
  );
};

export default Message;
