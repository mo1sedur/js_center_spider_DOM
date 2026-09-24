'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const htmlWidth = document.documentElement.clientWidth;
const htmlHeight = document.documentElement.clientHeight;


wall.style.position = 'relative'

spider.style.position = 'absolute'

const spiderWidthSet = spider.offsetWidth;
const spiderHeightSet = spider.offsetHeight;

const topPosition = (htmlHeight - spiderHeightSet) / 2;
const leftPosition = (htmlWidth - spiderWidthSet) / 2;


spider.style.top = `${topPosition}px`;
spider.style.left = `${leftPosition}px`;
