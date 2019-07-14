<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<style lang="sass">
@import url("https://fonts.googleapis.com/css?family=Poiret+One|Material+Icons");

#app
  font-family: "Poiret One";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

.container
  height: 95vh;
  padding: 0;
  margin: 0;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: flex-start;
  justify-content: center;

.container .row
  padding: .5rem 1rem;
  @include sm
    padding: .5rem 1rem;
  @include md
    padding: .5rem 1rem;
  @include lg
     padding: 1rem 4rem;
  @include xl
     padding: 1rem 4rem;


.row.flex-row
  display: -webkit-box;
  flex-wrap: wrap;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

.container .row .item
  flex: auto;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

.is-6
  width: 100%;
  @include sm
    width: 100% !important;
  @include md
    width: 50% !important;
  @include lg
    width: 50% !important;
  @include xl
    width: 50% !important;

.is-3
  width: 25%;

.is-4
  width: 33.33%;

.is-2
  width: 100%;
  @include sm
    width: 100%;
  @include md
    width: 50%;
  @include lg
    width: 16.67%;
  @include xl
    width: 16.67%;

.is-1
  width: 8.33%;

.is-12
  width: 100%;

</style>
