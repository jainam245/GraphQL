const video = document.querySelector(".webcam");
const canvas = document.querySelector(".video");
const ctx = canvas.getContext("2d");
const faceCanvas = document.querySelector(".face");
const faceCtx = canvas.getContext("2d");
const SIZE=10;

 //const faceDetector = new window.FaceDetector();
 

async function populateVideo() {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { width: 1280, height: 720 },
    });
    video.srcObject = stream;
await video.play();
console.log(video.videoWidth,video.videoHeight);

canvas.width = video.videoWidth;
canvas.height = video.videoHeight;
faceCanvas.width = video.videoWidth;
faceCanvas.height = video.videoHeight;
    
  }

  async function detect() {
    const faces = await faceDetector.detect(video);
    console.log(faces);
    // ask the browser when the next animation frame is and tell it to run detect for us
    faces.forEach(drawFace);
    requestAnimationFrame(detect);
  }
  function drawFace(face) {
    const { width, height, top, left } = face.boundingBox;
    ctx.strokeStyle = "#ffc600";
    ctx.lineWidth = 2;
    ctx.strokeRect(left, top, width, height);
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }
  function censor({ boundingBox: face }) {
    // draw the small face
    faceCtx.drawImage(
      // 5 source args
      video, // where does the source come from?
      face.x, // where do we start the source pull from?
      face.y,
      face.width,
      face.height,
      // 4 draw args
      face.x, // where should we start drawing the x and y?
face.y,
10,
10
    )
  }

  populateVideo().then(detect);
  