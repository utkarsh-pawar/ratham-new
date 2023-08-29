import { Box, Center, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Message = ({ msg }) => {
  console.log(msg);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Show "..." for 3 seconds
    const timeout = setTimeout(() => {
      setShowMessage(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <Flex
      borderRadius={"base"}
      my={"1"}
      alignItems={"center"}
      px={"5"}
      bg={"teal.200"}
      w={"full"}
      h={"12"}
    >
      {showMessage ? <p>{msg}</p> : <p>...</p>}
    </Flex>
  );
};

export default Message;
