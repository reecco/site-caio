<template>
  <div class="home">
    <div class="box-photo">
      <div class="photo"></div>
      <h1>Caio</h1>
    </div>
    <div class="box-main">
      <ul class="url-list">
        <li>
          <a class="item" href="https://www.instagram.com/caio_sad00" target="_blank">
            <img src="@/assets/images/icons8-instagram.png" alt="">
            <p>Instagram</p>
          </a>
        </li>
        <li>
          <a class="item" href="https://www.youtube.com/channel/UCZ14mXSYYt-7fHO6TedzZ0Q" target="_blank">
            <img src="@/assets/images/icons8-youtube.png" alt="">
            <p>Youtube</p>
          </a>
        </li>
        <!-- <li>
          <a class="item" href="" target="_blank">
            <img src="@/assets/images/icons8-steam.png" alt="">
            <p>Steam</p>
          </a>
        </li> -->
        <!-- <li>
          <a class="item" href="" target="_blank">
            <img src="@/assets/images/icons8-discord.png" alt="">
            <p>Discord</p>
          </a>
        </li>
        <li>
          <a class="item" href="" target="_blank">
            <img src="@/assets/images/icons8-twitter.png" alt="">
            <p>Twitter</p>
          </a>
        </li> -->
        <li>
          <a class="item" href="https://www.facebook.com/people/Nautilos/100079490205662/" target="_blank">
            <img src="@/assets/images/icons8-facebook.png" alt="">
            <p>Facebook</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',

  created() {
    document.title = 'Home'
  }
}
</script>

<style src="./style.sass" lang="sass" scoped></style>