<template>
    <section class="container">
        <div class="row">
            <div class="item is-12">
                <h1>Поиск на Github</h1>
            </div>
            <div class="item is-12">
                <input class="st-input" v-model="text" type="text">
            </div>
            <div class="row">
              <div class="item is-12">
                <div class="spinner" v-if="spinner">
                  <div class="double-bounce1"></div>
                  <div class="double-bounce2"></div>
                </div>
              </div>
            </div>
            <div class="row flex-row" v-if="!spinner">
                  <div class="item is-2" v-for="(rep,index) in resultsFromGithub" :key="index">
                      <githubresult  :stars="rep.stargazers_count" :watchers="rep.watchers_count"
                      :link="rep.html_url" :name="rep.name"></githubresult>
                  </div>
            </div>
        </div>
    </section>
</template>

<script>
import debounce from '../modules/debounce';

const githubresult = () => import('../components/gihubresult.vue');
export default {
  components: {
    githubresult,
  },
  data: () => ({
    text: null,
    timeout: null,
  }),
  computed: {
    spinner() {
      return this.$store.state.spinner;
    },
    resultsFromGithub() {
      return this.$store.state.repos;
    },
  },
  methods: {

  },
  watch: {
    text(val) {
      const $debounce = debounce(() => this.$store.commit('GetNewRepos', val), 300);
      $debounce();
    },
  },
};
</script>

<style lang="sass">
.st-input
  width: 90vw;
  height: 1.5rem;
  @include sm
    width: 90vw !important;
  @include md
    width: 60vw !important;
  @include lg
    width: 30vw !important;
  @include xl
    width: 30vw !important;
input[type="text"]
  border: 1px solid black;
  border-radius: 5px;
  padding: 0 5px 0 5px;
  font-size: 1.2rem;

input[type="text"]:focus
  color: #000000;
  border: 1px solid #000000;
  box-shadow: none;
  outline: none;
</style>
