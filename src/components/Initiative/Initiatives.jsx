function ContentSection({ image, text }) {
  return (
    <div
      className="container"
      style={{
        display: "flex",  // Ensures text and image are side by side
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      {/* Text section on the left */}
      <div className="text-section" style={{ flex: 1, padding: "1rem",paddingLeft : "100px" }}>
        <p style={{ fontSize: "1.5rem", textAlign: "justify" }}>
          {text}
        </p>
      </div>

      {/* Image section on the right */}
      <div className="image-section" style={{ flex: 1, textAlign: "center" }}>
        <img
          src={image}
          alt="Illustration"
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "10px",
          }}
        />
      </div>
    </div>
  );
}

export default function Initiatives() {
  const contentArray = [
    {
      text: "First initiative description",
      image: "src/assets/pankaj.jpg",
    },
    {
      text: "Second initiative description",
      image: "src/assets/pankaj.jpg",
    },
    {
      text: "Third initiative description",
      image: "src/assets/pankaj.jpg",
    },
  ];

  return (
    <div style={{ display: "block", width: "100%" }}>
      {contentArray.map((content, index) => (
        <div key={index} style={{ marginBottom: "2rem" }}>
          <ContentSection text={content.text} image={content.image} />
        </div>
      ))}
    </div>
  );
}
