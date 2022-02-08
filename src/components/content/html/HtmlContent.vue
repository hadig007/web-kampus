<template>
    <div class="html">
        <div v-html="markdownToHtml" class="preview"></div>
        <div>
            <pre>
                hai

                semua

                <code>
                    nama
                    aku
                </code>
            </pre>
        </div>
    </div>
</template>


<script>
export default {
   data(){
       return{
            input : 
            ' # PENGENALAN HTML '
            
       }
   },
   computed: {
       markdownToHtml(){
           return this.md(this.input)
       }
   },
   methods : {
       
   }
}
</script>

<style scoped>
.html{
    display: grid;
    grid-template-columns: 1fr ;
    gap: 1rem;
    height: 100%;
    width: 100%;
    padding: 2rem;
}
pre{
    font-family: Arial, Helvetica, sans-serif;
}

</style>