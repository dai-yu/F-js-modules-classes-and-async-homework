// eslint-disable-next-line import/prefer-default-export
export const getPoetry = () =>
  fetch("https://v1.jinrishici.com/all.json")
    .then((response) => response.json())
    .then((data) => {
      const { origin, author, content } = data;
      return [origin, author, content];
    });
