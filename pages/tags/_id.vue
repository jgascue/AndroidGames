<template>
    <section class="section">
            <div class="columns">
                <div class="column is-one-quarter">

                    <h1 class="title is-size-2 has-text-black has-text-weight-bold">
                        {{ data[0].title }} 
                    </h1>
                    
                    <h2 class="subtitle is-size-4 has-text-warning has-text-weight-bold">
                        {{ data[0].subtitle }} 
                    </h2>
                </div>
         <!--   <pre>
                    {{ data[0].title  }}
                </pre> -->
           
                <div class="column is-one-quarter">
                    <p>
                        Category:
                        <strong> {{ data[0].title }} </strong>
                    </p>
                </div>
            </div>
                    
            <div v-for="(item, index) in data" :key="index" class="columns ">
                <div class="column is-one-quarter">
                    <img :src="item.img" :alt="item.titleItem">
                </div>
                <div class="column auto">
                    <h3 class="warning mp-3">
                        <a v-if="item.link" :href="item.link" :alt="item.titleItem" >
                            {{ item.titleItem }}
                        </a>
                        <p v-else>
                            {{ item.titleItem }}
                        </p>
                    </h3>
                    <h2>{{ item.titleGame }}</h2>
                    <p>
                        {{ item.subtitle }}
                    </p>
                    <p>
                        {{ item.text }}
                    </p>
                </div>

            </div>
                
    </section>
</template>


<script>
import axios from 'axios'

export default {
    name: 'ProgramsPage',
    components: {},
    async asyncData({ params, error }) {
        try {
            const { data } = await axios.get('https://www.programsgamesandroid.com/api/tags/')
            return {
                data
            }
        } catch (err) {
            error({ message: 'something went wrong', statusCode: err.code })
        }
    },
    data() {
        return {
            articles: [],
        }
    },
    head() {
        return {
            title: `Android Programs Games ${this.data.title}`,
            meta: [
                {
                    hid: `${this.data.title}`,
                    name: `${this.data.subtitle}`,
                    content: `tags Android games ${this.data.subtitle}`,
                },
            ],
        }
    },
}
</script>

<style>
html {
    font-family: 'Fredoka', sans-serif;
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Fredoka', sans-serif;
}

p {
    margin: 10px 0;
}

h1,
h2,
h3 {
    font-weight: bold;
    font-family: 'Fredoka', sans-serif;
}
</style>
