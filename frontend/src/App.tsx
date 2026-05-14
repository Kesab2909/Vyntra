import {
	Show,
	SignInButton,
	SignOutButton,
	SignUpButton,
	UserButton,
} from "@clerk/react";

import { Button } from "@/components/ui/button";

function App() {
	return (
		<>
			<div className="flex items-center gap-4 p-4">

				{/* USER NOT SIGNED IN */}
				<Show when="signed-out">
					<SignInButton mode="modal">
						<Button>Sign In</Button>
					</SignInButton>

					<SignUpButton mode="modal">
						<Button variant="outline">
							Sign Up
						</Button>
					</SignUpButton>
				</Show>

				{/* USER SIGNED IN */}
				<Show when="signed-in">
					<Button variant="outline">
						Protected Button
					</Button>

					<UserButton />

					<SignOutButton>
						<Button variant="destructive">
							Sign Out
						</Button>
					</SignOutButton>
				</Show>
			</div>
		</>
	);
}

export default App;