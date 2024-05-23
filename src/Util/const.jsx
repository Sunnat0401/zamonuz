
import { dubai, istanbul, sauida, sharm } from "../assets";
import {t} from  'i18next'
export const  sliderItem =[
  
{
    id: 1,
    img: dubai,
    title: t("item1.countries"),
    subtitle:"Dubai",
    swiper:{
     icon1: 'fa-regular fa-user',
     population1: "gyuhij",
     number1: "67.41 M",
     icon2: 'fa-solid fa-house',
     population2: t("item1.area"),
     number2: "551.500 KM2",
     icon3: 'fa-solid fa-globe',
     population3: t("item1.price"),
     number3: "67.41 M",
    }
  },
  {
    id: 1,
    img: istanbul,
    title:  t("item2.countries"),
    subtitle:"Atalia",
    swiper:{
     icon1: 'fa-regular fa-user',
     population1: t("item2.population"),
     number1: "44.48 M",
     icon2: 'fa-solid fa-house',
     population2: t("item2.area"),
     number2: "275.400 KM2",
     icon3: 'fa-solid fa-globe',
     population3:  t("item2.price"),
     number3: "$946.000",
    }
  },
  {
    id: 1,
    img: sharm,
    title:  t("item3.countries"),
    subtitle:"Sharma",
    swiper:{
     icon1: 'fa-regular fa-user',
     population1 : t("item2.population"),
     number1: "69.86 M",
     icon2: 'fa-solid fa-house',
     population2: t("item3.area"),
     number2: "513.120 KM2",
     icon3: 'fa-solid fa-globe',
     population3:  t("item3.price"),
     number3: "$165.450",
    }
  },

]