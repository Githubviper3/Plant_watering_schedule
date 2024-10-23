const raw_data = [
    {
      "plant_id": 1,
      "name": "Aloe Vera",
      "watering_frequency": 7
    },
    {
      "plant_id": 2,
      "name": "Peace Lily",
      "watering_frequency": 3
    },
    {
      "plant_id": 3,
      "name": "Spider Plant",
      "watering_frequency": 5
    },
    {
      "plant_id": 4,
      "name": "Snake Plant",
      "watering_frequency": 14
    },
    {
      "plant_id": 5,
      "name": "Fern",
      "watering_frequency": 2
    },
    {
      "plant_id": 6,
      "name": "Cactus",
      "watering_frequency": 10
    },
    {
      "plant_id": 7,
      "name": "Orchid",
      "watering_frequency": 7
    },
    {
      "plant_id": 8,
      "name": "Bamboo",
      "watering_frequency": 4
    },
    {
      "plant_id": 9,
      "name": "Money Plant",
      "watering_frequency": 6
    },
    {
      "plant_id": 10,
      "name": "Lavender",
      "watering_frequency": 8
    }
  ];
  
let organiseddata = raw_data;

function sortCondition(a, b) {
    if (a["watering_frequency"] > b["watering_frequency"]) {
        return -1;  
    } else if (a["watering_frequency"] < b["watering_frequency"]) {
        return 1; 
    } else {
        if (a["name"] > b["name"]) {
            return -1; 
        } else if (a["name"] < b["name"]) {
            return 1; 
        } else {
            return 0;  
        }
    }
}

function Organise_Data() {
    organiseddata.sort(sortCondition);
    console.log(organiseddata);
}

function FirstEvent() {
    return [{
        title: 'Add all plants',
        start: '2024-10-10'
      }]
}


document.addEventListener("DOMContentLoaded", function () {
    var calendarEl = document.getElementById("calendar");
    F_event = FirstEvent();
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: "dayGridMonth",
      initialDate: "2024-10-23",
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      },
      events: F_event
    });
    
    calendar.render();
});
