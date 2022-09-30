<template>
  <div @click="showShedule(item)">
    <AdvanceFigure :src="imageProps"/>
  </div>
</template>

<script>

import StandartMethods from '@/mixins/standartMethods'
import AdvanceFigure from "@/components/base/AdvanceFigure";

import {createNamespacedHelpers} from 'vuex'
const {mapActions} = createNamespacedHelpers('moviesSession')

export default {
  name: 'Movie',
  components: {AdvanceFigure},
  mixins: [StandartMethods],
  props: {
    item: {
      type: Object,
      defaults: function () {
        return {
          id: 48,
          name: 'Чорна Вдова',
          description:
              ' <div class="conLwithR"> <div class="mycontent"> <div class="mycontent2"> <div class="clearfix"> <div class="region region-content"> <div id="block-system-main" class="block block-system"> <div class="content"> <div id="node-15657" class="node node-movie clearfix"> <div class="content"> <div id="node-movie-full-group-movie-info" class="group-movie-info field-group-div"> <div class="field field-name-body field-type-text-with-summary field-label-hidden"> <div class="field-items"> <p style="text-align: center;">Звертаємо особливу увагу, що у нашому кінотеатрі глядачам пропонується переглянути ексклюзивну версію стрічки в технології <strong>Screen X</strong> та <strong>ІМАХ.</strong>&nbsp;Творці фільму постаралися і підготували для показу на екранах<strong> ІМАХ</strong> варіант, що містить зображення на 26% більше за розміром в порівнянні зі звичайними екранами кінотеатрів. Кожен може не просто переглядати фільм, а буквально поринути в живу атмосферу фільму, оскільки замість звичного співвідношення сторін екрану 2.4:1 фільм демонструватиметься у форматі 1.9:1.</p> <p style="text-align: left;">&nbsp;</p> <p style="font-weight: 400; text-align: center;"><strong>ScreenX </strong>- це панорамний формат зображення з кутом огляду в 270 градусів. Для досягнення такого ефекту зображення проектується на центральний і два бокових екранах кінотеатру. Основні сцени фільма демонструють на головному екрані, а бічні збільшують кадрову композицію. Такий розширений простір дає змогу глядачеві опинитися реально &laquo;всередині&raquo; картини і сприймати кіно по-новому!</p> <p style="font-weight: 400; text-align: left;">&nbsp;</p> <p style="font-weight: 400;">Наташа Романова, відома як Чорна Вдова, подивиться у вічі темним сторінкам книги свого життя, коли зіткнеться із небезпечною змовою, пов&rsquo;язаною з власним минулим. Наташу переслідує небезпечна сила, яка ні перед чим не зупиниться на шляху до її знищення. Тепер вона має розібратись і зі своїм шпигунським минулим, і зі стосунками, які зруйнувала ще до того, як приєдналась до Месників.&nbsp;</p> <p style="font-weight: 400;">&nbsp;</p> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> ',
          genre: 0,
          image: 'https://multiplex.ua//images/af/ed/afed45a4a5b9ec38d7b0bb6988ac93c3.jpeg',
          additional:
              '<ul>  \t\t\t\t<li class="rating">  \t\t\t\t\t<p class="key">Вік:</p>  \t\t\t\t\t<div class="val">12&#43; (Попередньо)  \t\t\t\t\t\t<div class="age_hint">  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t<div class="age_icon" style="background-image: url(/img/age_12.svg);"></div>  \t\t\t\t\t\t\t\t<p>Старше 12 років, або у супроводі батьків чи опікунів</p>  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t</div>  \t\t\t\t\t</div>  \t\t\t\t</li>    \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Рік:</p>  \t\t\t\t\t\t<p class="val">2021</p>  \t\t\t\t\t</li>  \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Оригінальна назва:</p>  \t\t\t\t\t\t<p class="val">Black Widow</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Режисер:</p>  \t\t\t\t\t<p class="val">Кейт Шортланд</p>  \t\t\t\t</li>  \t\t\t\t  \t\t\t\t  \t\t\t\t\t  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Період прокату:</p>  \t\t\t\t\t\t\t<p class="val"><span id="mvi_openingdate">07.07.2021</span> - 14.07.2021</p>  \t\t\t\t\t\t</li>  \t\t\t\t\t  \t\t\t\t<li><p class="key">Мова:</p>  \t\t\t\t\t<p class="val" id="mvi_language">Українська мова</p>  \t\t\t\t</li>  \t\t\t\t\t<li><p class="key">Жанр:</p>  \t\t\t\t\t\t<p class="val">  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/sci-fi">Фантастика</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/action">Екшн</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/boyevik">Бойовик</a>  \t\t\t\t\t\t</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Тривалість:</p>  \t\t\t\t\t<p class="val">  \t\t\t\t\t2:14  \t\t\t\t\t</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Виробництво:</p>  \t\t\t\t\t<p class="val">США</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Студія:</p>  \t\t\t\t\t<p class="val"> Marvel Studios</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">Сценарій:</p>  \t\t\t\t\t<p class="val">Жак Шеффер, Нед Бенсон</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">У головних ролях:</p>  \t\t\t\t\t<p class="val">Скарлетт Йоганссон («Месники», «Привид у броні», «Книга джунглів»), Девід Гарбор («Дивні дива», «Загін самогубців», «Хеллбой»), Флоренс П&#39;ю («Сонцестояння»), Рейчел Вайс («Костянтин: Володар темряви», «Спадок Борна», «Фонтан»), О. Т. Фаґбенлі </p>  \t\t\t\t</li>  \t\t\t</ul>',
        }
      },
    },
  },
  dat(){
    return{
    }
  },
  beforeDestroy() {
    this.cleanState()
  },
  computed:{
    imageProps(){
      return {image:this.item.image,name:this.item.name}
    },
  },
  methods: {
    ...mapActions(['getMoviesSession', 'getMovieInfo', 'cleanState']),
    showShedule(item) {
      this.getMoviesSession(item)
      this.getMovieInfo(item)
    },
  },
}
</script>

<style>
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fade-in 1s ease;
}
</style>
