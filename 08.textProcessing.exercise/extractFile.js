function extractFile(input){
    let list = input.split('\\').pop();
    let link = list.split('.');
    let extension = link.pop();
    let fileName = link.join('.');
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);


     
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');