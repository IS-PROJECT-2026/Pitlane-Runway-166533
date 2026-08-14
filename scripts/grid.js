const driverGrid = document.getElementById("driver-grid");
const teamGrid = document.getElementById("team-grid");


/* =========================================
   HELPERS
   ========================================= */

function getTeam(teamId) {
  return f1Teams.find((team) => team.id === teamId);
}

function getDriver(driverId) {
  return f1Drivers.find((driver) => driver.id === driverId);
}


/* =========================================
   DRIVER CARDS
   ========================================= */
function createDriverCard(driver) {
  const team = getTeam(driver.team);

  const article = document.createElement("article");

  article.className = "driver-card";
  article.dataset.team = driver.team;

  // Give the driver card access to its team's car image
  if (team && team.image) {
    article.style.setProperty("--team-car-image", `url("${team.image}")`);
  }

  article.innerHTML = `
    <div class="driver-card__image">
      <img
        src="${driver.image}"
        alt="${driver.name}"
        loading="lazy"
      >
    </div>

    <div class="driver-card__number">
      ${driver.number}
    </div>

    <div class="driver-card__content">
      <p class="driver-card__team">
        ${team ? team.name : ""}
      </p>

      <h3 class="driver-card__name">
        ${driver.name}
      </h3>

      <p class="driver-card__nationality">
        ${driver.nationality}
      </p>
    </div>
  `;

  return article;
}

/* =========================================
   TEAM & CAR CARDS
   ========================================= */

function createTeamCard(team) {
  const driverOne = getDriver(team.drivers[0]);
  const driverTwo = getDriver(team.drivers[1]);

  const article = document.createElement("article");

  article.className = "team-card";
  article.dataset.team = team.id;

  article.innerHTML = `
    <div class="team-card__image">
      <img
        src="${team.image}"
        alt="${team.name} ${team.car}"
        loading="lazy"
      >
    </div>

    <div class="team-card__content">

      <p class="team-card__eyebrow">
        2026 FORMULA 1
      </p>

      <h3 class="team-card__name">
        ${team.name}
      </h3>

      <p class="team-card__car">
        ${team.car}
      </p>

      <div class="team-card__drivers">

        <div class="team-card__driver">
          <span class="team-card__driver-number">
            ${driverOne.number}
          </span>

          <span>
            ${driverOne.name}
          </span>
        </div>

        <div class="team-card__driver">
          <span class="team-card__driver-number">
            ${driverTwo.number}
          </span>

          <span>
            ${driverTwo.name}
          </span>
        </div>

      </div>

      <button
        class="team-card__button"
        type="button"
        data-team="${team.id}">
        Explore Team
      </button>

    </div>
  `;

  return article;
}

/* =========================================
   RENDER DRIVERS
   ========================================= */

function renderDrivers() {

  if (!driverGrid) return;

  driverGrid.innerHTML = "";

  f1Drivers.forEach((driver) => {

    const card = createDriverCard(driver);

    driverGrid.appendChild(card);

  });
}


/* =========================================
   RENDER TEAMS
   ========================================= */

function renderTeams() {

  if (!teamGrid) return;

  teamGrid.innerHTML = "";

  f1Teams.forEach((team) => {

    const card = createTeamCard(team);

    teamGrid.appendChild(card);

  });
}


/* =========================================
   SECTION TABS
   ========================================= */

function setupSectionTabs() {

  const tabs = document.querySelectorAll(".grid-tab");

  const sections =
    document.querySelectorAll("[data-grid-section]");


  tabs.forEach((tab) => {

    tab.addEventListener("click", () => {

      const selectedSection =
        tab.dataset.section;


      tabs.forEach((item) => {

        item.classList.remove(
          "grid-tab--active"
        );

      });


      tab.classList.add(
        "grid-tab--active"
      );


      sections.forEach((section) => {

        const isSelected =
          section.dataset.gridSection ===
          selectedSection;


        section.classList.toggle(
          "grid-section--hidden",
          !isSelected
        );

      });

    });

  });

}


/* =========================================
   INITIALISE
   ========================================= */

function initialiseGrid() {

  renderDrivers();

  renderTeams();

  setupSectionTabs();

}

initialiseGrid();