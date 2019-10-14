<template>
  <div class="flex wrapper">
    <div id="friday" class="flex day">
      <div>
        <h3 class="weekday">Friday</h3>
      </div>
      <div class="flex schedule">
        <div>
          <span class="time">16.00</span>
          <span>Check-in</span>
        </div>
        <div>
          <span class="time">18.00</span>
          <span>CS:GO</span>
          <small>by EPICO NextGen</small>
        </div>
        <div>
          <span class="time">20.00</span>
          <span>Warcraft 3 Warlock</span>
        </div>
        <div>
          <span class="time">22.00</span>
          <span>Hearthstone</span>
        </div>
      </div>
    </div>
    <div id="saturday" class="flex">
      <div>
        <h3 class="weekday">Saturday</h3>
      </div>
      <div class="flex schedule">
        <div>
          <span class="time">10.00</span>
          <span>Escape Room + MTG Draft</span>
        </div>
        <div>
          <span class="time">11.00</span>
          <span>Overwatch</span>
        </div>
        <div>
          <span class="time">12.00</span>
          <span>CS:GO Danger Zone</span>
          <small>by Sennheiser</small>
        </div>
        <div>
          <span class="time">14.00</span>
          <span>Stellaris + Magic Draft</span>
        </div>
        <div>
          <span class="time">15.00</span>
          <span>Rocket League</span>
          <small>by IDA</small>
        </div>
        <div>
          <span class="time">16.00</span>
          <span>WOW: Modem Run</span>
        </div>
        <div>
          <span class="time">17.00</span>
          <span>Mario Kart 8</span>
          <small>by KMD</small>
        </div>
        <div>
          <span class="time">18.00</span>
          <span>Hearthstone</span>
        </div>
        <div>
          <span class="time">19.00</span>
          <span>Smash Bros. Ultimate</span>
          <small>by KMD</small>
        </div>
        <div>
          <span class="time">21.00</span>
          <span>CS:GO Finals</span>
          <small>by EPICO NextGen</small>
        </div>
        <div>
          <span class="time">22.00</span>
          <span>MTG: Arena</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
}

.flex.wrapper {
  flex-grow: 1;
  flex-basis: 0;
  max-width: 1000px;
  margin: 80px auto;
}

.flex.wrapper > div {
  width: 100%;
}

.flex.schedule {
  flex-direction: column;
  text-align: left;
}

.time {
  margin-right: 20px;
}

.flex.schedule span {
  font-family: Anton, Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
  line-height: 30px;
  text-transform: uppercase;
}

.flex.schedule small {
  color: #0800ff;
}

small {
  margin-left: 10px;
}

.wrapper h3 {
  margin-top: 0;
}

.weekday {
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
  display: inline-block;
  margin-top: 100px;
}
</style>