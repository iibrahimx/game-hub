import { HStack, Switch, Text } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  return (
    <HStack>
      <Switch.Root
        checked={isDarkMode}
        onCheckedChange={toggleColorMode}
        // colorPalette="green"
      >
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
      </Switch.Root>

      <Text fontSize="sm" whiteSpace="nowrap">
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
