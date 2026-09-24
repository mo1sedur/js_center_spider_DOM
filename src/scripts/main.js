'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

// spider.style.width = '30px';

const htmlWidth = wall.offsetWidth;
const htmlHeight = wall.offsetHeight;


wall.style.position = 'relative'

spider.style.position = 'absolute';

const spiderWidthSet = spider.offsetWidth;
const spiderHeightSet = spider.offsetHeight;


const topPosition = (htmlHeight - spiderHeightSet) / 2;
const leftPosition = (htmlWidth - spiderWidthSet) / 2;


spider.style.top = `${topPosition}px`;
spider.style.left = `${leftPosition}px`;

