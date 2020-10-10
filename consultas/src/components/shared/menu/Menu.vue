<template>
    <div class="menuLateral">
        <ul class="nav flex-column nav-pills" v-for="(item, index) in menuItens" :key="index">
            <li class="nav-item">
                <a class="nav-link " :href="item.url">{{item.name}}</a>
            </li>      
        </ul>
    </div>
    
</template>

<script>
export default {
    props: ['menuItens']
}
</script>

<style lang="scss" scoped></style>