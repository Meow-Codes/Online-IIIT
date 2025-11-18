"use client";

import React, { useEffect, useRef } from "react";

export default function PayCheck({ url, encryptedOrder, merchantId }) {
  const formRef = useRef(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.submit(); // Auto-submit the form
    }
  }, []);

  return (
    <div className="hidden">
      <form
        ref={formRef}
        name="form1"
        method="post"
        action={url}
      >
        <input
          type="hidden"
          name="EncryptTrans"
          value={encryptedOrder}
        />
        <input
          type="hidden"
          name="merchIdVal"
          id="merchIdVal"
          value={merchantId}
        />
        <br />
        <input
          type="submit"
          style={{ backgroundColor: "lightblue", color: "#7a6931" }}
          value="Submit"
        />
      </form>
    </div>
  );
}