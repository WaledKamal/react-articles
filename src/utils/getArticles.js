import axios from "axios";

export default function getArticles() {
  const UrlApi =
    "https://react-articles-project-acc16-default-rtdb.firebaseio.com/articles.json";

  return axios.get(UrlApi).then(function (response) {
    return response.data;
  });
}
