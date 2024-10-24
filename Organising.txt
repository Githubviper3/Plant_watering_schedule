//organsing and sorting out the data for my personal organising


//The JSON file
const raw_data = [
    {
      plant_id: 1,
      name: "Aloe Vera",
      watering_frequency: 7,
    },
    {
      plant_id: 2,
      name: "Peace Lily",
      watering_frequency: 3,
    },
    {
      plant_id: 3,
      name: "Spider Plant",
      watering_frequency: 5,
    },
    {
      plant_id: 4,
      name: "Snake Plant",
      watering_frequency: 14,
    },
    {
      plant_id: 5,
      name: "Fern",
      watering_frequency: 2,
    },
    {
      plant_id: 6,
      name: "Cactus",
      watering_frequency: 10,
    },
    {
      plant_id: 7,
      name: "Orchid",
      watering_frequency: 7,
    },
    {
      plant_id: 8,
      name: "Bamboo",
      watering_frequency: 4,
    },
    {
      plant_id: 9,
      name: "Money Plant",
      watering_frequency: 6,
    },
    {
      plant_id: 10,
      name: "Lavender",
      watering_frequency: 8,
    },
  ];
  
//Organising the data
let organiseddata = raw_data;

function sortCondition(a, b) {
  if (a["watering_frequency"] > b["watering_frequency"]) {
    return -1; //negative or False so b is put infront of a
  } else if (a["watering_frequency"] < b["watering_frequency"]) {
    return 1; //positive or True so a is put infront of b
  } else {
    if (a["name"] > b["name"]) {
    return -1;
    } else if (a["name"] < b["name"]) {
    return 1;
    } else {
    return 0; //leaves it to js to order the two values
    }
  }
  }
  

function Organise_Data() {
organiseddata.sort(sortCondition);
console.log(organiseddata);
}

//name and coresponding original watering frequency
["Snake Plant", "Cactus", "Lavender", "Orchid", "Aloe Vera", "Money Plant", "Spider Plant", "Bamboo", "Peace Lily", "Fern"]
[14, 10, 8, 7, 7, 6, 5, 4, 3, 2]; //original

//Watering frequencies after each day of watering
//Week 1
[13, 9, 7, 6, 6, 5, 4, 3, 2, 1]; //day 1
[12, 8, 6, 6, 6, 5, 4, 3, 2, 1]; //day 2
[11, 7, 6, 6, 6, 5, 4, 3, 2, 0]; //day 3
[10, 6, 6, 6, 6, 5, 4, 3, 1, 0]; //day 4
[9, 6, 6, 6, 6, 5, 4, 2, 0, 0]; //day 5
//Week 2
[8, 6, 6, 6, 6, 5, 3, 1, 0, 0]; //day 6
[7, 6, 6, 6, 6, 5, 2, 0, 0, 0]; //day 7
[6, 6, 6, 6, 6, 4, 1, 0, 0, 0]; //day 8
[5, 6, 6, 6, 6, 3, 0, 0, 0, 0]; //day 9
[4, 5, 6, 6, 6, 2, 0, 0, 0, 0]; //day 10
//Week 3
[3, 4, 6, 6, 6, 1, 0, 0, 0, 0]; //day 11
[2, 3, 6, 6, 6, 0, 0, 0, 0, 0]; //day 12
[1, 2, 5, 6, 6, 0, 0, 0, 0, 0]; //day 13
[0, 1, 4, 6, 6, 0, 0, 0, 0, 0]; //day 14
[0, 0, 3, 5, 6, 0, 0, 0, 0, 0]; //day 15
//Week 4
[0, 0, 2, 4, 5, 0, 0, 0, 0, 0]; //day 16
[0, 0, 1, 3, 4, 0, 0, 0, 0, 0]; //day 17
[0, 0, 0, 2, 3, 0, 0, 0, 0, 0]; //day 18
[0, 0, 0, 1, 2, 0, 0, 0, 0, 0]; //day 19
[0, 0, 0, 0, 1, 0, 0, 0, 0, 0]; //day 20
//Week 5
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //day 21


/* 
The order of days cannot be changed
The order of the weeks can be changed
The gaps between the weeks can be changed as shown below
*/


//Week 1
[13, 9, 7, 6, 6, 5, 4, 3, 2, 1]; //day 1
[12, 8, 6, 6, 6, 5, 4, 3, 2, 1]; //day 2

//Week 2
[11, 7, 6, 6, 6, 5, 4, 3, 2, 0]; //day 3
[10, 6, 6, 6, 6, 5, 4, 3, 1, 0]; //day 4
[9, 6, 6, 6, 6, 5, 4, 2, 0, 0]; //day 5

//Week 3
[8, 6, 6, 6, 6, 5, 3, 1, 0, 0]; //day 6
[7, 6, 6, 6, 6, 5, 2, 0, 0, 0]; //day 7
[6, 6, 6, 6, 6, 4, 1, 0, 0, 0]; //day 8

//Week 4
[5, 6, 6, 6, 6, 3, 0, 0, 0, 0]; //day 9
[4, 5, 6, 6, 6, 2, 0, 0, 0, 0]; //day 10
//Week 5
[3, 4, 6, 6, 6, 1, 0, 0, 0, 0]; //day 11
[2, 3, 6, 6, 6, 0, 0, 0, 0, 0]; //day 12

//Week 6
[1, 2, 5, 6, 6, 0, 0, 0, 0, 0]; //day 13
[0, 1, 4, 6, 6, 0, 0, 0, 0, 0]; //day 14
[0, 0, 3, 5, 6, 0, 0, 0, 0, 0]; //day 15

//Week 7
[0, 0, 2, 4, 5, 0, 0, 0, 0, 0]; //day 16
[0, 0, 1, 3, 4, 0, 0, 0, 0, 0]; //day 17

//Week 9
[0, 0, 0, 2, 3, 0, 0, 0, 0, 0]; //day 18

//Week 10
[0, 0, 0, 1, 2, 0, 0, 0, 0, 0]; //day 19
[0, 0, 0, 0, 1, 0, 0, 0, 0, 0]; //day 20

//Week 12
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //day 21

