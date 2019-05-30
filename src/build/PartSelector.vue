<template>
   <div class="part">
            <img :src="selectedRobot.leftArm.src" title="left arm"/>
            <button @click="selectPreviousLeftArm()" class="prev-selector">&#9650;</button>
            <button @click="selectNextLeftArm()" class="next-selector">&#9660;</button>
            <span class="sale" v-show="selectedPart.onSale">Sale!</span>
   </div> 
       
</template>
<script>
import availableParts from '../data/parts';
const parts=availablePart.heads;
function getPreviousValiIndex(index, length){
  const deprecatedIndex=index-1;
  return deprecatedIndex < 0 ? length - 1 : deprecatedIndex;
}

function getNextValidIndex(index, length){
  const incrementedIndex = index + 1;
  return incrementedIndex > length - 1 ? 0 :incrementedIndex;
}

export default {
     name:'RobotBuilder',
     data(){
       return {
         availableParts,
         cart:[],//we need to initialize it or else Vue can not detect its change
         //Vue's change detection works by hooking into the getter and setter properties
         //in the data function
         selectedHeadIndex:0,
         selectedLeftArmIndex:0,
         selectedTorsoIndex:0,
         selectedRightArmIndex:0,
         selectedBaseIndex:0,
       };
     },
     computed:{
     
     },
     methods:{
 
       selectPreviousPart(){
         this.selectedPartIndex = getNextValidIndex
              (this.selectedPartIndex,availableParts.heads.length);
       },
       selectNextPart(){
         this.selectedPartIndex = getPreviousValiIndex
              (this.selectedPartIndex,availableParts.heads.length);
       },
       
     }
 }
</script>