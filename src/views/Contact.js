import React from "react";
import data from "../DB/db.json";
import { Text } from "rebass";
const {
  contact: { contactInfo, description }
} = data;
function Contact({ layoutProps }) {
  return (
    <>
      {description.map(el => (
        <Text key={Math.random()}>{el}</Text>
      ))}
      <br />
      {contactInfo.map(([name, info]) => (
        <Text key={Math.random()}>
          {name}: {info}
        </Text>
      ))}
    </>
  );
}
export default Contact;
