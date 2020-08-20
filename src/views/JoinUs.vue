<template>
  <div data-aos="fade-up" class="join">
    <h1 class="title" data-aos="fade-up">{{ $t("joinUs.title") }}</h1>
    <h2 class="hollow-text" data-aos="fade-up">{{ $t("joinUs.subtitle") }}</h2>
    <p>
      It is not necessary to like games to join the ITU LAN crew! Whether you're
      interested in hosting tournaments, designing graphics stuff for the LANs,
      gathering sponsorships, or helping out with the events in another way,
      we'd love to welcome you to our crew!
    </p>

    <form onsubmit="event.preventDefault(); validateMyForm();">
      <label for="fname">First Name</label>
      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="Your name.."
      />

      <label for="lname">Last Name</label>
      <input
        type="text"
        id="lname"
        name="lastname"
        placeholder="Your last name.."
      />

      <label for="subject">Subject</label>
      <textarea
        id="subject"
        name="subject"
        placeholder="Write something.."
        style="height:200px"
      ></textarea>

      <input type="submit" value="Submit" />
    </form>

    <a
      class="button"
      href="mailto:chairman@itulan.dk?Subject=ITU%20LAN%20Application"
      target="_blank"
      >Join</a
    >
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}
* {
  box-sizing: border-box;
}

input[type="text"],
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>
