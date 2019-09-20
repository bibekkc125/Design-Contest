<<<<<<< HEAD
let a = document.querySelector(".carousel-container");

const CANVAS_WIDTH  = parseInt(window.getComputedStyle(a).width);
const CANVAS_HEIGHT = parseInt(window.getComputedStyle(a).height);
//Carousel
class Carousel{
    constructor(delay,hold){

        this.current = 0;
        this.index = 0;
        this.change = 1;
        this.delay = delay;
        this.hold = hold;
        this.target = 0;
        this.speed = 0;
        this.temp;
        this.timer = 0;
        this.slide = 0;
        this.listItem = [];
        this.rightButton = document.querySelector('.button-wrapper span:last-child');
        this.leftButton = document.querySelector('.button-wrapper span:first-child');
        this.images = Array.from(document.querySelectorAll('.carousel-image-wrapper>ul'));

        this.maxWidth = this.images.length * CANVAS_WIDTH;

        this.carouselContainer = document.querySelector('.carousel-container');
        this.carouselWrapper = document.querySelector('.carousel-image-wrapper');
    }

    init(){
        // this.carouselContainer.style.width = CANVAS_WIDTH + 'px';
        // this.carouselContainer.style.height = CANVAS_HEIGHT + 'px';
        this.carouselContainer.style.overflow = "hidden";
        
        this.images.forEach(item=>{
            item.style.width = CANVAS_WIDTH + 'px';
            item.style.height = CANVAS_HEIGHT + 'px';
            item.style.float = 'left';
        })
        this.carouselWrapper.style.width = this.maxWidth + 'px';
        this.carouselWrapper.style.height = CANVAS_HEIGHT + 'px';
        // console.log(this.carouselWrapper.style.width);  
        this.rightButton.onclick = ()=>{this.next()};
        this.leftButton.onclick = ()=>{this.previous()};


        // for(let i = 0; i< this.images.length; i++){

        //     this.listItem[i] = document.createElement('li'); 
        //     this.toggle.appendChild(this.listItem[i]);
        //     this.listItem[i].onclick = ()=>{this.moveTo(i)};
        // }
    }


    calcIndex(){
        this.index = this.index + this.change;
        if(this.index >= this.images.length){
            this.index=0;
        }
        else if(this.index < 0){
            this.index = this.images.length-1;
        }
    }

    calcCurrentTarget(){
        this.current = this.target;
        this.target = - this.index * CANVAS_WIDTH;
        console.log(`current: ${this.current}`);
        console.log(`target: ${this.target}`);
    }

    calcSpeed(){
        this.speed = (this.target - this.current) / this.delay;
        // console.log(this.speed);
    }

    transition(){
        this.temp = this.current;
        let that = this;
        
        (function draw(){
            let animation = window.requestAnimationFrame(draw);
            
            if(that.temp >= that.target){
                that.temp = that.temp + that.speed;
                that.carouselWrapper.style.marginLeft = that.temp + 'px';
                console.log(that.temp);
                if (that.temp < that.target){
                    cancelAnimationFrame(animation);
                }
            }
            else if(that.temp <= that.target){
                that.temp = that.temp + that.speed;
                that.carouselWrapper.style.marginLeft = that.temp + 'px';
                if (that.temp > that.target){
                    cancelAnimationFrame(animation);
                }
            }
            else{
               cancelAnimationFrame(animation);
            }
            
        })();
    }

    previous(){
        this.change = -1;
        this.calcIndex();
        this.calcCurrentTarget();
        this.calcSpeed();
        this.transition();
        this.change = 1;
        // if (this.slide){
        //     clearInterval(this.slide);
        //     this.slideshow();
        // }
    }

    next(){
        this.calcIndex();
        this.calcCurrentTarget();
        this.calcSpeed();
        this.transition();
        // if (this.slide){
        //     clearInterval(this.slide);
        //     this.slideshow();
        // }
   

    }

    slideshow(){
        this.slide = setInterval(()=>{
            this.animate();

        },this.hold);
    }

    animate(){
        this.calcIndex();
        this.calcCurrentTarget();
        this.calcSpeed();
    }
    run(){
        this.init();
        this.animate();

    }
}
let one = new Carousel(117, 3000);
one.run();
// let two = new Carousel(20, 1000);
=======
let a = document.querySelector(".carousel-container");

