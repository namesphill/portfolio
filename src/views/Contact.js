import React from "react";
import data from "../DB/db.json";
import { Text, Box } from "rebass";
const {
  contact: { contactInfo, description }
} = data;
function Contact({ layoutProps }) {
  return (
    <Box ml={40} mt={40} width={[1, 0.9, 0.7, 0.8, 688]} mb={200}>
      {description.map(el => (
        <Text lineHeight={1.2} mb={12} key={Math.random()}>
          {el}
        </Text>
      ))}
      <br />
      {contactInfo.map(([name, info]) => (
        <Text lineHeight={1.2} mb={12} key={Math.random()}>
          {name}: {info}
        </Text>
      ))}
    </Box>
  );
}
export default Contact;
