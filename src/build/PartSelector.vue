<template>
   <div class="part" :class="position">
            <img :src="selectedPart.src" title="left arm"/>
            <button @click="selectPreviousPart()" class="prev-selector">&#9650;</button>
            <button @click="selectNextPart()" class="next-selector">&#9660;</button>
            <span class="sale" v-show="selectedPart.onSale">Sale!</span>
   </div> 
       
</template>
<script>


function getPreviousValiIndex(index, length){
  const deprecatedIndex=index-1;
  return deprecatedIndex < 0 ? length - 1 : deprecatedIndex;
}

function getNextValidIndex(index, length){
  const incrementedIndex = index + 1;
  return incrementedIndex > length - 1 ? 0 :incrementedIndex;
}

export default {
     name:'PartSelector',
     props:['parts','position'],
     data(){
       return {
         selectedPartIndex:0,
       };
     },
     computed:{
       selectedPart(){
         return this.parts[this.selectedPartIndex];
       }
     
     },
     methods:{
 
       selectPreviousPart(){
         this.selectedPartIndex = getNextValidIndex
              (this.selectedPartIndex,this.parts.length);
       },
       selectNextPart(){
         this.selectedPartIndex = getPreviousValiIndex
              (this.selectedPartIndex,this.parts.length);
       },
       
     }
 }
</script>

<style lang="scss" scoped>
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
}
.part {img {
  width:165px;
}}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}

.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name {
  position:absolute;
  top: -25px;
  text-align:center;
  width:100%
}

.content {
  position:relative;
}





</style>