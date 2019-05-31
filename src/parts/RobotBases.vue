<template>
    <div>
        <h2>Bases</h2>
        The bases are how your robot will walk  with
        the world.They come in a variety of shapes and functions.
        <div v-for="(base,idx) in parts.bases" :key="idx">
            <h4>{{base.title}}</h4>
            <div>{{base.description}}</div>
        </div>    
    </div>
</template>

<script>
import getPartsMixin from './get-parts-mixin';
export default {
    name: 'RobotBases',
    mixins:[getPartsMixin],
}
</script>