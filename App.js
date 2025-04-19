
import { useState } from "react";

const courses = [
  {
    id: 1,
    title: "Beginner Stock Trading",
    description: "Learn the basics of stock trading and market analysis.",
    price: 1000,
    videoUrl: "https://www.example.com/sample-video-1"
  },
  {
    id: 2,
    title: "Advanced Forex Strategies",
    description: "Deep dive into forex trading with real strategies.",
    price: 1200,
    videoUrl: "https://www.example.com/sample-video-2"
  }
];

export default function App() {
  const [purchased, setPurchased] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [txnId, setTxnId] = useState("");

  const handleBuy = (course) => {
    setSelectedCourse(course);
  };

  const confirmPayment = () => {
    if (txnId.trim() !== "") {
      setPurchased(true);
    } else {
      alert("Please enter a valid Transaction ID");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome to TradingMastery</h1>
      {!purchased ? (
        selectedCourse ? (
          <div>
            <h2>{selectedCourse.title}</h2>
            <p>Price: ₹{selectedCourse.price}</p>
            <p>Scan the QR code below using PhonePe or any UPI app to pay.</p>
            <img src="./phonepe_qr.png" alt="PhonePe QR" width="200" />
            <p>After payment, enter your UPI Transaction ID to continue.</p>
            <input
              type="text"
              value={txnId}
              onChange={(e) => setTxnId(e.target.value)}
              placeholder="Enter Transaction ID"
              style={{ padding: 8, marginRight: 10 }}
            />
            <button onClick={confirmPayment}>Confirm Payment</button>
          </div>
        ) : (
          <div>
            {courses.map((course) => (
              <div key={course.id} style={{ marginBottom: 20, border: '1px solid #ccc', padding: 10 }}>
                <h2>{course.title}</h2>
                <p>{course.description}</p>
                <p><strong>₹{course.price}</strong></p>
                <button onClick={() => handleBuy(course)}>Buy Now</button>
              </div>
            ))}
          </div>
        )
      ) : (
        <div>
          <h2>{selectedCourse.title}</h2>
          <iframe
            width="100%"
            height="360"
            src={selectedCourse.videoUrl}
            title="Course Video"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}
