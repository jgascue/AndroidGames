<template>
    <div class="column">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title has-text-grey">
                    {{ AllCategories }}
                </p>
            </header>
            <div class="card-content">
                <div class="content has-text-centered">
                    <b-icon :icon="icon" size="is-large" type="is-primary" />
                </div>
            </div>
            <footer class="card-footer">
                <div class="card-footer-item">
                    <span>
                        <slot />
                    </span>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>

import axios from "axios"

export default {
    name: 'BuefyCard',
    props: {
        title: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        },
    },
    async asyncData({ params, error }) {
        try {
            const { data } = await axios.get(
                'https://www.freetogame.com/api/games?category=shooter'
            )
            return {
                AllCategories: data,
            }
        } catch (err) {
            error({ message: 'something went wrong', statusCode: err.code })
        }
    },

    data() {
        return {
            AllCategories: [],
        }
    },
}
</script>
