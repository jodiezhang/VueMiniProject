<template>
   <div class="part" :class="position">
            <img @click="showPartInfo()" :src="selectedPart.src" v-bind:title="selectedPart.title"/>
            <button @click="selectPreviousPart()" class="prev-selector"></button>
            <button @click="selectNextPart()" class="next-selector"></button>
            <span v-pin class="sale" v-show="selectedPart.onSale">Sale!</span>
   </div>     
</template>
<script>
import pinDirective from '../shared/pin-directive';

function getPreviousValiIndex(index, length){
  const deprecatedIndex=index-1;
  return deprecatedIndex < 0 ? length - 1 : deprecatedIndex;
}

function getNextValidIndex(index, length){
  const incrementedIndex = index + 1;
  return incrementedIndex > length - 1 ? 0 :incrementedIndex;
}

export default {
     directives: { pin: pinDirective },
     name:'PartSelector',
     props:{
       parts:{
         type:Array,
         required:true
     },
       position:{
        type:String,
        require:true,
        validator:function(value){
          return ['left','right','top','bottom','center'].includes(value);
        }
       }
      },
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
     created(){
        this.emitSelectedPart();
     },
     updated(){
        this.emitSelectedPart();
     },
     methods:{
       showPartInfo(){
        //we inject router into vue instance in main.js file
        this.$router.push({name:'Parts',params:{
          id:this.selectedPart.id,
          partType:this.selectedPart.type,
        }});
       },
       emitSelectedPart(){
         this.$emit('partSelected',this.selectedPart);
       },
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
.sale {
  color:white;
  background-color:red;
  padding: 3px;
}

.part {img {
  width:165px;
  cursor:pointer;
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