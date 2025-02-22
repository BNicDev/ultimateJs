class Restaurants{
    #timetable;
    constructor(name){
        this.name = name;
    }

    get timetable(){
        return this.#timetable
    } //get obtiene el valor de la propiedad
    set timetable(value){
        let date = new Date(value);
        let time = date.getTime();
        if(Number.isNaN(time)){
            throw new Error("Invalid date");
        }
        this.#timetable = value;
    }//set establece el valor de la propiedad

}

const r = new Restaurants('BBQ');

r.timetable = '1 Apr 1923'