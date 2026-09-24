'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const htmlWidth = document.documentElement.clientWidth;
const htmlHeight = document.documentElement.clientHeight;

const spiderCenter = htmlWidth / 2;
const spiderHeight = htmlHeight / 2;

wall.style.width = `${htmlWidth}px`;
wall.style.height = `${htmlHeight}px`;
wall.style.position = 'relative';

spider.style.position = 'absolute';
spider.style.width = '50px';
spider.style.display = 'inline-block';
spider.style.left = `${spiderCenter}px`;
spider.style.top = `${spiderHeight}px`;
