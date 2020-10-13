const getPuzzle = (callBack) => {
  const request = new XMLHttpRequest();
  let data;
  request.addEventListener("readystatechange", (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      data = JSON.parse(e.target.responseText);
      callBack(undefined, data.puzzle);
    } else if (e.target.readyState === 4) {
      callBack("error has taken place");
    }
  });

  request.open("GET", "http://puzzle.mead.io/puzzle");
  request.send();
};
