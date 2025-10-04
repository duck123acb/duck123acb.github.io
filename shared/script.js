async function loadHTML(id, url) {
    const res = await fetch(url);
    const text = await res.text();
    document.getElementById(id).innerHTML = text;
}

loadHTML("header", "https://yourusername.github.io/shared/header.html");
loadHTML("footer", "https://yourusername.github.io/shared/footer.html");