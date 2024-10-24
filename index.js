function Organise_Events() {
  return {
    event: [
      // Day 1
      {
        title: "Water all the plants",
        start: "2024-10-28",
        backgroundColor: "#133924",
        borderColor: "#133924",
      },
      // Day 2
      { title: "Water the Snake Plant", start: "2024-10-29" },
      { title: "Water the Cactus", start: "2024-10-29" },
      { title: "Water the Lavender", start: "2024-10-29" },

      // Day 3
      {
        title: "Water the Snake Plant",
        start: "2024-10-30",
        imageurl: "snake_plant.jpeg",
      },
      { title: "Water the Cactus", start: "2024-10-30" },
      { title: "Water the Fern", start: "2024-10-30" },
      // Fern is fully watered
      // Day 4
      {
        title: "Water the Snake Plant",
        start: "2024-10-31",
        imageurl: "snake_plant.jpeg",
      },
      { title: "Water the Cactus", start: "2024-10-31" },
      { title: "Water the Peace Lily", start: "2024-10-31" },

      // Day 5
      {
        title: "Water the Snake Plant",
        start: "2024-11-01",
        imageurl: "snake_plant.jpeg",
      },
      { title: "Water the Bamboo", start: "2024-11-01" },
      { title: "Water the Peace Lily", start: "2024-11-01" },
      // Peace Lily is fully watered
      // Day 6
      {
        title: "Water the Snake Plant",
        start: "2024-11-04",
        imageurl: "snake_plant.jpeg",
      },
      { title: "Water the Spider Plant", start: "2024-11-04" },
      { title: "Water the Bamboo", start: "2024-11-04" },
      // Day 7
      {
        title: "Water the Snake Plant",
        start: "2024-11-05",
        imageurl: "snake_plant.jpeg",
      },
      { title: "Water the Spider Plant", start: "2024-11-05" },
      { title: "Water the Bamboo", start: "2024-11-05" },
      //Bamboo is fully watered
      // Day 8
      {
        title: "Water the Snake Plant",
        start: "2024-11-06",
        imageurl: "snake_plant.jpeg",
      },
      { title: "Water the Spider Plant", start: "2024-11-06" },
      { title: "Water the Money Plant", start: "2024-11-06" },
      // Day 9
      {
        title: "Water the Snake Plant",
        start: "2024-11-07",
        imageurl: "snake_plant.jpeg",
      },
      { title: "Water the Spider Plant", start: "2024-11-07" },
      { title: "Water the Money Plant", start: "2024-11-07" },
      //Spider Plant is fully watered
      // Day 10
      {
        title: "Water the Snake Plant",
        start: "2024-11-08",
        imageurl: "snake_plant.jpeg",
      },
      { title: "Water the Cactus", start: "2024-11-08" },
      { title: "Water the Money Plant", start: "2024-11-08" },
      // Day 11
      {
        title: "Water the Snake Plant",
        start: "2024-11-11",
        imageurl: "snake_plant.jpeg",
      },
      { title: "Water the Cactus", start: "2024-11-11" },
      { title: "Water the Money Plant", start: "2024-11-11" },
      // Day 12
      {
        title: "Water the Snake Plant",
        start: "2024-11-12",
        imageurl: "snake_plant.jpeg",
      },
      { title: "Water the Cactus", start: "2024-11-12" },
      { title: "Water the Money Plant", start: "2024-11-12" },
      //Money Plant is fully watered
      // Day 13
      {
        title: "Water the Snake Plant",
        start: "2024-11-13",
        imageurl: "snake_plant.jpeg",
      },
      { title: "Water the Cactus", start: "2024-11-13" },
      { title: "Water the Lavender", start: "2024-11-13" },
      // Day 14
      { title: "Water the Snake Plant", start: "2024-11-14" },
      { title: "Water the Cactus", start: "2024-11-14" },
      { title: "Water the Lavender", start: "2024-11-14" },
      //Snake Plant is fully watered
      // Day 15
      { title: "Water the Cactus", start: "2024-11-15" },
      { title: "Water the Lavender", start: "2024-11-15" },
      { title: "Water the Orchid", start: "2024-11-15" },
      //Cactus is fully watered
      // Day 16
      { title: "Water the Lavender", start: "2024-11-18" },
      { title: "Water the Orchid", start: "2024-11-18" },
      { title: "Water the Aloe Vera", start: "2024-11-18" },
      // Day 17
      { title: "Water the Lavender", start: "2024-11-19" },
      { title: "Water the Orchid", start: "2024-11-19" },
      { title: "Water the Aloe Vera", start: "2024-11-19" },
      // Day 18
      { title: "Water the Lavender", start: "2024-11-20" },
      { title: "Water the Orchid", start: "2024-11-20" },
      { title: "Water the Aloe Vera", start: "2024-11-20" },
      //Lavender is fully watered
      // Day 19
      { title: "Water the Orchid", start: "2024-11-21" },
      { title: "Water the Aloe Vera", start: "2024-11-21" },
      // Day 20
      { title: "Water the Orchid", start: "2024-11-22" },
      { title: "Water the Aloe Vera", start: "2024-11-22" },
      //Orchid is fully watered
      // Day 21
      { title: "Water the Aloe Vera", start: "2024-11-25" },
      //Aloe Vera is fully watered
    ],
  };
}

//Initialising all the buttons and layout items from the fulscreen.js library
document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  All_Events = Organise_Events();
  var calendar = new FullCalendar.Calendar(calendarEl, {
    themeSystem: "bootstrap5",
    initialView: "dayGridMonth",
    initialDate: new Date(),
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay",
    },
    events: All_Events["event"],
    eventColor: "#097314",
    eventContent(arg) {
      const imageurl = arg.event.extendedProps.imageurl;
      const event_title = arg.event.title;
      if (imageurl != undefined) {
        return {
          html: `<img class="CustomImg" src="${imageurl}" width=100%><p class="fc-event-main">${event_title}</p>`,
        };
      } else {
        return { html: `<p>${event_title}</p>` };
      }
    },
  });

  calendar.render();
});
