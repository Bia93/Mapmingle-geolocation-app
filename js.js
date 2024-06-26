  /*const form = document.querySelector(".form");
  const containerWorkouts = document.querySelector(".workouts");
  const inputType = document.querySelector(".form__input--distance");
  const inputDistance = document.querySelector(".form__input--distance");
  const inputDuration = document.querySelector(".form__input--duration");
  const inputCadence = document.querySelector(".form__input--cadence");
  const inputElevation = document.querySelector(".form__input--elevation");
  let map, mapEvent; //we are declaring them globally
  if (navigator.geolocation) {
    //daca navigator.geolocation exists, do what is in parenthesis
    //for API - we are going to make 2 function:one when the geo is working and one when it is not working
    navigator.geolocation.getCurrentPosition(
      function (position) {
        // we are gonna take the lat ang log from inspect, which is in the object coors
        const { latitude } = position.coords; //using destructuring
        const { longitude } = position.coords;

        console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
        //map de la index.html; L-gives as an entry point-its a global variable it can be accesed from all the other scripts
        //13- is the zoom on the map
        //tile- the map is made from small tiles that comes from the URL
        // we can change the theme of the URL
        //how to display a map using a third party library called LEAFLET
        map = L.map("map").setView([latitude, longitude], 13);
        //console.log(map);
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        L.marker([latitude, longitude])
          .addTo(map)
          .bindPopup("Here you are!")
          .openPopup(); //this is for th blue marker-pop up
        //how to add multple pins
        //Handling clicks on map
        map.on("click", function (mapE) {
          mapEvent = mapE;
          form.classList.remove("hidden"); // ca sa nu mai fie ascuns tabelul cand dam click pe harta
          inputDistance.focus();
          //map was generated by leaflet ;on care vine de la map (o sa l folosim pe post de eventlistener method)
        });
      },
      function () {
        alert("Unable to determine your location. Please repeat!");
      }
    );
  }
  //how to display a map using a third party library called LEAFLET
  //any variable that is global in any script will be available to all the other scripts
  form.addEventListener("submit", function (e) {
    e.preventDefault(); //În JavaScript, metoda preventDefault este utilizată pentru a preveni comportamentul implicit al unui eveniment. Comportamentul implicit este acțiunea pe care browser-ul ar efectua-o în mod normal atunci când se produce un anumit eveniment. Utilizarea preventDefault permite dezvoltatorilor să suprascrie acest comportament standard și să definească propriul comportament personalizat.
    //Clear input fields
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        ""; //pt a sterge valorile in tabel in momentul in care dam enter pe tabel
    //Display marker
    //console.log(mapEvent);
    const { lat, lng } = mapEvent.latlng; //destructuring
    L.marker([lat, lng]) //we add this for blue marker-luam de la mapEvent datele(cand dam console.log(mapEvent)-o sa ne apara obiect si deacolo luam datele)
      .addTo(map)
      .bindPopup(
        L.popup({
          maxwidth: 250, //de la documentation leaflet
          minwidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: "running-popup",
        })
      )
      .setPopupContent("Workout")
      .openPopup();
  });
  inputType.addEventListener("change", function () {
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden"); //we have selected the closes parent throw closest
    inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
  }); */
