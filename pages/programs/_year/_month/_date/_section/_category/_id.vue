<template>
    <section class="section">
        <h2 class="title is-3 has-text-grey">
            {{ id }}
    
            "Just start <b-icon icon="rocket" size="is-large" />"
        </h2>
        <small>
            <pre>
                {{ data }}
            </pre>
        </small>

        <div v-for="title in data" :key="title" class="m-5">
            <h3 class="is-size-3">
               <strong>
                {{ title.title }}
               </strong>
            </h3>
            <p>
                {{ title.subtitle }}
            </p>
            <p>
                {{ title.url }}
            </p>
            <p>
                <img :src="title.img" :alt="title.title ">
              
            </p>                  
        </div>
        

    </section>
</template>


<script>

import axios from 'axios'

export default {
    name: 'ProgramsPage',
    components: {},

    async asyncData({ params, error }) {
        const id = params.id
        try {
            const { data } = await axios.get(
                'https://www.programsgamesandroid.com/api/'
            )
            return {
                data,
                id,
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
            title: 'Android Games',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'all games free to play',
                },
            ],
        }
    },
}
</script>
