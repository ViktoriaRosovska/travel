(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function c(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=c(e);fetch(e.href,i)}})();var t=new Swiper(".mySwiper",{slidesPerView:3,centeredSlides:!1,spaceBetween:30,loop:!0,pagination:{el:".swiper-pagination",type:"fraction"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),s=4,l=1;document.querySelector(".prepend-2-slides").addEventListener("click",function(r){r.preventDefault(),t.prependSlide(['<div class="swiper-slide">Slide '+--l+"</div>",'<div class="swiper-slide">Slide '+--l+"</div>"])});document.querySelector(".prepend-slide").addEventListener("click",function(r){r.preventDefault(),t.prependSlide('<div class="swiper-slide">Slide '+--l+"</div>")});document.querySelector(".append-slide").addEventListener("click",function(r){r.preventDefault(),t.appendSlide('<div class="swiper-slide">Slide '+ ++s+"</div>")});document.querySelector(".append-2-slides").addEventListener("click",function(r){r.preventDefault(),t.appendSlide(['<div class="swiper-slide">Slide '+ ++s+"</div>",'<div class="swiper-slide">Slide '+ ++s+"</div>"])});