const CANVAS_WIDTH  = parseInt(window.getComputedStyle(a).width);
const CANVAS_HEIGHT = parseInt(window.getComputedStyle(a).height);
//Carousel
class Carousel{
    constructor(delay,hold){

        this.current = 0;
        this.index = 0;
        this.change = 1;
        this.delay = delay;
        this.hold = hold;
        this.target = 0;
        this.speed = 0;
        this.temp;
        this.timer = 0;
        this.slide = 0;
        this.listItem = [];
        this.rightButton = document.querySelector('.button-wrapper span:last-child');
        this.leftButton = document.querySelector('.button-wrapper span:first-child');
        this.images = Array.from(document.querySelectorAll('.carousel-image-wrapper>ul'));

        this.maxWidth = this.images.length * CANVAS_WIDTH;

        this.carouselContainer = document.querySelector('.carousel-container');
        this.carouselWrapper = document.querySelector('.carousel-image-wrapper');
    }

    init(){
        // this.carouselContainer.style.width = CANVAS_WIDTH + 'px';
        // this.carouselContainer.style.height = CANVAS_HEIGHT + 'px';
        this.carouselContainer.style.overflow = "hidden";
        
        this.images.forEach(item=>{
            item.style.width = CANVAS_WIDTH + 'px';
            item.style.height = CANVAS_HEIGHT + 'px';
            item.style.float = 'left';
        })
        this.carouselWrapper.style.width = this.maxWidth + 'px';
        this.carouselWrapper.style.height = CANVAS_HEIGHT + 'px';
        // console.log(this.carouselWrapper.style.width);  
        this.rightButton.onclick = ()=>{this.next()};
        this.leftButton.onclick = ()=>{this.previous()};


        // for(let i = 0; i< this.images.length; i++){

        //     this.listItem[i] = document.createElement('li'); 
        //     this.toggle.appendChild(this.listItem[i]);
        //     this.listItem[i].onclick = ()=>{this.moveTo(i)};
        // }
    }


    calcIndex(){
        this.index = this.index + this.change;
        if(this.index >= this.images.length){
            this.index=0;
        }
        else if(this.index < 0){
            this.index = this.images.length-1;
        }
    }

    calcCurrentTarget(){
        this.current = this.target;
        this.target = - this.index * CANVAS_WIDTH;
        console.log(`current: ${this.current}`);
        console.log(`target: ${this.target}`);
    }

    calcSpeed(){
        this.speed = (this.target - this.current) / this.delay;
        // console.log(this.speed);
    }

    transition(){
        this.temp = this.current;
        let that = this;
        
        (function draw(){
            let animation = window.requestAnimationFrame(draw);
            
            if(that.temp >= that.target){
                that.temp = that.temp + that.speed;
                that.carouselWrapper.style.marginLeft = that.temp + 'px';
                console.log(that.temp);
                if (that.temp < that.target){
                    cancelAnimationFrame(animation);
                }
            }
            else if(that.temp <= that.target){
                that.temp = that.temp + that.speed;
                that.carouselWrapper.style.marginLeft = that.temp + 'px';
                if (that.temp > that.target){
                    cancelAnimationFrame(animation);
                }
            }
            else{
               cancelAnimationFrame(animation);
            }
            
        })();
    }

    previous(){
        this.change = -1;
        this.calcIndex();
        this.calcCurrentTarget();
        this.calcSpeed();
        this.transition();
        this.change = 1;
        // if (this.slide){
        //     clearInterval(this.slide);
        //     this.slideshow();
        // }
    }

    next(){
        this.calcIndex();
        this.calcCurrentTarget();
        this.calcSpeed();
        this.transition();
        // if (this.slide){
        //     clearInterval(this.slide);
        //     this.slideshow();
        // }
   

    }

    slideshow(){
        this.slide = setInterval(()=>{
            this.animate();

        },this.hold);
    }

    animate(){
        this.calcIndex();
        this.calcCurrentTarget();
        this.calcSpeed();
    }
    run(){
        this.init();
        this.animate();

    }
}
let one = new Carousel(117, 3000);
one.run();
// let two = new Carousel(20, 1000);
>>>>>>> 95fba19d90c92edaee944e1cf5c8dbb02ad02766
// two.run();