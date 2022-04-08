<template>
    <section class="section">
        <div class="columns is-mobile"></div>

          <pre>
              {{ data }}
          </pre> 
    </section>
</template>

<script>

import axios from 'axios'

export default {
    name: 'CompAutority',
    components: {},
    async asyncData({ params, error }) {
        try {
            const { data } = await axios.get(
                'http://localhost:3000/api/autority'
            )
            return {
                data,
            }
            
        } catch (err) {
            error({ message: 'something went wrong', statusCode: err.code })
        }
    },
/*     data() {
        
        return {
            AllGames: [],
        }
    }, */
    head() {
        return {
            title: 'Programs Games Android',
            meta: [
                {
                    hid: 'Programs and Games Android News. Play for free Games',
                    name: 'Programs Games Android',
                    content: 'Programs and Games Android, mobiles, Tech, PC, News, and much more . Play for free Games',
                },
            ],
        }
    }
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