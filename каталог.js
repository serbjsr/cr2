async function getResponce() {
    try {
        let response = await fetch("watch.json");
        let content = await response.json(); // Используйте .json() вместо .text() и JSON.parse()

        console.log(content);
        let node_for_insert = document.getElementById("node_for_insert");
        for (let key in content) {
            node_for_insert.innerHTML += `
                <li style="width: 210px" class="d-flex flex-column m-1 p-1 border bg-body">
                <img style="width: 180px" class="align-self-center" src=${content[key].img}>
                <h5 class="card-title">${content[key].title}</h5>
                <p class="card-text">Цена ${content[key].price} р.</p>
                <input type="hidden" name= "vendor_code" value=${content[key].vendor_code}>
                <p class="card-text" >Заказать <input class="w-25" type="number" name="amount" value="0"></p>
                </li>
            `;
        }
    } catch (error) {
        console.error('Ошибка при получении или обработке данных:', error);
    }
}
getResponce();
