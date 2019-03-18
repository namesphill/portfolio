import React from "react";
import { Box, Text } from "rebass";
import data from "../DB/db.json";
function AndI({ history, match }) {
  let page;
  switch (match.params.verb) {
    case "code":
      page = data[match.params.verb];
      break;
    case "am":
      page = data[match.params.verb];
      break;
    case "write":
      page = data[match.params.verb];
      break;
    default:
      page = [];
  }
  if (!page.length) history.replace("/");
  return (
    <Box ml={40} mt={40} width={[1, 0.9, 0.7, 0.8, 688]} mb={200}>
      {page.map(el => (
        <Text lineHeight={1.2} mb={12} key={Math.random()}>
          {el}
        </Text>
      ))}
    </Box>
  );
}
export default React.memo(AndI);
