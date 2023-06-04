const  arrayBufferToBase64 = (arrayBuffer: ArrayBuffer) => {
    const byteArray = new Uint8Array(arrayBuffer);
    let base64String = "";
    for (let i = 0; i < byteArray.length; i++) {
      base64String += String.fromCharCode(byteArray[i]);
    }
    return btoa(base64String);
  };
interface AudioProps{
    dataWasRead:(data:Blob) =>void;
}
   export const audioSetup = async (props:AudioProps) => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({
          audio: {
            channelCount: 1,
            sampleRate: 44100,
          },
        })
        .then((stream) => {
          const recorder = new MediaRecorder(stream);
          const chunks: BlobPart[] | undefined = [];

          recorder.addEventListener("dataavailable", function (e) {
            chunks.push(e.data);
          });

          recorder.addEventListener("stop", () => {
            const blob = new Blob(chunks, { type: "audio/wav" });
            props.dataWasRead(blob);
            const url = URL.createObjectURL(blob);

            // const audio = new Audio();
            // audio.src = url;
            // audio.play();

            var reader = new FileReader();
            reader.onload = () => {
              const theMyData =   arrayBufferToBase64(reader.result as ArrayBuffer);
              console.log(theMyData);
            };
            reader.readAsArrayBuffer(blob);
           
          });

          // Start recording
          recorder.start();

          // Stop recording after 3 seconds
          setTimeout(function () {
            recorder.stop();
          }, 5000);
        })
        .catch(function (err) {
          console.error("Error accessing microphone:", err);
        });
    } else {
      console.error("MediaRecorder API not supported");
    }
}
