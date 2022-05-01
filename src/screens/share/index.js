import React from "react";
import { useNavigate } from "react-router-dom";

import { FormGroup } from "../../components";
import useToken from "../../utils/useToken";
import "../Styles.css";

const Share = () => {
  const { token } = useToken();
  let navigate = useNavigate();

  const [url, setUrl] = React.useState(
    "https://www.youtube.com/watch?v=EBpp2VTSI2Q"
  );

  const onSubmit = () => {
    if (!url) return;

    fetch("/api/videos", {
      method: "POST",
      body: JSON.stringify({
        url,
        email: token.email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="share-box">
      <div>
        <FormGroup label="Share a Youtube movie">
          <form>
            <ul>
              <li data-label="Youtube URL:">
                <input
                  data-testid="url"
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </li>
              <li>
                <button type="button" onClick={onSubmit}>
                  Share
                </button>
              </li>
            </ul>
          </form>
        </FormGroup>
      </div>
    </div>
  );
};

export default Share;
