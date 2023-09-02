export const sendPDF = async (pdf) => {
  const url = "http://localhost:3000/upload_files"; // change it to development when we get a server
  fetch(url, {
    method: "POST",
    body: pdf,
    headers: {
      "Content-Type":
        "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
    },
  })
    .then((res) => console.log(res))
    .catch((err) => ("Error occured", err));
};
