<template>
 <div id="contributors-page">
   <h1>{{ msg }}</h1>
   <div class="contributors-list">
    <ul v-if="contributors && contributors.length">
        <li v-for="contributor of contributors">
        <p>
            <img :src="contributor.avatar_url" width="200"/><br/>
            <strong><a :href="contributor.html_url" target="_blank">{{contributor.login}}</a></strong><hr/>
        </p>
        </li>
    </ul>

    <ul v-if="errors && errors.length">
        <li v-for="error of errors">
        {{error.message}}
        </li>
    </ul>
   </div>
 </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Contributors',
  data () {
    return {
      msg: 'Our contributors',
      contributors: [],
      errors: []
    }
  },
  created () {
    axios.get('https://api.github.com/repos/nnetworth/nnetworth.com/contributors')
      .then(response => {
        this.contributors = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

