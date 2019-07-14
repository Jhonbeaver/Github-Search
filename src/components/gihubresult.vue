<template>
    <div class="block">
        <h3><a :href="link">{{name}}</a></h3>
        <p>Кол-во звёзд: {{stars}}</p>
        <p>Количество подписчиков: {{watchers}}</p>
    </div>
</template>

<script>
export default {
  props: {
    stars: Number,
    watchers: Number,
    link: String,
    name: String,
  },
};
</script>

<style lang="sass">
.block
  margin: 0 0 1rem 0;
  text-align: left;
  padding: 15px;
  width: 100%;
  height: 150px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 15px;
  @include sm
    margin: 0 0 1rem 0;
  @include md
    margin: 0 0 1rem 1rem;
  @include lg
    margin:  0 0 1rem 1rem;
  @include xl
    margin:  0 0 1rem 1rem;
</style>
