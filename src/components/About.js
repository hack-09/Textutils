import React from "react";

export default function About(props) {
  // const [myStyle,setMyStyle] =useState({
  //     color: 'black',
  //     backgroundColor: 'white',
  // });

  let myStyle = {
    color: props.mode === "dark" ? "white" : "#041e34",
    backgroundColor: props.mode === "dark" ? "#06355b" : "white",
  };

  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "#042743" }}
    >
      <h1 className="my-3">About us</h1>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
              style={myStyle}
            >
              What are text utilities?
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={myStyle}>
              Text utilities are tools and functions designed to manipulate and
              analyze text data. They help automate tasks related to processing,
              formatting, and extracting information from text.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              How can text utilities benefit me?
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={myStyle}>
              Text utilities can save you time and effort by automating
              repetitive tasks. They are useful for tasks such as text cleaning,
              data extraction, and content analysis.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Which text manipulation functions do your utilities include?
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={myStyle}>
              Our text utilities cover a wide range of functions, including but
              not limited to text cleaning, tokenization, stemming,
              lemmatization, and sentiment analysis.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
              style={myStyle}
            >
              Can I integrate your text utilities into my own applications?
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={myStyle}>
              Yes, our text utilities are designed to be developer-friendly and
              can be easily integrated into various applications through APIs.
              Check our documentation for implementation details.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
              style={myStyle}
            >
              Are there any programming languages or frameworks required to use
              your text utilities?
            </button>
          </h2>
          <div
            id="collapseFive"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={myStyle}>
              Our text utilities are language-agnostic and can be implemented in
              multiple programming languages. We provide libraries and APIs for
              popular languages like Python, Java, and JavaScript.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
              style={myStyle}
            >
              Can your text utilities handle multilingual text?
            </button>
          </h2>
          <div
            id="collapseSix"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={myStyle}>
              Yes, our text utilities are designed to support multiple
              languages. They are equipped with language detection and
              processing capabilities to handle diverse linguistic content.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
