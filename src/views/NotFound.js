import React from "react";
import { Text, Box } from "rebass";
function NotFound({ history }) {
  setTimeout(() => history.replace("/"), 1500);
  return (
    <Box ml={40} mt={40} width={[1, 0.9, 0.7, 0.8, 688]} mb={200}>
      <Text>This route does not exist.</Text>
      <Text>You will be redirected shortly.</Text>
    </Box>
  );
}
export default NotFound;
