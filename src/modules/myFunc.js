export default function logHello(img) {
  let imgEl = document.createElement("img");
  imgEl.src = img;
  document.body.append(imgEl)
}