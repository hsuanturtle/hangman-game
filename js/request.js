//fetch data from api
const getPuzzle = async (wordCount) => {
  const response = await fetch(
    `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );
  if (response.status === 200) {
    const data = await response.json();
    console.log(data);
    return data.puzzle;
  } else {
    throw new Error("Unable to fetch puzzle");
  }
};
