# Building a Scalable Video Calling & Chat App with WebRTC, Peer.js, and WebSockets

In this blog, we’ll explore the journey of building a real-time video calling and chat application using WebRTC, Peer.js, and WebSockets. We’ll also dive into the challenges and architectural choices made to ensure scalability, NAT traversal, and performance optimization in group calls.

---

## 🌐 What is WebRTC?

WebRTC (Web Real-Time Communication) is an open-source project that provides web browsers and mobile applications with real-time communication capabilities via simple JavaScript APIs. It supports audio, video, and generic data transmission between peers directly

### 🔑 Key Features:
- Peer-to-peer (P2P) communication
- Operates over UDP, which is suitable for low-latency media streaming
- Support for audio, video, and data channels

However, WebRTC does not handle signaling, NAT traversal, or scalability out of the box.

---

## 📡 Understanding Signaling with WebSockets

Before a WebRTC connection can be established, peers need to exchange information such as:

- Session Description Protocol (SDP)
- ICE candidates

This process is called signaling. WebRTC does not specify how to do signaling — so you can use anything from HTTP, WebSockets, Firebase, or even carrier pigeons 😄. We’ll use WebSockets for:

- Exchanging signaling data
- Managing real-time events like joining/leaving rooms
- Handling group chat messages

```js
// Sample WebSocket signaling server (Node.js)
io.on("connection", socket => {
  socket.on("offer", (data) => {
    socket.to(data.room).emit("offer", data.sdp);
  });

  socket.on("answer", (data) => {
    socket.to(data.room).emit("answer", data.sdp);
  });

  socket.on("candidate", (data) => {
    socket.to(data.room).emit("candidate", data.candidate);
  });
});
```

---

## 🔁 NAT Traversal with STUN and TURN

Most users are behind NATs (home routers, firewalls). To establish P2P connections, WebRTC uses:

- **STUN** servers to discover public IP addresses.
- **TURN** servers as a fallback when direct connections fail.

---

## 🤝 Peer.js to Simplify WebRTC

WebRTC APIs are quite low-level. Peer.js is a wrapper around WebRTC that simplifies:

- Peer discovery
- Signaling
- Connection management

### Example Peer.js usage:

```js
const peer = new Peer();

peer.on("open", (id) => {
  console.log("My peer ID is: " + id);
});

peer.on("call", (call) => {
  navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
    call.answer(stream);
    call.on("stream", (remoteStream) => {
      video.srcObject = remoteStream;
    });
  });
});
```

---

## Architecting for Group Calls with SFU

WebRTC is peer-to-peer by default. For 1:1 calls, this is ideal. But for group calls, this gets inefficient:

- Each user must maintain multiple connections
- Bandwidth usage increases linearly with number of participants

---

## Solution: Use a Selective Forwarding Unit (SFU)

An SFU is a media server that:

- Receives streams from all clients
- Selectively forwards streams to others

This reduces load on clients and centralizes stream distribution.

```js
// SFU server receives media from one user and routes it to others
socket.on("stream", (stream) => {
  rooms[roomId].forEach(client => {
    if (client !== socket.id) {
      client.emit("stream", stream);
    }
  });
});
```