const url = https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=60a27080f819485fbcaa6382bcc442df

fetch(url)
  .then(r => {
    return r.json();
})
.then(data => {
  const results = data.results;
  const  Posts = document.createElement("ul");
  const  body = document.querySelector("body");
  body.appendChild(Posts);
  results.map(submission => {
    const  newSubmission = document.createElement("li");
    newSubmission.innerHTML =
      '<a href="' + submission.href +'">' + submission.title + "</a>";

    Posts.appendChild(newSubmission);
  });
})
.catch(e => {
  console.log('an error occurred: ${e}');
})
