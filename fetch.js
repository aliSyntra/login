fetch('https://randomuser.me/api/?results=100').then(result =>result.json().then(data=> {
    console.log(data.results);
    const female = data.result.filter(word => word.gender =='female');
    console.log(female.length);
}))
console.log("ok")