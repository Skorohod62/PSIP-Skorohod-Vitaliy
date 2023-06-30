let backgroundColor = document.body.style.background;
setTimeout(function() {
    console.log("seashell");
}, 3000);
const pagesVisited = window.history.length;

const newWindow = window.open('', 'Информация', 'width=100, height=150');
newWindow.document.write(`<p>Количество посещенных страниц: ${pagesVisited}</p>`);