fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => {
        const output = document.getElementById("output");
        output.innerHTML = "<h2>Read All Posts</h2>" + 
            posts.map(post => `<p><b>${post.id}:</b> ${post.title}</p>`).join("");
    })
    .catch(error => console.log("Error:", error));