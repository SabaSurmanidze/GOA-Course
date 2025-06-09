// 5. შექმენით Rectangle კონსტრუქტორი, რომელიც არგუმენტად მიიღებს 
// მართკუთხედის სიგანეს და სიმაღლეს, ასევე დაუმატეთ მეთოდები მისი ფართობის და პერიმეტრის გამოსათვლელად.


function Rectangle(witdh , height){
    this.witdh = witdh
    this.height = height


    function Volume(){
       return  this.witdh * this.height
    }

    function Perimetr(){
        return (this.witdh + this.height) * 2
    }


}


const Rectangle1 = new Rectangle(100 , 200)
console.log(Rectangle1.Volume())
console.log(Rectangle1.Perimetr())