import React, { useState, useEffect } from "react";

const colorChange = (hour) => {
  if (0 <= hour <= 5 || 18 <= hour <= 24) {
    return "#fafcff";
  } else {
    return "#000000";
  }
};
