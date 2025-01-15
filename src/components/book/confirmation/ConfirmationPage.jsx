import "./Confirmation.css";

const ConfirmationPage = () => {
  return (
    <div className="confirmation-container">
      <div className="inner-confirmation">
        {/* Canva Embed Code */}

        <div
          style={{
            position: "relative",
            width: "100%",
            height: 0,
            paddingTop: "133.3333%",
            paddingBottom: 0,
            boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
            marginTop: "1.6em",
            marginBottom: "0.9em",
            overflow: "hidden",
            borderRadius: "8px",
            willChange: "transform",
          }}
        >
          <iframe
            loading="lazy"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              border: "none",
              padding: 0,
              margin: 0,
            }}
            src="https://www.canva.com/design/DAGcRKQjO_4/Ia0NczY8tJKqH489BHZrbg/view?embed"
          ></iframe>
        </div>

        {/* Cancellation Policy Section */}
        <div className="cancellation-policy">
          <h2>Cancellation Policy</h2>
          <p>
            Please note that you can only cancel or reschedule 24 hours before
            your appointment time. Failure to do this will incur a cost of your
            deposit fee. Thank you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
