<template>
    <div>
<!--       <pre>
        {{ news }}
      </pre> -->
      helouuu
  <!--       <div v-for="list in news" :key="list"  class="my-4">

            <div class="column"> 
                <a :href="list.url" :alt="list.titleAuto">
                    <img
                        :src="list.image"
                        :alt="list.titleAuto"
                        class="is-rounded box p-1"
                    />
                </a>
            </div>

            <div class="column">
                <h3 class="is-size-5">
                    <strong>
                        {{ list.titleAuto }}
                    </strong>
                </h3>
                <a :href="list.url" :alt="list.titleAuto">
                    {{ list.textAuto }}
                </a>
            </div>
        </div> -->
    </div>
</template>


<script>
export default {
    name: 'WikiGamesComponent',
    components: {},
    data() {
        return {
            news: [],
        }
    },
    async fetch() {
        const newests = await fetch('https://en.wikipedia.org/wiki/List_of_Android_games').then(
              (res) => res.json()
        )
        this.news = newests
    },
}
</script>


<style scoped lang="scss">
img {
    width: 100%;
}
.final-text {
    font-size: 14px;
    font-family: 'Rubik', sans-serif;
}
</style>