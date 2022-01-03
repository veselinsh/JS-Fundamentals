function fullName(input){
    let names = [];
    let pattern =  /\b[A-Z][a-z]+\s?[A-Z][a-z]+\b/g;
    let matched = pattern.exec(input);
    while(matched !== null){
        names.push(matched[0]);
        matched = pattern.exec(input);
    }
    console.log(names.join(' '));
}
fullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");