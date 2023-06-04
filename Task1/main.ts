interface ResData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

class FifteenthTitle {
  static #URL = "https://jsonplaceholder.typicode.com/posts";
  static #ID = 15;

  static #get() {
    fetch(this.#URL)
      .then((res) => {
        if (res.ok) {
          return res.json(); // Добавлен return
        }
      })
      .then((resData) => this.#getTitleFromJson(resData))
      .then((title) => console.log(title))
      .catch(({ message }) => console.error(message));
  }

  static #getTitleFromJson(resData: ResData[]) {
    const itemWithTitle = resData.find((item) => item.id === this.#ID); // Добавлен вызов метода find()
    const title = itemWithTitle?.title; // Добавлен оператор безопасного доступа '?'
    return title; // Добавлен return
  }

  run() {
    FifteenthTitle.#get();
  }
}

const fifteenthTitle = new FifteenthTitle();
fifteenthTitle.run();
