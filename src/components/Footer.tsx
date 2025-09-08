import { type FooterProps } from "../libs/Footer";
import { Text, Group } from "@mantine/core";
export default function Footer({ year, fullName, studentId }: FooterProps) {
  return (
    <Group p="md" justify="center">
      <Text>
        © CPE207- {year} {fullName} {studentId}. All rights reserved.
      </Text>
    </Group>
  );
}
