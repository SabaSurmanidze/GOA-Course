// გააგზავნეთ მოთხოვნა ამ საიტზე და კონსოლში გამოიტანეთ json-ად ქცეული შედეგი

fetch('https://fakestoreapi.com/products/1')
    .then(response => response.json())
    .then(data => console.log(data.price))