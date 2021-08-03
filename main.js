class Main {
    crosshair;

    constructor() {
        console.log("main");

        this.getElements();
        this.createListeners();
    }

    getElements() {
        this.crosshair = document.getElementById('crosshair');
    }

    createListeners() {
        document.addEventListener('mousemove', (e) =>{
            this.mouseMoveHandler(e);
        });
    }

    mouseMoveHandler(e) {
        this.crosshair.style.left = e.pageX-60 + 'px';
        this.crosshair.style.top = e.pageY-60 + 'px';
    }
}
const main = new Main();

document.addEventListener('click', (e) => {
    console.log("shoot");
})

document.querySelectorAll(".mohrhuhn").forEach( huhn => {
    const clickHandler = (e) => {

        // e.path[2].removeChild()
        const parent = e.path[3];
        const child = e.path[2];
        child.removeEventListener('click', clickHandler )
        parent.removeChild( child );
        console.log("hit", child );
        alert("hit")
    };
    huhn.addEventListener('click', clickHandler )
})
