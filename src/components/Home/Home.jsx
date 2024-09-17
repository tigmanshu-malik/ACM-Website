import TextSpan from "../Team/TextSpan";


export default function Home() {
    return (
      <>
        <div 
          className="container" 
          style={{
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            height: "50rem", 
            padding: "1rem", 
        
          }}
        >
          <div className="text-section" style={{ flex: 1, padding: "1rem" , paddingLeft : "100px"}}>
            <p style={{ fontSize: "1.5rem", textAlign: "justify" }}>
                ACM KI TARIFF MAI DO SHABAD 
            </p>
          </div>

  
          <div className="image-section" style={{ flex: 1, textAlign: "center" }}>
            <img
              src="src/assets/pankaj.jpg" // Replace with your image URL
            alt="Some picture should be here which is not available right now thats why you are reading the text"
              style={{
                maxWidth: "100%", 
                height: "auto",
                borderRadius: "10px", 
              }}
            />
          </div>
        </div>
      </>
    );
  }
  