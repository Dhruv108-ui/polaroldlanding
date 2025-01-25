import React, { useEffect } from "react";
import { useRouter } from "next/router";

const ThankYou = () => {
  const router = useRouter();

  // Redirect to homepage after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f9f9f9",
        padding: "20px",
        textAlign: "center",
      }}
    >
      {/* Decorative Image */}
      {/* <img
        src="https://source.unsplash.com/400x300/?thankyou,appreciation"
        alt="Thank You"
        style={{
          maxWidth: "100%",
          height: "auto",
          borderRadius: "10px",
          marginBottom: "30px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      /> */}

      {/* Thank You Message */}
      <h1 style={{ fontSize: "2.5rem", color: "#333", marginBottom: "20px" }}>
        Thank You!
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#555", maxWidth: "600px" }}>
        Your details have been submitted successfully. Our team will reach out
        to you shortly. We appreciate your time and look forward to connecting
        with you!
      </p>

      {/* Decorative Footer */}
      <div
        style={{
          marginTop: "40px",
          fontSize: "0.9rem",
          color: "#888",
          fontStyle: "italic",
        }}
      >
        <p>We value your trust in us. Have a great day!</p>
      </div>

      {/* Redirect Notice */}
      <p style={{ marginTop: "20px", fontSize: "1rem", color: "#777" }}>
        You will be redirected to the homepage in a few seconds...
      </p>
    </div>
  );
};

export default ThankYou;
