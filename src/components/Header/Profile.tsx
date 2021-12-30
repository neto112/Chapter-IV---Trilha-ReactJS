import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
	showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
	return (
		<Flex align="center">
			{ showProfileData && (
				<Box mr="4" textAlign="right">
				<Text>Cristiano Rasweiler Neto</Text>
				<Text color="gray.300" fontSize="small">
					cristianorneto@gmail.com
				</Text>
			</Box>
			)}

			<Avatar size="md" name="Cristiano Rasweiler Neto" src="https://github.com/neto112.png"/>
		</Flex>
	)
}