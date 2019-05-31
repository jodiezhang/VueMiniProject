<template>
    <div>
        <h2>Torsos</h2>
        The torsos 
        <div v-for="(torso,idx) in parts.torsos" :key="idx">
            <h4>{{torso.title}}</h4>
            <div>{{torso.description}}</div>
        </div>    
    </div>
</template>

<script>
import getPartsMixin from './get-parts-mixin';
export default {
    name: 'RobotTorsos',
    mixins:[getPartsMixin],
}
</script>