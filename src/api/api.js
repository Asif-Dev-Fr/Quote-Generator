export const getImage = async (input) => {
  if (input) {
    let words = input.trim().split(" ");
    let array = [];
    words.forEach((word, index) => {
      if (index + 1 !== words.length) array.push(word + "+");
      else array.push(word);
    });
    let query = array.join("");
    if (query) {
      try {
        const response = await fetch(
          process.env.REACT_APP_PIXABAY_API +
            "&q=" +
            query +
            "&image_type=photo"
        );
        const data = await response.json();
        console.log(data);
        if (data) return data;
        else return "Not found";
      } catch (e) {
        console.error(e);
      }
    }
  }
};
