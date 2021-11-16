import "./App.css";
import ReactHashtag from "./components/HashTag/hashtag";

function App() {
  return (
    <div>
      <ReactHashtag>Hi, my name is @Harry. Senior Intern</ReactHashtag>
      <div>
        <ReactHashtag
          renderHashtag={(value: string) => {
            return (
              <span key={"hashtag" + value} className="css-custom">
                {value}
              </span>
            );
          }}
        >
          @Harry custom witch css or SCSS
        </ReactHashtag>
      </div>
    </div>
  );
}

export default App;
