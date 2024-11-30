import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // For search icon

const Mainpage = () => {
  const [searchText, setSearchText] = useState(""); // State for search text
  const [suggestions, setSuggestions] = useState([]); // State for search suggestions

  // Define a mapping of queries to suggestions
  const suggestionMap = {
    "what is ur": ["name", "age", "favorite color", "hobby"],
    "who are you": ["I am a chatbot", "I am your assistant", "I am a bot"],
    "how to": ["make pizza", "learn programming", "cook pasta"],
    "show me": ["items", "products", "new arrivals"],
  };

  // Handle input change and suggest based on the query
  const handleSearchTextChange = (e) => {
    const query = e.target.value;
    setSearchText(query);

    // If the user is typing, filter suggestions based on predefined queries
    if (query) {
      // Find the closest matching query and provide suggestions
      const matchedSuggestions = suggestionMap[query.toLowerCase()];
      setSuggestions(matchedSuggestions || []); // Display suggestions or empty if no match
    } else {
      setSuggestions([]); // Clear suggestions if search text is empty
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    // Set the search text to the selected suggestion, preserving the original query
    const updatedSearchText = `${searchText} ${suggestion}`;
    setSearchText(updatedSearchText); // Set the search text with the full suggestion
    setSuggestions([]); // Clear suggestions after selection
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bg="black"
      w="100%"
      height="90px"
      p="5px 10px 5px 10px"
      borderWidth="5px"
      position="fixed"
      top="0"
      left="0"
      zIndex="1000"
    >
      <Text
        color="white"
        mr={4}
        fontSize="2xl"
        fontFamily="'Poppins', sans-serif" // Poppins font family (you can change it to other fonts like 'Roboto' or 'Lora')
        fontWeight="bold"
      >
        Amazon
      </Text>
      <Tooltip
        label="Search for items or queries"
        hasArrow
        placement="bottom-end"
      >
        <InputGroup position="relative">
          <InputLeftElement pointerEvents="none">
            <FaSearch color="gray" />
          </InputLeftElement>

          {/* Search input field */}
          <Input
            value={searchText}
            onChange={handleSearchTextChange}
            placeholder="Search for items, users, etc."
            bg="transparent"
            color="white"
            borderColor="gray.300"
            focusBorderColor="blue.500"
            _placeholder={{ color: "gray.400" }}
          />

          {/* Suggestions box */}
          {suggestions.length > 0 && (
            <Box
              position="absolute"
              top="100%" // Position below the input field
              left="0"
              right="0"
              bg="rgba(255, 255, 255, 0.7)" // Translucent background
              borderRadius="md"
              boxShadow="md"
              zIndex="999"
              p={4}
              mt={2} // Optional margin to add space between search bar and suggestions
              maxHeight="200px" // Optional to limit the height of the suggestion box
              overflowY="auto" // Enable scrolling if content exceeds the box height
            >
              {/* Suggestion items with no underline and black color */}
              {suggestions.map((suggestion, index) => (
                <Box key={index}>
                  <Text
                    color="black" // Set text color to black
                    cursor="pointer"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {`${searchText} ${suggestion}`}
                  </Text>

                  {/* Line separator after each suggestion */}
                  {index < suggestions.length - 1 && (
                    <Box borderBottom="1px solid gray" my={2} />
                  )}
                </Box>
              ))}
            </Box>
          )}
        </InputGroup>
      </Tooltip>

      <div>
        <button
          onClick={() => alert("Logout clicked")}
          className="logout-button"
          colorScheme="red"
          variant="solid"
          color="white"
        >
          <Text
            d={{ base: "none", md: "flex" }}
            px={4}
            color="white"
            fontSize="xl"
          >
            Logout
          </Text>
        </button>
      </div>
    </Box>
  );
};

export default Mainpage;
