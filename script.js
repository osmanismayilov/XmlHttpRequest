let getData = document.getElementById("getData");
let showPost = document.querySelector("#showPost");

getData.addEventListener("click", function () {
  let http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let allPost = JSON.parse(this.responseText);
      let count = 1;
      for (const post of allPost) {
        let str = `<div class="col-6 mt-3">
                <div class="card w-100">
                  <h5 class="card-header">${count}. ${post.title}</h5>
                  <div class="card-body">
                    <p class="card-text">
                      ${post.body}
                    </p>
                  </div>
                </div>
              </div>`;
        showPost.innerHTML += str;
        count++;
      }
    }
  };
  http.open("Get", "https://jsonplaceholder.typicode.com/posts");
  http.send();
});
