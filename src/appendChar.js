export const appendCharMixin ={
  data(){
    return {
      userInput4: ''
    }
  },
  computed: {
    appendCharMx(){
      let charCount = this.userInput4.length;
      if(charCount > 0){
      return `${this.userInput4} (${charCount})`;  
      }
    }
  }
}
