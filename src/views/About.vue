
  
<template>
    <div id="app">
            <div>
                <input type="text" v-model="name" placeholder="Your name?" />
                <h5>Hello, {{name}}</h5>
            </div>
        </div>
</template>

<script>

 new Vue({
                template: '#app',
                data: function() {
                    return {
                        name: ''
                    }
                }
            }).$mount('#app');
</script>

<style>

</style>
