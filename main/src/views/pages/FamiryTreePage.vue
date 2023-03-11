<template>
  <div>
    <form>
      <div class="select">
        <select for="figureKind" v-model="figureKind">
          <option value="">家族</option>
          <option>一親等</option>
          <option>二親等</option>
        </select>
      </div>
    </form>
    <canvas id="canvas" width="1000" height="1000"></canvas>
    test
  </div>
</template>

<script>
// export default {
//   data() {
//     return {
//       figureKind: "",
//     };
//   },
//   mounted() {
//     const canvas = this.$refs.canvas;
//     const ctx = canvas.getContext('2d');
//     ctx.font = "24px serif";

//     class Box {
//       constructor(x, y, w, h, fill, person) {
//         this.x = x;
//         this.y = y;
//         this.w = w;
//         this.h = h;
//         this.count = 0;
//         this.sourceFillStyle = fill;
//         this.person = person;
//       }

//       isHit(point) {
//         return (this.x <= point.x && point.x <= this.x + this.w) &&
//           (this.y <= point.y && point.y <= this.y + this.h);
//       }

//       clicked(ctx) {
//         if (this.count % 2 === 0) {
//           ctx.fillStyle = "red";
//           ctx.fillRect(this.x, this.y, this.w, this.h);
//         }
//         else {
//           ctx.fillStyle = this.sourceFillStyle;
//           ctx.fillRect(this.x, this.y, this.w, this.h);
//         }

//         ctx.strokeStyle = "black";
//         ctx.fillStyle = "black";
//         ctx.fillText(this.person.name, this.person.x, this.person.y);
//         this.count++;
//       }
//     }

//     const items = [];

//     let drawStrokeRectMan = (x, y, w, h) => {
//       ctx.strokeStyle = "dodgerblue";
//       ctx.strokeRect(x, y, w, h);
//       ctx.strokeStyle = "black";
//     }

//     let drawStrokeRectWoman = (x, y, w, h) => {
//       ctx.strokeStyle = "hotpink";
//       ctx.strokeRect(x, y, w, h);
//       ctx.strokeStyle = "black";
//     }

//     let drawFillRect = (isMale, x, y, w, h) => {
//       ret = null;
//       if (isMale) {
//         ctx.fillStyle = "lightskyblue";
//       }
//       else {
//         ctx.fillStyle = "hotpink";
//       }

//       ret = ctx.fillStyle;

//       ctx.fillRect(x, y, w, h);
//       ctx.fillStyle = "black";
//       return ret;
//     }

//     let drawPerson = (isMale, rx, ry, rw, rh, person, isMe = false) => {
//       fill = null;
//       if (isMe) {
//         fill = drawFillRect(isMale, rx, ry, rw, rh);
//       }
//       if (isMale) {
//         drawStrokeRectMan(rx, ry, rw, rh);
//       }
//       else {
//         drawStrokeRectWoman(rx, ry, rw, rh);
//       }

//       ctx.fillText(person.name, person.x, person.y);

//       fill = isMe ? fill : "White";
//       const box = new Box(rx, ry, rw, rh, fill, person);
//       items.push(box);
//     }

//     ctx.lineWidth = 2;
//     // upper left
//     ctx.beginPath();
//     ctx.moveTo(170, 70);
//     ctx.lineTo(330, 70);
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.moveTo(250, 70);
//     ctx.lineTo(250, 150);
//     ctx.stroke();

//     drawPerson(true, 30, 50, 140, 50, { name: "佐藤　太郎", x: 40, y: 80 });
//     drawPerson(false, 330, 50, 140, 50, { name: "佐藤　美咲", x: 340, y: 80 });

//     // me
//     drawPerson(true, 180, 160, 140, 50, { name: "佐藤　匠", x: 200, y: 190 }, true);

//     // upper right
//     ctx.beginPath();
//     ctx.moveTo(680, 70);
//     ctx.lineTo(840, 70);
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.moveTo(760, 70);
//     ctx.lineTo(760, 150);
//     ctx.stroke();

//     drawPerson(true, 540, 50, 140, 50, { name: "田中　翔太", x: 550, y: 80 });
//     drawPerson(false, 840, 50, 140, 50, { name: "田中　良枝", x: 850, y: 80 });

//     // wife
//     drawPerson(false, 690, 160, 140, 50, { name: "佐藤　栞", x: 710, y: 190 });

//     //family
//     ctx.beginPath();
//     ctx.moveTo(320, 180);
//     ctx.lineTo(680, 180);
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.moveTo(500, 180);
//     ctx.lineTo(500, 260);
//     ctx.stroke();

//     // child
//     drawPerson(false, 430, 265, 140, 50, { name: "佐藤　光", x: 450, y: 300 });

//     // eventhandler
//     canvas.addEventListener("click", e => {
//         const rect = canvas.getBoundingClientRect();
//         const point = {
//             x: e.clientX - rect.left,
//             y: e.clientY - rect.top
//         };

//         items.forEach(item => {
//             if (item.isHit(point)) {
//                 item.clicked(ctx);
//             }
//         });
//     });
//     }
// }
</script>
<style>
    /* canvas {
        position: relative;
        top: 100px;
        left: 20px;
    }


    .select {
        display: inline-block;
        position: relative;
        border: 3px solid rgb(111, 98, 228);
        vertical-align: middle;
        border-radius: 20px;
    }


    .select select {
        appearance: none;
        width: 300px;
        padding: 11px 15px;
        padding-right: 1em;
        border: none;
        outline: 0;
        background: #fff;
        background-image: none;
        box-shadow: none;
        text-indent: 0.01px;
        text-overflow: ellipsis;
        cursor: pointer;
        font-size: 1.5rem;
        border-radius: 20px;
    }

    .select::before {
        position: absolute;
        top: 18px;
        right: 16px;
        width: 0;
        height: 0;
        border-width: 10px 5px 0 5px;
        border-style: solid;
        border-color: rgb(109, 109, 109) transparent transparent transparent;
        content: "";
        pointer-events: none;
    } */
</style>

