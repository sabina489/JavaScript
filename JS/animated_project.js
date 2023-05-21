function clock() {
    const now = new Date();
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // setup canvas, save the default state
    ctx.save();   
    ctx.clearRect(0,0,400,300);
    ctx.translate(200,200);
    ctx.rotate(-Math.PI/2);

    // restore default state
    ctx.restore();


}

clock();