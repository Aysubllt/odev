document.addEventListener("DOMContectLoaded", function() {
    // API anahtarı
    const apiKey = '0b657e9bd77a459aa4cff44cede56eb3';

    //API'den veri al
    fetch('http', {
        headers: {
            'x-rapidapi-host':'api',
            'x-rapidapi-key': apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        //API'den gelen verileri işle
        const ilgialanlarimList = document.getElementById('ilgia-list');
        data.api.leagues.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item.name;
            ilgialanlarimList.appendChild(listItem);
        });
    })
    .catch(error => console.error('API deneme hatası:', error));
});