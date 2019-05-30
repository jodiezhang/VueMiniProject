<template>
    <div>
        <h1></h1>
        <ul class="menu">
            <li><router-link :to="{name:'BrowseHeads'}">Heads</router-link></li>
            <li><router-link :to="{name:'BrowseArms'}">Arms</router-link></li>
            <li><router-link :to="{name:'BrowseTorsos'}">Torsos</router-link></li>
            <li><router-link :to="{name:'BrowseBases'}">Bases</router-link></li>
        </ul>  
        <router-view></router-view>  
    </div>    
</template>
<script>
export default {
    name:'BrowserParts',
}
</script>

<style scoped>
    h1 {
        text-align:center;
    }
    .menu {
        display:flex;
        justify-content:space-around;
        margin:0 100 px;
        font-size:20 px;
    }
    ul {
        list-style-type: none;
    }
    a {
        color:palevioletred;
    }
</style>