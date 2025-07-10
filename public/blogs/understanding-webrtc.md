# Understanding WebRTC: Real-Time Peer-to-Peer Communication in the Browser

The internet has revolutionized communication, and WebRTC (Web Real-Time Communication) is one of the key technologies that enables real-time peer-to-peer interaction directly from the browser without needing plugins or third-party software. Whether you're building a video conferencing app, a collaborative tool, or a multiplayer game, WebRTC offers the foundation to connect browsers directly.

In this blog, we'll explore what WebRTC is, how it works behind the scenes, and how to build a basic video chat app with code examples.

---

## 🌐 What is WebRTC?

WebRTC is an open-source project supported by all modern browsers, enabling real-time communication (RTC) through simple JavaScript APIs.

### 🔑 Key Features:
- **Peer-to-peer communication** (P2P)
- **Low latency**
- **Audio, video, and data channels**
- **Secure transmission (uses DTLS and SRTP)**

---

## 🧠 Core Components of WebRTC

1. **MediaStream API** – Access to microphone and camera.
2. **RTCPeerConnection** – Responsible for sending media streams.
3. **RTCDataChannel** – Enables direct data exchange between peers.

---

## 📡 Signaling Explained

Although WebRTC is peer-to-peer, **it needs a signaling mechanism** to exchange metadata such as:

- Session descriptions (SDP)
- Network info (ICE candidates)

Signaling isn't defined by the WebRTC API; you can use:
- WebSocket
- Socket.IO
- Firebase
- Custom HTTP APIs

---

## 📦 ICE, STUN, and TURN

WebRTC uses ICE (Interactive Connectivity Establishment) to find the best path between peers.

- **STUN (Session Traversal Utilities for NAT):** Helps discover public IPs.
- **TURN (Traversal Using Relays around NAT):** Acts as a relay server if direct connection fails.

---

## 🔧 Sample Code: Basic Video Chat

```js
// Getting media stream
const localVideo = document.getElementById('local');
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then(stream => {
    localVideo.srcObject = stream;
    peerConnection.addStream(stream); // legacy; modern use addTrack
  });

// Creating peer connection
const peerConnection = new RTCPeerConnection({
  iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
});

peerConnection.onicecandidate = event => {
  if (event.candidate) {
    sendToSignalingServer(event.candidate);
  }
};

// Signaling: offer/answer exchange
peerConnection.createOffer()
  .then(offer => {
    return peerConnection.setLocalDescription(offer);
  })
  .then(() => {
    sendToSignalingServer(peerConnection.localDescription);
  });
