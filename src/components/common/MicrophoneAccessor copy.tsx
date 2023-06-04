export async function init(): Promise<AudioBuffer> {
    // Get audio(microphone)
    const medias = await navigator.mediaDevices.getUserMedia({
        video: false,
        audio: true,
    });
    const audioContext = new AudioContext();
    const audioSourceNode = audioContext.createMediaStreamSource(medias);
    // By default, use speaker of the computer as output
    audioSourceNode
        .connect(audioContext.destination);
           // volume up    
    const gain = audioContext.createGain();
    gain.gain.value = 2.0;
    // delay the sound
    const delay = new DelayNode(audioContext);
    delay.delayTime.value = 1;
    // output only right channel
    const panner = new StereoPannerNode(audioContext, { pan: 1});

    const splitter = audioContext.createChannelSplitter(2);
    audioSourceNode.connect(splitter);
    splitter.connect(gain, 1);
    splitter.connect(delay, 1);
    // No any effects...
    splitter.connect(panner, 1);
    splitter.connect(audioContext.destination);



    const merger = audioContext.createChannelMerger(2);
    gain.connect(merger, 0, 1);
    delay.connect(merger, 0, 1);
    splitter.connect(merger, 1, 0);
    merger.connect(audioContext.destination);
    return audioContext.createBuffer(3,5,100);
}