import { get } from "lodash";
import { createServer, Model } from "miragejs";
import { getVideoId } from "./utils";

createServer({
  models: {
    user: Model,
    video: Model,
  },
  seeds(server) {
    server.create("user", {
      email: "someone@gmail.com",
      password: "cptrung@gmail.com",
    });
    server.create("video", {
      email: "someone@gmail.com",
      videoId: "EBpp2VTSI2Q",
      url: "https://www.youtube.com/watch?v=EBpp2VTSI2Q",
      title: "HD Film Countdown Leader in 16x9 Ratio",
      description:
        '1 Beastly Exploitation Cinema\'s Film Leader Countdown.\r\n\r\nThis 1080p HD Film Countdown Leader  was created with Paint.Net and VirtualDub.  There is no sound.  The countdown was created at 24 FPS to give every frame a correct "Film" feel. This 1080p HD Film Countdown Leader  was created with Paint.Net and VirtualDub.  There is no sound.  The countdown was created at 24 FPS to give every frame a correct "Film" feel.',
    });
    server.create("video", {
      email: "someone@gmail.com",
      videoId: "E7wJTI-1dvQ",
      url: "https://www.youtube.com/embed/E7wJTI-1dvQ",
      title: "HD Film Countdown Leader in 16x9 Ratio",
      description:
        '2 Beastly Exploitation Cinema\'s Film Leader Countdown.\r\n\r\nThis 1080p HD Film Countdown Leader  was created with Paint.Net and VirtualDub.  There is no sound.  The countdown was created at 24 FPS to give every frame a correct "Film" feel. This 1080p HD Film Countdown Leader  was created with Paint.Net and VirtualDub.  There is no sound.  The countdown was created at 24 FPS to give every frame a correct "Film" feel.',
    });
  },
  routes() {
    this.namespace = "api";
    this.passthrough("https://www.googleapis.com/youtube/v3/**");

    this.get("/videos", (schema) => {
      return {
        data: schema.videos.all().models,
      };
    });

    this.post("/videos", (schema, request) => {
      const { url, email } = JSON.parse(request.requestBody);
      const videoId = getVideoId(url);
      fetch(
        `https://www.googleapis.com/youtube/v3/videos?key=${process.env.REACT_APP_VIDEO_API_KEY}&fields=items(snippet(title,description))&part=snippet&id=${videoId}`
      )
        .then((response) => response.json())
        .then((data) => {
          const title = get(data, "items[0].snippet.title", "");
          const description = get(data, "items[0].snippet.description", "");
          const newVideo = {
            email,
            videoId,
            url,
            title,
            description,
          };

          return schema.videos.create(newVideo).attrs;
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      return null;
    });

    this.post("/login", (schema, request) => {
      const { email, password } = JSON.parse(request.requestBody);
      const user = schema.users.findBy({ email });

      if (user) return user.attrs;

      const newUser = {
        email,
        password,
      };
      return schema.users.create(newUser).attrs;
    });
  },
});
