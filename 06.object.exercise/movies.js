function movies(input){
       let movieList = [];
       for(let movie of input){
           if(movie.includes('addMovie')){
               let [addMovieCommand, ...movieName] = movie.split(' ');
               let movieNameAsString = movieName.join(' ');
               let movieObject = {
                   name : movieNameAsString,
               }
               movieList.push(movieObject);
           }else if(movie.includes('directedBy')){
            let tokens = movie.split(' ');
            let movieNameTokens = [];
            let movieDirectorTokens = [];
            let directedByIndex = tokens.findIndex(x => x === 'directedBy');
            for(let i = 0;i<directedByIndex;i++){
             movieNameTokens.push(tokens[i]);
            }
            for(let i = directedByIndex + 1;i<tokens.length;i++){
              movieDirectorTokens.push(tokens[i]);
            }
            let name = movieNameTokens.join(' ');
            let director = movieDirectorTokens.join(' ');
            let movieCommand = movieList.find(x => x.name === name);
            if(movieCommand){
                movieCommand.director = director
            }
            
               
           }else if(movie.includes('onDate')){
             let token = movie.split(' ');
             let date = token.pop();
             token.pop();
             let movieName = token.join(' ');
             let movieCommand = movieList.find(x => x.name === movieName);
            if(movieCommand){
                movieCommand.date = date;
            }
           }
       } 
       for(let movie of movieList){
           if(movie.director && movie.date){
               console.log(JSON.stringify(movie)); 
           }
       }
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ])