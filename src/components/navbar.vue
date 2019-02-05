<template>
    <div>
        <div class="link">
            <router-link>hello</router-link>
        </div>
        <div></div>    
    </div>
</template>

<script>
export default {
    computed: {
        canIGoBack () {
            if(window.history.length > 1)
                return true
            return false
        }
    }
}
</script>
