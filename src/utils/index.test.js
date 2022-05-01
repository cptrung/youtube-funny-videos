import { getVideoId } from "./index";

describe("function getVideoId()", () => {
  test("shold be return 7ZRvXIiF4eg", () => {
    const url = "https://www.youtube.com/watch?v=7ZRvXIiF4eg&ab_channel=Chang";
    const result = getVideoId(url);

    expect(result).toBe("7ZRvXIiF4eg");
  });

  test("shold be return 0zM3nApSvMg", () => {
    const url = "http://youtu.be/0zM3nApSvMg";
    const result = getVideoId(url);

    expect(result).toBe("0zM3nApSvMg");
  });

  test("shold be return 0zM3nApSvMg", () => {
    const url = "http://www.youtube.com/embed/0zM3nApSvMg?rel=0";
    const result = getVideoId(url);

    expect(result).toBe("0zM3nApSvMg");
  });
});
