function Movie(name , genre , year , imdp ){
    this.name = name
    this.genre = genre
    this.year = year
    this.imdp = imdp


    function review(){
        return `movie is called ${this.name} , genre is ${this.genre} , and the rating is ${this.imdp} is realesed in ${this.year}`
    }
}

const movie1 = new Movie("fall" , "drama" , 2011 , 7.8  ) 
console.log(movie1.review())

