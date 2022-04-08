<template>
    <div>

        <div v-for="list in news" :key="list"  class="my-4">

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
        </div>
    </div>
</template>


<script>
export default {
    name: 'AutorityComponent',
    components: {},
    data() {
        return {
            news: [],
        }
    },
    async fetch() {
        const newests = await fetch('http://localhost:3000/api/autority/').then(
            (res) => res.json()
        )
        this.news = newests.slice(0)
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