import { React, useRef } from "react";

const Main = () => {
  return (
    <section class="showcase">
        <div id="balloons" class="item">
          <section
            class="nes-container"
            style={{
              display: "flex",
              flexDirection: "column-reverse",
              maxHeight: "55vh", 
              overflowY: "auto",
            }}
          >
            <section class="message-list">
              <section class="message -left">
                <div
                  class="nes-balloon from-left"
                  style={{ maxWidth: "400px", wordWrap: "break-word" }}
                >
                  <p>
                    I hope.
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  </p>
                </div>
              </section>

              <section class="message -right" style={{ textAlign: "right" }}>
                <div
                  class="nes-balloon from-right"
                  style={{ maxWidth: "400px", wordWrap: "break-word" }}
                >
                  <p>
                    I hope.
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  </p>
                </div>
              </section>
              <section class="message -left">
                <div
                  class="nes-balloon from-left"
                  style={{ maxWidth: "400px", wordWrap: "break-word" }}
                >
                  <p>
                    I hope.
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  </p>
                </div>
              </section>
            </section>
          </section>
        </div>
    </section>
  );
};

export default Main;

// import React, { useRef } from "react";
// import "./styles.css";

// export default function Blog() {
//   const containerRef = useRef(null);
//   function addPost() {
//     const postNode = document.createElement("div");
//     postNode.innerText = "This post is appended!";
//     containerRef.current.appendChild(postNode);
//   }
//   return (
//     <>
//       <div ref={containerRef} className="App">
//         <div>Main container title</div>
//         <div>Default post 1</div>
//         <div>Default post 2</div>
//       </div>
//       <button onClick={addPost}>add a post</button>
//     </>
//   );
// }
