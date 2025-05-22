// // App.js or AskAI.jsx
// import { useState } from 'react';

// function App() {
//   const [prompt, setPrompt] = useState('');
//   const [reply, setReply] = useState('');
//   const [loading, setLoading] = useState(false);

//   const askAI = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch('http://localhost:5000/ask-ai', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ prompt }),
//       });
//       const data = await res.json();
//       setReply(data.reply || 'No response');
//     } catch (error) {
//       console.error(error);
//       setReply('Error talking to AI');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Ask Gemini AI</h2>
//       <textarea
//         rows={4}
//         cols={60}
//         value={prompt}
//         onChange={(e) => setPrompt(e.target.value)}
//         placeholder="Type your question here"
//       />
//       <br />
//       <button onClick={askAI} disabled={loading}>
//         {loading ? 'Thinking...' : 'Ask AI'}
//       </button>
//       <div style={{ marginTop: 20, whiteSpace: 'pre-wrap' }}>
//         <strong>AI says:</strong>
//         <div>{reply}</div>
//       </div>
//     </div>
//   );
// }

// export default App;
